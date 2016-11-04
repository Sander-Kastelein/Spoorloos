"use strict";

class Train extends THREE.Object3D
{ 

	constructor(trainObject)
	{
		super();
		
		this.data = trainObject;

		for(let i = 0; i < game.assets.train.children.length; i++)
		{
			let child = game.assets.train.children[i].clone();
			let texture = game.assets.trainTextureNS;

			if(this.data.vervoerder === "Arriva")
			{
				texture = game.assets.trainTextureArriva;
			}

			child.material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});
			child.castShadow = true;
			child.receiveShadow = true;
			this.add(child);
		}
		this.scale.x = 0.03;
		this.scale.z = 0.03;
		this.scale.y = 0.06;
		game.scene.add(this);

		this.position.x = 25.8;
		this.position.z = 0;
		this.position.y = 0;
		this.rotation.y = 180/360*Math.PI;

		this.matrixAutoUpdate = false;
        this.updateMatrix();

	}

	update(delta)
	{

		if(this.ETA <= 0) this.destroy();


		//this.position.y = this.ETA / 480;
		//this.position.y = this.position.y < 0 ? 0 : this.position.y;
		//this.position.y += 3;
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