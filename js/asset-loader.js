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
		var amountOfAssetsToLoad = 1;

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

		this.assets.stationFloorTexture = new THREE.ImageUtils.loadTexture("img/tegel.jpg");
		this.assets.trainTexture = new THREE.ImageUtils.loadTexture("img/trein.png");

	}


});