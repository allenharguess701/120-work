//////////////////////
//  Allen Harguess  //
//////////////////////

let obsticles = [];

var slider;
var slider2;
var slider3;
var value = 0;
let bubbles = [];
let cloud = [];

var objcolor = {r: 255, g: 255, b: 255, opas:150};

///////////////////////////////////////////////////////
function setup() {
createCanvas(windowWidth, windowHeight);

//Sliders//////////////////////////////////////////////
slider = createSlider(10, 100, 55);
slider.position(20, windowHeight-80);
slider.style('width', '80px');

slider2 = createSlider(1, 9, 1);
slider2.position(20, windowHeight-120);
slider2.style('width', '80px');

slider3 = createSlider(1, 9, 1);
slider3.position(20, windowHeight-100);
slider3.style('width', '80px');

slider4 = createSlider(1, 3, 3);
slider4.position(20, windowHeight-140);
slider4.style('width', '80px');
}

///////////////////////////////////////////////////////
function draw() {
background(0);

//Slider Text//////////////////////////////////////////


push();
textSize(24);
stroke(255,215,0);
strokeWeight(3);
textStyle(BOLD)
textFont("Comic Sans MS");
smooth();
fill(255, 140, 0);
text("Ballons that touch, change speed and color each time they do so-", windowWidth/5, windowHeight/10);
pop();

textSize(12);
stroke(0);
strokeWeight(3);
textStyle(BOLD)
textFont("Comic Sans MS");
smooth();
fill(100, 100, 255);
text("Change the Y-Axis Velocity", 120, windowHeight-85);
text("Change the X-Axis Velocity", 120, windowHeight-105);
text("Change the balloon diameter", 120, windowHeight-65);
text("Click on a balloon to pop it", 70, windowHeight-145);
text("High or low densite balloons population", 120, windowHeight-125);
drawcloud();

}

function mousePressed() {
    // make the bubbles check themselves
    // to see if the mouse is within them.
    for (let i = bubbles.length - 1; i >= 0; i--) {
        let destroyMe = bubbles[i].mouseCheck();
        if (destroyMe) {
            bubbles.splice(i, 1);
        }
    }
}
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
  class Bubble {
    constructor(x, y, r) {
      this.xaxis = x;
      this.yaxis = y;
      this.rad = r;
      this.opas = 150;
      this.colr = objcolor.r;
      this.colg = objcolor.g;
      this.colb = objcolor.b;
      this.val2 = slider2.value();
      this.val3 = slider3.value();
    }

    move() {
      this.xaxis = this.xaxis + this.val2;
      this.yaxis = this.yaxis + this.val3;

    }

    show() {

      stroke(this.colr+100, this.colg+100, this.colb+100,this.opas);
      this.opas -= 1;
      fill(this.colr, this.colg, this.colb,this.opas);
      ellipse(this.xaxis, this.yaxis, this.rad);

      stroke(this.colr, this.colg, this.colb,this.opas);

      line(this.xaxis-(this.rad/2), this.yaxis-(this.rad/2), this.xaxis-40, this.yaxis-40);
      line(this.xaxis-(this.rad/2), this.yaxis-(this.rad/2), this.xaxis-random(40,50), this.yaxis-random(40,50));
      line(this.xaxis-(this.rad/2), this.yaxis-(this.rad/2), this.xaxis-random(50,60), this.yaxis-random(50,60));
      line(this.xaxis-(this.rad/2), this.yaxis-(this.rad/2), this.xaxis-random(60,70), this.yaxis-random(60,70));
      fill(this.colr+100, this.colg+100, this.colb+100,this.opas);
      ellipse(this.xaxis, this.yaxis, this.rad/2);
    }

    faded(){return this.opas < 0;}

    check(otherBalls, myId) {
        // for loop touches each of the balls in the array
        for (let n = 0; n < otherBalls.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if (n != myId) {
                let d = dist(this.xaxis, this.yaxis, otherBalls[n].xaxis, otherBalls[n].yaxis);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    let controller = random(1,10);
                    if (controller > 5){this.xaxis -= 3; this.colr = 255; this.colg = 0; this.colb= 0;}
                    if (controller < 5){this.xaxis -= 3; this.colr = 0; this.colg = 0; this.colb= 255;}

                    if (controller > 5){this.yaxis += 4;} else {this.yaxis -= 4;}
                    if (controller < 5){this.opas -= 1.5;}

                }
            }
        }
    }


    mouseCheck() {
            // get the distance between the mouse and the center of the bubble
            let d = dist(this.xaxis, this.yaxis, mouseX, mouseY);
            // check if that distance is less than the bubble radius
            // if it is, then the mouse if within
            if (d < this.rad) {
                return true;
            } else {
                return false;
            }
        }
}

///////////////////////////////////////////////////////
function drawcloud(){

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].check(bubbles, i);
    if (bubbles[i].faded()){bubbles.splice(i, 1);}

  }

  objcolor.r = random(240, 255);
  objcolor.g = random(240, 255);
  objcolor.b = random(240, 255);

  var xmin = random(1,windowWidth/random(1,3));
  var xmax = random(windowWidth/random(1,3),windowWidth);
  var ymin = random(1,windowHeight/random(1,3));
  var ymax = random(windowHeight/random(1,3),windowHeight);
  let bdens = slider4.value();
  let r = random(10, slider.value());
  let c = new Bubble(windowWidth/2-random(xmin,xmax), windowHeight/2-random(ymin,ymax), r);
  bubbles.push(c);

  if (bdens == 2){
    let d = new Bubble(windowWidth/2-random(xmin,xmax), windowHeight/2-random(ymin,ymax), r);
    bubbles.push(d);
  }
  if (bdens == 3){
    let d = new Bubble(windowWidth/2-random(xmin,xmax), windowHeight/2-random(ymin,ymax), r);
    bubbles.push(d);
    let e = new Bubble(windowWidth/1-random(xmin,xmax), windowHeight/1-random(ymin,ymax), r);
    bubbles.push(e);
  }

}
