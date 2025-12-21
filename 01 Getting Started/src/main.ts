import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three"

// Constants
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

// Setup
const scene = new Scene()
const camera = new PerspectiveCamera(
    60,
    WIDTH / HEIGHT,
    0.1,
    1000
)

const renderer = new WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

// Ensure camera/renderer updates on screen resize
window.addEventListener("resize", () => {
    const newWidth = window.innerWidth
    const newHeight = window.innerHeight

    camera.aspect = newWidth / newHeight
    camera.updateProjectionMatrix()

    renderer.setSize(newWidth, newHeight)
})

// Create basic cube
const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: "skyblue" })
const cube = new Mesh(geometry, material)

// Design scene
scene.add(cube)
camera.position.z = 5

// Render
function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}