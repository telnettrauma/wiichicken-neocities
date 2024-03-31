// Code from https://sep.neocities.org/?z=/code/widgets.html
document.addEventListener('DOMContentLoaded', function() {
var user = 'wiichicken';
var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + user + "&api_key=afc213709a996ae561e307f596c9952b&format=json";
var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		
		var data = JSON.parse(request.responseText);
		var artist = data.recenttracks.track[0].artist["#text"];
		var song = data.recenttracks.track[0]["name"];
		var artwork = data.recenttracks.track[0].image[2]["#text"];
		var link = data.recenttracks.track[0]["url"];

		var artworkImg = document.getElementById("artwork");
		artworkImg.setAttribute("src", artwork);
		document.getElementById('dontWannaDoThis').style.backgroundImage = `url(${artwork})`;

		var trackInfo = document.getElementById("track");
		trackInfo.innerHTML = "\
			<strong>"+song+"</strong><br />\
			"+artist+"\
		";

		var artworkLink = document.getElementById("artworklink");
		artworkLink.setAttribute("href", link);

		if (typeof data.recenttracks.track[0]["@attr"] !== "undefined"){
			var listenInfo = document.getElementById("listen");
			listenInfo.innerHTML = '<span>listening</span> to:';
		} else {
			var listenInfo = document.getElementById("listen");
			listenInfo.innerHTML = 'last <span>listened</span> to:';
			console.log("false");
		}
	} else {
		console.error("Error fetching data from server.");
	}
};

request.onerror = function() {
	console.error("Connection error.");
};

request.send();
});