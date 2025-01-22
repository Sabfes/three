import View from "./view";
import * as THREE from 'three';

export class Light {
    constructor() {
        this.view = View.getInstance()
        this.scene = this.view.scene

        this.setInstance()
    }   

    setInstance() {
        this.instance = new THREE.AmbientLight( 0x404040, 1000 )
        this.scene.add(this.instance)

        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshBasicMaterial({color: 'red'})
        )
        this.scene.add(this.cube)
    }
}