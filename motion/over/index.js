let ball;
let blocks = [];
let gravity = 0.3;

function setup() {
  createCanvas(400, 400);

  let blockCount = 3;
  let blockWidth = 100;
  let blockHeight = 60;
  let xOffset = 0;
  let yOffset = height - 100;

  for (let i = 0; i < blockCount; i++) {
    blocks.push({
      x: (xOffset + i * blockWidth) + 50 * i,
      y: yOffset - i * 60,
      w: blockWidth,
      h: blockHeight,
    });
  }

  resetBall();
}

function draw() {
  background("seagreen");

  fill(200);
  for (let block of blocks) {
    rect(block.x, block.y, block.w, block.h);
  }

  fill("white");
  noStroke()
  ellipse(ball.x, ball.y, ball.radius * 2);

  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
  ball.ySpeed += gravity;

  for (let block of blocks) {
    if (
      ball.x + ball.radius > block.x &&
      ball.x - ball.radius < block.x + block.w &&
      ball.y + ball.radius > block.y &&
      ball.y - ball.radius < block.y + block.h &&
      ball.ySpeed > 0
    ) {
      ball.ySpeed = -11;
      ball.y = block.y - ball.radius;
      break;
    }
  }

  if (ball.x - ball.radius > width || ball.x + ball.radius < 0 || ball.y - ball.radius > height) {
    resetBall();
  }
}

function resetBall() {
  ball = {
    x: blocks[0].x + blocks[0].w / 2,
    y: blocks[0].y - 20,
    radius: 25,
    xSpeed: 2,
    ySpeed: 10,
  };
}

