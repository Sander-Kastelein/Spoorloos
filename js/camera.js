
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

		if(Keyboard.isKeyDown("D"))
		{
			this.angle += delta;			
		}
		if(Keyboard.isKeyDown("A"))
		{
			this.angle -= delta;
		}


		this.position.x = 30 * Math.sin(this.angle);
		this.position.z = 40 * Math.cos(this.angle);
		this.position.y = 30 + 10 * Math.cos(this.angle/2);

		this.lookAt(new THREE.Vector3(0,0,0));

	}
}