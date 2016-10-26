"use strict";

class Train extends THREE.Mesh
{ 

	constructor(geometry)
	{
		super(geometry); // Invoke new THREE.Mesh()
		game.scene.add(this);

		this.position.y = 20;


	}

	update(delta)
	{


	}

}