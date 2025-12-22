import { BoxGeometry, Mesh, MeshBasicMaterial, Scene } from "three";

export class Player {
    player: Mesh

    constructor(scene: Scene) {
        const geometry = new BoxGeometry(1, 1, 1)
        const material = new MeshBasicMaterial({ color: "skyblue" })
        this.player = new Mesh(geometry, material)

        scene.add(this.player)
    }

    setup() {

    }

    update(delta: number) {
        this.player.rotation.x += 1 * delta
        this.player.rotation.y += 1 * delta
    }
}