/**
 * Created by Ruud on 28-10-2016.
 */

class Sun extends THREE.SpotLight
{
    constructor()
    {
        let color = 0xffffff;
        let intensity = 0.3;
        let distance = 1250;

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
        this.position.x = 100 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.z = 100 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.y = 600 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));

        this.updateMatrix();
        this.lastUpdate = 0;
    }
}