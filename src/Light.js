import Experience from "./Experience";
import * as THREE from 'three'

export default class Light {
  constructor() {
    this.experience = new Experience()

    // this.light = new THREE.DirectionalLight( 0xFFFFFF )
    // this.light.position.set( 0, 5, 0 );
    // this.light.rotation.set(-1.6, 0, 0)

    this.light = new THREE.PointLight("#F6BE00", .5)
    this.light.position.set(2.3,1,-.5)
    // this.light.position.set(2, 2, 0)
    this.light.castShadow = true

    this.createDatGuiFolder()
    return this.light
  }

  createDatGuiFolder() {
    const lightPosFolder = this.experience.gui.addFolder('LightPOS')
    lightPosFolder.add(this.light.position, 'x')
    lightPosFolder.add(this.light.position, 'y')
    lightPosFolder.add(this.light.position, 'z')
    lightPosFolder.open()

    const lightRotationFolder = this.experience.gui.addFolder('LightRotate')
    lightRotationFolder.add(this.light.rotation, 'x')
    lightRotationFolder.add(this.light.rotation, 'y')
    lightRotationFolder.add(this.light.rotation, 'z')
    lightRotationFolder.open()
  }
}