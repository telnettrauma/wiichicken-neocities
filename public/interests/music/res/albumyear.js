document.addEventListener('DOMContentLoaded', function() {
	var user = 'wiichicken';
	var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&period=12month&user=" + user + "&api_key=93016c14b5580e5f2a72cdc9413cfa36&format=json";
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			
			var data = JSON.parse(request.responseText);
			for (l = 0; l < 3; l++) {
				document.getElementById(`yearAlbumName${l}`).innerHTML = data.topalbums.album[l]["name"];
				document.getElementById(`yearAlbumArtist${l}`).innerHTML = data.topalbums.album[l].artist['name'];
				document.getElementById(`yearAlbumPlay${l}`).innerHTML = data.topalbums.album[l]["playcount"];
				document.getElementById(`yearAlbum${l}`).src = data.topalbums.album[l].image[1]["#text"];
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