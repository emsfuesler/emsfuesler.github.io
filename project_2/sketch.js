function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

function draw() {
  fill(255);
  translate(width/2,height/2)
	color(255);
	textAlign(CENTER,CENTER);
	textSize(100);
	text("EPISODE",10,10);
	textAlign(CENTER, BOTTOM);
	textSize(50);
	noStroke();
	fill(0);
	background(255,0.1)
	for(var i=0;i<360;i+=1){
		rotate(1)
		let r = frameCount + noise(i/5,frameCount/20,mouseX)*100
		ellipse(r,0,mouseY/100,mouseX/100)
	}
}
