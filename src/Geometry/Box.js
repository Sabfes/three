import * as THREE from "three";
import {BoxGeometry} from "three";
import Experience from "../Experience";

export default class Box {
  constructor() {
    this.experience = new Experience()
    this.createBox()
  }

  createBox() {
    const boxGeometry = new THREE.BoxGeometry(3,3,3)
    const boxMaterial = new THREE.MeshStandardMaterial({color: 'lightgrey'})
    this.box = new THREE.Mesh(
      boxGeometry,
      boxMaterial
    )
    this.box.position.set(0, 1, 0)
    this.box.castShadow = true
    this.experience.scene.add(this.box)
  }
}