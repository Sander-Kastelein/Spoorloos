
class Camera extends THREE.PerspectiveCamera
{
	
	constructor(fov, aspect, near, far)
	{
		super(fov, aspect, near, far); // this = new THREE.PerspectiveCamera(fov, aspect, near, far);
		game.scene.add(this);

		this.position.x = 10;
		this.position.y = 40;
		this.position.z = 10;

		this.lookAt(game.scene);
	}


	update(delta)
	{
		
	}
}