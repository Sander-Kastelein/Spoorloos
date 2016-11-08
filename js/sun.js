/**
 * Created by Ruud on 28-10-2016.
 */

class Sun extends THREE.SpotLight
{
    constructor()
    {
        let color = 0xf0f0f0;
        let intensity = 1.7;
        let distance = 3000;
        let angle = deg2rad(70);

        super(color, intensity, distance, angle);

        game.scene.add(this);

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
        this.position.x = 500 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.z = 500 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.y = 100;

        this.updateMatrix();
        this.lastUpdate = 0;
    }
}