const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5
let posx = 0;
let posy= 0;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight)

document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1,1,1,1)
const material = new THREE.MeshBasicMaterial({color:'red'})
const cube =new THREE.Mesh(geometry,material)
scene.add(cube)
renderer.render(scene,camera)
const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
    handleKeys();
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
    handleKeys();
});

function handleKeys() {
    
    if (keys["ArrowUp"] || keys["w"]) {
        posx += 0.1
        cube.rotation.x = posx;
        renderer.render(scene,camera)
        console.log("Moving up");
    }
    if (keys["ArrowDown"] || keys["s"]) {
        posx -= 0.1
        cube.rotation.x = posx;
        renderer.render(scene,camera) 
        console.log("Moving down");
    }
    if (keys["ArrowLeft"] || keys["a"]) {
        posy += 0.1
        cube.rotation.y = posy;
        renderer.render(scene,camera)
        console.log("Moving left");
    }
    if (keys["ArrowRight"] || keys["d"]) {
        posy -= 0.1
        cube.rotation.y = posy;
        renderer.render(scene,camera)
        console.log("Moving left");
        console.log("Moving right");
    }
}


