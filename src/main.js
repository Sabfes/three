import * as THREE from 'three';
import './style.css'
import { ThreeHelpers } from './helpers';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { BoxCreator } from './box';

class App {
  constructor () {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.camera.position.set(1,1,1)
    this.renderer = new THREE.WebGLRenderer();
    this.control = new OrbitControls( this.camera, this.renderer.domElement );
    this.control.update()
    this.helpers = new ThreeHelpers( this.scene, this.camera)
      .getAxesHelper()
      .getGridHelper(100, 10)

    this.hero = new BoxCreator(1,1,1, 'grey').getMesh()
    this.scene.add(this.hero)
    this.init()
  }

  init () {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
    this.animate()
  }

  animate () {
    requestAnimationFrame( this.animate.bind(this) );

    this.control.update();
    this.hero.position.x += 0.01

	  this.renderer.render( this.scene, this.camera );
  }
}

new App()
//helpers
// const cube = new THREE.Mesh(
//       new THREE.BoxGeometry(1,1,1),
//       new THREE.MeshBasicMaterial({color: 'red'})
//     )
//     this.scene.add(cube)




