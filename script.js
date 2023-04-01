const Phaser = require('phaser');

const gameState = {}

function create() {
    gameState.ball = this.add.cube()

}

function update() {

}

const config = {
    width: 450,
    height: 900,
    backgroundColor: 'cccccc',
    scene: {
        create,
        update
    }
}

const snake = new Phaser.Game(config);
