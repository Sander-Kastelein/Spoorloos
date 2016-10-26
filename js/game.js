/*
	game.js

	Contains main game logic.
	a.k.a. godclass
*/

class Game
{
	constructor(assets)
	{
		game = this;
		this.assets = assets;
		console.log("Creating Game object...");

		this.scene = new THREE.Scene(); // Add new scene to game object.
		this.clock = new THREE.Clock();
		this.renderer = new THREE.WebGLRenderer();
		this.camera = new Camera(45,  window.innerWidth / window.innerHeight, 0.1, 1000);
		this.controller = new Controller(this.camera);
		this.stationfloor = new StationFloor();
		this.sun = new Sun();
<<<<<<< HEAD
		this.train = new Train(game.assets.trainGeometry);

=======
		this.train = new Train(this.assets.trainGeometry);
>>>>>>> 1e4afad62d163b76ee2821eddf4f50a3ebe7ed39
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
		this.sun.update(delta);
		this.camera.update(delta);
		this.controller.update();
		this.stationfloor.update();
		this.train.update(delta);
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