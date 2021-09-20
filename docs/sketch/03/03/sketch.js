let backgroundColor = 0;
let lineColor = 255;
let ellipseColor = 0;
let Xpos, Ypos, circleSize, fineness;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	fill(ellipseColor);
	stroke(lineColor);
	strokeWeight(1.5);
	Xpos = width * 0.8;
	Ypos = height * 0.5;
	circleSize = height * 0.2;
	fineness = 1;
}

function draw() {
	background(backgroundColor);
	for (let i = 0; i < height / 16; i += fineness) {
		let move = sin(i / 2 + frameCount * 0.05);
		ellipse(
			Xpos - i * 10,
			Ypos + 150 * sin(frameCount * 0.01) * move,
			circleSize);
	}
}
