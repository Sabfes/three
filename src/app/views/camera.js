import View from "./view"
import * as THREE from 'three'

export class Camera {
    constructor() {
        this.view = View.getInstance()
        this.scene = this.view.scene

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.instance.position.z = 10
    }

    update() {

    }
}