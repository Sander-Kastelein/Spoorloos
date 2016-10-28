// debug.js

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();





window.addEventListener( 'mousedown', (event) => {
	event.preventDefault();

	mouse.x = ( event.clientX / game.renderer.domElement.clientWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / game.renderer.domElement.clientHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, game.camera );


	// Todo raycaster train intersect
}, false );

