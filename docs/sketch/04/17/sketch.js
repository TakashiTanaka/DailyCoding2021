let osc, osc2, osc3;
let oscType = 'sine';
let envelope;
let attack = 0.01;
let decay = 0.1;
let sustain = 0.1;
let release = 0.1;
let reverb;
let x, y, sx, sy, size;
let minSpeedSeed = 5;
let maxSpeedSeed = 10;
let pallet = { black: 0, gray: 30, gray2: 60, white: 95 };
let bgcolor = pallet.white;

function setup() {
  noCursor();
  userStartAudio();
  createCanvas(1000, 1000);
  colorMode(HSB);
  rectMode(CENTER);
  osc = new p5.Oscillator(oscType);
  osc2 = new p5.Oscillator(oscType);
  osc3 = new p5.Oscillator(oscType);
  envelope = new p5.Envelope();
  reverb = new p5.Reverb();
  reverb.process(osc, 10, 2);
  reverb.process(osc2, 10, 2);
  reverb.process(osc3, 10, 2);
  osc.start();
  osc.amp(0);
  osc2.start();
  osc2.amp(0);
  osc3.start();
  osc3.amp(0);
  envelopeSetting();
  noStroke();
  background(bgcolor);
  fill(pallet.black);
  x = width / 2;
  y = height / 2;
  sx = random(-random(minSpeedSeed, maxSpeedSeed), random(minSpeedSeed, maxSpeedSeed));
  sy = height / 2;
  size = 500;
  noLoop();
}

function draw() {
  background(bgcolor, 0.4);
  x = x + sx;

  rect(x, y, size);

  if (x >= width - size / 2) {
    bgcolor = pallet.black;
    fill(pallet.white);
    sx = sx * -1;
    playOscillator(60);
  } if (x <= 0 + size / 2) {
    bgcolor = pallet.white;
    fill(pallet.black);
    sx = sx * -1;
    playOscillator(60 + int(random(0, 12)));
  }
}

function playOscillator(midinote) {
  let freqValue = midiToFreq(midinote);
  osc.freq(freqValue);
  osc2.freq(freqValue * 3);
  osc3.freq(freqValue * 6);
  envelopeSetting();
  envelope.play(osc);
  envelope.play(osc2);
  envelope.play(osc3);
}

function envelopeSetting() {
  envelope.setADSR(attack, decay, sustain, release);
  envelope.setRange(0.07, 0.0);
}

function mouseClicked() {
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}