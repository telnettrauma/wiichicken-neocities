let friendsCount, friendsList, currentUser;
// this script runs when the button to submit username is clicked
function loadStuff() {
	var request = new XMLHttpRequest();
	// gets the username typed in
	currentUser = document.getElementById('user-box').value;
	request.open('GET', `http://ws.audioscrobbler.com/2.0/?method=user.getFriends&user=${currentUser}&api_key=afc213709a996ae561e307f596c9952b&format=json`, true);
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var data = JSON.parse(request.responseText);
			friendsList = data.friends.user.map(friend => friend.name);
			console.log(friendsList);
			for (let i = 0; i < friendsList.length; i++) {
				var currentFriend = friendsList[i];
			}
			var artist = data.recenttracks.track[0].artist["#text"];
	
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
	}
}
// Code from https://septic.lol/?z=/code/widgets.html
document.addEventListener('DOMContentLoaded', function() {
var url = "http://ws.audioscrobbler.com/2.0/?method=user.getFriends&user=wiichicken&api_key=afc213709a996ae561e307f596c9952b&format=json";
request.open('GET', url, true);

request.onload = function() {

};

request.onerror = function() {
	console.error("Connection error.");
};

request.send();
});