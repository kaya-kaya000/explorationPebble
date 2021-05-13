class Star {
  var x;
  var y;
  var z;

  Star() {
   x = random(-width, width);
   y = random(-height, height);
   z = random(width);
  }

  update(){
    z = z - speed;
    if (z < 1) {
      z = width;
      x = random(-width, width);
      y = random(-height, height);
    }
  }

  show() {
   fill(random(150), random(150),random(155));
   noStroke();

   var sx = map(x/ z, 0, 1, 0, width);
   var sy = map(y/ z, 0, 1, 0, height);

   var r = map(z,0, width, 25, 0);
   ellipse(sx,sy,4,r);
  }
}



Star[] stars = new Star[400];
var speed;


function setup() {
 createCanvas(400,400);
 for (int i = 0; i < stars.length; i ++) {
   stars[i] = new Star();
 }


}

function draw() {
   background(0);



  speed = map(mouseX, 0, width, 0, 10);
  translate(width/2, height/2);
  for (var i = 0; i < stars.length; i ++) {
   stars[i].update();
   stars[i].show();
  }


}
