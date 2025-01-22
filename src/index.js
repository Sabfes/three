import { App } from "@app/app.js";
import './style.css'

const app = new App()

// import * as THREE from 'three'


// // Создаём сцену
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xA3A3A3); 

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 5); // Камера на правильном расстоянии

// // Настроим рендерер
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Добавляем куб
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Анимация
// function animate() {
//     requestAnimationFrame(animate);

//     // Печать кадра в консоль для проверки рендеринга
//     console.log('Rendering frame...');

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }
// animate();