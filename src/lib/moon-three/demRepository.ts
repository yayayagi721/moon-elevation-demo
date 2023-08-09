import { GeoTIFFImage, fromUrl, ReadRasterResult } from "geotiff";
import * as geokeysToProj4 from "geotiff-geokeys-to-proj4";
import proj4 from "proj4";
import fastMax from "fast-max";

let image: GeoTIFFImage | null = null;
let projection: any = null;
let imageData: ReadRasterResult | null = null;

// sample url
const url = "https://image-cog.s3.ap-northeast-1.amazonaws.com/moon1_0.tiff";

// pixel maximum
const uint16Max = 65535;

let maxHeight = 0;

const moonRadius = 1737.4;

const MOON_CONST = {
  radiusMeter: 1737.4,
  onePerMeter: 0.5,
};

export const initMoonDEMData = async () => {
  const tiff = await fromUrl(url);

  image = await tiff.getImage();
  const geoKeys = image.getGeoKeys();
  const projObj = geokeysToProj4.toProj4(geoKeys);
  projection = proj4(`WGS84`, projObj.proj4);

  imageData = await image.readRasters({
    interleave: true,
    samples: [0],
  });

  // NOTE: 月の最大標高ではない
  maxHeight = fastMax(imageData as any) * 0.5;
};

export const getMaxHeight = () => {
  return maxHeight;
};

export const getMoonRadius = () => {
  return moonRadius;
};

export const getNormedHightPxByLatLng = (coordinate: Coordinate): number => {
  const { x, y } = projection.forward({
    x: coordinate.lng,
    y: coordinate.lat,
  });

  const width = image!.getWidth();
  const height = image!.getHeight();

  const [originX, originY] = image!.getOrigin();
  const [xSize, ySize] = image!.getResolution();
  const uWidth = xSize * width;
  const uHeight = ySize * height;

  const percentX = (x - originX) / uWidth;
  const percentY = (y - originY) / uHeight;

  const pixelX = Math.floor(width * percentX);
  const pixelY = Math.floor(height * percentY);

  const value = imageData![width * pixelY + pixelX];

  return (value as number) / maxHeight;
};
