import * as THREE from 'three';

export class Land {
    constructor() {
        this.land = new THREE.Group()
        this.createMesh()
    }

    createMesh() {
        // Plane
        const planeGeometry = new THREE.PlaneGeometry(100, 100)
        const planeMaterial = new THREE.MeshLambertMaterial({color: 'rgba(36, 113, 60, 0.8)', side: THREE.DoubleSide})
        const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
        planeMesh.rotateX(1.58)
        planeMesh.receiveShadow = true;
        this.land.add(planeMesh)
    }

    getMesh() {
        return this.land
    }
}