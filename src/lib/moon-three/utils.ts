import * as THREE from "three";

type DirectionName = "UP" | "DOWN" | "LEFT" | "RIGHT" | "FORWARD" | "BACK"

export const getVectorDirection = ( directionName: DirectionName ) => {

	return new THREE.Vector3().copy( DIRECTION[ directionName ] );

};

export const DIRECTION : { [directionName in DirectionName] :THREE.Vector3 } = {
	UP: new THREE.Vector3( 0, 1, 0 ),
	DOWN: new THREE.Vector3( 0, - 1, 0 ),
	LEFT: new THREE.Vector3( - 1, 0, 0 ),
	RIGHT: new THREE.Vector3( 1, 0, 0 ),
	FORWARD: new THREE.Vector3( 0, 0, 1 ),
	BACK: new THREE.Vector3( 0, 0, - 1 ),
};
