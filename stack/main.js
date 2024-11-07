const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d')

const MODES = {
	FALL: 'fall',
	BOUNCE: 'bounce',
	GAMEOVER: 'gameover'
}

const INITIAL_BOX_WIDTH = 50
const INITIAL_X_SPEED = 2
const INITIAL_Y_SPEED = 5

let boxes = []
let scroolCounter, cameraY, current, mode, xSpeed, ySpeed;

function initialGameState() {
	boxes = [{
		x: canvas.width / 2,
		y: 200,
		width: INITIAL_BOX_WIDTH,
		color: 'white'
	}]
}

Colors.red.s500