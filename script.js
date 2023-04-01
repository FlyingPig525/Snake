const gameState = {}

function create() {
    gameState.ball = this.add.box()

}

function update() {

}

const config = {
    width: 450,
    height: 900,
    backgroundColor: 0xFFFFFF,
    scene: {
        create,
        update
    }
}

const snake = new Phaser.Game(config);
