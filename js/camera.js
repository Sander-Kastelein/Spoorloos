
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

		this.angle += delta;


		this.position.x = 50 * Math.sin(this.angle);
		this.position.z = 75 * Math.cos(this.angle);
		this.position.y = 60 + 20 * Math.cos(this.angle/2);

		this.lookAt(game.scene);

	}
}