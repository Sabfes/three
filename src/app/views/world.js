import * as THREE from 'three'
import { View } from './view'

export class World {
    constructor() {
        this.view = View.getInstance()
        this.scene = this.view.scene
        
        this.setInstance()
    }

    setInstance() {
        const geometry = new THREE.PlaneGeometry(10, 10)
        const material = new THREE.MeshBasicMaterial({ color: 'rgb(196, 215, 212)' })
        this.instance = new THREE.Mesh(geometry, material)
        this.scene.add(this.instance)
    }
}