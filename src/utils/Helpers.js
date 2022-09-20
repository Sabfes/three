import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Experience from "../Experience";

export default class Helpers {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.light = this.experience.light
    this.canvas = this.experience.canvas

    this.initHelpers()
  }

  initHelpers() {
    // Хелпер оси
    const axesHelper = new THREE.AxesHelper( 5 );
    this.scene.add( axesHelper );
    //Хелпер камера
    const helper = new THREE.CameraHelper( this.camera.perspectiveCamera );
    this.scene.add( helper );
    //Хелпер сетка
    const gridHelper = new THREE.GridHelper( 20, 20 );
    this.scene.add( gridHelper );
    const helper2 = new THREE.PointLightHelper( this.light, 5 );
    this.scene.add( helper2 );
    //Контроль камеры
    const controls = new OrbitControls(this.camera.perspectiveCamera, this.canvas)
    controls.enableDamping = true
    this.scene.add(controls)
  }
}