var ellipse_num=40;

function setup() {
  createCanvas(400, 400);
  frameRate(20);
}

function draw() {
  background(0);
  if (mouseIsPressed){
    ellipse(mouseX, mouseY, 30, 30);
  }
  else{
    for (i=0; i<ellipse_num; i++){
      noStroke();
      fill(random(0,255),random(0,255), random(200,255));
    ellipse (random(0,400),random(0,400),random (20,30), random(20,30));
  }
}
}
