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
		this.isRunning = false;
		this.renderer = new THREE.WebGLRenderer(
		{
			antialias: true,
			stencil: false,
			precision: "lowp",
			preserveDrawingBuffer: false,
			depth: true
		});

		this.camera = new Camera(45,  window.innerWidth / window.innerHeight, 0.1, 10000);

		this.stationFloor = new StationFloor()
		this.sun = new Sun();
		this.hemisphere = new Hemisphere();
		this.trainManager = new TrainManager();
		this.treeManager = new TreeManager();
		this.ground = new Ground();
		this.trackManager = new TrackManager();
		this.restaurant = new Restaurant();
		this.shelterpew = new ShelterPew();
		this.station = new Station();
		this.skydome = new SkyDome();
		this.stationroof = new Stationroof();
		this.lights = new Lights();
		this.building = new Building();
		this.sEntrance = new SEntrance();
		this.streetlampManager = new StreetlampManager();
		this.cycleRackManager = new CycleRackManager();
		this.houseManager = new HouseManager();
		this.cyclerackroof = new Cyclerackroof();
		this.parkinglot = new Parkinglot();
		this.platformroofManager = new PlatformRoofManager();
		this.plazatower = new PlazaTower();
		this.backentrance = new BackEntrance();
		this.fenceManager = new FenceManager();
		this.pause();
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
		if(this.isRunning)
		{
			this.update();
			DbgDraw.render(game.scene);
			this.renderer.render(this.scene, this.camera);
		}

		requestAnimationFrame(this.render.bind(this)); // Add self to render queue
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
		this.shelterpew,
		this.hemisphere,
		this.station,
		this.skydome,
		this.stationroof,
		this.lights,
		this.building,
		this.sEntrance,
		this.treeManager,
		this.streetlampManager,
		this.cycleRackManager,
		this.houseManager,
		this.cyclerackroof,
		this.parkinglot,
		this.platformroofManager,
		this.plazatower,
		this.backentrance,
		this.fenceManager,
		];


		for(let i in objectsToUpdate)
		{
			let object = objectsToUpdate[i];
			if(!object);
			object.update(delta);
		}
	}

	resume()
	{
		// console.log("Game resume");
		jQuery("#overlay").hide();
		this.clock.start();
		this.isRunning = true;
		
	}

	pause()
	{
		// console.log("Game pause");
		jQuery("#overlay").fadeIn();
		this.clock.stop();
		this.isRunning = false;
	}

}