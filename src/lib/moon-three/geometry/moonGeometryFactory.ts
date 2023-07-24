
import * as THREE from "three";

import { getNormedHightPxByLatLng } from "../demRepository";
import { pointToCoordinate } from "./../coordinateHelper";

import { PlanetGeometryFactory } from "./planetGeometryFactory";

const MOON_CONST = {
	radiusMeter: 1737.4,
	onePerMeter: 0.5,
};


export class MoonGeometryFactory extends PlanetGeometryFactory {

	 applyHeight( pxData: number ) {

		const meterLength = 1 / MOON_CONST.radiusMeter;
		const pxMeter = pxData * MOON_CONST.onePerMeter * meterLength;

		return pxMeter;

	}


	getHeightByPoint( point: THREE.Vector3 ) {

		const coord = pointToCoordinate( point );
		const pxData = getNormedHightPxByLatLng( coord );
		const height = this.applyHeight( pxData );

		return height;

	}

}
