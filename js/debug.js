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


window.addEventListener('keyup', (e) => {
	if(e.key == "p") alert(game.trainManager.visibleTrains.length);

	if(e.key == "t")
	{
		// TP
		let train = game.trainManager.visibleTrains[0];
		if(train)
		{
			game.camera.position.set(train.position.x, train.position.y, train.position.z);
		}
	}


	if(e.key == "/")
	{
		let train = game.trainManager.visibleTrains[0];
		if(train)
		{
			alert("Ik vertrek over: " + Math.round(train.timeFromDeparture) + " seconden!");
		}
	}

});


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