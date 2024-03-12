document.addEventListener('DOMContentLoaded', function() {
	var user = 'wiichicken';
	var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&period=1month&user=" + user + "&api_key=afc213709a996ae561e307f596c9952b&format=json";
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			
			var data = JSON.parse(request.responseText);
			for (l = 0; l < 3; l++) {
				document.getElementById(`monthAlbumName${l}`).innerHTML = data.topalbums.album[l]["name"];
				document.getElementById(`monthAlbumArtist${l}`).innerHTML = data.topalbums.album[l].artist['name'];
				document.getElementById(`monthAlbumPlay${l}`).innerHTML = data.topalbums.album[l]["playcount"];
				document.getElementById(`monthAlbum${l}`).src = data.topalbums.album[l].image[1]["#text"];
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