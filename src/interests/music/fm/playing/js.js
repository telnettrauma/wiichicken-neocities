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
			if (!(previousCover === artwork)) {
				// changes the background image when on blur mode
				if (bgMode === 1) {
					var fakeBlur = document.getElementById('moneyOnMind');
					fakeBlur.style.backgroundImage = `url(${artwork})`;
					document.getElementById('fartOnMind').style.backgroundImage = `url(${artwork})`;
				}
				// only updates the cover art if it is visible
				if (coverArtVisible === 1) {
					var artworkImg = document.getElementById("artwork");
					artworkImg.setAttribute("src", artwork);
				}
				previousCover = artwork;
			}

			var trackInfo = document.getElementById("track");
			trackInfo.innerHTML = `<span id="song">${song}<br></span><span id="artist">${artist}<br></span><span id="album">${album}</span>`;

			if (typeof data.recenttracks.track[0]["@attr"] !== "undefined"){
				var listenInfo = document.getElementById("listen");
				listenInfo.innerHTML = 'Listening to:';
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
function detectSize() {
	if (window.innerHeight >= window.innerWidth) {
		mainElement.classList.add('portrait');
		setLayout(5);
	} else {
		mainElement.classList.add('landscape');
		setLayout(4);
	}
}
function getMainLayout() {
	let yourModeIs;
	// gets horizontal mode
	if (mainElement.classList.contains('left-side')) {yourModeIs = 'l';}
	else if (mainElement.classList.contains('portrait')) {yourModeIs = 'c';}
	else {yourModeIs = 'r';}
	// gets vertical mode
	if (mainElement.classList.contains('top-pos')) {yourModeIs = 't' + yourModeIs;}
	else if (mainElement.classList.contains('middle-pos')) {yourModeIs = 'm' + yourModeIs;}
	else {yourModeIs = 'b' + yourModeIs;}
	return yourModeIs;
}
function setLayout(layoutNumber, eraseButtons) {
	// if eraseButtons = 1, removes the pressed effect from buttons
	if (eraseButtons === 1) {document.getElementById(`layout-button-${getMainLayout()}`).classList.remove('enabled');}
	// sets the main layout (landscape or portrait)
	switch (layoutNumber) {
		// center layout (portrait)
		case 2:
		case 5:
		case 8:
			if (mainElement.classList.contains('landscape')) {mainElement.classList.replace('landscape', 'portrait');}
			break;
		// side layout (landscape)
		default:
			if (mainElement.classList.contains('portrait')) {mainElement.classList.replace('portrait', 'landscape');}
	}
	// figures out what horizontal side the elements will be on
	if ((layoutNumber % 3) === 0) {
		// if the layout number can be divided by 3, add right-side
		main.classList.remove('left-side');
		main.classList.add('right-side');
	} else if (layoutNumber === 1 || layoutNumber === 4 || layoutNumber === 7) {
		// if the layout number is 1, 4, or 7; set layout to left-side
		main.classList.remove('right-side');
		main.classList.add('left-side');
	} else {
		main.classList.remove('right-side');
		main.classList.remove('left-side');
	}
	// figures out where vertically the elements will be
	if (layoutNumber >= 1 && layoutNumber <= 3) {
		// top
		main.classList.add('top-pos');
		main.classList.remove('middle-pos');
		main.classList.remove('bottom-pos');
	} else if (layoutNumber >= 4 && layoutNumber <= 6) {
		// middle
		main.classList.remove('top-pos');
		main.classList.add('middle-pos');
		main.classList.remove('bottom-pos');
	} else {
		// bottom
		main.classList.remove('top-pos');
		main.classList.remove('middle-pos');
		main.classList.add('bottom-pos');
	}
	// makes the button for whatever layout was selected active
	document.getElementById(`layout-button-${getMainLayout()}`).classList.add('enabled');
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
	document.getElementById('show-username').textContent = user;
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
let coverArtVisible = 1;
function toggleCoverArt() {
	var coverArtButton = document.getElementById('toggle-cover-art');
	if (coverArtButton.classList.contains('enabled')) {
		coverArtButton.classList.remove('enabled');
		document.getElementById('artwork').style.display = 'none';
		coverArtVisible = 0;
	} else {
		coverArtButton.classList.add('enabled');
		document.getElementById('artwork').style.display = 'block';
		coverArtVisible = 1;
	}
}

// toggle metadata (note that the conditions are inverted)
// relm - root element
// md - class to toggle
// elm - element to toggle state
function toggleSongMetadata(relm, md, elm) {
	var info = document.getElementById(relm);
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
// gets the current url
let params = new URLSearchParams(window.location.search);
function saveToURL() {
	params.set('urlmode', 1);
	function detectActive(elemental, classHas) {
		if (document.getElementById(elemental).classList.contains(classHas))
			{return 1;} else {return 0;}
	}
	// changes the value of the layout setting based on the layout
	// dictionary of layout values
	const layoutDictionary = {
		"tl": 1, "tc": 2, "tr": 3, "ml": 4, "mc": 5, "mr": 6, "bl": 7, "bc": 8, "br": 9
	}
	params.set('layout', layoutDictionary[getMainLayout()]);
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
	// track, artist, album, listening
	params.set('disp', `${detectActive('disp-song', 'selected')}${detectActive('disp-artist', 'selected')}${detectActive('disp-album', 'selected')}${detectActive('disp-listening', 'selected')}`);
	// applies the new settings to the page
	window.location.search = params;
}

// if the urlmode=1, load the rest
function loadFromParams() {
	if (params.get('urlmode') === '1') {
		// index the parameters
		let indexParams = {};
		for ([key, value] of params.entries()) {indexParams[key] = value;}
		user = indexParams.name;
		// changes the layout if it needs to be changed
		setLayout(Number(indexParams.layout), 1);
		// changes the background mode
		var newBackground = indexParams.bg;
		if (newBackground === '1') {
			enableImageBackground();
			// changes the blur
			blurSlider.value = Number(indexParams.blur);
			document.documentElement.style.setProperty("--bg-blur", `${blurSlider.value}vmax`);
		} else if (newBackground === '2') {
			enableWhiteBackground();
		} else if (newBackground === '3') {
			enableBlackBackground();
		} else if (newBackground === '4') {
			// sets the colors for a custom background
			document.querySelector("#bg-color").value = indexParams.bgcolor;
			document.documentElement.style.setProperty("--bg", indexParams.bgcolor);
			document.querySelector("#fg-color").value = indexParams.fgcolor;
			document.documentElement.style.setProperty("--fg", indexParams.fgcolor);
			enableCustomBackground();
		}
		// if cover art is set to 0, don't display it
		if (indexParams.cart === '0') {toggleCoverArt();}
		// changes how round rounded corners are
		cornerSlider.value = Number(indexParams.corners);
		document.documentElement.style.setProperty("--corners", `${Number(indexParams.corners)}%`);
		// toggles displaying certain elements
		var displayThings = indexParams.disp;
		// song
		if (displayThings[0] === '0') {toggleSongMetadata('track', 'hide-song', 'disp-song');}
		if (displayThings[1] === '0') {toggleSongMetadata('track', 'hide-artist', 'disp-artist');}
		if (displayThings[2] === '1') {toggleSongMetadata('track', 'hide-album', 'disp-album');}
		if (displayThings[3] === '0') {toggleSongMetadata('listen', 'hide-listen', 'disp-listening');}
	}
	getNowPlaying();
}
loadFromParams();