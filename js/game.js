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
		this.renderer = new THREE.WebGLRenderer(
		{
			antialias: true,
			stencil: false,
			precision: "highp",
			preserveDrawingBuffer: true,
		});


		this.camera = new Camera(45,  window.innerWidth / window.innerHeight, 0.1, 10000);
		this.stationFloor = new StationFloor()
		this.sun = new Sun();
		this.hemisphere = new Hemisphere();
		this.trainManager = new TrainManager();
		this.ground = new Ground();

		this.trackManager = new TrackManager();
		this.restaurant = new Restaurant();
		this.hokje = new Hokje();

		this.station = new Station();
		this.skydome = new SkyDome();
  		this.stationroof = new Stationroof();
		this.stationtower = new Stationtower();



	}

	initialize()
	{
		console.log("Initializing Game object...");
		requestAnimationFrame(this.render.bind(this));

		this.renderer.setClearColor(0x000000);

		// enable shadows
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMapSoft = true;
	}

	render()
	{
		// Render logic
		let start = Date.now();

		this.update();

		requestAnimationFrame(this.render.bind(this)); // Add self to render queue
		this.renderer.render(this.scene, this.camera);
		let updateTime = Date.now() - start;
		console.log("Render took: ", updateTime, "ms");


	}

	update(next)
	{


		var delta = this.clock.getDelta();

		let objectsToUpdate = [
		this.sun,
		this.camera,
		this.stationFloor,
		this.trainManager,
		this.ground,
		this.trackManager,
		this.restaurant,
		this.hokje,	
		this.hemisphere,
		this.station,
		this.skydome,
		this.stationroof,
		];


		for(let object of objectsToUpdate)
		{
			object.update(delta);
		}
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