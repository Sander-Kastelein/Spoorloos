/**
 * Created by Ruud on 28-10-2016.
 */

class Sun extends THREE.SpotLight
{
    constructor()
    {
        let color = 0xffffff;
        let intensity = 1.3;
        let distance = 3000;
        //let angle = deg2rad(70);

        super(color, intensity, distance);
        
        
        this.helper = new THREE.SpotLightHelper(this);

        game.scene.add(this, this.helper);

        this.castShadow = true;
        this.shadowMapWidth = 1024;
        this.shadowMapHeight = 1024;

        this.lastUpdate = 0;

        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);

        this.updatePosition();
        
    }

    update(delta)
    {

        this.lastUpdate += delta;

        if(this.lastUpdate > 1)
        {
            this.updatePosition();
        }

    }

    updatePosition()
    {
        this.position.x = 400 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.z = 400 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.y = 100  // (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));

        this.updateMatrix();
        this.lastUpdate = 0;
    }
}