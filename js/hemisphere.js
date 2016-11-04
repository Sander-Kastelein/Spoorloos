/**
 * Created by Ruud on 31-10-2016.
 */
 class Hemisphere extends THREE.HemisphereLight
 {
    constructor()
    {
        super();

<<<<<<< HEAD
        this.color.setHSL( 0.75, 1, 0.98 );
        this.groundColor.setHSL( 0.43, 0.46, 0.64 );
        this.intensity = 0.8;



=======
        this.color.setHSL( 0.59, 1, 0.97 );
        this.groundColor.setHSL( 0.59, 1, 0.97 );
        this.intensity = 0.3;
>>>>>>> 53a62b6541273065bf1a4f823d35e7822cb60fe0
        this.position.set( 0, 500, 0 );

        this.matrixAutoUpdate = false;
        this.updateMatrix();
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
