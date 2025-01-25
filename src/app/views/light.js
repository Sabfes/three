import { View } from "@views/view"
import {DirectionalLight, AmbientLight} from 'three';

export class Light {
    constructor() {
        this.view = View.getInstance()
        this.scene = this.view.scene

        this.setInstance()
    }   

    setInstance() {
        this.instance = new AmbientLight( 0x404040, 20 )
        this.scene.add(this.instance)

        const light = new DirectionalLight(0xffffff, 3);
        light.position.set(5, 5, 5);
        light.castShadow = true;
        this.scene.add(light)

    }
}