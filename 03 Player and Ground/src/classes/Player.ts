import { BoxGeometry, Mesh, MeshStandardMaterial, Scene } from "three";

export class Player {
    player: Mesh

    targetX: number = 0
    offset: number = 2
    lerpSpeed: number = 10

    constructor(scene: Scene) {
        const geometry = new BoxGeometry(1, 1, 1)
        const material = new MeshStandardMaterial({ color: "#ff6969" })
        this.player = new Mesh(geometry, material)

        scene.add(this.player)

        // Add player input
        window.addEventListener("keydown", e => {
            const key = e.key

            if (key === "a" || key === "ArrowLeft") {
                // Move left
                if (this.targetX === this.offset) {
                    this.targetX = 0
                }
                else if (this.targetX === 0) {
                    this.targetX = -this.offset
                }
            }
            else if (key === "d" || key === "ArrowRight") {
                // Move right
                if (this.targetX === -this.offset) {
                    this.targetX = 0
                }
                else if (this.targetX === 0) {
                    this.targetX = this.offset
                }
            }
        })
    }

    setup() {
        this.player.position.set(0, 1, 0)
    }

    update(delta: number) {
        this.player.position.x += (this.targetX - this.player.position.x) * this.lerpSpeed * delta
    }
}