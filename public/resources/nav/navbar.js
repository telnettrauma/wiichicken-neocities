function flipTheScript() {
  document.getElementById('poopBlock').innerHTML = '<div id="inHead"><div class="topLinks"><a href="/aboutme.html">ABOUT</a><a href="/creative/index.html">ART</a><a href="/more/archive/blog/index.html">BLOG</a></div><a id="fakeLogo" href="/index.html"><div class="square" id="s1" style="background-color: red;"></div><div class="square" id="s2" style="background-color: #00a2ff; margin-right: 0;"></div></a><div class="topLinks"><a href="/interests/index.html">MEDiA</a><a href="/more/index.html">MORE</a><a href="/guestbook.html">GUESTBOOK</a></div><style>.headerVisible {transform: translateY(0px) !important;}</style></div>';
  document.getElementById('sideButton').innerHTML = '<div class="rect" style="background-color: red;"></div><div class="rect" style="background-color: #00a2ff;"></div><div class="rect" style="margin-bottom: 0;"></div>';
  document.getElementById('overSide').innerHTML = '	<div id="closeSide" onclick="closeSidey()"><div class="rect" id="closeRect1"></div><div class="rect" id="closeRect2"></div><div class="rect" id="closeRect3"></div></div><a href="/index.html">HOME</a><a href="/aboutme.html">ABOUT ME</a><a href="/creative/index.html">ART</a><a href="/interests/index.html">MEDiA</a><a href="/more/index.html">MORE</a><a href="/sitemap.html" id="bottomNavLink">SiTEMAP</a>';
}
function openSidey() {document.getElementById('overSide').style.display = 'flex';}
function closeSidey() {document.getElementById('overSide').style.display = 'none';}
flipTheScript();
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));}
// determines if you have opera or not
var whatIsOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
// blocks opera browsers, mainly opera gx, from loading the page
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