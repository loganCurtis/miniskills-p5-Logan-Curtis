/********************************************************/
//
var speedX=3;
var circleX=50;
var circleY=50;
var dia=100
var speedY=0;


/********************************************************/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
 
  ellipse(circleX,circleY,dia);


if(circleX>=width-dia/2){
speedX=-3;
}
else if(circleX<width=dia/2){
  speedX=3;
}



  circleX=circleX+speed;
  circleY=circleY+height;
}