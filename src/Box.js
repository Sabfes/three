import * as THREE from 'three'
import Experience from "./Experience";

export default class Box {
  constructor(width, height, depth, color) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshPhongMaterial({color});
    const box = new THREE.Mesh(geometry, material)
    return box
  }
}