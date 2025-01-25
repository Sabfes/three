import { WebGLRenderer } from 'three'
import { View } from "@views/view"

export class Renderer {
    constructor() {
        this.view = View.getInstance()

        this.scene = this.view.scene
        this.camera = this.view.camera

        this.setInstance()
    }

    setInstance() {
        this.instance = new WebGLRenderer({
            alpha: true,
            antialias: true
        })

        this.instance.setPixelRatio( window.devicePixelRatio );
        this.instance.setSize( window.innerWidth, window.innerHeight );
        this.instance.shadowMap.enabled = true;
        document.body.appendChild( this.instance.domElement );
    }

    resize() {
        this.instance.setSize(window.innerWidth, window.innerHeight)
        this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
}