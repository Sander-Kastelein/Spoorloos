
class Camera extends THREE.PerspectiveCamera
{
	
	constructor(fov, aspect, near, far)
	{
		super(fov, aspect, near, far); // this = new THREE.PerspectiveCamera(fov, aspect, near, far);
		game.scene.add(this);


		this.position.y = 40;


		this.angle = 0;
		this.zoom = 0.5;

		document.addEventListener("mousewheel", this.handleScrollEvent.bind(this), false);
		// this.handleScrollEvent
	}


	update(delta)
	{

		if(Keyboard.isKeyDown("d"))
		{
			this.angle += 2*delta;
		}
		if(Keyboard.isKeyDown("a"))
		{
			this.angle -= 2*delta;
		}
		if(Keyboard.isKeyDown("w"))
		{
			this.position.y += 100*delta;
		}
		if(Keyboard.isKeyDown("s"))
		{
			this.position.y -= 100*delta;
		}

		this.position.y = this.position.y < 3 ? 3 : this.position.y;


		this.position.x = this.zoom * 100 * Math.sin(this.angle);
		this.position.z = this.zoom * 100 * Math.cos(this.angle);
		//this.position.y = 10 + 10 * Math.cos(this.angle/2);

		this.lookAt(new THREE.Vector3(0,0,0));
		//this.lookAt(game.track.children[0]);
	}

	handleScrollEvent(e)
	{
		let delta = e.deltaY/1000;
		this.zoom += delta;
		if(this.zoom > 4) this.zoom = 4;
		if(this.zoom < 0.01) this.zoom = 0.01;
	}


	
}