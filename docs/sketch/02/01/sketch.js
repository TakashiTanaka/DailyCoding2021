let w;
let h;
let brushSize = 0.3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB);
  ellipseMode(CENTER);
  background(0);

  w = width;
  h = height;

}

function draw() {
  drawBrush();
}

function drawBrush() {
  if (mouseIsPressed) {
    for (let j = 0; j <= w * brushSize / 2; j += 2) {
      fill(random(0, 360), 100, 100);
      ellipse(mouseX, mouseY, w * brushSize - j * 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}