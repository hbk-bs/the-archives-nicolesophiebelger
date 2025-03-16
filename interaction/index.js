const shapes = ["circle", "square", "triangle"];

const cells = document.querySelectorAll("[data-cell]");
cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function getRandomShape() {
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function handleClick(event) {
  const cell = event.target;
  const shapeType = getRandomShape();

  const shape = document.createElement("div");
  shape.classList.add("shape", shapeType);

  cell.appendChild(shape);
}
