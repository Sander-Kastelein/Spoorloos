/*
	init.js

	This file boostraps the application
*/

var game;

document.addEventListener('DOMContentLoaded', function()
{
	game = new Game();
	game.initialize();
	document.body.appendChild(game.renderer.domElement);

	// Resize game renderer on window resize
	window.onresize = function()
	{
		game.renderer.setSize(window.innerWidth, window.innerHeight);
	};
	window.onresize();




}, false);




