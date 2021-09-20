let backgroundColor = 0;
let lineColor = 255;
let ellipseColor = 0;
let Xpos, Ypos, circleWidth, circleHeight;

function setup() {
	let canvas = createCanvas(500, 500);
	canvas.parent('canvas');
	fill(ellipseColor);
	stroke(lineColor);
	strokeWeight(1.5);
	Xpos = width * 0.5;
	Ypos = height * 0.8;
	circleWidth = height * 0.5;
	circleHeight = height * 0.2;
}

function draw() {
	background(backgroundColor);
	for (let i = 0; i < height / 16; i++) {
		let ugoki = cos(i * 3 - frameCount * 0.05);
		ellipse(
			Xpos + 20 * ugoki,
			Ypos - i * 10 + 20 * sin(i * 3 - frameCount * 0.05),
			circleWidth,
			circleHeight);
		console.log(ugoki);
	}
}
