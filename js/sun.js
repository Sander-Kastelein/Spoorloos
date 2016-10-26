"use strict";

class Sun extends THREE.AmbientLight
{

	constructor()
	{
		/*
			00:00 : 0
			01:00 : 3600
			02:00 : 7200
			12:00 : 43200
			23:59 : 86340
			24:00 : 0
			
		*/
		this.timeColors = [
			
		];


		super(0x404040, 5);
		game.scene.add(this);
		
		

	}

	update(delta)
	{

	}

}