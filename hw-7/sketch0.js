//////////////////////
//  Allen Harguess  //
//////////////////////


  let bubbles = [];
  let cloud = [];
  var objcolor = {r: 255, g: 255, b: 255, opas:80};
  function setup() {
  createCanvas(windowWidth, windowHeight);
  }

  function draw() {
    background(40);

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
      this.opas = 90;
      this.colr = objcolor.r;
      this.colg = objcolor.g;
      this.colb = objcolor.b;
    }

    move() {
      this.xaxis = this.xaxis + random(-5, 5);
      this.yaxis = this.yaxis + random(2, 5);
    }

    show() {
      noStroke();
      this.opas -= .75;
      fill(this.colr, this.colg, this.colb,this.opas);
      ellipse(this.xaxis, this.yaxis, this.rad);
    }

    faded(){return this.opas < 0;}
}

///////////////////////////////////////////////////////////////////
function drawcloud(){
  var min = random(0,50);
  var max = random(75,150);
  let r = random(2, 20);
  let b = new Bubble(windowWidth/2+random(min+150,max)+50, windowHeight/4+random(min+150,max)+50, r);
  bubbles.push(b);
  let c = new Bubble(windowWidth/2-random(min,max), windowHeight/4-random(min,max), r);
  bubbles.push(c);
  let d = new Bubble(windowWidth/2-random(min,max)+100, windowHeight/4-random(min,max)+100, r);
  bubbles.push(d);
  let e = new Bubble(windowWidth/2-random(min+250,max), windowHeight/4+random(min+50,max), r);
  bubbles.push(e);
  let f = new Bubble(windowWidth/2+random(min-250,max), windowHeight/4-random(min-50,max), r);
  bubbles.push(f);
  let g = new Bubble(windowWidth/2+random(min+150,max), windowHeight/4+random(min-50,max), r);
  bubbles.push(g);

}

///////////////////////////////////////////////////////////////////
  function mouseDragged() {
    let r = random(5, 40);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
  }

  function mousePressed() {
    objcolor.r = random(100, 255);
    objcolor.g = random(100, 255);
    objcolor.b = random(100, 255);
  }
