	/*
	init.js

	This file boostraps the application
*/

var game;

/*
	Misc functions
*/

function deg2rad(degrees)
{
	return (degrees/180) * Math.PI;
}

function rad2deg(radians)
{
	return (radians / Math.PI) * 180;
}

function getCurrentSecondOfTheDay()
{
	var date = new Date();
	var secondsSince1970 = Math.round(date.getTime() / 1000);
	return secondsSince1970 % (24 * 60 * 60);
}

function getCurrentSunAngleInDegrees()
{
	/*
		00:00 = 180deg
		12:00 = 0deg
		18:00 = 90deg
		06:00 = 270deg
	*/
	var  n = getCurrentSecondOfTheDay() / 3600 / 24;
	n = n * 2 * Math.PI;
	return rad2deg(n);
}


document.addEventListener('DOMContentLoaded', function()
{
	assetLoader.load(function(assets)
	{
		game = new Game(assets);
		Data.interval(); // Start loading train data
		game.initialize();
		document.body.appendChild(game.renderer.domElement);

		// Resize game renderer on window resize
		window.onresize = function()
		{
			game.renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.onresize();
	});
	
}, false);




