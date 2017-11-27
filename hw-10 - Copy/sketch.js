//////////////////////
//  Allen Harguess  //
//////////////////////

  var slider;
  var slider2;
  var slider3;
  var value = 0;
  let bubbles = [];
  let cloud = [];
  var objcolor = {r: 255, g: 255, b: 255, opas:150};
  function setup() {
  createCanvas(windowWidth, windowHeight);

  slider = createSlider(0, 255, 100);
  slider.position(20, windowHeight-80);
  slider.style('width', '80px');

  slider2 = createSlider(4, 9, 7);
  slider2.position(20, windowHeight-120);
  slider2.style('width', '80px');

  slider3 = createSlider(4, 9, 7);
  slider3.position(20, windowHeight-100);
  slider3.style('width', '80px');

  }

  function draw() {

    var val = slider.value();
    background(val);

    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
      if (bubbles[i].faded()){bubbles.splice(i, 1);}

      }
drawcloud()

  }

///////////////////////////////////////////////////////////////////
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
      this.opas -= .75;
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
}

///////////////////////////////////////////////////////////////////
function drawcloud(){

  push();
  textSize(12);
  stroke(0);
  strokeWeight(3);
  textStyle(BOLD)
  textFont("Comic Sans MS");
  smooth();
  fill(100, 100, 255);
  text("Change the Y-Axis Velocity", 120, windowHeight-85);
  text("Change the X-Axis Velocity", 120, windowHeight-105);
  text("Change the Screen Color", 120, windowHeight-65);
  pop();

  objcolor.r = random(100, 255);
  objcolor.g = random(100, 255);
  objcolor.b = random(100, 255);

  var xmin = random(1,windowWidth/2);
  var xmax = random(windowWidth/2,windowWidth);
  var ymin = random(1,windowHeight/2);
  var ymax = random(windowHeight/2,windowHeight);

  let r = random(5, 45);
  let c = new Bubble(windowWidth/2-random(xmin,xmax), windowHeight/4-random(ymin,ymax), r);
  bubbles.push(c);
  let d = new Bubble(windowWidth/2-random(xmin,xmax)+100, windowHeight/4-random(ymin,ymax)+200, r);
  bubbles.push(d);

}

///////////////////////////////////////////////////////////////////

  function mouseDragged() {
    let r = random(7, 49);
    objcolor.r = 176;
    objcolor.g = 224;
    objcolor.b = random(220,255);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
  }

  function mousePressed() {



  }
