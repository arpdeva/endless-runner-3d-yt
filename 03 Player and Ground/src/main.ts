import { Game } from "./classes/Game"
import { Ground } from "./classes/Ground"
import { Player } from "./classes/Player"

main()

function main() {
    const game = new Game()
    const {
        scene,
        camera,
    } = game.getProperties()

    // Setup environment
    game.setupEnvironment()

    // Set camera position
    camera.position.set(0, 2.5, 5)

    // Create ground
    const ground = new Ground(scene)
    ground.setup()

    // Create player
    const player = new Player(scene)
    player.setup()

    // Main Loop
    game.mainLoop((delta) => {
        ground.update(delta)
        player.update(delta)
    })
}