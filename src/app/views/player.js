import { View } from "@views/view"
import * as THREE from 'three'

export class Player {
    constructor() {
        this.view = View.getInstance()
        this.scene = this.view.scene
        
        this.setInstance()
    }

    setInstance() {
        const geometry = new THREE.BoxGeometry(1,2,1)
        const material = new THREE.MeshBasicMaterial({ color: 'rgb(133,153,150)' })
        this.instance = new THREE.Mesh(geometry, material)

        this.scene.add(this.instance)
    }

    update() {
        this.instance.rotation.x += 0.01
        this.instance.rotation.y += 0.01
    }
}