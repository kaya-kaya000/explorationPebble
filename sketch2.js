var spacing = 50;
let blue;

function setup() {
 createCanvas(400,400);
 noLoop();
 blue=loadImage("2.png");
}

function draw(){
 background(0);

 noFill();



 for (var y = 0; y <= height; y += spacing){
   for (var x = 0; x <= width; x += spacing){
     strokeWeight( random(1, 4));
     stroke(random(200), random(100), random(100));

     if( y % (spacing*2) == 0 ){
       ellipse(x,y, mouseX, mouseY);
     }else{
     ellipse(x + spacing/2, y, mouseX, mouseY);
     }

   }
 }

 image(blue, mouseX, mouseY, 100,100);

}

function mouseMoved(){
 redraw();

}
