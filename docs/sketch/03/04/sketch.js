let backgroundColor = 0;
let waveellipses;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	noStroke();
	waveellipses = new drawWaveEllipse();
}

function draw() {
	background(backgroundColor);
	waveellipses.display();
}

class drawWaveEllipse {
	constructor() {
		this.baseXpos = width * 0.8;
		this.baseYpos = height * 0.5;
		this.circleSize = height * 0.2;
		this.fineness = 1;
		this.waveAmplitude = 150;
		this.waveYSpeed1 = 0.05;
		this.waveYSpeed2 = 0.01;
		this.wavePeriod = 10;
		this.circlesLength = 16;
		this.startGradientSize = 1;
		this.endGradientSize = 60;
	}

	display() {
		for (let i = 0; i < width / this.circlesLength; i += this.fineness) {
			let move = sin(i / 2 + frameCount * this.waveYSpeed1);
			let gradient = drawingContext.createRadialGradient(
				this.baseXpos - i * this.wavePeriod,
				this.baseYpos + this.waveAmplitude * sin(frameCount * this.waveYSpeed2) * move,
				this.startGradientSize,
				this.baseXpos - i * this.wavePeriod,
				this.baseYpos + this.waveAmplitude * sin(frameCount * this.waveYSpeed2) * move,
				this.endGradientSize);
			gradient.addColorStop(0, color(255));
			gradient.addColorStop(1, color(0));
			drawingContext.fillStyle = gradient;
			ellipse(
				this.baseXpos - i * this.wavePeriod,
				this.baseYpos + this.waveAmplitude * sin(frameCount * this.waveYSpeed2) * move,
				this.circleSize);
		}
	}
}