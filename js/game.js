/*
	game.js

	Contains main game logic.
	a.k.a. godclass
*/


class Game
{
	constructor()
	{
		console.log("Creating Game object...");

		this.scene = new THREE.Scene(); // Add new scene to game object.
		this.clock = new THREE.Clock();
		this.renderer = new THREE.WebGLRenderer();
		this.camera = new Camera(45, 100 / 50, 1, 100);
	}

	initialize()
	{
		console.log("Initializing Game object...");

		requestAnimationFrame(this.render.bind(this));
	}

	render()
	{
		// Render logic
		this.update(); // Invoke game logic 
		requestAnimationFrame(this.render.bind(this)); // Add self to render queue
	}

	update()
	{
		let delta = this.clock.getElapsedTime();
		
		this.camera.update(delta);

		console.log("Tick");
	}

	start()
	{
		this.clock.start();
	}

	stop()
	{
		this.clock.stop();
	}

}