/**
 * Created by Ruud on 28-10-2016.
 */
class Spotlight extends THREE.SpotLight
{
    constructor()
    {
        let color = 0xffffff;
        let intensity = 5;
        let distance = 1000;

        super(color, intensity, distance);
        this.castShadow = true;
        this.position.set(0,100,400);

        game.scene.add(this);
    }

    update()
    {

    }
}