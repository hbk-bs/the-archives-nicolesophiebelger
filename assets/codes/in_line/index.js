let x = 0;
let direction = 8;
let speed = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("seagreen");
  
  fill(255, 255, 255);
  noStroke();
  ellipse(x, height / 2, 30, 30);
  
    x += direction * speed;
  
  if (x >= width - 15 || x <= 15) {
    direction *= -1;
  }
}