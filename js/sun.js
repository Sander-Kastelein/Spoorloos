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
        this.castShadow = false;
        this.target = game.stationFloor;
        this.shadowMapWidth = 1024;
        this.shadowMapHeight = 1024;
        game.scene.add(this);

        this.lastUpdate = 0;

        this.matrixAutoUpdate = false;
        this.updateMatrix();
    }

    update(delta)
    {
        this.lastUpdate += delta;

        if(this.lastUpdate > 60)
        {
            this.position.x = 700 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
            this.position.z = 700 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
            this.position.y = 200 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
            this.updateMatrix();
            this.lastUpdate = 0;
        }
    }
}