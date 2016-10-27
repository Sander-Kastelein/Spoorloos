/**
 * Created by Ruud on 26-10-2016.
 */
class StationFloor extends THREE.Mesh
{
    constructor()
    {
        let squareGeometry = new THREE.BoxGeometry(48,2,87.5);

        let squareTexture = game.assets.stationFloorTexture; 

        squareTexture.wrapS = squareTexture.wrapT = THREE.RepeatWrapping;
        squareTexture.repeat.set( 40, 87.5);
        let squareMaterial = new THREE.MeshLambertMaterial({map: squareTexture, side: THREE.doubleSided});



        super(squareGeometry, squareMaterial);
        game.scene.add(this);
    }

    update(delta)
    {
        this.position.y = 1;
    }

}