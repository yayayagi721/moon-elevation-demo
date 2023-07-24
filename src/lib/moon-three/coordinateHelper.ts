import * as THREE from "three";

export const pointToCoordinate = ( pointOnUnitSphere:THREE.Vector3 ): Coordinate => {

	const lat = ( Math.asin( pointOnUnitSphere.y ) * 180 ) / Math.PI;
	const lng =
    ( Math.atan2( pointOnUnitSphere.x, - pointOnUnitSphere.z ) * 180 ) / Math.PI;
	return { lat: lat, lng: lng };

};

export const coordinateToPoint = ( coordinate: Coordinate ):THREE.Vector3 => {

	const y = Math.sin( coordinate.lat );
	const r = Math.cos( coordinate.lat );
	const x = Math.sin( coordinate.lng ) * r;
	const z = - Math.cos( coordinate.lng ) * r;
	return new THREE.Vector3( x, y, z );

};
