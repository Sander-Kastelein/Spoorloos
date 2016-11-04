/**
 * Created by Ruud on 31-10-2016.
 */
 class Hemisphere extends THREE.HemisphereLight
 {
    constructor()
    {
        super();

        this.color.setHSL( 0.59, 1, 0.97 );
        this.groundColor.setHSL( 0.59, 1, 0.97 );
        this.intensity = 0.3;
        this.position.set( 0, 500, 0 );

        this.matrixAutoUpdate = false;
        this.updateMatrix();

        game.scene.add(this);
    }

    on()
    {
        // Turn lights on
    }

    off()
    {
        // Turn lights off
    }

    update()
    {
        
    }
}
