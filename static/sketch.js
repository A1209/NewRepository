

var x, y;
var score = 0;
const radius = 80;
var r, g, b;



function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(windowWidth);
  y = random(windowHeight);
  r = (102);
  g = (179);
  b = (255);
}

function draw() {
  background(250,210,79);
  fill(110,247,257);
  rect(0,0,1600,130)
  fill(255,255,255);
  ellipse(597,23,269,28);
  fill(255,255,255);
  ellipse(1068,49,269,28);
  fill(255,255,255);
  ellipse(69,35,269,28);
  fill(247,247,59);
  circle(800,130,200,200);
  fill(250,210,79);
  rect(700,130,290,170);
  fill(68,213,52);
  rect(1000,80,30,60);
  rect(400,90,33,66);
  rect(568,69,40,80);
  rect(280,102,56,102)
  rect(1200,409,90,180);
  rect(35,587,102,204);
  rect(308,370,98,196);
  rect(870,250,48,96);
  rect(120,123,34,68);
  rect(680,267,83,166);
  rect(1200,160,40,80);
  rect(850,500,102,204);


  noStroke();
  fill(102,179,255);
  ellipse(x, y, radius*2, radius*2);
  textSize(40);
  text("Score: " + score, 10, 30);
}

function mousePressed() {

  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    newCircle();
    score++;
  }
}

function newCircle() {
  x = random(windowWidth);
  y = random(windowHeight);
  r = (102);
  g = (179);
  b = (255);
}

setInterval(newCircle, 1000);
