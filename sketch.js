var i = 0;
var randomX;
var randomY;
var r1, r2, r3, r4;
let green;

function setup(){
createCanvas(900,600);
 background(0);
 randomX = random(width);
 randomY = random(height);
 r1 = int(random(-3, 3));
 r2 = int(random(-3, 3));
 r3 = int(random(-3, 3));
 r4 = int(random(-3, 3));
 green=loadImage("1.png");


}

function draw() {


 noFill();
 stroke(random(200), random(100), random(100));
 ellipse(mouseX, mouseY, 100+i*r3, 100+ i*r4);




 i += 1;
 if ( i > 100) {
   i = 0;
   randomX = random(100, width - 100);
   randomY = random(100, height - 100);
   r1 = int (random(-3,3) );
   r2 = int (random(-3,3) );
   r3 = int (random(-5,3) );
   r4 = int (random(-3,5) );
 }


}

function mouseMoved() {

 redraw();

}



function mousePressed() {
  background(0);
}
