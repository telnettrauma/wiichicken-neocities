const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let userInput = [];
document.addEventListener("keydown", (event) => {
  userInput.push(event.key);
  if (userInput.length > konamiCode.length) {
    userInput.shift();
  }
  if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
    window.open("/more/glunk/gba.html", "_blank");
    userInput = [];
  }
});
const canvas = document.getElementById('hefty');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const rectangles = [];
let count = 0;
const maxCount = 50;
const maxSpeed = 1.99;
const minSpeed = 1.01;
const maxRotation = 360;
const minRotation = 0;
const maxRectSize = 50;
const minRectSize = 10;
// Rectangles can be summoned in groups
const maxRectangles = 1;
const minRectangles = 1;
const colors = ['red', 'blue'];
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function createRectangle() {
  const size = random(minRectSize, maxRectSize);
  const speed = random(minSpeed, maxSpeed);
  const rotation = random(minRotation, maxRotation);
  const color = colors[random(0, colors.length - 1)];
  const x = random(0, 1) ? -size - 100 : canvas.width + 100;
  const y = random(0, canvas.height - size);
  const side = x < 0 ? 1 : -1;
  if (rectangles.length < maxCount) {
    rectangles.push({
      x,
      y,
      size,
      speed: side * speed,
      rotation,
      color
    });
    setTimeout(createRectangle, createInterval());
  }
}
function createInterval() {
  return random(minInterval, maxInterval);
}
const minInterval = 200;
const maxInterval = 1000;
setTimeout(createRectangle, createInterval());
function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	count++;
	for (let i = 0; i < rectangles.length; i++) {
		const rect = rectangles[i];
		rect.x += rect.speed;
		if (rect.x > canvas.width + 100 || rect.x < -rect.size - 100) {
			rectangles.splice(i, 1);
			i--;
		}
		ctx.save();
		ctx.translate(rect.x + rect.size / 2, rect.y + rect.size / 2);
		ctx.rotate(rect.rotation * Math.PI / 180);
		ctx.fillStyle = rect.color;
		ctx.fillRect(-rect.size / 2, -rect.size / 2, rect.size, rect.size);
		ctx.restore();
	}
	requestAnimationFrame(update);
}
update();