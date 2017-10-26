Allen Harguess, 50

[Live "Algorithmic " Sketch](https://allenharguess701.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing



These lines sets all of the variables used in the program
var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;


This function create the canvas setting its dimensions and sets the background color
function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}


The Draw function creates and loops the animation

function draw() {

These lines add a small amount to the x and y coordinates
of the ball giving the ball movement.
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

 The if statements check for the dimensions of the window
 and reverse the direction of the ball when a dimension is met.
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

 These two lines create and fill the ball with color.
    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

This function checks to see if the mouse button is pressed.
If it is the speed and angle of the ball is changed based on
the map command.

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}




## How did you alter the sketch?



* I added several variables to allow for more dynamics in the animation
* I changed to canvas size to fit the window's width and height.
* I added a size control sub-routine to allow for a random ball size at the start
  of the animation.
* Within the Draw function I set the loop to begin by generating random numbers
  for the R,G, and B color values and then added some text to tell the user what
  he or she can do while the animation is running.
* Within the IF statements I added in a copy of the size control sub-routine to
  allow the ball to change size when it hits a boundary.
* For the actual creation of the ellipse I added a mouseDragged function that I
  used in conjunction with the stroke() statement to allow for the changing of  
  the strokes color by dragging the mouse left or right.The fill color was set
  through the R,G,B randomization reset with each loop.
* Within the mousePressed() function I added a matrix to apply a shear effect to
  balls placed randomly on the canvas with each mouse click.the position of the
  balls I controlled with the spotaxis.x & spotaxis.y variables. Finally I added
  an IF/ELSE statement to allow a direction change for the ball with each mouse
  click
