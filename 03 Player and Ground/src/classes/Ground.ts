import { BoxGeometry, Mesh, MeshStandardMaterial, RepeatWrapping, Scene, TextureLoader } from "three";

export class Ground {
    ground: Mesh

    groundDimensions = { length: 10, breadth: 1000 }
    groundTileScale: number = 0.5
    speed: number = 5

    constructor(scene: Scene) {
        // Load and setup texture
        const loader = new TextureLoader()
        const texture = loader.load("/textures/kenney_prototype_textures/texture_02.svg")
        texture.wrapS = RepeatWrapping
        texture.wrapT = RepeatWrapping
        texture.repeat.set(
            this.groundDimensions.length * this.groundTileScale,
            this.groundDimensions.breadth * this.groundTileScale
        )

        // Create ground mesh
        const geometry = new BoxGeometry(
            this.groundDimensions.length,
            1,
            this.groundDimensions.breadth
        )

        const material = new MeshStandardMaterial({ map: texture })
        this.ground = new Mesh(geometry, material)

        scene.add(this.ground)
    }

    setup() {

    }

    update(delta: number) {
        // Give moving effect
        const material = this.ground.material as MeshStandardMaterial
        const map = material.map
        if (!map)
            return

        map.offset.y = (map.offset.y + (this.speed * delta)) % 1
    }
}