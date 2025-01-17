import * as THREE from 'three';

export class Home {
    constructor() {
        this.home = new THREE.Group()
        this.init()
    }

    init() {
        this.createHome()
    }

    createHome () {
        // Walls
        const wallGeometry = new THREE.BoxGeometry(6, 3.5, 5)
        const wallMaterial = new THREE.MeshLambertMaterial({ color: 'rgba(126, 110, 99, 0.8)' })
        const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial)
        wallMesh.position.set(0,1.2,0)
        // wallMesh.castShadow = true

        // Roof
        const roofGeometry = new THREE.ConeGeometry(5, 2, 4)
        const roofMaterial = new THREE.MeshLambertMaterial({ color: 'rgba(171, 104, 58, 0.8)' })
        const roofMesh = new THREE.Mesh(roofGeometry, roofMaterial)
        roofMesh.position.set(0,3.8,0)
        roofMesh.rotateY(0.8)
        roofMesh.castShadow = true

        // Door
        const doorGeometry = new THREE.PlaneGeometry(1,3)
        const doorMaterial = new THREE.MeshLambertMaterial({color: 'rgba(109, 44, 0, 0.8)'})
        const doorMesh = new THREE.Mesh(doorGeometry, doorMaterial) 
        doorMesh.position.set(1,0,2.501)

        // Window
        const windowGeometry = new THREE.PlaneGeometry(1.5, 1.5)
        const windowMaterial = new THREE.MeshLambertMaterial({color: 'white'})
        const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial)
        windowMesh.position.set(-1,1,2.501)

        this.home.position.set(0, .4, 0)
        this.home.add(
            wallMesh,
            roofMesh,
            doorMesh,
            windowMesh
        )
    }

    getMesh () {
        return this.home
    }
}