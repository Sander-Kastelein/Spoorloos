"use strict";

/*
	keyboard.js
	@author Sander Kastelein <kast1500@student.nhl.nl>
	@date 2016-10-10

	Creates a singleton Keyboard on which there is a method .isKeyDown(key)
	makes for easy usage of the keyboard in JS.
*/

const Keyboard = new (class
{

	constructor()
	{
		var keyboard = this;
		this.keysDown = [];
		window.onkeydown = (e) =>  keyboard.onKeyDown(e);
		window.onkeyup = (e) => keyboard.onKeyUp(e);
	}

	onKeyDown(e)
	{
		if(this.isKeyDown(e.key)) return;
		this.keysDown.push(e.key);
	}

	onKeyUp(e)
	{
		this.keysDown = this.keysDown.filter( (key) => key !== e.key );
	}

	isKeyDown(key)
	{
		return this.keysDown.indexOf(key) > -1;
	}

});