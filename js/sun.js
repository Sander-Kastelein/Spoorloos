/**
 * Created by Ruud on 28-10-2016.
 */
class Sun extends THREE.PointLight
{
    constructor()
    {
        let color = 0xffffff;
        let intensity = 2;
        let distance = 2000;
        let decay = 1.5;

        super(color, intensity, distance,decay);
        this.castShadow = true;
        this.shadowCameraVisible = true;
        this.shadowDarkness = 0.5;
        this.shadowMapWidth = 1024;
        this.shadowMapHeight = 1024;
        game.scene.add(this);
    }

    update(delta)
    {
        this.position.x = 100 * (1 * Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.z = 100 * (1 * Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.y = 200 * (1 * Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
    }
}