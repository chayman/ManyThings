var numberOfBalls = 150;
var balls = [];
var barWidth = 20;
var lastBar = -1;
function setup() {
  createCanvas(1200, 800);


    for (var i = 0; i < numberOfBalls; i++) {
    balls[i] = new Ball(0,0, random(20,40), color(random(HSB),random(HSB),random(HSB)),random(8),random(10),random(10));
  }


}

function draw() {
  background(0);
    colorMode(HSB, height, height, height);  
  noStroke();


  for (var i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
    balls[i].detectEdges(balls);
    balls[i].more(balls);

  }
    var whichBar = mouseX / barWidth;
if (whichBar !== lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }

}


function Ball(x, y, d, c, speed,xdirection,ydirection) {
  this.x = x;
  this.y = y;
  this.d = d;
  this.c = c;
  this.speed = speed;
  this.xdirection=xdirection;
  this.ydirection=ydirection;

  this.display = function() {
    fill(this.c);
    ellipse(this.x, this.y, this.d, this.d);
  }
  this.move = function() {
    this.x = this.x+this.ydirection;
    this.y=this.y +this.speed ;
  }
  this.detectEdges=function(){
    if(this.x>width-this.d || this.x<0-this.d){
      this.speed=this.speed*-1;
    }
        if(this.y>height-this.d || this.y<0){
      this.speed=this.speed*-1;
  }

}
this.more =function(){
 if (mouseIsPressed) {
  new Ball(mouseX, mouseY);
 balls.push();

}

}


}


//  for(var i=0; i<array.length; i++){
//    text("array index is:["+i+"]is: " +array[i],100,(i*65)+100);



//function keyPressed(){
//  array.splice(array.length-1,1);