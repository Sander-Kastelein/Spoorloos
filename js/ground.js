/**
 * Created by Ruud on 27-10-2016.
 */
class Ground extends THREE.Mesh
{
    constructor()
    {
        super();
        let groundTexture = game.assets.groundTexture;
        let groundMaterial = new THREE.MeshPhongMaterial({map: groundTexture, side: THREE.doubleSided});
        let groundGeometry = new THREE.PlaneBufferGeometry(1000,1000);
        let ground = new THREE.Mesh(groundGeometry, groundMaterial);

        groundTexture.wrapS = THREE.RepeatWrapping;
        groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set( 100, 100 );

        ground.rotation.x = -0.5*Math.PI;
        ground.receiveShadow = true;

        this.add(ground);
        this.matrixAutoUpdate = false;
        this.updateMatrix();

        game.scene.add(this);
    }

    update()
    {

    }
}