import { View } from "@views/view"
import * as THREE from 'three';

export class Light {
    constructor() {
        this.view = View.getInstance()
        this.scene = this.view.scene

        this.setInstance()
    }   

    setInstance() {
        this.instance = new THREE.AmbientLight( 'red', 1000 )
        this.scene.add(this.instance)
    }
}