"use strict";

class Train extends THREE.Mesh
{ 

	constructor(geometry)
	{
		super(geometry); // Invoke new THREE.Mesh()
		game.scene.add(this);

	}

	update(delta)
	{


	}

}


function loadTrain(callback)
{
	var loader = new THREE.JSONLoader();
	loader.load('models/3d-model.json', function(geometry) {
		callback(new Train(geometry));
	});
}


loadTrain(function(train){

	train.position.x = 0;
	train.position.y = 0;
	trains.position.z = 0;

});
