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
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			stencil: false,
			precision: "highp",
			preserveDrawingBuffer: true,
			
		});
		this.camera = new Camera(45,  window.innerWidth / window.innerHeight, 0.1, 10000);
		this.stationfloor = new StationFloor()

		//this.sun = new Sun();
		this.spotlight = new Spotlight();

		this.trainManager = new TrainManager();
		this.ground = new Ground();
		this.track = new Track();
        this.restaurant = new Restaurant();
		this.hokje = new Hokje();

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
		let delta = this.clock.getDelta();

		//this.sun.update(delta);
		this.spotlight.update(delta);
		this.camera.update(delta);
		this.stationfloor.update(delta);
		this.trainManager.update(delta);
		this.ground.update(delta);
		this.track.update(delta);
		this.restaurant.update(delta);
		this.hokje.update(delta);
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