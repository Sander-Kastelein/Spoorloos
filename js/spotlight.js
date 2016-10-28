/**
 * Created by Ruud on 28-10-2016.
 */
class Spotlight extends THREE.SpotLight
{
    constructor()
    {
        let color = 0xffffff;
        let intensity = 5;
        let distance = 1200;

        super(color, intensity, distance);
        this.castShadow = true;
        this.position.set(0,1000,100);
        this.angle = 0;

        game.scene.add(this);
    }

    update(delta)
    {
        this.angle += delta;
        this.position.x = 60 * Math.sin(this.angle);
        this.position.z = 100 * Math.cos(this.angle);
        this.position.y = 10 + 10 * Math.cos(this.angle/2);
    }
}