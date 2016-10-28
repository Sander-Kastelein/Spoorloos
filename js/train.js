"use strict";

class Train extends THREE.Object3D
{ 

	constructor(trainObject)
	{
		super();
		
		this.data = trainObject;

		for(let i = 0; i < game.assets.train.children.length; i++)
		{
			let child = game.assets.train.children[i].clone();1
			let texture = game.assets.trainTextureNS;

			if(this.data.vervoerder === "Arriva")
			{
				texture = game.assets.trainTextureArriva;
			}

			child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
			this.add(child);
		}
		
		this.scale.x = 0.01;
		this.scale.z = 0.01;
		this.scale.y = 0.01;

		game.scene.add(this);

		this.position.x = Math.random() * 50;
		this.position.z = Math.random() * 20;
		this.position.y = 2;
	}

	update(delta)
	{

		if(this.ETA <= 0) this.destroy();


		this.position.y = this.ETA / 480;
		this.position.y = this.position.y < 0 ? 0 : this.position.y;

	}

	destroy()
	{
		game.scene.remove(this);
	}



	get ETA()
	{
		return this.data.actueleAankomstTijd - (new Date() / 1000);
	}

}