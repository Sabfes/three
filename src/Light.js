import Experience from "./Experience";
import * as THREE from 'three'

export default class Light {
  constructor() {
    const light = new THREE.DirectionalLight( 0xFFFFFF )
    light.position.set( 0, 0, 5 );
    light.position.y = 3
    light.position.z = 3
    light.position.x = 5
    return light
  }
}