/********************************************************/
//
/********************************************************/

var ballsArray = [];
const NUMBALLS = 2
var hits = 0
var misses = 0
//var ballHit= false

function setup() {
  createCanvas(350, 350)
  console.log("startGame");
  for (var i = 0; i < NUMBALLS; i++) {
    ballsArray[i] = {
      
      x: 60,
      y: 20,
      dia: 50,
      // speedX:   random(2,10),
      //speedY:   random(2,10),
      speedX: 3,
      speedY: 3,
      r: random(50, 150),
      g: random(50, 150),
      b: random(50, 150),

      display: function () {
        fill(this.r, this.g, this.b)
        ellipse(this.x, this.y, this.dia);


      },

      move: function () {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;


      },

      bounce: function () {
        if (this.x + this.dia / 2 > width) {
          this.speedX = this.speedX * -1
        }

        else if (this.x - this.dia / 2 < 0) {
          this.speedX = this.speedX * -1
        }
        if (this.y + this.dia / 2 > width) {
          this.speedY = this.speedY * -1
        }
        else if (this.y - this.dia / 2 < 0) {
          this.speedY = this.speedY * -1
        }
      },

      place: function () {
        this.y = random(150, width - this.dia / 2)
        this.x = random(150, width - this.dia / 2)
      },

      clicked: function () {
        var d = dist(mouseX, mouseY, this.x, this.y)
        if (d<this.dia /2) {
          hits++;
          console.log("hits:"+hits)
         // ballHit = true
          //console.log(ballHit);
        }
        else{
          misses++;
          console.log("misses:"+misses)
        }

      }

    }
    ballsArray[i].place();

  }


};

function mousePressed() {
  for (var i = 0; i < ballsArray.length; i++) {
    ballsArray[i].clicked();

  }

}

//function hit(){

//var px2Ball = dist(ballsArray[0].x, ballsArray[0].y, mouseX, mouseY);

// if(px2Ball<ballsArray.dia){
//   hits++;
// console.log(hits)

// }

//}

function draw() {
  background(220);
  for (var i = 0; i < ballsArray.length; i++) {
    ballsArray[i].display();
    ballsArray[i].move();
    ballsArray[i].bounce();
  }

}