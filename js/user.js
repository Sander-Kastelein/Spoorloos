


class User extends THREE.FirstPersonControls
{
	
	constructor(object, domElement)
	{
		super(object, domElement);

		this.saveState();
	}


	update(delta)
	{

		if(localStorage.hasState) this.retrieveState();

		super.update(delta);

		this.saveState();
	}

	retrieveState()
	{
		this.target = localStorage.target; 
		this.object.position = localStorage.oPosition;
		this.object.zoom = localStorage.oZoom;
	}

	saveState()
	{
		localStorage.target = this.target;
		localStorage.oPosition = this.object.position;
		localStorage.oZoom = this.object.zoom;
		localStorage.retrieveState = true;
	}


}