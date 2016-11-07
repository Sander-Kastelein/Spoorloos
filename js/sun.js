/**
 * Created by Ruud on 28-10-2016.
 */

class Sun extends THREE.Object3D
{
    constructor()
    {
        super()
        let color = 0xffffff;
        let intensity = 2;
        let distance = 4000;
        //let angle = deg2rad(90);
        let anchor = new THREE.Object3D();
        anchor.position.set(0,0,0);

        var sun = new THREE.SpotLight(color, intensity, distance);
        let helper = new THREE.SpotLightHelper(sun);
        this.add(sun, helper);

        this.position.set(40,400,-1000); // debug purposes

        this.castShadow = true;
        this.target = anchor;
        this.shadowMapWidth = 1024;
        this.shadowMapHeight = 1024;

        this.position.y = 40;

        this.lastUpdate = 0;

        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }

    update(delta)
    {

        this.lastUpdate += delta;

        if(this.lastUpdate > 60)
        {
            this.updatePosition();
        }

            //this.position.x = 1000 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
            //this.position.z = 1000 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
            //this.position.y = 600 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
    }

    updatePosition()
    {
        this.position.x = 1000 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.z = 1000 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.y = 600 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.updateMatrix();
        this.lastUpdate = 0;
    }
}