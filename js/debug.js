// debug.js

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();





window.addEventListener( 'mousedown', (event) => {
	event.preventDefault();

	mouse.x = ( event.clientX / game.renderer.domElement.clientWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / game.renderer.domElement.clientHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, game.camera );

	var intersects = raycaster.intersectObjects( game.trainManager.trains ); 

	if (intersects.length > 0)
	{
		let train = intersects[0].object;
		console.log("Je hebt op de volgende trein gedrukt:");
		console.log(train);
	}
}, false );

