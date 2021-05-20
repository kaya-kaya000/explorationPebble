var catcher;
var drops;
var numDrops;

var timer;
var timeInterval;
var activeDrops;
var score;
var s;

function setup(){
  createCanvas(600,400);
  catcher = new Catcher(16);
  numDrops = 100;
  drops = new Array(numDrops);
  for (var i =0; i < numDrops; i++){
    drops[i] = new Drop();
  }
activeDrops = 0;
timeInterval = 500;

timer = new Timer(timeInterval);
timer.start();

score = 0;
s = "";

}

function draw(){
  clearBackground();

  noCursor();
  catcher.update();
  catcher.display();

  if (timer.complete() == true){
    if (activeDrops < numDrops){
      activeDrops++;
    }
    time.start();
  }
for (var i = 0; i <activeDrops; i++){
  drops[i].update();
  drops[i].display();
  if (intersect(catcher,drops[i]) == ture){
    drops[i].caught();
    score++;
  }
}
textSize(12);
textAlign(LEFT);
fill(255,0,0);
s = "Score: " + score;
text(s,10,20);

}

function clearBackground() {
  background(255);
}

function intersect(a,b){
  var distance = dist(a,x,a.y,b.x,b.y);
  if (distance < a.r +b.r){
    return true;
  } else {
    return false;
  }
}

function Catcher(catcherRadius) {
  this.r = catcherRadius;
  this.x = width / 2;
  this.y = height / 2;

  this.update = function(){
    this.x = mouseX;
    this.y = mouseY;
  }
this. display = function(){
  stroke(0);
  fill(175);
  ellipse(this.x, this.y, this.r *2, this.r *2);
  }

}

function Drop(){
  this.r = 8;
  this.x = random(width);
  this.y = -this.r *4;
  this.speedY = random(1,5);
  this.c = color(50,100,random(100,255));

  this.update = function(){
    this.y += this.speedY;
    if (this.y > height + this.r * 4) {
      this.y = -this.r * 4;
    }
  }
  this.display = function(){
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r *2 );
  }
this.caught = function(){
  this.y = - this.r *4;
  this.speedY = 0;
}

this.reset = function(){
  this.x = random(width);
  this.y = -this.r *4;
  this.speedY = random(1,5);
}

}


function Timer(timeInterval){
  this.startTime;
  this.interval = timeInterval;

  this. start = function(){
    this.starTime = millis();
  }

this.complete = function(){
  var elasedTime = millis() - this.starTime;
  if (elapsedTime > this. interval){
    return true;
  } else {
    return false;
  }

}

}
