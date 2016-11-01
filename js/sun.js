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
        this.castShadow = false;
        this.shadowCameraVisible = false;
        this.shadowDarkness = 0.9;
        this.shadowMapWidth = 256;
        this.shadowMapHeight = 256;
        
        game.scene.add(this);
    }

    update(delta)
    {
        this.position.x = 100 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.z = 100 * (Math.cos(deg2rad(getCurrentSunAngleInDegrees())));
        this.position.y = 1000 * (Math.sin(deg2rad(getCurrentSunAngleInDegrees())));
    }
}