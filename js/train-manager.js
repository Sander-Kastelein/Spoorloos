
class TrainManager
{

	constructor()
	{
		this.trains = [];
		Data.subscribe(this.onData.bind(this));
	}

	onData(trains)
	{
		for(let i = 0; i < trains.length; i++)
		{
			let train = this.findOrCreateTrainByDataObject(trains[i]);
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
		

	}

	findTrainById(id)
	{
		for(let i = 0; i < this.trains.length; i++)
		{
			let train = this.trains[i];
			if(train.data['ritNummer'] === id) return train;
		}
		return false;
	}

	findOrCreateTrainByDataObject(trainObject)
	{
		let train = this.findTrainById(trainObject['ritNummer']);

		if(!train)
		{
			train = new Train(trainObject);
			this.trains.push(train);
		}
		return train;
	}

}