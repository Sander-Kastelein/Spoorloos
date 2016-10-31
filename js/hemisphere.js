/**
 * Created by Ruud on 31-10-2016.
 */
class Hemisphere extends THREE.HemisphereLight
{
    constructor()
    {
        let skyColor = 0x0000ff;
        let groundColor = 0xffffffa;
        let intensity = 0.3;

        super(skyColor, groundColor, intensity)
        this.color.setHSL( 0.6, 1, 0.6 );
        this.groundColor.setHSL( 0.095, 1, 0.75 );
        this.position.set( 0, 500, 0 );
        game.scene.add(this);
    }

    update()
    {

    }
}
