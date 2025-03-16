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
