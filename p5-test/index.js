function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

class Particle {
	position;
	target;
	speed = 5;
	constructor(pos, target) {
		this.position = pos;
		this.target = target;
	}
	display() {
		circle(this.position.x, this.position.y, 200);
	}
	update(target) {
		// set the target from the passed in new vector. Currently points at the mouse
		this.target = target;
		// p5.Vector.sub() subtracts two vectors (target - position)
		// This gives us a vector pointing from current position to target
		let direction = p5.Vector.sub(
			this.target,
			this.position
		);

		// normalize() sets the length of vector to 1
		// This keeps direction but removes magnitude
		direction.normalize();

		// mult(speed) multiplies the normalized vector by speed
		// This gives us consistent movement speed regardless of distance
		direction.mult(this.speed);

		// add() updates position by adding direction vector
		// position = position + (direction * speed)
		// This moves our particle one "step" towards target
		this.position.add(direction);

		// Optional: Check distance to target
		// let distance = this.position.dist(this.target);
		// console.log(distance);
	}
}

let p;
let targetPosition;
function setup() {
	createCanvas(500, 500);

	const startPosition = createVector(
		random(width),
		random(height)
	);
	targetPosition = createVector(mouseX, mouseY);
	p = new Particle(startPosition, targetPosition);
	// saveGif("out.gif", 5, { delay: 1 })
}

function draw() {
	background(180, 1);
	p.display();
	p.update(createVector(mouseX, mouseY));
}