/********************************************************/
//
var speed=3;
var circleX=50;
var circleY=0;
var dia=100
var height=3;


/********************************************************/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
 
  ellipse(circleX,circleY,dia);


if(circleX>=width-dia/2){
speed=-3;
}
else if(circleX<width=dia/2){
  speed=3;
}
if(circleY>=400){
height=-3;
}
else if(circleY<0){
  height=3;
}
  circleX=circleX+speed;
  circleY=circleY+height;
}