"use strict";

class Train extends THREE.Object3D
{ 

	constructor(trainObject)
	{
		super();
		
		this.data = trainObject;

		let texture = game.assets.trainTextureNS;
		let material = new THREE.MeshPhongMaterial({map: texture, side: THREE.DoubleSide, needsUpdate: true});


		this.wheelSets = [];

		for(let i = 0; i < game.assets.train.children.length; i++)
		{
			let child = game.assets.train.children[i].clone();

			if(this.data.vervoerder === "Arriva")
			{
				texture = game.assets.trainTextureArriva;
			}

			child.material = material;
			child.receiveShadow = false;
			child.castShadow = false;
			child.matrixAutoUpdate = false;
        	child.updateMatrix();

			this.add(child);

			if(child.name.indexOf("Wheel") !== -1)
			{
				this.wheelSets.push(child);
			}

		}

		this.castShadow = true;
		this.receiveShadow = true;
		
		this.scale.x = 0.03
		this.scale.z = 0.03
		this.scale.y = 0.05;


		this.position.x = 26.2;
		this.position.z = this.position.y = 0;

		this.rotation.y = deg2rad(270);
		this.matrixAutoUpdate = false;
        this.updateMatrix();

		game.scene.add(this);


		this.speed = 5;


		this.hide();

	}

	update(delta)
	{

		// Check if train should become visible
		if(!this.visible && this.ETA <= (5 * 60) && this.ETA > 0)
		{
			this.show();
		}



		//this.position.y = this.ETA / 480;
		//this.position.y = this.position.y < 0 ? 0 : this.position.y;
		//this.position.y += 3;
	}

	destroy()
	{
		game.scene.remove(this);
	}

	hide()
	{
		this.scale.y = 0;
		this.visible = false;
	}

	show()
	{
		this.visible = true;
	}



	get ETA()
	{
		return this.data.actueleAankomstTijd - (new Date() / 1000);
	}

}