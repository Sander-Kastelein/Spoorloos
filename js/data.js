"use strict";

/*
	data.js

	Gets data from the PHP endpoint
	*/

const API_POLL_INTERVAL = 1 * 1000; // 1s

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
		$.getJSON('http://sanderkastelein.nl/api/api.json', this.handleData.bind(this));
	}

	handleData(trains)
	{

		if(trains.length === 0)
		{
			return this.failedApiCall();
		}

		for(let train of trains)
		{
			if(train.actueleAankomstTijd === 3600)
			{
				return this.failedApiCall();
			}
		}
		
		this.trains = trains;

		this.successfulApiCall();
	}

	failedApiCall()
	{
		if(game)
			game.pause();
	}

	successfulApiCall()
	{

		for(let i = 0; i < this.subscribers.length; i++)
		{
			let subscriber = this.subscribers[i];
			subscriber(this.trains);
		}

		if(game)
			game.resume();
	}

	subscribe(callback)
	{
		console.log("Subscribe");
		this.subscribers.push(callback);
	}
})