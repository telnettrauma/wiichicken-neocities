// Flood Web Ring and Flood Toy!

// Super Object!
let flood = {};

// Settings
flood.serverURL = "https://brain.melonking.net"; // Server - Do not Edit.
//flood.serverURL = "http://localhost:3000"; // For testing - Please ignore!
flood.ringPage = "https://melonking.net/free/software/flood.html"; // Do not edit!
flood.ringTarget = "_blank";
flood.texture = "https://melonking.net/images/flood-water.png";
flood.textureWidth = 314;
flood.textureHeight = 98;
flood.drainSound = "https://melonking.net/audio/ui/flush.mp3";
flood.drainTooSoonSound = "https://melonking.net/audio/ui/clunk.mp3";
flood.updateSpeed = 5000; // Please do not lower!
flood.renderSpeed = 70;
flood.maxLevel = 100; // Server - Do not Edit.
flood.bilgeDelay = 10000; // Server - Do not Edit.
flood.changeStep = 0.1;
flood.includeInfo = false; // Returns a list of all sites who are flooded.
flood.disableInFrames = true; // Stop the script running in frames
flood.disableMessages = false; // Hides the info message.

flood.msg = {};
flood.msg.info = "&#x1FAA3;";
flood.msg.rising = "alarma: its draiing";
flood.msg.falling = "yeah baby! keep injecting me with that water!";
flood.msg.toosoon = "nice try, but try gooder";
flood.msg.one = "thats a lot of water!";
flood.msg.two = "i was thirsty";
flood.msg.three = "ok wtf my water is draiing";
flood.msg.four = "wheres my water free download";
flood.msg.five = "its giving flint michigan";
flood.msg.six = "can't even have water in detroit";

// Active vars, do not edit! i wont!
flood.updateLoop = undefined;
flood.renderLoop = undefined;
flood.lastBilge = 0;
flood.logicLevel = 0;
flood.level = 0;
flood.info = undefined;

// HTML references!
flood.html = {};
flood.html.flood = undefined;
flood.html.menu = undefined;
flood.html.message = undefined;

flood.audio = {};
flood.audio.flush = undefined;
flood.audio.clunk = undefined;

// Setup event!
window.addEventListener("DOMContentLoaded", async () => {
		if (flood.disableInFrames && window !== window.parent) {
				updateFloodLevel(false, false);
				flood.updateLoop = setInterval(updateFloodLevel, flood.updateSpeed);
				console.log("Flood render disabled becouse of the frame!");
				return;
		}
		var innerFloodBox = document.getElementById('flood-inner');

		innerFloodBox.insertAdjacentHTML(
				"beforeend",
				`
	<svg id="flood" viewBox="0 24 150 450" preserveAspectRatio="none" shape-rendering="auto">
		<defs>
			<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v450h-352z" />
			<pattern id="water" patternUnits="userSpaceOnUse" width="${flood.textureWidth}" height="${flood.textureHeight}">
				<image xlink:href="${flood.texture}" x="0" y="0" width="${flood.textureWidth}" height="${flood.textureHeight}"></image>
			</pattern>
		</defs>
		<g class="wave">
			<use xlink:href="#gentle-wave" x="48" y="0" />
			<use xlink:href="#gentle-wave" x="48" y="3" />
			<use xlink:href="#gentle-wave" x="48" y="5" />
		</g>
	</svg>

	<div id="flood-menu">
		<span id="flood-message"></span>
	</div>`
		);

		flood.html.flood = document.getElementById("flood");
		flood.html.menu = document.getElementById("flood-menu");
		flood.html.message = document.getElementById("flood-message");

		flood.audio.flush = new Audio(flood.drainSound);
		flood.audio.clunk = new Audio(flood.drainTooSoonSound);

		if (flood.disableMessages) {
				flood.html.message.style.display = "none";
		}

		await updateFloodLevel(false, true);
		flood.updateLoop = setInterval(updateFloodLevel, flood.updateSpeed);
		flood.renderLoop = setInterval(renderWater, flood.renderSpeed);
		// Make the flood visible now that its working
		flood.html.flood.style.display = "block";
		flood.html.menu.style.display = "block";

		document.getElementById('flood-fill-water').setAttribute('onclick', 'doBilge();');
});

// Issue a bilge request!
async function doBilge() {
		if (Date.now() - flood.lastBilge < flood.bilgeDelay) {
				// Its too soon to bilge again!
				flood.audio.clunk.currentTime = 0;
				flood.html.message.innerHTML = flood.msg.toosoon;
				return;
		}
		flood.lastBilge = Date.now();
		updateFloodLevel(true, false);
		flood.audio.flush.currentTime = 0;
		document.getElementById('flood-fill-water').classList = 'bring flood-unavailable';
		await sleep(10000);
		document.getElementById('flood-fill-water').classList.remove('flood-unavailable');
}

// Communicate with the flood server!
async function updateFloodLevel(doBilge = false, doQuickUpdate = false) {
		let path = window.location.pathname;
		fetch(flood.serverURL + "/flood?bilge=" + doBilge + "&info=" + flood.includeInfo + "&path=" + path)
				.then(function (response) {
						return response.json();
				})
				.then(function (jsonResponse) {
						flood.levelCache = flood.level;
						flood.level = jsonResponse.level;
						flood.info = jsonResponse.info;
						if (doQuickUpdate) {
								flood.html.flood.style.top = flood.level + "%";
						}
				});
}

// Update the visuals
function renderWater() {
		if (flood.logicLevel == flood.level) {
				return; // Save the processing time, nothing to do!
		}
		let renderLevel = Number(flood.html.flood.style.top.replace("%", "")); // 0 is top
		flood.logicLevel = renderLevel + 10; // 100 is top e.g. equal to servers 100% full
		if (flood.level > flood.logicLevel) {
				flood.html.flood.style.top = renderLevel + flood.changeStep + "%";
				flood.html.message.innerHTML = flood.msg.rising;
		} else if (flood.level < flood.logicLevel) {
				flood.html.flood.style.top = renderLevel - flood.changeStep + "%";
				flood.html.message.innerHTML = flood.msg.falling;
		} else {
				if (flood.level > 90) {
						flood.html.message.innerHTML = flood.msg.six;
				} else if (flood.level > 70) {
						flood.html.message.innerHTML = flood.msg.five;
				} else if (flood.level > 50) {
						flood.html.message.innerHTML = flood.msg.four;
				} else if (flood.level > 30) {
						flood.html.message.innerHTML = flood.msg.three;
				} else if (flood.level > 10) {
						flood.html.message.innerHTML = flood.msg.two;
				} else {
						flood.html.message.innerHTML = flood.msg.one;
				}
		}
}