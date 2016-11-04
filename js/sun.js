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
    }

    update(delta)
    {
        this.position.x = 700 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.z = 700 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.y = 200 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
    }
}