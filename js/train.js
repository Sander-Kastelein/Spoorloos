"use strict";

class Train extends THREE.Object3D
{ 

	constructor(trainObject)
	{
		super();
		
		

		for(let i = 0; i < game.assets.train.children.length; i++)
		{
			let child = game.assets.train.children[i].clone();
			child.material = new THREE.MeshLambertMaterial({map: game.assets.trainTexture, needsUpdate: true});
			this.add(child);
		}

		
		this.scale.x = 0.01;
		this.scale.z = 0.01;
		this.scale.y = 0.01;

		game.scene.add(this);

		this.data = trainObject;
		
		this.position.x = Math.random() * 50;
		this.position.z = Math.random() * 20;
		this.position.y = 2;

		

	}

	update(delta)
	{


	}

	destroy()
	{
		game.scene.remove(this);
	}

}