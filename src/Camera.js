import * as THREE from 'three'
import Experience from "./Experience";

export default class Camera {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene

    this.createPerspectiveCamera()
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      1,
      1000
    )
    this.perspectiveCamera.position.set(0,0,5)
    this.perspectiveCamera.rotateY(83)
    this.scene.add(this.perspectiveCamera)
  }
}