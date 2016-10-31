/**
 * Created by Ruud on 28-10-2016.
 */
class pointlight extends THREE.PointLight
{
    constructor()
    {
        let color = 0xffffff;
        let intensity = 2;
        let distance = 2000;
        let decay = 1.5;

        super(color, intensity, distance,decay);
        this.castShadow = true;
        this.position.y = 100;
        this._angle = 0;
        game.scene.add(this);
    }

    update(delta)
    {
        this._angle += 0.01 * delta;
        this.position.x = 100 * (1 * Math.sin(this._angle));
        this.position.z = 100 * (1 * Math.cos(this._angle));
    }
}