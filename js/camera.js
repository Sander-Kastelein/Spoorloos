
class Camera extends THREE.PerspectiveCamera
{
	
	constructor(fov, aspect, near, far)
	{
		super(fov, aspect, near, far); // this = new THREE.PerspectiveCamera(fov, aspect, near, far);
		game.scene.add(this);
	}


	update(delta)
	{
		
	}
}