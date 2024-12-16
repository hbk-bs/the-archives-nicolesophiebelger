let x = 1; 
let y = 0;  
let xDirection = 8;
let speedX = 1; 
let speedY = 1; 
let canvasWidth = 400;

function setup() {
  createCanvas(canvasWidth, 400);
}

function draw() {
  background("seagreen");
  
  fill(255, 255, 255); 
  noStroke();
  ellipse(x, y, 50, 50); 
  
  
  x += xDirection * speedX; 
  y += speedY; 

  
  if (x >= canvasWidth || x <= 0) {
    xDirection *= -1; 
  }

  if (y > height) {
    y = 0;
    x = random(20, canvasWidth - 20);
  }
}
