function flipTheScript() {
  document.getElementById('poopBlock').innerHTML = '<div id="inHead"><div class="topLinks"><a href="/aboutme.html">ABOUT</a><a href="/creative/index.html">ART</a><a href="/more/archive/blog/index.html">BLOG</a></div><a id="fakeLogo" href="/index.html"><div class="square" id="s1" style="background-color: red;"></div><div class="square" id="s2" style="background-color: #00a2ff; margin-right: 0;"></div></a><div class="topLinks"><a href="/interests/index.html">MEDiA</a><a href="/more/index.html">MORE</a><a href="/guestbook.html">GUESTBOOK</a></div><style>.headerVisible {transform: translateY(0px) !important;}</style></div>';
  document.getElementById('sideButton').innerHTML = '<div class="rect" style="background-color: red;"></div><div class="rect" style="background-color: #00a2ff;"></div><div class="rect" style="margin-bottom: 0;"></div>';
  document.getElementById('overSide').innerHTML = '	<div id="closeSide" onclick="closeSidey()"><div class="rect" id="closeRect1"></div><div class="rect" id="closeRect2"></div><div class="rect" id="closeRect3"></div></div><a href="/index.html">HOME</a><a href="/aboutme.html">ABOUT ME</a><a href="/creative/index.html">ART</a><a href="/interests/index.html">MEDiA</a><a href="/more/index.html">MORE</a><a href="/sitemap.html" id="bottomNavLink">SiTEMAP</a>';
}
/* window.onscroll = function() {checkHeader()};
var header = document.getElementById("poopBlock");
var sticky = document.getElementById('heightCheck').offsetTop;
function checkHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("headerVisible");
  } else {
    header.classList.remove("headerVisible");
  }
} */
function openSidey() {document.getElementById('overSide').style.display = 'flex';}
function closeSidey() {document.getElementById('overSide').style.display = 'none';}
flipTheScript();
/* <div id="inHead">
<div class="topLinks">
  <a href="aboutme.html">ABOUT</a>
  <a href="creative/index.html">ART</a>
  <a href="more/archive/blog/index.html">BLOG</a>
</div>
<a id="fakeLogo" href="/index.html">
  <div class="square" id="s1" style="background-color: red;"></div>
  <div class="square" id="s2" style="background-color: #00a2ff; margin-right: 0;"></div>
</a>
<div class="topLinks">
  <a href="interests/index.html">MEDiA</a>
  <a href="more/index.html">MORE</a>
  <a href="sitemap.html">SiTEMAP</a>
</div>
<script>
window.onscroll = function() {checkHeader()};
var header = document.getElementById("poopBlock");
var sticky = document.getElementById('heightCheck').offsetTop;
function checkHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("headerVisible");
  } else {
    header.classList.remove("headerVisible");
  }
}
</script>
<style>
.headerVisible {transform: translateY(0px) !important;}
</style>
</div> */

/* <div class="rect" style="background-color: red;"></div>
	<div class="rect" style="background-color: #00a2ff;"></div>
	<div class="rect" style="margin-bottom: 0;"></div> */

/* 	<div id="closeSide" onclick="closeSidey()">
		<div class="rect" id="closeRect1"></div>
		<div class="rect" id="closeRect2"></div>
		<div class="rect" id="closeRect3"></div>
	</div>
	<a href="/index.html">HOME</a>
	<a href="/aboutme.html">ABOUT ME</a>
	<a href="/creative/index.html">ART</a>
	<a href="/interests/index.html">MEDiA</a>
	<a href="/more/index.html">MORE</a>
	<a href="/sitemap.html" style="margin-bottom: 200px;">SiTEMAP</a> */