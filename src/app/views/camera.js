import { View } from "@views/view"
import { PerspectiveCamera } from 'three'
import { GUI } from "../debug/gui"

export class Camera {
    constructor() {
        this.debug = new GUI()
        this.view = View.getInstance()
        this.scene = this.view.scene

        this.setInstance()
    }

    setInstance() {
        this.instance = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.instance.position.set(-0.6, -8, 4.7)
        this.instance.rotation.set(1, 0, 0)

        this.startDebug()
    }

    startDebug() {
        this.debug.addFolder('Camera', {
            positionX: this.instance.position.x,
            positionY: this.instance.position.y,
            positionZ: this.instance.position.z,
            rotateX: this.instance.rotation.x,
            rotateY: this.instance.rotation.y,
            rotateZ: this.instance.rotation.z
        }).onChange((e) => {
            this.instance.position.set(e.object.positionX, e.object.positionY, e.object.positionZ)
            this.instance.rotation.set(e.object.rotateX, e.object.rotateY, e.object.rotateZ)
        })
    }

    update() {
    
    }
}