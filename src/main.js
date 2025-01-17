import * as THREE from 'three';
import './style.css'
import { ThreeHelpers } from './helpers';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { Home } from './home';
import { Land } from './land';

class App {
  constructor () {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.camera.position.set(-20, 15, 25)
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.shadowMap.enabled = true
    this.control = new OrbitControls( this.camera, this.renderer.domElement );
    this.control.update()
    this.helpers = new ThreeHelpers( this.scene, this.camera)
    this.init()
  }

  init () {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    this.animate()
    this.addLight()
  }

  animate () {
    requestAnimationFrame( this.animate.bind(this) );
    this.control.update();
	  this.renderer.render( this.scene, this.camera );
  }

  addLight() {
    const spotLight = new THREE.SpotLight( 'white', 1000, 100 );
    spotLight.position.set( 20, 20, 20 ); 

    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    this.scene.add( 
      spotLight, 
      // new THREE.CameraHelper(spotLight.shadow.camera) 
    )
  }

  addToScene (...args) {
    this.scene.add(...args)
  }
}

export const app = new App()

app.addToScene(
  new Home().getMesh(),
  new Land().getMesh()
)

