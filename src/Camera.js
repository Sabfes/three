import * as THREE from 'three'
import Experience from "./Experience";

export default class Camera {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene

    this.createPerspectiveCamera()
    this.createDatGuiFolder()
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      1,
      1000
    )
    this.perspectiveCamera.position.set(5,4,0)
    this.perspectiveCamera.lookAt(this.scene.position)
    this.scene.add(this.perspectiveCamera)

  }

  createDatGuiFolder() {
    const cameraPosFolder = this.experience.gui.addFolder('CameraPos')
    cameraPosFolder.add(this.perspectiveCamera.position , 'x')
    cameraPosFolder.add(this.perspectiveCamera.position , 'y')
    cameraPosFolder.add(this.perspectiveCamera.position , 'z')
    cameraPosFolder.open()
  }

}