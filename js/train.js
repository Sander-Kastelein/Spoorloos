"use strict";

class Train extends THREE.Mesh
{ 

	constructor(trainObject)
	{
		super(game.assets.trainGeometry); // Invoke new THREE.Mesh()
		game.scene.add(this);

		this.data = trainObject;
		this.position.x = Math.random() * 50;
		this.position.z = Math.random() * 20;
		this.position.y = 10;

	}

	update(delta)
	{


	}

	destroy()
	{
		game.scene.remove(this);
	}

}