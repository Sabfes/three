import * as THREE from 'three'
import Experience from "./Experience";

export default class Camera {
  constructor(props) {
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
    this.perspectiveCamera.position.set(10,4,-10)
    this.perspectiveCamera.lookAt(this.scene.position)
    this.scene.add(this.perspectiveCamera)

    this.experience.gui.add( this.perspectiveCamera.position , 'x').step(5)
    this.experience.gui.add( this.perspectiveCamera.position , 'y').step(5)
    this.experience.gui.add( this.perspectiveCamera.position , 'z').step(5)
  }
}