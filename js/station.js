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

        this.scale.x = 0.05;
        this.scale.z = 0.015;
        this.scale.y = 0.015;

        game.scene.add(this);

        this.position.x = -35;
        this.position.z = 6;
        this.position.y =0;
        this.rotateY(deg2rad(90));// = deg2rad(0);



    }

    update(delta)
    {


    }
}