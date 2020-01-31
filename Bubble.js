var x;
var y;
var radius;

function setup() {
  createCanvas(600, 400);
  x = random(width);
  y = random(height);
  radius = 50;
}


function draw() {
  background(255);



  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }

    fill(100);
  } else {
    fill(90);
  }
  noStroke();
  ellipseMode(CENTER);
   fill(10);
  ellipse(80, 80, 40 * 2); 
  ellipse(x, y, 40);
  x += random(-10, 10);
  y += random(-10, 10);


  }
