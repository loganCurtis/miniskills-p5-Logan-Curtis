/********************************************************/
//
var circleX=50
circleSizeX=50
/********************************************************/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circleX=circleX+1;
  circleSizeX=circleSizeX+1
  ellipse(circleX,50,circleSizeX,50)


 
}