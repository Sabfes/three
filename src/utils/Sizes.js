import * as THREE from 'three'
import Experience from "../Experience";

export default class Sizes {
  constructor() {
    this.experiance = new Experience()
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width / this.height;
  }
}