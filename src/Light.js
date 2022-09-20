import Experience from "./Experience";
import * as THREE from 'three'

export default class Light {
  constructor() {
    this.experience = new Experience()
    this.light = new THREE.DirectionalLight( 0xFFFFFF )
    this.light.position.set( 0, 5, 0 );
    this.light.rotation.set(-1.6, 0, 0)

    this.createDatGuiFolder()

    return this.light
  }

  createDatGuiFolder() {
    const cameraPosFolder = this.experience.gui.addFolder('LightPOS')
    cameraPosFolder.add(this.light.position, 'x', 0, 100)
    cameraPosFolder.add(this.light.position, 'y', 0, 100)
    cameraPosFolder.add(this.light.position, 'z', 0, 100)
    cameraPosFolder.open()

    const cameraFolder = this.experience.gui.addFolder('LightRotate')
    cameraFolder.add(this.light.rotation, 'x')
    cameraFolder.add(this.light.rotation, 'y')
    cameraFolder.add(this.light.rotation, 'z')
    cameraFolder.open()
  }
}