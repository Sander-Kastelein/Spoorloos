"use strict";

class Sun extends THREE.AmbientLight
{

	constructor()
	{
		super(0x404040, 5);
		game.scene.add(this);
		
		this.position.y = 10;
		this.position.x = 0;
		this.position.z = 0;

	}

	update(delta)
	{

	}

}