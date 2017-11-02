//////////////////////
//  Allen Harguess  //
//////////////////////

//////////////////////////////////////////////////////////////////
//Ball 1 Variables
var spd = 2;
var b1x = 0;
var b1xspeed = spd;
var b1y = 0;
var b1yspeed = spd;
var b1size = {x: 0}
var b1col = {r: 0, g: 0, b: 0}

//Ball 2 Variables
var spd = 4;
var b2x = 0;
var b2xspeed = spd;
var b2y = 0;
var b2yspeed = spd;
var b2size = {x: 0}
var b2col = {r: 0, g: 0, b: 0}

//Ball 3 Variables
var spd = 6;
var b3x = 0;
var b3xspeed = spd;
var b3y = 0;
var b3yspeed = spd;
var b3size = {x: 0}
var b3col = {r: 0, g: 0, b: 0}

//Ball 4 Variables
var spd = 3;
var b4x = 0;
var b4xspeed = spd;
var b4y = 0;
var b4yspeed = spd;
var b4size = {x: 0}
var b4col = {r: 0, g: 0, b: 0}

//Ball 5 Variables
var spd = 4;
var b5x = 0;
var b5xspeed = spd;
var b5y = 0;
var b5yspeed = spd;
var b5size = {x: 0}
var b5col = {r: 0, g: 0, b: 0}

//Ball 6 Variables
var spd = 7;
var b6x = 0;
var b6xspeed = spd;
var b6y = 0;
var b6yspeed = spd;
var b6size = {x: 0}
var b6col = {r: 0, g: 0, b: 0}

//Ball 7 Variables
var spd = 8;
var b7x = 0;
var b7xspeed = spd;
var b7y = 0;
var b7yspeed = spd;
var b7size = {x: 0}
var b7col = {r: 0, g: 0, b: 0}

//Ball 4 Variables
var spd = 3;
var b8x = 0;
var b8xspeed = spd;
var b8y = 0;
var b8yspeed = spd;
var b8size = {x: 0}
var b8col = {r: 0, g: 0, b: 0}

//////////////////////////////////////////////////////////////////
//Mouse X Coordinate Variable Declarations
var xpos;
var xtarget;
var xvel;

//Mouse y Coordinate Variable Declarations
var ypos;
var ytarget;
var yvel;

//Other Variables
var r;
var drag;
var strength;

//////////////////////////////////////////////////////////////////
function setup() {
createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0,0,0);

  //Ball 1 Variables
    b1col.r = random(0, 255);
    b1col.g = random(0, 255);
    b1col.b = random(0, 255);
    b1size.x = random(40, 400);
    b1x = random(1, width);

  //Ball 2 Variables
    b2col.r = random(0, 255);
    b2col.g = random(0, 255);
    b2col.b = random(0, 255);
    b2size.x = random(40, 400);
    b2x = random(1, width);

  //Ball 3 Variables
    b3col.r = random(0, 255);
    b3col.g = random(0, 255);
    b3col.b = random(0, 255);
    b3size.x = random(40, 400);
    b3x = random(1, width);

  //Ball 4 Variables
    b4col.r = random(0, 255);
    b4col.g = random(0, 255);
    b4col.b = random(0, 255);
    b4size.x = random(40, 400);
    b4x = random(1, width);

  //Ball 5 Variables
    b5col.r = random(0, 255);
    b5col.g = random(0, 255);
    b5col.b = random(0, 255);
    b5size.x = random(40, 400);
    b5x = random(1, width);

  //Ball 6 Variables
    b6col.r = random(0, 255);
    b6col.g = random(0, 255);
    b6col.b = random(0, 255);
    b6size.x = random(40, 400);
    b6x = random(1, width);

  //Ball 3 Variables
    b7col.r = random(0, 255);
    b7col.g = random(0, 255);
    b7col.b = random(0, 255);
    b7size.x = random(40, 400);
    b3x = random(1, width);

  //Ball 8 Variables
    b8col.r = random(0, 255);
    b8col.g = random(0, 255);
    b8col.b = random(0, 255);
    b8size.x = random(40, 400);
    b8x = random(1, width);

  //Variables at Start for mouse trailing ball
    r = 60;
    xpos = 0;
    xtarget = 0;
    xvel =0;
    ypos = 0;
    ytarget = 0;
    yvel =0;
    drag = 0.75;
    strength = 0.1;
}

