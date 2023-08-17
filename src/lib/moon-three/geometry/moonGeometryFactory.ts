import * as THREE from "three";

import { pointToCoordinate } from "./../coordinateHelper";

import { PlanetGeometryFactory } from "./planetGeometryFactory";

import { MoonElevationService, MOON_DATA } from "../moonElevationService";

export class MoonGeometryFactory extends PlanetGeometryFactory {
  constructor(
    resolution: number,
    private moonElevationService: MoonElevationService
  ) {
    super(resolution);
  }

  applyHeight(pxData: number) {
    const meterLength = 1 / this.moonElevationService.getMoonRadius();
    const pxMeter = pxData * MOON_DATA.onePerMeter * meterLength;

    return pxMeter;
  }

  getHeightByPoint(point: THREE.Vector3) {
    const coord = pointToCoordinate(point);
    const pxData = this.moonElevationService.getNormedHightPxByLatLng(coord);
    const height = this.applyHeight(pxData);

    return height;
  }
}
