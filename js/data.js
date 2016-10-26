"use strict";

/*
	data.js

	Gets data from the PHP endpoint
*/

const API_POLL_INTERVAL = 60 * 1000; // 60 000 ms => 60s => 1m

var Data;

(new class{

	constructor()
	{
		Data = this;

		this.trains = [];
		setInterval(this.interval.bind(this), API_POLL_INTERVAL);

	}

	interval()
	{
		$.getJSON('/api', (trains) => {
			console.log(trains);
		});
	}



})