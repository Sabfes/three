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
    })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.update(new Date())
  }

  update(time) {
    time *= 0.001
    this.renderer.render(this.scene, this.camera.perspectiveCamera)

    this.experience.box.rotation.x = time
    this.experience.box.rotation.z = time

    window.requestAnimationFrame(() => this.update(new Date()))
  }
}