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


			if(child.name.indexOf("Wheel") !== -1)
			{
				this.wheelSets.push(child);
			}

			this.add(child);

		}

		this.castShadow = true;
		this.receiveShadow = true;
		
		this.scale.x = 0.03
		this.scale.z = 0.03
		this.scale.y = 0.06;


		this.position.x = 26.2;
		this.position.z = this.position.y = 0;

		this.rotation.y = deg2rad(270);
		this.matrixAutoUpdate = false;
		this.updateMatrix();

		game.scene.add(this);


		this.speed = 5;



		this.hide();

		this.track = game.trackManager.getFirstTrackByPlatform(this.data.aankomstSpoor);
		this.track.moveTrain(this, 0);
	}

	update(delta)
	{

		// Check if train should become visible
		if(!this.visible && this.timeFromDeparture <= (60 * 30)) // Show trains 10 minutes before departure
		{
			this.show();
		}

		if(this.timeFromDeparture < -30)
		{
			this.hide();
		}

		
		if(this.visible)
		{
			let position = this.track.moveTrain(this, this.timeFromDeparture);
			this.position.set(position.x, position.y, position.z);
			this.updateMatrix();
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


	// De tijd die het nog duurt VOORDAT de trein vertrekt
	// NEGATIEF = VERTROKKEN!
	get timeFromDeparture()
	{
		// if(this.data.vertrekTijd)
		// {
		// 	return this.data.vertrekTijd - Date.now();
		// }
		return ( this.data.geplandeVertrekTijd - (Date.now() / 1000) );
	}

}