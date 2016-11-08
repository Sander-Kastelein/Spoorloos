/**
 * Created by Ruud on 31-10-2016.
 */
 class Hemisphere extends THREE.HemisphereLight
 {
    constructor()
    {
        super();

        this.color.setHSL( 0, 1, 0.95);
        this.groundColor.setHSL( 0.43, 0.46, 1 );
        this.intensity = 0.3;

        this.position.set( 0, 1000, 0 );

        this.matrixAutoUpdate = false;
        this.updateMatrix();

        this.on();
    }

    on()
    {
        // Turn lights on
        game.scene.add(this);
    }

    off()
    {
        // Turn lights off
        game.scene.remove(this);
    }

    update()
    {
        
    }
}
