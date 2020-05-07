var mass = [];
var positionX = [];
var positionY = [];
var velocityX = [];
var velocityY = [];
var song, fft, amp, hue;
var lifespan = 255;
/////////////////////////////////////////////////////////////////////////////////////////////////////
function preload() {
  song= loadSound("testSong.mp3");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function setup() {
	createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
	noStroke();
  song.play();
  amp = new p5.Amplitude();
  fft = new p5.FFT(0.9, 128);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function draw() {
	background(0);
  var vol = amp.getLevel();
  var diam= map(vol, 0, 1, 100, 5000);
  var waveform = fft.waveform();
  ////this works but not well/////
  for (var i = 0; i < waveform.length; i++){
  var spec = waveform[i];
  var hue = map (waveform[i], -0.3, 0.3, 0, 255);
  fill(hue,255,255);
  console.log(waveform[i]);
  /////////////give the particles a lifespan///////////////
  if (spec>0.2) addNewParticle();

}
	for (var particleA = 0; particleA < mass.length; particleA++) {
		var accelerationX = 0, accelerationY = 0;

		for (var particleB = 0; particleB < mass.length; particleB++) {
			if (particleA != particleB) {
				var distanceX = positionX[particleB] - positionX[particleA];
				var distanceY = positionY[particleB] - positionY[particleA];

				var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
				if (distance < 1) distance = 1;

				var force = (distance - 320) * mass[particleB] / distance;
				accelerationX += force * distanceX;
				accelerationY += force * distanceY;
			}
		}

		velocityX[particleA] = velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
		velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
	}

	for (var particle = 0; particle < mass.length; particle++) {
		positionX[particle] += velocityX[particle];
		positionY[particle] += velocityY[particle];

		ellipse(positionX[particle], positionY[particle], mass[particle] * diam, mass[particle] * diam);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function addNewParticle() {
	mass.push(random(0.003, 0.03));
	positionX.push(mouseX);
	positionY.push(mouseY);
	velocityX.push(0);
	velocityY.push(0);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
	addNewParticle();
}
