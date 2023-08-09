import { initMoonDEMData } from "./demRepository";

import * as dat from "lil-gui";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MoonGeometryFactory } from "./geometry/moonGeometryFactory";

import fragmentShaderAltitude from "./shader/fragmentShaders/altitude.glsl";
import fragmentShaderNormalMoon from "./shader/fragmentShaders/normalMoon.glsl";
import vertexShaderNormalMoon from "./shader/vertexShader/normalMoon.glsl";
import vertexShaderAltitude from "./shader/vertexShader/altitude.glsl";

const initHeightSurfaceUniform = (gui: dat.GUI) => {
  const heightFolder = gui.addFolder("HeightSurface");

  const colors = {
    surfaceColor: "#e8d930",
  };

  const uniforms = {
    uSurfaceColor: { value: new THREE.Color(colors.surfaceColor) },
    uHeightCoefficient: { value: 150 },
    uMaxHeight: { value: 1 },
    uMinHeight: { value: 1 },
    uMouse: {
      value: new THREE.Vector2(),
    },
  };

  document.onmousemove = function (e) {
    uniforms.uMouse.value.x = 1 - e.pageX / window.innerWidth;
    uniforms.uMouse.value.y = 1 - e.pageY / window.innerHeight;
  };

  heightFolder
    .add(uniforms.uHeightCoefficient, "value")
    .min(0)
    .max(400)
    .step(0.001)
    .name("uHeightCoefficient");

  heightFolder.addColor(colors, "surfaceColor").onChange(() => {
    uniforms.uSurfaceColor.value.set(colors.surfaceColor);
  });

  return uniforms;
};

const initUniforms = (gui: dat.GUI) => {
  const moonFolder = gui.addFolder("HeightSurface");

  const colors = {
    depthColor: "#000000",
    surfaceColor: "#98b2c3",
  };

  const uniforms = {
    uDepthColor: { value: new THREE.Color(colors.depthColor) },
    uSurfaceColor: { value: new THREE.Color(colors.surfaceColor) },
    uHeightCoefficient: { value: 20 },
    uMaxHeight: { value: 1 },
    uMinHeight: { value: 1 },
  };

  moonFolder
    .add(uniforms.uHeightCoefficient, "value")
    .min(0)
    .max(400)
    .step(0.001)
    .name("uHeightCoefficient");

  moonFolder.addColor(colors, "depthColor").onChange(() => {
    uniforms.uDepthColor.value.set(colors.depthColor);
  });

  moonFolder.addColor(colors, "surfaceColor").onChange(() => {
    uniforms.uSurfaceColor.value.set(colors.surfaceColor);
  });

  return uniforms;
};

const main = async (canvasId: string) => {
  await initMoonDEMData();

  const gui = new dat.GUI({ width: 300 });

  gui.show(false);

  const heightSurfaceUniforms = initHeightSurfaceUniform(gui);
  const moonUniforms = initUniforms(gui);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // const canvas = document.querySelector( ".webgl" );

  const canvas: HTMLCanvasElement = document.querySelector(
    `#${canvasId}`
  ) as HTMLCanvasElement;

  const renderer = new THREE.WebGLRenderer({
    // antialising: true,
    alpha: false,
    canvas: canvas,
  });

  renderer.shadowMap.enabled = true;

  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    1000
  );

  camera.position.set(0, 0, 1);
  const scene = new THREE.Scene();

  // scene.background = new THREE.Color("#284556");
  // scene.background = new THREE.Color("#172b44");
  scene.background = new THREE.Color("#362f57");

  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const moonResolution = 300;

  const moonFactory = new MoonGeometryFactory(moonResolution);
  const moonFaceGeometries = moonFactory.create(moonUniforms);

  moonFaceGeometries.forEach((face) => {
    // shader material
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShaderNormalMoon,
      fragmentShader: fragmentShaderNormalMoon,
      transparent: true, // 透明な背景を持つことを指定
      blending: THREE.NormalBlending,
      uniforms: moonUniforms,
    });

    const mesh = new THREE.Mesh(face, material);

    scene.add(mesh);
  });

  const forAltitudeGeometries = moonFactory.create(heightSurfaceUniforms);

  forAltitudeGeometries.forEach((face) => {
    // shader material
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShaderAltitude,
      fragmentShader: fragmentShaderAltitude,
      uniforms: heightSurfaceUniforms,
      blending: THREE.NormalBlending,
      transparent: true, // 透明な背景を持つことを指定
    });

    const mesh = new THREE.Mesh(face, material);
    scene.add(mesh);
  });

  const dir = new THREE.Vector3(0, 0, 3);

  //normalize the direction vector (convert to vector of length 1)
  dir.normalize();

  const origin = new THREE.Vector3(0, 0, 0);
  const length = 1;
  const hex = 0xff0000;

  const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
  scene.add(arrowHelper);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(sizes.width, sizes.height);

  camera.position.z = 3.2;

  const update = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
};

export default main;

// main("moon-canvas");
