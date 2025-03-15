let ball1, ball2;

function setup() {
  createCanvas(400, 400);
  ball1 = { x: 0, y: height / 3, r: 20, color: color(255, 255, 255), speed: 3 };
  ball2 = { x: width, y: (2 * height) / 3, r: 20, color: color(0, 0, 0), speed: -3 };
}

function draw() {
  background("seagreen");

  fill(ball1.color);
  noStroke();
  ellipse(ball1.x, ball1.y, ball1.r * 2);
  
  fill(ball2.color);
  noStroke();
  ellipse(ball2.x, ball2.y, ball2.r * 2);
  
  ball1.x += ball1.speed;
  ball2.x += ball2.speed;

  if (ball1.x > width + ball1.r) ball1.x = -ball1.r;
  if (ball2.x < -ball2.r) ball2.x = width + ball2.r;
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
