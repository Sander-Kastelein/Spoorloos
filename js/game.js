/*
	game.js

	Contains main game logic.
	a.k.a. godclass
*/

class Game
{
	constructor()
	{
		game = this;
		console.log("Creating Game object...");

		this.scene = new THREE.Scene(); // Add new scene to game object.
		this.clock = new THREE.Clock();
		this.renderer = new THREE.WebGLRenderer();
		this.camera = new Camera(45,  window.innerWidth / window.innerHeight, 0.1, 1000);
		this.controller = new Controller(this.camera);
		this.stationfloor = new StationFloor();
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
		this.renderer.render(this.scene, this.camera);
	}

	update()
	{
		let delta = this.clock.getElapsedTime();
		this.camera.update(delta);
		this.controller.update();
		this.stationfloor.update();
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