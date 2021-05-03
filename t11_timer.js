/********************************************************/
//
var timer
var counter = 0;
var timer2
var counter2 = 30;
/********************************************************/
function setup() {
  createCanvas(400, 400);
  timer = createP("timer")
  setInterval(timeIt, 1000)

  timer2= createP("timer2")

  if (counter > 30) {
    setInterval(timeIt2, 1000)
  }
}

function timeIt() {
  timer.html(counter);
  counter++;
}

function timeIt2() {
  timer.html(counter2);
  counter2 ++;
}




function draw() {
  background("blue");

  if (counter > 30) {
    background("red")
  }
}