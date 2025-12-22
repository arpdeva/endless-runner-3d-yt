import { Game } from "./classes/Game"
import { Player } from "./classes/Player"

main()

function main() {
    const game = new Game()
    const {
        scene,
        camera,
    } = game.getProperties()

    // Set camera position
    camera.position.z = 5

    // Create player
    const player = new Player(scene)
    player.setup()

    // Main Loop
    game.mainLoop((delta) => {
        player.update(delta)
    })
}