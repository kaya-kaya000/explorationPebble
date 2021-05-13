var spacing = 50;
let green;

function setup() {
 createCanvas(500,700);
 noLoop();
 green=loadImage("1.png");


}

function draw(){
 background(0);

 noFill();



 for (var y = 0; y <= height; y += spacing){
   for (var x = 0; x <= width; x += spacing){
     strokeWeight( random(1, 4));
     stroke(random(200), random(100), random(100));

     if( y % (spacing*2) == 0 ){
       rect(x,y, mouseX, mouseY);
     }else{
     rect(x + spacing/4, y, mouseX, mouseY);
     }

   }
 }

 image(green, mouseX, mouseY, 100,100);

}

function mouseMoved(){
 redraw();

}
