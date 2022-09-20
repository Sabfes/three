import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'
import Experience from "../Experience";

export default class GlbLoader {
  constructor() {
    this.experience = new Experience()
    const fileUrl = new URL('../models/Wagon_6.glb', import.meta.url)
    const loader = new GLTFLoader();
    loader.load( fileUrl.href,  ( gltf ) => {
        this.model = gltf.scene
        this.model.position.set(0, 2.3, 0)
        this.model.castShadow = true
        this.experience.scene.add(this.model)
      }, undefined, (e) => {
        console.log(e, 'huy')
      }
    )
  }
}