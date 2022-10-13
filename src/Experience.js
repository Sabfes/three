import * as THREE from 'three'
import Sizes from "./utils/Sizes";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Light from "./Light";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import dat from 'dat.gui'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import Plane from "./Plane";
import GlbLoader from "./utils/GlbLoader";
import Helpers from "./utils/Helpers";
import {SphereGeometry} from "three";
import Box from "./Geometry/Box";

// this.mousePosition = new THREE.Vector2()
// window.addEventListener('mousemove', (e) => {
//   this.mousePosition.x = (e.clientX / window.innerWidth) * 2 -1
//   this.mousePosition.y = - (e.clientY / window.innerHeight) * 2 + 1
// })
// this.rayCaster = new THREE.Raycaster()

export default class Experience {
  static instance

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this
    this.gui = new dat.GUI()
    this.canvas = canvas
    this.scene = new THREE.Scene();
    //Свет
    this.light = new Light()
    this.scene.add(this.light)


    this.camera = new Camera(true)
    this.sizes = new Sizes()
    this.renderer = new Renderer()

    // new Helpers()
    new Box()

    window.addEventListener('resize', () => {
      {
        this.camera.perspectiveCamera.aspect = window.innerWidth / window.innerHeight
        this.camera.perspectiveCamera.updateProjectionMatrix()

        this.renderer.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      }
    }, false)

    window.addEventListener('mousemove', (e) => {
      console.log(e.clientY, e.clientX)
    })
  }
}