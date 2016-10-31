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
        stationFloorTexture.wrapS = stationFloorTexture.wrapT = THREE.RepeatWrapping;
        stationFloorTexture.repeat.set( 4, 4);

        // Station square
        let squareGeometry = new THREE.BoxGeometry(48,2,87.5);
        let squareMaterial = new THREE.MeshLambertMaterial({map: stationFloorTexture, side: THREE.doubleSided});
        let square = new THREE.Mesh(squareGeometry, squareMaterial);
        square.castShadow = true;
        square.receiveShadow = true;
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

        //pavementRailway 5 & 8
        let pavement58Geometry = new THREE.BoxGeometry(10,2,112.5);
        let pavement58Material = new THREE.MeshLambertMaterial({map:pavementTexture, side: THREE.doubleSided});
        let pavement58 = new THREE.Mesh(pavement58Geometry, pavement58Material);
        pavement58.position.x = 16.5;
        pavement58.position.z = -99;
        pavement58.position.y = 0;
        pavement58.rotation.y = 5/360*Math.PI;
        this.add(pavement58);

        // CUBE TEST SHADOW
        let cubeGeometry = new THREE.BoxGeometry(10,10,10);
        let cubeMaterial = new THREE.MeshLambertMaterial({color: 0x0000ff});
        let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(0,6,0);
        cube.receiveShadow = false;
        cube.castShadow = true;
        cube.wrapAround = true;
        this.add(cube);

        // add stationFloor to game
        game.scene.add(this);
        this.position.y = 1;
    }

    update()
    {

    }
}