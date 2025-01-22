import * as THREE from 'three'
import View from './view'

export class Renderer {
    constructor() {
        this.view = View.getInstance()

        this.scene = this.view.scene
        this.camera = this.view.camera

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            alpha: false,
            antialias: true
        })

        this.instance.setPixelRatio( window.devicePixelRatio );
        this.instance.setSize( window.innerWidth, window.innerHeight );
        this.instance.toneMapping = THREE.ACESFilmicToneMapping;
        this.instance.toneMappingExposure = 0.5;
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