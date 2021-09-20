let ball = [];
let ballNum = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	background(0);
	noFill();
	strokeWeight(0.5);
	for (let i = 0; i < ballNum; i++) {
		ball[i] = new DrawBall();
	}
}

function draw() {
	background(0, 0.2);
	for (let i = 0; i < ballNum; i++) {
		ball[i].display();
		ball[i].move();
		ball[i].collision();
	}
}

class DrawBall {
	constructor() {
		this.ballPosX = width / 2;
		this.ballPosY = height / 2;
		this.ballColor = 100;
		this.ballVecX = random(-1, 1);
		this.ballVecY = random(-1, 1);
		this.ballSpeed = random(2, 5);
		this.ballSize = random(1, width / 5);
	}

	display() {
		stroke(this.ballColor);
		circle(this.ballPosX, this.ballPosY, this.ballSize);
	}

	move() {
		this.ballPosX += this.ballVecX * this.ballSpeed;
		this.ballPosY += this.ballVecY * this.ballSpeed;
	}

	collision() {
		if (this.ballPosX >= width - this.ballSize / 2) {
			this.ballVecX = this.ballVecX * -1;
		} else if (this.ballPosX <= 0 + this.ballSize / 2) {
			this.ballVecX = this.ballVecX * -1;
		} else if (this.ballPosY >= height - this.ballSize / 2) {
			this.ballVecY = this.ballVecY * -1;
		} else if (this.ballPosY <= 0 + this.ballSize / 2) {
			this.ballVecY = this.ballVecY * -1;
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	for (let i = 0; i < ballNum; i++) {
		ball[i] = new DrawBall();
	}
}
