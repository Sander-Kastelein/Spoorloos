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
        let angle = 1.05;
        let penumbra = 0.3;
        let decay = 1.5;

        super(color, intensity, distance, angle, penumbra, decay);
        this.castShadow = true;
        this.position.y = 1000;
        this._angle = 0;
        game.scene.add(this);
    }

    update(delta)
    {
        this._angle += 0.1 * delta;
        this.position.x = Math.abs(5 * Math.sin(this._angle));
        this.position.z = Math.abs(5 * Math.sin(this._angle));
        console.log(this.position);
    }
}