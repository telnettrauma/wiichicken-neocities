// code stolen from https://sadgrl.online/learn/articles/last-update-visitors
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = async function() {
	if (this.readyState == 4 && this.status == 200) {
		var site_data = JSON.parse(this.responseText);
		var num_arr = site_data.info.views.toString().split("");
		var num_str = "";
		for (i = 0; i < num_arr.length; i++) {
			num_str += num_arr[i];
			if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
			var date_str = site_data.info.last_updated;
			var date_obj = new Date(site_data.info.last_updated);
			var daMonths = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRiL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
			document.getElementById('upMonth').innerHTML = daMonths[date_obj.getMonth()];
			document.getElementById('upDate').innerHTML = date_obj.getDate();
			document.getElementById('upYear').innerHTML = date_obj.getFullYear();
		}
		await sleep(500);
		let daBob = site_data.info.views / 20;
		let setNew = 0;
		for (l = 0; l < 20; l++) {
			setNew = Math.floor(setNew + daBob);
			document.getElementById('hitcount').innerHTML = setNew;
			await sleep(50);
		}
		// document.getElementById("hitcount").innerHTML = num_str;
		document.getElementById('hitcount').innerHTML = site_data.info.views;
	}
};
xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=wiichicken", true);
xhttp.send();