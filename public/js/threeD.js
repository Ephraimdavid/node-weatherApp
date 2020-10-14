//instantiate scene, camera and renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

//build a red cube mesh with default boz geometry and basic material
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({ color: 0xff0000})
const cube = new THREE.Mesh(geometry, material)

//add the mesh in the scene
scene.add(cube)

//set the camera in front of the cube
camera.position.z = 5

//set the size of the renderer in fullscreen
renderer.setSize(wndow.innerWidth, window.innerHeight)

//put the renderer in the HTML page
document.querySelector('.animate').appendChild(renderer.domElement)

// game loop rendering each frame
const animate = () => {
    requestAnimationFrame(animate)

    //rotate the cube at each frame
    cube.rotation.x  += 0.01
    cube.rotation.y += 0.01

    // render a frame from pov of the camera
    renderer.render(scene, camera)
}

animate()