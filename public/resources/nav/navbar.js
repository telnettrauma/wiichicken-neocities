function addTheFart() {
	const poopBlock = document.getElementById('poopBlock');
	const sideButton = document.getElementById('sideButton');
	const overSide = document.getElementById('overSide');
	if (!poopBlock || !sideButton || !overSide) {
		console.error('Error: One or more elements not found');
		return;
	}
	poopBlock.removeAttribute('style');
	poopBlock.innerHTML = '<a href="#start" id="to-start"><button>Skip to Content</button></a><a id="fakeLogo" href="/index.html" title="Home"><div class="square" id="s1"></div><div class="square" id="s2"></div></a><div id="inHead"><div class="topLinks"><a href="/aboutme.html"><img src="/resources/nav/me.png">ABOUT</a><a href="/creative/index.html"><img src="/resources/nav/art.png">ART</a><a href="/more/archive/blog/index.html"><img src="/resources/nav/blog.png">BLOG</a><a href="/interests/index.html"><img src="/resources/nav/intr.png">iNTERESTS</a><a href="/more/index.html"><img src="/resources/nav/more.png">MORE</a><a href="/guestbook.html"><img src="/resources/nav/gb.png">GUESTBOOK</a></div></div>';
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