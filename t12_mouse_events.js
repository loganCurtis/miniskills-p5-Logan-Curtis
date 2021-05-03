/********************************************************/
//
var bgColour
var canvas
/********************************************************/
function setup() {
 canvas = createCanvas(400, 400);
 bgColour = color("blue");
 canvas.mouseOver(changeColour);
 canvas.mouseOut(changeColour)
 canvas.mousePressed(changeColour)
}

function changeColour(){
  bgColour = color(random(220))
}

function draw() {
  background(bgColour);
}