import { AmbientLight, DirectionalLight, FogExp2, PerspectiveCamera, Scene, WebGLRenderer } from "three"

export class Game {
    width: number
    height: number
    scene: Scene
    camera: PerspectiveCamera
    renderer: WebGLRenderer
    lastTime: number = 0

    constructor() {
        // Set width and height
        this.width = window.innerWidth
        this.height = window.innerHeight

        // Initialize scene
        this.scene = new Scene()

        // Initialize camera
        this.camera = new PerspectiveCamera(
            60,
            this.width / this.height,
            0.1,
            1000
        )

        // Initialize renderer
        this.renderer = new WebGLRenderer()
        this.renderer.setSize(this.width, this.height)
        document.body.appendChild(this.renderer.domElement)

        // Ensure camera/renderer updates on screen resize
        window.addEventListener("resize", () => {
            this.width = window.innerWidth
            this.height = window.innerHeight

            this.camera.aspect = this.width / this.height
            this.camera.updateProjectionMatrix()

            this.renderer.setSize(this.width, this.height)
        })
    }

    getProperties() {
        return {
            width: this.width,
            height: this.height,
            scene: this.scene,
            camera: this.camera,
            renderer: this.renderer
        }
    }

    setupEnvironment() {
        const ambient = new AmbientLight(0xffffff, 0.5)
        this.scene.add(ambient)

        const dirLight = new DirectionalLight(0xffffff, 1)
        dirLight.position.set(0, 10, 0)
        this.scene.add(dirLight)

        this.scene.fog = new FogExp2("#111111", 0.01)
        this.renderer.setClearColor(this.scene.fog.color)
    }

    mainLoop(loop: (delta: number) => void) {
        this.renderer.setAnimationLoop((time: DOMHighResTimeStamp) => {
            // Set delta time
            const delta = (time - this.lastTime) / 1000
            this.lastTime = time

            // Run loop
            loop(delta)

            // Render
            this.render()
        })
    }

    private render() {
        this.renderer.render(
            this.scene,
            this.camera
        )
    }
}