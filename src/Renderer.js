import Experience from "./Experience";
import * as THREE from 'three'

export default class Renderer {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.canvas = this.experience.canvas
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.setRenderer()
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    })
    this.renderer.shadowMap.enabled = true
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.update(new Date())
  }

  update(time) {
    time *= 0.001

    this.experience.box.rotation.x = time
    this.experience.box.rotation.z = time

    this.experience.box.translateZ(.01)
    this.experience.box.rotation.y += .01
    this.camera.perspectiveCamera.translateZ(.001)
    this.camera.perspectiveCamera.rotation.y += .001
    console.log(this.experience)
    this.experience.rayCaster.setFromCamera(this.experience.mousePosition, this.camera.perspectiveCamera)
    const intersects = this.experience.rayCaster.intersectObjects(this.scene.children)
    console.log(intersects)
    this.renderer.render(this.scene, this.camera.perspectiveCamera)
    window.requestAnimationFrame(() => this.update(new Date()))
  }
}