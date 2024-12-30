
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
					window.webkitRequestAnimationFrame || 
					window.mozRequestAnimationFrame    || 
					window.oRequestAnimationFrame      || 
					window.msRequestAnimationFrame     || 
					function( callback ){
						window.setTimeout(callback, 1000 / 60);
					};
})();

var canvas = document.getElementById('canvas'),
								w = window.innerWidth,
								h = window.innerHeight;
								canvas.width = w;
								canvas.height = h;
									//c = canvas.getContext('2d'),
									particles = [];
									tick = 0;
		var x = 0;
		function loop() {

				createParticles();
				updateParticles();
				killParticles();
				drawParticles();
			requestAnimFrame(loop);

		}
		requestAnimFrame(loop);

		function createParticles() {
var availableColors = ['red', 'blue'];
			
				//every 10th tick
				if( tick % 10 == 0 ) {
				//add particle if < 100
						if ( particles.length < 100 ) {
								particles.push({
								x: Math.random()*canvas.width, //0 and width
								y: 0,
								speed: 2+Math.random()*5,//2-5
								radius: 5+Math.random()*10,//5-10
								color: availableColors[Math.floor(Math.random() * availableColors.length)],
								});
						}
				}
		}
		
		function updateParticles() {
				for ( var i in particles ) {
						var part = particles[i];
						part.y += part.speed * 0.2;
				}
		}

		function killParticles() {
				for ( var i in particles ) {
						
						var part = particles[i];
						
						if ( part.y > canvas.height ) {
								part.y = 0;
						}
				}
	 }

	 function drawParticles() {

				var c = canvas.getContext('2d');
				c.fillStyle = 'black';
				c.fillRect (0, 0, canvas.width, canvas.height);
				for ( var i in particles ) {
						var part = particles[i];
						c.fillStyle = part.color;
						c.fillRect(part.x - part.radius, part.y - part.radius, part.radius * 2, part.radius * 2);
				}
 }