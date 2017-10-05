function setup() {
    createCanvas( 1280, 800 );
    background('grey');

noStroke();
//Body segments
push();
stroke('rgb(34, 139, 34)');
strokeWeight(6);
fill( 'rgb(215, 195, 42)' );
rect(230, 150, 100, 170, 90 );
pop();

push();
fill( 'rgb(34, 139, 34)' );
rect(260, 150, 100, 170, 90 );
pop();

push();
stroke('rgb(34, 139, 34)');
strokeWeight(6);
fill( 'rgb(215, 195, 42)' );
rect(320, 140, 100, 170, 90 );
pop();

push();
fill( 'rgb(34, 139, 34)' );
rect(350, 140, 100, 170, 90 );
pop();

push();
stroke('rgb(34, 139, 34)');
strokeWeight(6);
fill( 'rgb(215, 195, 42)' );
rect(380, 150, 100, 170, 90 );
pop();

push();
fill( 'rgb(34, 139, 34)' );
rect(410, 160, 100, 170, 90 );
pop();

push();
stroke('rgb(34, 139, 34)');
strokeWeight(6);
fill( 'rgb(215, 195, 42)' );
rect(440, 170, 100, 170, 90 );
pop();

push();
fill( 'rgb(34, 139, 34)' );
rect(470, 180, 100, 170, 90 );
pop();

push();
stroke('rgb(34, 139, 34)');
strokeWeight(6);
fill( 'rgb(215, 195, 42)' );
rect(500, 170, 90, 150, 90 );
pop();

push();
fill( 'rgb(34, 139, 34)' );
rect(530, 180, 90, 140, 90 );
pop();

push();
stroke('rgb(34, 139, 34)');
strokeWeight(6);
fill( 'rgb(215, 195, 42)' );
rect(570, 190, 90, 130, 90 );
pop();

push();
fill( 'rgb(34, 139, 34)' );
rect(600, 200, 90, 120, 90 );
pop();

push();
stroke('rgb(34, 139, 34)');
strokeWeight(6);
fill( 'rgb(215, 195, 42)' );
rect(630, 210, 90, 100, 90 );
pop();

push();
fill( 'rgb(34, 139, 34)' );
rect(650, 220, 90, 80, 90 );
pop();

push();
stroke('rgb(34, 139, 34)');
strokeWeight(6);
fill( 'rgb(34, 139, 34)' );
rect(680, 233, 60, 60, 90 );
triangle( 710, 234, 712, 293, 840, 230 );
pop();

//tail detail
push();
fill( 'rgba(0, 0, 0, .15)' );
triangle( 710, 238, 712, 289, 840, 228 );
triangle( 718, 244, 715, 284, 820, 233 );
triangle( 724, 247, 722, 270, 810, 236 );
pop();

//Creating the head...

// Left Antenna
push();
fill( 'rgb(215, 195, 42)' );
rect(150, 55, 20, 20, 100 );
rect(140, 45, 20, 20, 100 );
rect(130, 30, 20, 20, 100 );
rect(120, 25, 20, 20, 100 );
rect(110, 30, 20, 20, 100 );
rect(105, 35, 20, 20, 100 );
pop();

// Right Antenna
push();
fill( 'rgb(215, 195, 42)' );
rect(410, 55, 20, 20, 100 );
rect(420, 45, 20, 20, 100 );
rect(410, 35, 20, 20, 100 );
rect(405, 25, 20, 20, 100 );
rect(395, 15, 20, 20, 100 );
rect(390, 25, 20, 20, 100 );
pop();

// head
push();
stroke('rgb(34, 139, 34)');
strokeWeight(3);
fill( 'rgb(215, 195, 42)' );
rect(100, 60, 360, 200, 90 );
pop();

//Eyes
push();
fill( 'rgba(255, 255, 255, .75)' );
stroke('rgb(34, 139, 34)');
strokeWeight(12);
rect(299, 60, 160, 200, 100 );
rect(100, 60, 160, 200, 100 );
pop();

rect(125, 100, 100, 100, 90 );
rect(325, 180, 50, 50, 90 );

// Nose holes
push();
rect(265, 200, 5, 20, 30 );
rect(285, 200, 5, 20, 30 );
pop();

//Mouth
triangle( 210, 260, 250, 250, 250, 300 );
triangle( 300, 250, 350, 260, 300, 300 );

// Left & Right Antenna ends
push();
fill( 'rgba(255, 0, 0, .5)' );
triangle( 110, 43, 120, 43, 90, 100 );
triangle( 395, 35, 405, 37, 390, 100 );
pop();

//Forehead detail
push();
fill( 'rgba(0, 0, 0, .15)' );
triangle( 210, 64, 350, 64, 276, 100 );
triangle( 230, 70, 330, 70, 276, 90 );
triangle( 250, 66, 310, 66, 276, 100 );
pop();

}