function draw() {
   background('rgba(0,0,0, 0.6)');
   blendMode(LIGHTEST);
   //Draw and Animate Ball 1
   push();
     fill(b1col.r, b1col.g, b1col.b, 100);
     ellipse(b1x, b1y, b1size.x, b1size.x);

     if (b1x > width) {
       b1xspeed = -2;
     }
     if (b1x < 1) {
       b1xspeed = 2;
     }
     if (b1y > height) {
       b1yspeed = -2;
     }
     if (b1y < 1) {
       b1yspeed = 2;
     }

    b1x = b1x + b1xspeed;
    b1y = b1y + b1yspeed;
   pop();

   //Draw and Animate Ball 2
   push();
     fill(b2col.r, b2col.g, b2col.b, 100);
     ellipse(b2x, b2y, b2size.x, b2size.x);

     if (b2x > width) {
       b2xspeed = -4;
     }
     if (b2x < 1) {
       b2xspeed = 4;
     }
     if (b2y > height) {
       b2yspeed = -4;
     }
     if (b2y < 1) {
       b2yspeed = 4;
     }

    b2x = b2x + b2xspeed;
    b2y = b2y + b2yspeed;
   pop();

   //Draw and Animate Ball 3
   push();
     fill(b3col.r, b3col.g, b3col.b, 100);
     ellipse(b3x, b3y, b3size.x, b3size.x);

     if (b3x > width) {
       b3xspeed = -6;
     }
     if (b3x < 1) {
       b3xspeed = 6;
     }
     if (b3y > height) {
       b3yspeed = -6;
     }
     if (b3y < 1) {
       b3yspeed = 6;
     }

    b3x = b3x + b3xspeed;
    b3y = b3y + b3yspeed;
   pop();

   //Draw and Animate Ball 4
   push();
     fill(b4col.r, b4col.g, b4col.b, 100);
     ellipse(b4x, b4y, b4size.x, b4size.x);

     if (b4x > width) {
       b4xspeed = -3;
     }
     if (b4x < 1) {
       b4xspeed = 3;
     }
     if (b4y > height) {
       b4yspeed = -3;
     }
     if (b4y < 1) {
       b4yspeed = 3;
     }

    b4x = b4x + b4xspeed;
    b4y = b4y + b4yspeed;
   pop();

   //Draw and Animate Ball 5
   push();
     fill(b5col.r, b5col.g, b5col.b, 100);
     ellipse(b5x, b5y, b5size.x, b5size.x);

     if (b5x > width) {
       b5xspeed = -4;
     }
     if (b5x < 1) {
       b5xspeed = 4;
     }
     if (b5y > height) {
       b5yspeed = -4;
     }
     if (b5y < 1) {
       b5yspeed = 4;
     }

    b5x = b5x + b5xspeed;
    b5y = b5y + b5yspeed;
   pop();

   //Draw and Animate Ball 6
   push();
     fill(b6col.r, b6col.g, b6col.b, 100);
     ellipse(b6x, b6y, b6size.x, b6size.x);

     if (b6x > width) {
       b6xspeed = -7;
     }
     if (b6x < 1) {
       b6xspeed = 7;
     }
     if (b6y > height) {
       b6yspeed = -7;
     }
     if (b6y < 1) {
       b6yspeed = 7;
     }

    b6x = b6x + b6xspeed;
    b6y = b6y + b6yspeed;
   pop();

   //Draw and Animate Ball 3
   push();
     fill(b7col.r, b7col.g, b7col.b, 100);
     ellipse(b7x, b7y, b7size.x, b7size.x);

     if (b7x > width) {
       b7xspeed = -8;
     }
     if (b7x < 1) {
       b7xspeed = 8;
     }
     if (b7y > height) {
       b7yspeed = -8;
     }
     if (b7y < 1) {
       b7yspeed = 8;
     }

    b7x = b7x + b7xspeed;
    b7y = b7y + b7yspeed;
   pop();

   //Draw and Animate Ball 8
   push();
     fill(b8col.r, b8col.g, b8col.b, 100);
     ellipse(b8x, b8y, b8size.x, b8size.x);

     if (b8x > width) {
       b8xspeed = -3;
     }
     if (b8x < 1) {
       b8xspeed = 3;
     }
     if (b8y > height) {
       b8yspeed = -3;
     }
     if (b8y < 1) {
       b8yspeed = 3;
     }

    b8x = b8x + b8xspeed;
    b8y = b8y + b8yspeed;
   pop();

//////////////////////////////////////////////////////////////////
//Mouse X Coordinate Variables
  xtarget = mouseX;
  var xforce = xtarget - xpos;

  xforce *= strength;
  xvel *= drag;

  xvel += xforce;
  xpos +=xvel;

//Mouse y Coordinate Variables
  ytarget = mouseY;
  var yforce = ytarget - ypos;

  yforce *= strength;
  yvel *= drag;

  yvel += yforce;
  ypos +=yvel;

  //Draw The Mouse Trailing Ball
  fill(214, 71, 150);
  ellipse(xpos, ypos, r);

//Challenge Box
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(24)
text("Try To Avaoid The Bouncing Balls\nBy Allen Hargues\n Wiggle, Wiggle, Wiggle!", round(windowWidth/2), round(windowHeight-150));

}
