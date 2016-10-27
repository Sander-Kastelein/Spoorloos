/**
 * Created by Ruud on 27-10-2016.
 */
class Ground extends THREE.Mesh
{
    constructor()
    {
        let groundTexture = game.assets.groundTexture;
        groundTexture.wrapS = THREE.RepeatWrapping;
        groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set( 100, 100 );

        let groundMaterial = new THREE.MeshLambertMaterial({map: groundTexture, side: THREE.doubleSided});
        let groundGeometry = new THREE.PlaneBufferGeometry(1000,1000);

        super(groundGeometry, groundMaterial);
        this.rotation.x = -0.5*Math.PI;
        game.scene.add(this);
    }

    update()
    {

    }
}