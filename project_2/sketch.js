function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
}

function draw() {
    fill(255);
	translate(width/2,height/2)
  textSize(150);
  textAlign(CENTER, CENTER);
  text('EPISODE',0,0);
  fill(0);
	noStroke()
	background(255,0.1)
	for(var i=0;i<360;i+=1){
		rotate(1)
		let r = frameCount + noise(i/5,frameCount/10,mouseX)*100
		ellipse(r,0,mouseY/100,mouseX/100)
	}

	// ellipse(mouseX, mouseY, 20, 20);
}
