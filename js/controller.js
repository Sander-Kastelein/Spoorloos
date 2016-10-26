/**
 * Created by Ruud on 26-10-2016.
 */
class Controller extends THREE.OrbitControls
{
    constructor(camera){
        super(camera);
        this.enableDamping = true;
        this.dampingFactor = 0.25;
        this.enableZoom = true;
    }

}