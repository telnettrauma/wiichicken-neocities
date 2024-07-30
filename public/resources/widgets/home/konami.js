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