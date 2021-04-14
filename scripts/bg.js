const scene = new THREE.Scene();
scene.background = new THREE.Color("#ffffff");
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10);
camera.position.z = 8;

/*0x0a0a0a*/
const torGeometry = new THREE.TorusKnotGeometry(20, 8, 256, 128);
const torMaterial = new THREE.MeshBasicMaterial({ color: 0x0a0a0a, wireframe: true });
const torKnot = new THREE.Mesh(torGeometry, torMaterial);
scene.add(torKnot);



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
renderer.render(scene,camera);
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})


const animate = () => {
    requestAnimationFrame(animate);
    torKnot.rotation.z += 0.0025;
    torKnot.rotation.x += 0.0025;
    torKnot.rotation.y += 0.0025;
    renderer.render(scene, camera);
}
animate();

document.querySelector(".bg-container").appendChild(renderer.domElement);