import { View } from "@views/view"
import * as THREE from 'three'
import { KeyControls } from "../control/keyControl"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
export class Player {
    constructor() {
        this.view = View.getInstance()
        this.scene = this.view.scene
        this.keyControl = new KeyControls()
        
        this.speed = 0.05
        this.setInstance()
    }

    setInstance() {
        const loader = new GLTFLoader();
        loader.load(
            'src/app/model/test1.gltf',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(.2, .2, .2)
                model.position.set(0,0,1)
                model.rotation.x = 1.9
                // model.rotation.z = 1
                this.instance = model
                this.scene.add(model);

                // Проверка на анимации
                if (gltf.animations && gltf.animations.length) {
                this.mixer = new THREE.AnimationMixer(model);
                gltf.animations.forEach((clip) => {
                    const action = this.mixer.clipAction(clip);
                    action.play();
                    action.setLoop(THREE.LoopRepeat, Infinity); // Устанавливаем цикл анимации (по умолчанию - бесконечно)
                });
                }
                console.log('Модель загружена:', gltf);
            }
        )
        // const geometry = new BoxGeometry(1,1,2)
        // const material = new MeshBasicMaterial({ color: 'rgb(133,153,150)' })
        // this.instance = new Mesh(geometry, material)
        // this.instance.position.z = 1
        // this.scene.add(this.instance)
    }

    update() {
        if (this.mixer) {
            this.mixer.update(0.02)
        }
        if (this.keyControl.keys.KeyA) {
            this.instance.position.x -= this.speed
        }
        if (this.keyControl.keys.KeyD) {
            this.instance.position.x += this.speed
        }
        if (this.keyControl.keys.KeyW) {
            this.instance.position.y += this.speed
        }
        if (this.keyControl.keys.KeyS) {
            this.instance.position.y -= this.speed
        }
    }
}