/*
	init.js

	This file boostraps the application
*/

var game;

document.addEventListener('DOMContentLoaded', function()
{
	

	assetLoader.load(function(assets)
	{
		game = new Game(assets);
		Data.interval(); // Start loading train data
		game.initialize();
		document.body.appendChild(game.renderer.domElement);

		// enable shadows
		game.renderer.setClearColor(0x77e8eb);
		game.renderer.shadowMap.enabled = true;
		game.renderer.shadowMapSoft = true;

		// Resize game renderer on window resize
		window.onresize = function()
		{
			game.renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.onresize();
	});
	




}, false);




