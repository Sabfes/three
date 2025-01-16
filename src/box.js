import * as THREE from 'three';

export class BoxCreator {
    constructor( width, height, depth, color) {
        this.width = width
        this.height = height
        this.depth = depth
        this.color = color

        this.create()
    }

    create () {
        const geometry = new THREE.BoxGeometry( this.width, this.height, this.depth ); 
        const material = new THREE.MeshBasicMaterial({ color: this.color }); 
        this.mesh = new THREE.Mesh( geometry, material ); 
    }

    getMesh () {
        return this.mesh
    }
}