
class Camera extends THREE.PerspectiveCamera
{
	
	constructor(fov, aspect, near, far)
	{
		super(fov, aspect, near, far); // this = new THREE.PerspectiveCamera(fov, aspect, near, far);
		game.scene.add(this);


		this.position.y = 40;
	

		this.angle = 0;
	}


	update(delta)
	{

		if(Keyboard.isKeyDown("d"))
		{
			this.angle += delta;			
		}
		if(Keyboard.isKeyDown("a"))
		{
			this.angle -= delta;
		}
		if(Keyboard.isKeyDown("w"))
		{
			this.position.y += 100*delta;
		}
		if(Keyboard.isKeyDown("s"))
		{
			this.position.y -= 100*delta;
		}


		this.position.x = 60 * Math.sin(this.angle);
		this.position.z = 100 * Math.cos(this.angle);
		//this.position.y = 10 + 10 * Math.cos(this.angle/2);

		this.lookAt(new THREE.Vector3(0,0,0));

	}
}