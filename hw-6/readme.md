Allen Harguess, 50

[Live "Algorithmic " Sketch](https://allenharguess701.github.io/120-work/hw-8/)

I used a single loop for the mouse driven bubbles with an array; (diams), of 7
different diameter ellipses all placed within each other at the mouseX and MouseY intersection. This bubble trail consist of random blue colors which are all set
to 90% opacity.

For the random bubbles I used a similar array; (diamstwo), to create a similar
pattern, just smaller. Also a added in a diameter modifier; (targets.diacoef) to
allow for a random diameter. axis.x and axis.y control the random location of
bubble

The bubbles themselves are created using a for loop building each bubble from the
individual diameters from the two arrays.

The random bubbles are in a nested loop creating a random number of bubbles per
set. This gives a more rapid and spontaneous look to the bubbles.

I used the mousePressed and mouseDragged functions to allow for additional user
control. The Opacity Gauge is controlled through the mouseDragged function, it
allows for the up/down motion of a simple line.
       
