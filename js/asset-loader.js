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

	load(callback) {
		var assetsLoaded = 0;
		var amountOfAssetsToLoad = 10;

		var assetLoaded = () =>
		{
			assetsLoaded++;
			if (assetsLoaded === amountOfAssetsToLoad) {
				callback(assetLoader.assets);
				callback = () =>
				{
				}
				; // Null callback to prevent double calls;
			}
		};

		//1
		this.OBJLoader.load('models/3d-model.obj', function (group) {
			assetLoader.assets.train = group;
			assetLoaded();
		});

		//2
		this.OBJLoader.load('models/1524mm Rail Track Concrete.obj', function (group) {
			assetLoader.assets.track = group;
			assetLoaded();
		});

		//3
		this.OBJLoader.load('models/Derby, Subway.obj', function (group) {
			assetLoader.assets.restaurant = group;
			assetLoaded();
		});

		//4
		this.OBJLoader.load('models/Hokje.obj', function (group) {
			assetLoader.assets.hokje = group;
			assetLoaded();
		});

		//5
		this.OBJLoader.load('models/Station.obj', function (group) {
			assetLoader.assets.station = group;
			assetLoaded();
		});

		//6
		this.OBJLoader.load('models/stationroof.obj', function (group) {
			assetLoader.assets.stationroof = group;
			assetLoaded();
		});

		//7
		this.OBJLoader.load('models/station-tower.obj', function (group) {
			assetLoader.assets.stationtower = group;
			assetLoaded();
		});

		//8
		this.OBJLoader.load('models/stationbuilding.obj', function (group) {
			assetLoader.assets.stationbuilding = group;
			assetLoaded();
		});

		//9
		this.OBJLoader.load('models/Ecleposs Subway opj cinema4d.obj', function (group) {
			assetLoaded();
			assetLoader.assets.sEntrance = group;
		});

		//10
		this.OBJLoader.load('models/Tree2.obj', function (group) {
			assetLoader.assets.tree = group;
			assetLoaded();
		});

		this.assets.stationFloorTexture = new THREE.ImageUtils.loadTexture("img/tegel.jpg");
		this.assets.trainTextureNS = new THREE.ImageUtils.loadTexture("img/ns.png");
		this.assets.trainTextureArriva = new THREE.ImageUtils.loadTexture("img/arriva.png");
		this.assets.groundTexture = new THREE.ImageUtils.loadTexture("img/ground.jpg");
		this.assets.trackTexture = new THREE.ImageUtils.loadTexture("img/track.jpg");
		this.assets.restaurantTexture = new THREE.ImageUtils.loadTexture("img/smullers.jpg");
		this.assets.stationTexture = new THREE.ImageUtils.loadTexture("img/baksteen.jpg");
		this.assets.stationTowerTexture = new THREE.ImageUtils.loadTexture("img/baksteen.jpg");
		this.assets.stationbuildingTexture = new THREE.ImageUtils.loadTexture("img/brickwall.jpg");
		this.assets.sEntranceTexture = new THREE.ImageUtils.loadTexture("img/baksteen.jpg")
		this.assets.treeTexture = new THREE.ImageUtils.loadTexture("img/blatt.jpg");
		this.assets.treeTexture = new THREE.ImageUtils.loadTexture("img/bark.jpg");
		this.assets.spot1Texture = new THREE.ImageUtils.loadTexture("img/lamp.jpg")
		this.assets.spot1Texture = new THREE.ImageUtils.loadTexture("img/lamp.jpg")
		}
});