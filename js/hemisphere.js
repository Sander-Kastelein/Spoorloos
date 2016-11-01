/**
 * Created by Ruud on 31-10-2016.
 */
class Hemisphere extends THREE.HemisphereLight
{
    constructor()
    {
        let skyColor = 0xff0000;
        let groundColor = 0xffffffa;
        let intensity = 0.3;

        super(skyColor, groundColor, intensity)
        this.color.setHSL(1.7, 0.11, 0.65);
        this.groundColor.setHSL( 0.095, 1, 0.75 );
        this.position.set( 0, 500, 0 );
        game.scene.add(this);
    }

    update()
    {

    }
}
