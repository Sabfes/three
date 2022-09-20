import * as THREE from 'three'
import Sizes from "./utils/Sizes";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Box from "./Box";
import Light from "./Light";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Fog} from "three";
import dat from 'dat.gui'

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

    // Куб
    this.box = new Box(1,1,1, 'red')
    this.scene.add(this.box)

    this.camera = new Camera(true)
    this.sizes = new Sizes()
    this.renderer = new Renderer()

    // Хелпер оси
    const axesHelper = new THREE.AxesHelper( 5 );
    this.scene.add( axesHelper );
    //Хелпер камера
    const helper = new THREE.CameraHelper( this.camera.perspectiveCamera );
    this.scene.add( helper );
    //Хелпер сетка
    const gridHelper = new THREE.GridHelper( 20, 20 );
    this.scene.add( gridHelper );
    const helper2 = new THREE.DirectionalLightHelper( this.light, 5 );
    this.scene.add( helper2 );


    const controls = new OrbitControls(this.camera.perspectiveCamera, this.canvas)
    controls.enableDamping = true
    this.scene.add(controls)


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