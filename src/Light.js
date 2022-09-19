import Experience from "./Experience";
import * as THREE from 'three'

export default class Light {
  constructor() {
    const light = new THREE.DirectionalLight( 0xFFFFFF )
    light.position.set( 0, 0, 10 );
    // light.rotation.set(-.4, 1, 1)
    return light
  }
}