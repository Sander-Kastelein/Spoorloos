/**
 * Created by Ruud on 28-10-2016.
 */
class Spotlight extends THREE.SpotLight
{
    constructor()
    {
        let color = 0xffffff;
        let intensity = 2;
        let distance = 2000;

        super(color, intensity, distance);
        this.castShadow = true;
        this.position.set(0,200,700);
        //this.angle = 0;

        game.scene.add(this);
    }

    update(delta)
    {
        //this.angle += 0.5 * delta;
        //this.position.x = 10 * Math.sin(this.angle);
        //this.position.z = 10 * Math.cos(this.angle);
        //this.position.y = 500 * Math.cos(this.angle/2);
    }
}