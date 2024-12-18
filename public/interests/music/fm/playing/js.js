var mainElement = document.getElementById('main');
let user = 'wiichicken';
// background modes: 1 - color; 2 - light; 3 - dark
let bgMode = 1;
let previousCover = 'nothing!';
function getNowPlaying() {
	var url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=93016c14b5580e5f2a72cdc9413cfa36&limit=1&format=json`;
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			var artist = data.recenttracks.track[0].artist["#text"];
			var album = data.recenttracks.track[0].album["#text"];
			var song = data.recenttracks.track[0]["name"];
			var artwork = data.recenttracks.track[0].image[3]["#text"];

			// only adds background images if the background is set to image and the cover art isn't the same
			if (bgMode === 1 && !(previousCover === artwork)) {
				var artworkImg = document.getElementById("artwork");
				artworkImg.setAttribute("src", artwork);
				var fakeBlur = document.getElementById('moneyOnMind');
				fakeBlur.style.backgroundImage = `url(${artwork})`;
				document.getElementById('fartOnMind').style.backgroundImage = `url(${artwork})`;
				previousCover = artwork;
			}

			var trackInfo = document.getElementById("track");
			trackInfo.innerHTML = `<span id="song">${song}<br></span><span id="artist">${artist}<br></span><span id="album">${album}</span>`;

			if (typeof data.recenttracks.track[0]["@attr"] !== "undefined"){
				var listenInfo = document.getElementById("listen");
				listenInfo.innerHTML = 'LiSTENiNG TO:';
			} else {
				var listenInfo = document.getElementById("listen");
				listenInfo.innerHTML = 'last <span>listened</span> to:';
				console.log("false");
			}
		} else {console.error("Error fetching data from server.");}
	};
	request.onerror = function() {console.error("Connection error.");};
	request.send();
}
document.addEventListener('DOMContentLoaded', getNowPlaying());
function detectSize() {
	if (window.innerHeight >= window.innerWidth) {
		mainElement.classList.add('portrait');
		document.getElementById('layout-mode').innerHTML = 'Portrait';
	} else {
		mainElement.classList.add('landscape');
		document.getElementById('layout-mode').innerHTML = 'Landscape';
	}
}
function toggleLayout() {
	if (mainElement.classList.contains('portrait')) {
		mainElement.classList.replace('portrait', 'landscape');
		document.getElementById('layout-mode').innerHTML = 'Landscape';
	} else {
		mainElement.classList.replace('landscape', 'portrait');
		document.getElementById('layout-mode').innerHTML = 'Portrait';
	}
}
function setUser() {
	document.getElementById('enter-name').style.display = 'block';
	document.getElementById('controls').style.display = 'none';
	document.getElementById('username').value = user;
}
function confirmUser() {
	user = document.getElementById('username').value;
	document.getElementById('enter-name').style.display = 'none';
	document.getElementById('controls').style.display = 'block';
	document.getElementById('show-username').innerHTML = user;
	getNowPlaying();
}
function setBgButtonStatus(...buttons) {
	const buttonIds = ['cover-b', 'light-b', 'dark-b', 'custom-b'];
	buttonIds.forEach((id, i) => {document.getElementById(id).classList.toggle('selected', buttons[i] === 1);})
}
function enableImageBackground() {
	var main = document.getElementById('main');
	bgMode = 1;
	main.classList.remove('blackBg');
	main.classList.remove('whiteBg');
	main.classList.remove('custom-colors');
	setBgButtonStatus(1, 0, 0, 0);
	document.getElementById('controls').classList.remove('darky');
	iHateChangingTheBackground();
}
function enableWhiteBackground() {
	var main = document.getElementById('main');
	bgMode = 2;
	main.classList.remove('blackBg');
	main.classList.add('whiteBg');
	main.classList.remove('custom-colors');
	setBgButtonStatus(0, 1, 0, 0);
	document.getElementById('controls').classList.add('darky');
	iHateChangingTheBackground();
}
function enableBlackBackground() {
	var main = document.getElementById('main');
	main.classList.remove('whiteBg');
	main.classList.add('blackBg');
	main.classList.remove('custom-colors');
	bgMode = 3;
	setBgButtonStatus(0, 0, 1, 0);
	document.getElementById('controls').classList.remove('darky');
	iHateChangingTheBackground();
}
function enableCustomBackground() {
	var main = document.getElementById('main');
	main.classList.remove('blackBg');
	main.classList.remove('whiteBg');
	main.classList.add('custom-colors');
	bgMode = 4;
	setBgButtonStatus(0, 0, 0, 1);
	document.getElementById('controls').classList.add('darky');
	iHateChangingTheBackground();
}
function iHateChangingTheBackground() {
	if (bgMode > 1) {
		main.classList.add('noBg');
		document.getElementById('blur-row').style.display = 'none';
	} else {
		main.classList.remove('noBg');
		document.getElementById('blur-row').style.display = 'block';
	}
	if (bgMode === 4) {document.getElementById('color-options').style.display = 'flex';} else {document.getElementById('color-options').style.display = 'none';}
}
detectSize();
setInterval(function(){getNowPlaying()}, 15000);

// color picker controls
// code is taken from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color#javascript
window.addEventListener("load", colorPickerStartup, false);
function colorPickerStartup() {
	var bgColorPicker = document.querySelector("#bg-color");
	var fgColorPicker = document.querySelector("#fg-color");
	bgColorPicker.addEventListener("input", updateBg, false);
	fgColorPicker.addEventListener("input", updateFg, false);
}
function updateBg(event) {document.documentElement.style.setProperty("--bg", event.target.value);}
function updateFg(event) {document.documentElement.style.setProperty("--fg", event.target.value);}
var cornerSlider = document.getElementById('round-slider');
cornerSlider.oninput = function() {document.documentElement.style.setProperty("--corners", `${cornerSlider.value}%`);}
var blurSlider = document.getElementById('blur-slider');
blurSlider.oninput = function() {document.documentElement.style.setProperty("--bg-blur", `${blurSlider.value}vmax`);}

// toggle cover art
function toggleCoverArt() {
	var coverArtButton = document.getElementById('toggle-cover-art');
	if (coverArtButton.classList.contains('enabled')) {
		coverArtButton.classList.remove('enabled');
		document.getElementById('artwork').style.display = 'none';
	} else {
		coverArtButton.classList.add('enabled');
		document.getElementById('artwork').style.display = 'block';
	}
}

// toggle metadata (note that the conditions are inverted)
function toggleSongMetadata(md, elm) {
	var info = document.getElementById('track');
	if (info.classList.contains(md)) {
		info.classList.remove(md);
		document.getElementById(elm).classList.add('selected');
	} else {
		info.classList.add(md);
		document.getElementById(elm).classList.remove('selected');
	}
}

// detect a click to toggle controls, unless the click is inside the controls
document.addEventListener('click', (event) => {
	var controls = document.getElementById('controls');
	var enterName = document.getElementById('enter-name');
	if (!controls.contains(event.target) && !enterName.contains(event.target)) {
		if (controls.style.display === 'block') {
			controls.style.display = 'none';
			document.getElementById('click-hint').style.display = 'none';
		} else {controls.style.display = 'block';}
	}
});
// hides the hint telling you to click or tap after 15 seconds
setTimeout(() => {
	var clickHint = document.getElementById('click-hint');
	clickHint.style.opacity = '0';
	setTimeout(() => {clickHint.style.display = 'none';}, 3000);
}, 15000);

// saves the stupid thing to a url
function saveToURL() {
	// gets the current url
	let params = new URLSearchParams(window.location.search);
	params.set('urlmode', 1);
	function detectActive(elemental, classHas) {
		if (document.getElementById(elemental).classList.contains(classHas))
			{return 1;} else {return 0;}
	}
	// changes the value of the layout setting based on the layout
	params.set('layout', detectActive('main', 'landscape'));
	params.set('name', user);
	params.set('bg', bgMode);
	// decides what params should be saved depending on the background settings
	if (bgMode === 1) {params.set('blur', blurSlider.value);}
	else if (bgMode === 4) {
		params.set('bgcolor', document.querySelector("#bg-color").value);
		params.set('fgcolor', document.querySelector("#fg-color").value);
	}
	// should cover art be shown
	params.set('cart', detectActive('toggle-cover-art', 'enabled'));
	// rounded corner size
	params.set('corners', document.getElementById('round-slider').value);
	// elements to display
	params.set('disp', `${detectActive('disp-song', 'selected')}${detectActive('disp-artist', 'selected')}${detectActive('disp-album', 'selected')}`);
	// applies the new settings to the page
	window.location.search = params;
}