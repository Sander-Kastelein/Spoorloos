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


document.addEventListener('DOMContentLoaded', function()
{
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );


function animate() {

    stats.begin();

    // monitored code goes here

    stats.end();

    requestAnimationFrame( animate );

}

requestAnimationFrame( animate );

});