/**
 * Created by Ruud on 28-10-2016.
 */
        class Sun extends THREE.SpotLight
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
        this.position.y = 100;
        game.scene.add(this);
    }

    update(delta)
    {
        this.position.x = 400 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.z = 400 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
        //this.position.y = 200 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
    }
}