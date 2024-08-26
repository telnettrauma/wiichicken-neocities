function flipTheScript() {
	const poopBlock = document.getElementById('poopBlock');
	const sideButton = document.getElementById('sideButton');
	const overSide = document.getElementById('overSide');
	if (!poopBlock || !sideButton || !overSide) {
		console.error('Error: One or more elements not found');
		return;
	}
	document.getElementById('poopBlock').innerHTML = '<a id="fakeLogo" href="/index.html"><div class="square" id="s1" style="background-color: red;"></div><div class="square" id="s2" style="background-color: #00a2ff; margin-right: 0;"></div></a><div id="inHead"><div class="topLinks"><a href="/interests/music/index.html">MUSiC</a><a href="/interests/websites/index.html">WEBSiTES</a></div></div>';
}
function openSidey() {document.getElementById('overSide').style.display = 'flex';}
function closeSidey() {document.getElementById('overSide').style.display = 'none';}
flipTheScript();
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));}
var whatIsOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
async function banOpera() {
	if (whatIsOpera === true) {
		await sleep(100);
		document.body.innerHTML = '<h1>Oops!</h1><p>Opera browsers are not supported. For the best, most private browsers, check these out:</p><br><ul><li><a href="https://qutebrowser.org">Qute Browser</a></li><li><a href="https://www.apple.com/safari/">Safari</li></ul><br><br><p>Or... look up how to fake your UA. Either works.</p>';
	}
}
banOpera();
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
mediaQuery.addEventListener('change', () => {
	console.log(mediaQuery.media, mediaQuery.matches);
});
window.addEventListener('scroll', () => {
	const chewTooth = document.getElementById('chewTooth');
	if (!mediaQuery.matches && chewTooth) {
		const scrollPosition = window.scrollY;
		chewTooth.style.backgroundPositionY = `${scrollPosition * -0.2}px`;
	}
});