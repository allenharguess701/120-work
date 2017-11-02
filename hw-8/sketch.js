//////////////////////
//  Allen Harguess  //
//////////////////////

//Variables Declaration
var objcolor = {r: 0, g: 0, b: 0, con:100, drag: 100};
var diams = [20, 40, 60, 90, 60, 40, 20];
var diamstwo = [10, 20, 30, 40, 50, 60, 70];
var axis = {x: 0, y: 0};
var targets = {num: 0, diacoef: 0};
var gauge ={x: 60, xtwo: 70, y: 105};

function setup() {
  createCanvas(windowWidth, windowHeight);
    background(0);
    targets.num = random(1, 10);
}

function draw() {
    stroke(0,0,0,90);
    targets.diacoef = random(1, 90);

//Instructions
    textSize(26);
    smooth();
    stroke(0);
    strokeWeight(4);
    textFont("Comic Sans MS");
    fill(255, 0, 0);
    text("Scrubbing Bubbles!!!",  100, 100);
    text("Drag mouse to change bubble opacity",  100, 140);
    text("Click mouse to reset bubbles",  100, 180);

//Opacity Gauge

textSize(16);
text("100%",  50, 90);
text("30%",  50, 200);

stroke(0);
strokeWeight(3);
rect(50, 100, 30, 80);
stroke(255, 0, 0);
line(50, 100, 80, 100);
stroke(255, 255, 255);
line(gauge.x, gauge.y, gauge.xtwo, gauge.y);
stroke(255, 0, 0);
line(50, 180, 80, 180);
fill(255, 255, 255);

//Mouse Driven Bubbles
for (var x = 0; x < 7; x++) {
noStroke();
      objcolor.r = random(65, 100);
      objcolor.g = random(60, 150);
      objcolor.b = random(139, 255);

      fill(objcolor.r, objcolor.g, objcolor.b, 80);
      ellipse(mouseX, mouseY, diams[x], diams[x]);

}

//Popping Bubbles
for (var a = 0; a < targets.num; a++) {

  axis.x = random(1, windowWidth);
  axis.y = random(1, windowHeight);

  for (var x = 0; x < 7; x++) {
    objcolor.r = random(200, 255);
    objcolor.g = random(200, 255);
    objcolor.b = random(200, 255);

    objcolor.con = objcolor.con = objcolor.drag;
     if (objcolor.con > objcolor.drag){objcolor.con = 0;}

     noStroke();
     fill(objcolor.r, objcolor.g, objcolor.b, objcolor.con);
     ellipse(axis.x, axis.y, diamstwo[x]-targets.diacoef, diamstwo[x]-targets.diacoef);
  }
}

}
//Background Reset
function mousePressed() {
    background(0);
}

//Opacity Change
function mouseDragged() {
  objcolor.drag = objcolor.drag + 5;
  gauge.y = gauge.y + 5;

  if (gauge.y > 175) {
    gauge.y = 105;
  }
  if (objcolor.drag > 100) {
    objcolor.drag = 0;
  }
}
