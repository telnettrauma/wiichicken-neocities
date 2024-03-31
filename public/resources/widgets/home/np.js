// Code from https://sep.neocities.org/?z=/code/widgets.html
document.addEventListener('DOMContentLoaded', function() {
	var user = document.getElementById("listen").getAttribute("user");
	var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + user + "&limit=5&api_key=afc213709a996ae561e307f596c9952b&format=json";
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			
			var data = JSON.parse(request.responseText);
			var artist = data.recenttracks.track[0].artist["#text"];
			var artist1 = data.recenttracks.track[1].artist["#text"];
			var artist2 = data.recenttracks.track[2].artist["#text"];
			var artist3 = data.recenttracks.track[3].artist["#text"];
			var artist4 = data.recenttracks.track[4].artist["#text"];
			var song = data.recenttracks.track[0]["name"];
			var song1 = data.recenttracks.track[1]["name"];
			var song2 = data.recenttracks.track[2]["name"];
			var song3 = data.recenttracks.track[3]["name"];
			var song4 = data.recenttracks.track[4]["name"];
			var artwork = data.recenttracks.track[0].image[1]["#text"];
			var artwork1 = data.recenttracks.track[1].image[1]["#text"];
			var artwork2 = data.recenttracks.track[2].image[1]["#text"];
			var artwork3 = data.recenttracks.track[3].image[1]["#text"];
			var artwork4 = data.recenttracks.track[4].image[1]["#text"];

			var artworkImg = document.getElementById("artwork");
			artworkImg.setAttribute("src", artwork);
			var fakeBlur = document.getElementById('moneyOnMind');
			fakeBlur.style.backgroundImage = `url(${artwork})`;
			var art1 = document.getElementById('artwork1');
			var art2 = document.getElementById('artwork2');
			var art3 = document.getElementById('artwork3');
			var art4 = document.getElementById('artwork4');
			art1.setAttribute('src', artwork1);
			art1.setAttribute('title', `${song1} - ${artist1}`);
			art2.setAttribute('src', artwork2);
			art2.setAttribute('title', `${song2} - ${artist2}`);
			art3.setAttribute('src', artwork3);
			art3.setAttribute('title', `${song3} - ${artist3}`);
			art4.setAttribute('src', artwork4);
			art4.setAttribute('title', `${song4} - ${artist4}`);

			var trackInfo = document.getElementById("track");
			trackInfo.innerHTML = "\
				<strong>"+song+"</strong><br />\
				"+artist+"\
			";

			if (typeof data.recenttracks.track[0]["@attr"] !== "undefined"){
				var listenInfo = document.getElementById("listen");
				listenInfo.innerHTML = '<span id="listenglow">listening</span> to:';
				fakeBlur.style.animationDuration = '30s';
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