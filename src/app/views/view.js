import { Sky } from "@app/views/sky";
import * as THREE from 'three'
import { Renderer } from "@app/views/renderer";
import { Camera } from "./camera";
import { Light } from "./light";

export default class View {
    static instance

    static getInstance() {
        return View.instance
    }

    constructor() {
        if (View.instance) return View.instance
        View.instance = this

        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.light = new Light()
        this.sky = new Sky()
    }

    resize() {
        this.renderer.resize()
    }

    update() {
        this.renderer.update()
    }
}