

class Controller extends THREE.OrbitControls
{


    constructor()
    {
        super(game.camera, window);
        this.enableDamping = true;
        this.dampingFactor = 0.25;
        this.enableZoom = true;
    }


    update(delta)
    {
    	super.update();
    }


}