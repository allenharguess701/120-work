//////////////////////
//  Allen Harguess  //
//////////////////////

var xoffset = 0; //x coordinate
var yoffset = 80000; //y coordinate, must be considerably different from x.
var coef = 0; // size coefficient
var divzr = 3; // size divider
var diff = 0.001; // added amount to x,y coordinates each refresh. alters speed.
// use .001 for un-commented applyMatrix area. use .003 for commented applyMatrix.
var objcolor = {r: 0, g: 0, b: 0}; //object color
var objsize = {x: 0}; //object size

function setup() {
  createCanvas(windowWidth, windowHeight);

// Uncomment to change screen to black. It changes the feel a bunch
background(130,130,130);

//size controls
  coef = random(2, 6); //the larger the max integer = larger possible balls.
  coef = coef / divzr;
  coef = coef % 2;
  objsize.x = random(80, 100);
  objsize.x = objsize.x / coef;

}

function draw() {

//comment these lines to change the overall look of the snakes//////////
//if you un-comment either blend mode comment the applyMatrix area.

//blendMode(LIGHTEST);
//blendMode(MULTIPLY);
//stroke('rgb(0, 0, 0)'); //changing the stork makes a big difference also.

////////////////////////////////////////////////////////////////////////

  xoffset += diff;
  yoffset += diff;

    objcolor.r = random(0, 255);
    objcolor.g = random(0, 100);
    objcolor.b = random(0, 255);

//Snake 1 ////////////////////////////////////////
beginShape()
  var x = map(noise(xoffset), 0, 1, 0, width);
  var y = map(noise(yoffset), 0, 1, 0, height);
//applyMatrix///////////////////////////////////////////////////////////
//comment this area out for a completely different look/////////////////

  var step = frameCount % 5; // change the % to change the mirror effect.
    translate(50, 50);
    applyMatrix(.75 / step, 0, 0, 1 / step, 0, 0);

////////////////////////////////////////////////////////////////////////

  fill(objcolor.r, objcolor.g, objcolor.b, 50);
  ellipse(x, y, objsize.x, objsize.x);
endShape()


//Snake 2 ////////////////////////////////////////
    objcolor.r = random(0, 255);
    objcolor.g = random(0, 100);
    objcolor.b = random(0, 100);

beginShape()
  var x = map(noise(xoffset-10), 0, 1, 0, width);
  var y = map(noise(yoffset-10), 0, 1, 0, height);

  fill(objcolor.r, objcolor.g, objcolor.b, 50);
  ellipse(x, y, objsize.x*.75, objsize.x*.75);
endShape()

//Snake 3 ////////////////////////////////////////
    objcolor.r = random(0, 100);
    objcolor.g = random(0, 100);
    objcolor.b = random(0, 255);

beginShape()
  var x = map(noise(xoffset-40), 0, 1, 0, width);
  var y = map(noise(yoffset-40), 0, 1, 0, height);

  fill(objcolor.r, objcolor.g, objcolor.b, 50);
  ellipse(x, y, objsize.x*.45, objsize.x*.45);
endShape()

//Snake 4 ////////////////////////////////////////
    objcolor.r = random(0, 100);
    objcolor.g = random(0, 255);
    objcolor.b = random(0, 100);

beginShape()
  var x = map(noise(xoffset+10), 0, 1, 0, width);
  var y = map(noise(yoffset+10), 0, 1, 0, height);

  fill(objcolor.r, objcolor.g, objcolor.b, 50);
  ellipse(x, y, objsize.x*.75, objsize.x*.45);
endShape()

//Snake 5 ////////////////////////////////////////
    objcolor.r = random(0, 255);
    objcolor.g = random(0, 255);
    objcolor.b = random(0, 40);

beginShape()
  var x = map(noise(xoffset+40), 0, 1, 0, width);
  var y = map(noise(yoffset+40), 0, 1, 0, height);

  fill(objcolor.r, objcolor.g, objcolor.b, 80);
  ellipse(x, y, objsize.x, objsize.x);

endShape()

//Snake 6 ////////////////////////////////////////
    objcolor.r = random(0, 85);
    objcolor.g = random(0, 85);
    objcolor.b = random(0, 85);

beginShape()
  var x = map(noise(xoffset+60), 0, 1, 0, width);
  var y = map(noise(yoffset+60), 0, 1, 0, height);

  fill(objcolor.r, objcolor.g, objcolor.b, 50);
  ellipse(x, y, objsize.x, objsize.x);
}
