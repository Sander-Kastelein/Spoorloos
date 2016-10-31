/**
 * Created by Reinder on 31-10-2016.
 */
/**
 * Created by Reinder on 31-10-2016.
 */


class Station extends THREE.Object3D
{

    constructor(stationObject)
    {
        super();

        this.data = stationObject;

        for(let i = 0; i < game.assets.station.children.length; i++)
        {
            let child = game.assets.station.children[i].clone();
            let texture = game.assets.stationTexture;

            child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
            child.castShadow = true;
            child.receiveShadow = true;
            child.wrapAround = true;
            this.add(child);
        }

        this.scale.x = 6.00;
        this.scale.z = 6.00;
        this.scale.y = 10.00;

        game.scene.add(this);

        this.position.x = 18.5;
        this.position.z = 30;
        this.position.y = -8;
        this.rotateY(deg2rad(0));// = deg2rad(0);



    }

    update(delta)
    {


    }
}
