//created with influece from Daniel Shiffman Attraction/Repulsion
//and p5 sound projects
//Attraction/Repulsion: https://youtu.be/OAcXnzRNiCY
//sound playlist: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW
//also created with influence from: https://www.openprocessing.org/sketch/492096

///////////simple sounds + simple sounds = complex songs ////////////////
var particles = [];
var blueSong, yellowSong, redSong, yellow_2;
var viscosity; //this keeps them from flying off the screen
var song, fft, amp, c;
/////////////////////preload all the different songs//////////////////////
function preload() {
	blueSong=loadSound("blue.mp3");
	redSong=loadSound("red.wav");
	yellowSong=loadSound("yellow.wav");
	yellowSong_2=loadSound("yellow_2.wav");

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	noStroke();
	viscosity = 0.90;
	amp=new p5.Amplitude();
	fft= new p5.FFT(0.9, 128);
}

function playSong(song){
	switch(song){
		case "blue":
			blueSong.loop();
			break;
		case "yellow":
			yellowSong.loop();
			break;
			case "red":
				redSong.loop();
				break;
		default:
			break;
	}
}

function restart(){
	blueSong.stop();
	yellowSong.stop();
	redSong.stop();
}

function draw() {
	background(20);
	colorMode(HSB);
	var waveform = fft.waveform();
////////////////////////////////////color stuff////////////////////////////////
	for (var i=0; i<waveform.length; i++){
		var spec = waveform[i];
		// console.log(waveform[i]);
		if (waveform[i]<0.05) c=random(180,210); //blues
		if (waveform[i]>=0.05 && waveform[i]<0.15) c= random(0, 10); //reds
		if (waveform[i]>=0.15) c= random(50,60); //yellows
	  fill (c, 255, 255);

		if (spec>0.3){
			particles.push(new Particle(width/2, height/2, c));
		}
//////////////////////////i dont want more than 300 particles at a time////////////////////
		if (particles.length >300){
			particles.splice(0,1);
		}
	}

	interactions();

	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].display();
	}
}
//////////////////////////////////particles/////////////////////////////////////////
function Particle(x, y, c) {
	this.xPos = x; this.yPos = y;
	this.xVel = 0; this.yVel = 0;
	this.mass = random(0.003, 0.03);

	// moves the particle
	this.update = function() {
		this.xPos += this.xVel;
		this.yPos += this.yVel;
	}

	// displays the particle
	this.display = function() {
		var vol = amp.getLevel();
		var diam= map (vol, 0,1,100,5000);
		ellipse(this.xPos, this.yPos, this.mass*diam, this.mass*diam)
	};
}
////////////////////////////////interactions//////////////////////////////////
function interactions(i, j) {
	for (var i = 0; i < particles.length; i++) {
		var accX = 0; var accY = 0;

		// particle interaction
		for (var j = 0; j < particles.length; j++) {
			if (i != j) {
				var x = particles[j].xPos - particles[i].xPos;
				var y = particles[j].yPos - particles[i].yPos;
				var dis = sqrt(x*x+y*y);
				if (dis < 1) dis = 1;

				var force = (dis-320)*particles[j].mass/dis;
				accX += force * x;
				accY += force * y;
			}

			// mouse interaction
			var x = mouseX - particles[i].xPos;
			var y = mouseY - particles[i].yPos;
			var dis = sqrt(x*x+y*y);

			// adds a dampening effect
			if (dis < 40) dis = 40;
			if (dis > 50) dis = 50;

			var force = (dis-50)/(5*dis);
			accX += force * x;
			accY += force * y;
		}
		particles[i].xVel = particles[i].xVel*viscosity + accX * particles[i].mass;
		particles[i].yVel = particles[i].yVel*viscosity + accY * particles[i].mass;
	}
}

// creates a new particle
function mousePressed() {
	particles.push(new Particle(mouseX, mouseY, c));
}
