import * as THREE from "three";
import { getVectorDirection } from "../utils";

import { Face } from "../geometry/face";

export abstract class PlanetGeometryFactory {
  directions: THREE.Vector3[];
  resolution: number;

  constructor(resolution: number) {
    this.directions = [
      getVectorDirection("UP"),
      getVectorDirection("DOWN"),
      getVectorDirection("LEFT"),
      getVectorDirection("RIGHT"),
      getVectorDirection("FORWARD"),
      getVectorDirection("BACK"),
    ];

    this.resolution = resolution;
  }

  abstract getHeightByPoint(point: THREE.Vector3): number;

  create(uniforms = {}): THREE.BufferGeometry[] {
    return this.directions.map((direction) => {
      const face = new Face(this.resolution, direction);
      face.constructMesh();

      const geometry = face.createGeometry();

      const demArray = face.vertexVectors.map((vector) => {
        return this.getHeightByPoint(vector);
      });
      const maxHeight = Math.max(...demArray);

      (uniforms as any).uMaxHeight.value = maxHeight;

      const normalizeHeight = new Float32Array(demArray);

      //頂点座標
      geometry.setAttribute(
        "height",
        new THREE.BufferAttribute(normalizeHeight, 1)
      );

      return geometry;
    });
  }
}
