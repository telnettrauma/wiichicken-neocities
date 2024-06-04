// Get help here - https://forum.melonking.net/index.php?topic=115
// 2. Add 'id="mainframe"' to your main iFrame or Frame window.
// Optional: Create a second <script></script> section AFTER you link the frame-link.js
// Optional: add 'updateTitle = false;' if you want to disable title updating. (Default is true)
// Optional: add 'titlePrefix = "My Site ";' if you want to add a prefix to your titles. (Default is none)
// Optional: add 'pageParam = "z";' if you want to change the url path of your pages. (Default is z)
// Optional: add 'basePath - "path";' to set a base path

var mainFrame;
var firstLoad = true;
var updateTitle = true;
var pageParam = "z";
var titlePrefix = "";

//Event to handle first page load - Also sets up the mainFrame
window.addEventListener("DOMContentLoaded", (e) => {
	mainFrame = document.getElementById("mainframe");
	mainFrame.addEventListener("load", updateHistory, false);
	setMainFrame();
});

//Event to handle back button presses
window.addEventListener("popstate", function (e) {
	if (e.state !== null) {
		setMainFrame();
	}
});

//Checks to see if a page parameter exists and sets the mainframe src to that page.
function setMainFrame() {
	let params = new URLSearchParams(window.location.search);
	let page = params.get(pageParam);
	if (page != null) {
		if (typeof basePath !== 'undefined') {
			mainFrame.src = basePath + page;
		} else {
			mainFrame.src = page;
		}
	}
}

//Updates the browser history with the current page, causing the URL bar to update.
async function updateHistory() {
	let fullPath = mainFrame.contentWindow.location.pathname;
	let page = fullPath;

	if (typeof basePath !== 'undefined') {
		if (fullPath.startsWith(basePath)) {
			page = fullPath.replace(basePath, "");
		}
	}

	let title = titlePrefix + mainFrame.contentDocument.title;

	// Stops the page getting into an infinite loop reloading itself.
	if (firstLoad) {
		firstLoad = false;
		if (updateTitle) {
			document.title = title;
		}
		return;
	}

	history.replaceState({}, title, "?" + pageParam + "=" + page);

	if (updateTitle) {
		document.title = title;
	}
}