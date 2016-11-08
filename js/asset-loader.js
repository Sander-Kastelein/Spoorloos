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

		// TODO write small abstraction to handle asset loading from array instead of
		// with iterator and callback

		var assetsLoaded = 0;
		var amountOfAssetsToLoad = 18;

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
		this.OBJLoader.load('models/blockbuild.obj', function (group) {
			assetLoader.assets.blockbuild = group;
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
			assetLoader.assets.sEntrance = group;
			assetLoaded();
		});

		//10
		this.OBJLoader.load('models/Tree2.obj', function (group) {
			assetLoader.assets.tree = group;
			assetLoaded();
		});

		//11
		this.OBJLoader.load('models/StreetLamp.obj', function (group) {
			assetLoader.assets.streetlamp = group;
			assetLoaded();
		});

		//12
		this.OBJLoader.load('models/Bicycle Parking Rack.obj', function (group) {
			assetLoader.assets.cyclerack = group;
			assetLoaded();
		});

		//13
		this.OBJLoader.load('models/houses.obj', function (group) {
			assetLoader.assets.house = group;
			assetLoaded();
		});

		//14
		this.OBJLoader.load('models/platformroof.obj', function (group) {
			assetLoader.assets.platformroof = group;
			assetLoaded();
		});
		//15

		this.OBJLoader.load('models/parkinglot.obj', function (group) {
			assetLoader.assets.parkinglot = group;
			assetLoaded();
		});

		//16
		this.OBJLoader.load('models/plazatower.obj', function (group) {
			assetLoader.assets.plazatower = group;
			assetLoaded();
		});

		//17
		this.OBJLoader.load('models/fence.obj', function (group) {
			assetLoader.assets.fence = group;
			assetLoaded();
		});

		//18
		this.OBJLoader.load('models/Ecleposs Subway opj cinema4d.obj', function (group) {
			assetLoader.assets.backentrance = group;
			assetLoaded();
		});



		let textures = [
		{ name: "stationFloorTexture", src : "img/tegel.jpg"},
		{ name: "trainTextureNS", src : "img/ns.png"},
		{ name: "trainTextureArriva", src : "img/arriva.png"},
		{ name: "groundTexture", src : "img/ground.jpg"},
		{ name: "trackTexture", src : "img/track.jpg"},
		{ name: "restaurantTexture", src : "img/smullers.jpg"},
		{ name: "stationbuildingTexture", src : "img/brickwall.jpg"},
		{ name: "treeTexture", src : "img/blatt.jpg"},
		{ name: "treeTexture", src : "img/bark.jpg"},
		{ name: "spot1Texture", src : "img/lamp.jpg"},
		{ name: "streetlampTexture", src : "img/grey-concrete-texture.jpg"},
		{ name: "stationroofTexture", src : "img/dak.jpg"},
		{ name: "shelterPew", src : "img/shelterpew.jpg"},
		{ name: "houseTexture", src : "img/brickwall.jpg"},
		{ name: "plazatowerTexture", src : "img/skyscraper.jpg"},
		{ name: "fenceTexture", src :  "img/fence.png"},
		{ name: "blockbuildingTexture", src : "img/brickwall.jpg"},
		{ name: "pavementTexture", src :  "img/pavements.jpg"},
		{ name: "brickTexture", src : "img/baksteen.jpg"}
		];

		let textureLoader = new THREE.TextureLoader();
		amountOfAssetsToLoad += textures.length; // add textures


		for(let texture of textures)
		{
			textureLoader.load(texture.src, ((texture,result) => {
				this.assets[texture.name] = result;
				assetLoaded();
			}).bind(this, texture));
		}

	};
});