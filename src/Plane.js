import * as THREE from "three";
import Experience from "./Experience";

export default class Plane {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.plane = new THREE.Mesh(
      new THREE.PlaneGeometry(40,40),
      new THREE.MeshPhysicalMaterial({color: 'lightgreen'})
    )
    this.plane.rotation.set(-1.55, 0 ,0)
    this.plane.receiveShadow = true
    this.plane.castShadow = true
    this.scene.add(this.plane)
  }
}