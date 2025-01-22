import View from "./view";
import { Sky as SkyObj } from 'three/addons/objects/Sky.js';

export class Sky {
    constructor () {
        this.view = View.getInstance();
        
        this.scene = this.view.scene
        this.init()
    }

    init() {
        this.sky = new SkyObj();
        this.sky.scale.setScalar( 450000 );
        this.scene.add( this.sky );
    }

    update() {

    }
}