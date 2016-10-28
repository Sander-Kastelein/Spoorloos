/*

*/


var assetLoader;
assetLoader = new (class{

	constructor()
	{
		this.JSONLoader = new THREE.JSONLoader();
		this.OBJLoader = new THREE.OBJLoader();
		this.assets = {
		};
	}

	load(callback)
	{
		var assetsLoaded = 0;
		var amountOfAssetsToLoad = 3;

		var assetLoaded = () => {
			assetsLoaded ++;
			if(assetsLoaded === amountOfAssetsToLoad)
			{
				callback(assetLoader.assets);
				callback = () => {}; // Null callback to prevent double calls;
			}
		};

		this.OBJLoader.load('models/3d-model.obj', function(group) {
			assetLoader.assets.train = group;
			assetLoaded();
		});

		this.OBJLoader.load('models/1524mm Rail Track Concrete.obj', function(group) {
			assetLoader.assets.track = group;
			assetLoaded();
		});

		this.OBJLoader.load('models/Derby, Subway.obj', function (group) {
			assetLoader.assets.restaurant = group;
			assetLoaded();
		})

		this.assets.stationFloorTexture = new THREE.ImageUtils.loadTexture("img/tegel.jpg");
		this.assets.trainTextureNS = new THREE.ImageUtils.loadTexture("img/ns.png");
		this.assets.trainTextureArriva = new THREE.ImageUtils.loadTexture("img/arriva.png");
		this.assets.groundTexture = new THREE.ImageUtils.loadTexture("img/ground.jpg")
		this.assets.trackTexture = new THREE.ImageUtils.loadTexture("img/track.jpg");

	}


});