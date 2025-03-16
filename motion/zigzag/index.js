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

let capturer = new CCapture({ format: 'gif', framerate: 30 });
let started = false;

function startCapture() {
    capturer.start();
    started = true;
}

function captureFrame() {
    if (started) {
        capturer.capture(document.body); // Hier kannst du auch ein Canvas-Element wählen
    }
}

function stopCapture() {
    capturer.stop();
    capturer.save();
}

document.addEventListener("keydown", (e) => {
    if (e.key === "s") startCapture();
    if (e.key === "e") stopCapture();
});

requestAnimationFrame(function loop() {
    captureFrame();
    requestAnimationFrame(loop);
});
