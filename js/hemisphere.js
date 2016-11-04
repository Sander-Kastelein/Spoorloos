/**
 * Created by Ruud on 31-10-2016.
 */
 class Hemisphere extends THREE.HemisphereLight
 {
    constructor()
    {
        super();

        this.color.setHSL( 0.75, 1, 0.98 );
        this.groundColor.setHSL( 0.43, 0.46, 0.64 );
        this.intensity = 0.8;



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
