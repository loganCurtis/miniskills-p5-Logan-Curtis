/********************************************************/
//

var circle{
x=0;
y=0;
diameter=50
}
var speed=3;
var circleX=50;
var circleY=0;
var height=3;

/********************************************************/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
 
  ellipse(circleX,circleY,50,50);


if(circleX>=400){
speed=-3;
}
else if(circleX<0){
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