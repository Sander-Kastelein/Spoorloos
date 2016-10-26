/*

*/


var assetLoader;
assetLoader = new (class{

	constructor()
	{
		this.JSONLoader = new THREE.JSONLoader();
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
		
		this.JSONLoader.load('models/3d-model.json', function(geometry) {
			assetLoader.assets.trainGeometry = geometry;
			assetLoaded();
		});

		this.assets.stationFloorTexture = new THREE.ImageUtils.loadTexture("img/tegel.jpg");


	}


});