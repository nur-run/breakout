let circleX = 50;
let circleY = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 192, 203);
  circle(circleY, circleY, 100);
  circleX = circleX + 2;
  circleY = circleY + 2;
}