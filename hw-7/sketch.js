//////////////////////
//  Allen Harguess  //
//////////////////////

var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

var value = {bgcl: 0};
var spotaxis = {x: 0, y: 0};
var objcolor = {r: 0, g: 0, b: 0}; //object color
var objsize = {x: 0}; //object size
var coef = 0; // size coefficient
var divzr = 3; // size divider

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  //size controls
    coef = random(2, 6); //the larger the max integer = larger possible balls.
    objsize.x = random(80, 100);
    coef = coef / divzr;
    coef = coef % 2;
    objsize.x = objsize.x / coef;
}

function draw() {

  objcolor.r = random(0, 255);
  objcolor.g = random(0, 255);
  objcolor.b = random(0, 255);

push();
  textSize(32);
  noStroke();
  textStyle(BOLD)
  textFont("Comic Sans MS");
  smooth();
  fill(0, 0, 255);
  text("Click To Redirect, Click+Drag to change Stroke Color",  windowWidth/4, windowHeight/4);
pop();

push();
  textSize(16);
  noStroke();
  textFont("Comic Sans MS");
  smooth();
  fill(255, 0, 0);
  text("WARNING!!! Clicking drops land mines!!!",  windowWidth/4, windowHeight/4+20);
pop();

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;

        //size controls
          coef = random(2, 6); //the larger the max integer = larger possible balls.
          objsize.x = random(80, 100);
          coef = coef / divzr;
          coef = coef % 2;
          objsize.x = objsize.x / coef;

    }

    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;

        //size controls
          coef = random(2, 6); //the larger the max integer = larger possible balls.
          objsize.x = random(80, 100);
          coef = coef / divzr;
          coef = coef % 2;
          objsize.x = objsize.x / coef;
    }

    stroke(value.bgcl, value.bgcl, value.bgcl);
    strokeWeight(1);
    fill(objcolor.r, objcolor.g, objcolor.b, 70);
    ellipse(ball.x, ball.y, objsize.x, objsize.x);

}

function mouseDragged() {
  value.bgcl = value.bgcl + 2;
  if (value.bgcl > 255) {
    value.bgcl = 0;
  }
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);

    spotaxis.x = random(1, windowWidth);
    spotaxis.y = random(1, windowHeight);

    objcolor.r = random(0, 255);
    objcolor.g = random(0, 255);
    objcolor.b = random(0, 255);

    var step = frameCount % 20
    var angle = map(step, 0, 20, -PI/4, PI/4);

    translate(50, 50);
    // equivalent to shearX(angle);
    var shear_factor = 1 / tan(PI/2 - angle);
    applyMatrix(1, 0, shear_factor, 1, 0, 0);

    fill(objcolor.r, objcolor.g, objcolor.b, );
    ellipse(spotaxis.x, spotaxis.y, objsize.x/3, objsize.x/3);

    if (ball.delta_x >= ball.y){
      ball.delta_x = -1 * ball.delta_x;
    }
    else {
      ball.delta_y = -1 * ball.delta_y;
    }

}
