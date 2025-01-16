import * as THREE from 'three';

export class ThreeHelpers {
    constructor(scene, camera) {
        this.typeCheck(scene, camera)
        this.scene = scene
        this.camera = camera 
    }

    typeCheck (scene, camera) {
        if (!scene || scene.type !== 'Scene') {
            throw new Error('The scene object was not received or the type is incorrect')
        }
        if (!camera || camera.type !== 'PerspectiveCamera') {
            throw new Error('The camera object was not received or the type is not PerspectiveCamera')
        }
    }

    // Show Z,Y,X - axes
    getAxesHelper () {
        const axesHelper = new THREE.AxesHelper( 5 )
        this.scene.add(axesHelper)
        return this
    }

    // Show grid 
    getGridHelper (size, divisions) {
        // Default size = 10 & divisions = 10
        const gridHelper = new THREE.GridHelper( size, divisions )
        this.scene.add(gridHelper)
        return this
    }
    
    // Show camera position
    getCameraHelper () {
        const helper = new THREE.CameraHelper( this.camera )
        this.scene.add( helper )
        return this
    }
}