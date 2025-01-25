import { Scene, Color} from 'three'
import { Renderer } from "@views/renderer";
import { Camera } from "@views/camera";
import { Light } from "@views/light";
import { Player } from "@views/player";
import { World } from './world';

export class View {
    static instance

    static getInstance() {
        return View.instance
    }

    constructor() {
        if (View.instance) return View.instance
        View.instance = this

        this.scene = new Scene()
        this.scene.background = new Color( 0xbfe3dd );
        this.camera = new Camera()
        this.player = new Player()
        this.world = new World()
        this.renderer = new Renderer()
        this.light = new Light()
    }

    resize() {
        this.renderer.resize()
    }

    update() {
        this.player.update()
        this.renderer.update()
    }
}