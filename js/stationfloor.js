/**
 * Created by Ruud on 26-10-2016.
 */
class StationFloor extends THREE.Object3D
{
    constructor()
    {
        super();
        // Stationfloor texture
        let stationFloorTexture = game.assets.stationFloorTexture;
        //stationFloorTexture.wrapS = stationFloorTexture.wrapT = THREE.RepeatWrapping;
        //stationFloorTexture.repeat.set( 40, 87.5);

        // Station square
        let squareGeometry = new THREE.BoxGeometry(48,2,87.5);
        let squareMaterial = new THREE.MeshLambertMaterial({map: stationFloorTexture, side: THREE.doubleSided});
        let square = new THREE.Mesh(squareGeometry, squareMaterial);
        this.add(square);

        // Station pavement
        // pavementRailway 4&5
        let pavementTexture = game.assets.stationFloorTexture;
        let pavement45Geometry = new THREE.BoxGeometry(10,2,162.5);
        let pavement45Material = new THREE.MeshLambertMaterial({map: pavementTexture, side: THREE.doubleSided});
        let pavement45 = new THREE.Mesh(pavement45Geometry, pavement45Material);
        pavement45.position.y = 0;
        pavement45.position.x = 19;
        pavement45.position.z = 125;
        this.add(pavement45);

        // pavementRailway 2 & 3
        let pavement23 = pavement45.clone();
        pavement23.position.x = 0;
        this.add(pavement23);

        // pavementRailway 1
        let pavement1 = pavement45.clone();
        pavement1.position.x = -19;
        this.add(pavement1);

        // add to game
        game.scene.add(this);
        this.position.y = 1;
    }

    update()
    {

    }
}