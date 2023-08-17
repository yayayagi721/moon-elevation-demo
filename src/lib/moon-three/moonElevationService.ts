import { GeoTIFFImage, fromUrl, ReadRasterResult } from "geotiff";
import * as geokeysToProj4 from "geotiff-geokeys-to-proj4";
import proj4 from "proj4";
import fastMax from "fast-max";

export const MOON_DATA = {
  elevationImageUrl:
    "https://image-cog.s3.ap-northeast-1.amazonaws.com/moon1_0.tiff",
  radiusKm: 1737.4,
  maxElevation: 10786,
  onePerMeter: 0.5,
};

// Singleton
export class MoonElevationService {
  private static instance: MoonElevationService;
  moonRadiusKm: number = MOON_DATA.radiusKm;
  imageUrl: string = MOON_DATA.elevationImageUrl;

  projection: proj4.Converter | null = null;
  rasterData: ReadRasterResult | null = null;
  image: GeoTIFFImage | null = null;
  maxPxValue: number = 0;
  maxElevation: number = 10786;
  minElevation: number = 0;

  static async getInstance() {
    const initImageData = async (instance: MoonElevationService) => {
      const tiff = await fromUrl(instance.imageUrl);
      instance.image = await tiff.getImage();

      const geoKeys = instance.image.getGeoKeys();
      const projObj = geokeysToProj4.toProj4(geoKeys);
      instance.projection = proj4(`WGS84`, projObj.proj4);

      instance.rasterData = await instance.image.readRasters({
        interleave: true,
        samples: [0],
      });

      instance.maxPxValue =
        fastMax(instance.rasterData as any) * MOON_DATA.onePerMeter;

      instance.minElevation = instance.maxElevation - instance.maxPxValue;
      return instance;
    };

    if (!MoonElevationService.instance) {
      const instance = new MoonElevationService();
      this.instance = await initImageData(instance);
    }

    return this.instance;
  }

  getElevationByRatio = (ratio: number) => {
    return this.maxPxValue * ratio + this.minElevation;
  };

  getMaxPxValue = () => {
    return this.maxPxValue;
  };

  getMaxElevation = () => {
    return this.maxElevation;
  };

  getMinElevation = () => {
    return this.minElevation;
  };

  getMoonRadius = () => {
    return this.moonRadiusKm;
  };

  getNormedHightPxByLatLng = (coordinate: Coordinate): number => {
    const { x, y } = (this.projection as proj4.Converter).forward({
      x: coordinate.lng,
      y: coordinate.lat,
    });

    const width = this.image!.getWidth();
    const height = this.image!.getHeight();

    const [originX, originY] = this.image!.getOrigin();
    const [xSize, ySize] = this.image!.getResolution();
    const uWidth = xSize * width;
    const uHeight = ySize * height;

    const percentX = (x - originX) / uWidth;
    const percentY = (y - originY) / uHeight;

    const pixelX = Math.floor(width * percentX);
    const pixelY = Math.floor(height * percentY);

    const value = this.rasterData![width * pixelY + pixelX];

    return (value as number) / this.maxPxValue;
  };
}

export const moonElevationService = async () =>
  await MoonElevationService.getInstance();
