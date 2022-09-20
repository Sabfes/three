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


    this.light1 = new THREE.PointLight("grey", .7)
    this.light1.position.set(2,5,1)
    // this.light.position.set(2, 2, 0)
    this.light1.castShadow = true
    this.sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1,16,16),
      new THREE.MeshBasicMaterial({color: '#F6BE00'})
    )
    this.sphere.add(this.light1)
    this.sphere.position.set(2,5,1)
    this.sphere.material.opacity = 0.6
    this.sphere.castShadow = true
    this.scene.add(this.sphere)

    new Plane()
    new GlbLoader()
    new Helpers()

    window.addEventListener('resize', () => {
      {
        this.camera.perspectiveCamera.aspect = window.innerWidth / window.innerHeight
        this.camera.perspectiveCamera.updateProjectionMatrix()

        this.renderer.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      }
    }, false)
  }
}