import { View } from "@views/view"
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
import { KeyControls } from "../control/keyControl"

export class Player {
    constructor() {
        this.view = View.getInstance()
        this.scene = this.view.scene
        this.keyControl = new KeyControls()
        
        this.speed = 0.05
        this.setInstance()
    }

    setInstance() {
        const geometry = new BoxGeometry(1,1,2)
        const material = new MeshBasicMaterial({ color: 'rgb(133,153,150)' })
        this.instance = new Mesh(geometry, material)
        this.instance.position.z = 1
        this.scene.add(this.instance)
    }

    update() {
        if (this.keyControl.keys.KeyA) {
            this.instance.position.x -= this.speed
        }
        if (this.keyControl.keys.KeyD) {
            this.instance.position.x += this.speed
        }
        if (this.keyControl.keys.KeyW) {
            this.instance.position.y += this.speed
        }
        if (this.keyControl.keys.KeyS) {
            this.instance.position.y -= this.speed
        }
    }
}