/**
 * Created by Ruud on 28-10-2016.
 */
        class Sun extends THREE.PointLight
{
    constructor()
    {
        let color = 0xffffff;
        let intensity = 1;
        let distance = 4000;

        super(color, intensity, distance);
        this.castShadow = true;
        this.target = game.stationFloor;
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
            this.position.x = 1000 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
            this.position.z = 1000 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
            this.position.y = 600 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
            this.updateMatrix();
            this.lastUpdate = 0;
        }
    }
}