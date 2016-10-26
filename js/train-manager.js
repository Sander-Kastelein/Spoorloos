
class TrainManager
{

	constructor()
	{
		this.trains = [];
		Data.subscribe(this.onData.bind(this));
	}

	onData(trains)
	{
		this.reset();
		for(let i = 0; i < trains.length; i++)
		{
			let train = trains[i];
			this.trains.push(new Train(train));
		}
	}

	reset()
	{
		for(let i = 0; i < this.trains.length; i++)
		{
			let train = this.trains[i];
			train.destroy();
		}
		this.trains = [];
	}


	update(delta)
	{
		for(let i = 0; i < this.trains.length; i++)
		{
			let train = this.trains[i];
			train.update(delta);
		}

	}

}