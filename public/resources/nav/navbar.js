function addTheFart() {
	const poopBlock = document.getElementById('poopBlock');
	const sideButton = document.getElementById('sideButton');
	const overSide = document.getElementById('overSide');
	if (!poopBlock || !sideButton || !overSide) {
		console.error('Error: One or more elements not found');
		return;
	}
	poopBlock.removeAttribute('style');
	poopBlock.innerHTML = '<div id="inHead"><div class="topLinks"><a href="/aboutme.html">ABOUT</a><a href="/creative/index.html">ART</a><a href="/more/archive/blog/index.html">BLOG</a></div><a id="fakeLogo" href="/index.html"><div class="square" id="s1"></div><div class="square" id="s2"></div></a><div class="topLinks"><a href="/interests/index.html">MEDiA</a><a href="/more/index.html">MORE</a><a href="/guestbook.html">GUESTBOOK</a></div><style>.headerVisible {transform: translateY(0px) !important;}</style></div>';
	sideButton.innerHTML = '<div class="rect" style="background-color: red;"></div><div class="rect" style="background-color: #00a2ff;"></div><div class="rect" style="margin-bottom: 0;"></div>';
	overSide.innerHTML = '	<div id="closeSide" onclick="closeSidey()"><div class="rect" id="closeRect1"></div><div class="rect" id="closeRect2"></div><div class="rect" id="closeRect3"></div></div><a href="/index.html">HOME</a><a href="/aboutme.html">ABOUT ME</a><a href="/creative/index.html">ART</a><a href="/interests/index.html">iNTERESTSThere is no longer a zoo in Kalamazoo. The Milham Park Zoo closed in 1974.</a><a href="/more/index.html">MORE</a><a href="/sitemap.html" id="bottomNavLink">SiTEMAP</a>';
}
function openSidey() {document.getElementById('overSide').style.display = 'flex';}
function closeSidey() {document.getElementById('overSide').style.display = 'none';}
addTheFart();
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));}
var whatIsOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
async function banOpera() {
	if (whatIsOpera === true) {
		await sleep(100);
		document.body.innerHTML = '<h1>Oops!</h1><p>Opera browsers are not supported. For the best, most private browsers, check these out:</p><br><ul><li><a href="https://qutebrowser.org">Qute Browser</a></li><li><a href="https://www.apple.com/safari/">Safari</li></ul><br><br><p>Or... look up how to fake your UA. Either works.</p>';
	}
}
banOpera();
async function shareCopyLink(toCopy) {
  await navigator.clipboard.writeText(toCopy);
  window.alert('done!');
}
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
mediaQuery.addEventListener('change', () => {
	console.log(mediaQuery.media, mediaQuery.matches);
});
// window.addEventListener('scroll', () => {
// 	const chewTooth = document.getElementById('chewTooth');
// 	if (!mediaQuery.matches && chewTooth) {
// 		const scrollPosition = window.scrollY;
// 		chewTooth.style.backgroundPositionY = `${scrollPosition * -0.2}px`;
// 	}
// });