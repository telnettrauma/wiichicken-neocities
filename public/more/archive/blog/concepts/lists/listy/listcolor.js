function hexToRgb(hex) {
	let bigint = parseInt(hex.slice(1), 16);
	let r = (bigint >> 16) & 255;
	let g = (bigint >> 8) & 255;
	let b = bigint & 255;
	return [r, g, b];
}
function rgbToHex(r, g, b) {return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);}
function createGradient(startBgColor, endBgColor, startTextColor, endTextColor, startBorderColor, endBorderColor, elementId) {
	// first things first, gotta get those colors (☞ﾟ∀ﾟ)☞
	let startBgRGB = hexToRgb(startBgColor);
	let endBgRGB = hexToRgb(endBgColor);
	let startTextRGB = hexToRgb(startTextColor);
	let endTextRGB = hexToRgb(endTextColor);
	let startBorderRGB = hexToRgb(startBorderColor);
	let endBorderRGB = hexToRgb(endBorderColor);

	// gettin' our target element, yo (⌐■_■)
	let targetElement = document.getElementById(elementId);
	let listItems = targetElement.getElementsByTagName('li');

	let itemCount = listItems.length;

	for (let i = 0; i < itemCount; i++) {
		// calculate the ratio and the intermediate color for each `li` (⊙＿⊙')
		let ratio = i / (itemCount - 1);

		// background color calculation
		let bgR = Math.round(startBgRGB[0] + ratio * (endBgRGB[0] - startBgRGB[0]));
		let bgG = Math.round(startBgRGB[1] + ratio * (endBgRGB[1] - startBgRGB[1]));
		let bgB = Math.round(startBgRGB[2] + ratio * (endBgRGB[2] - startBgRGB[2]));
		let intermediateBgColor = rgbToHex(bgR, bgG, bgB);

		// text color calculation
		let textR = Math.round(startTextRGB[0] + ratio * (endTextRGB[0] - startTextRGB[0]));
		let textG = Math.round(startTextRGB[1] + ratio * (endTextRGB[1] - startTextRGB[1]));
		let textB = Math.round(startTextRGB[2] + ratio * (endTextRGB[2] - startTextRGB[2]));
		let intermediateTextColor = rgbToHex(textR, textG, textB);

		let borderR = Math.round(startBorderRGB[0] + ratio * (endBorderRGB[0] - startBorderRGB[0]));
		let borderG = Math.round(startBorderRGB[1] + ratio * (endBorderRGB[1] - startBorderRGB[1]));
		let borderB = Math.round(startBorderRGB[2] + ratio * (endBorderRGB[2] - startBorderRGB[2]));
		let intermediateBorderColor = rgbToHex(borderR, borderG, borderB);

		// slappin' those colors onto each `li` ( ͡° ͜ʖ ͡°)
		listItems[i].style.backgroundColor = intermediateBgColor;
		listItems[i].style.color = intermediateTextColor;
		listItems[i].style.borderColor = intermediateBorderColor;
	}
}