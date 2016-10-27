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

		this.subscribers = [];
		this.trains = [];
		setInterval(this.interval.bind(this), API_POLL_INTERVAL);

	}

	interval()
	{
		$.getJSON('http://sanderkastelein.nl/api/api.json', (trains) => {
			this.trains = trains;
			for(let i = 0; i < this.subscribers.length; i++)
			{
				let subscriber = this.subscribers[i];
				subscriber(trains);
			}
		});
	}

	subscribe(callback)
	{
		console.log("Subscribe");
		this.subscribers.push(callback);
	}

})