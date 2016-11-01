/**
 * Created by Reinder on 1-11-2016.
 */


class Stationtower extends THREE.Object3D
{

    constructor(stationtowerObject)
    {
        super();

        this.data = stationtowerObject;

        for(let i = 0; i < game.assets.stationtower.children.length; i++)
        {
            let child = game.assets.stationtower.children[i].clone();
            let texture = game.assets.stationtowerTexture;

            child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
            child.castShadow = true;
            child.receiveShadow = true;
            child.wrapAround = true;
            this.add(child);
        }

        this.scale.x = 0.50;
        this.scale.z = 0.70;
        this.scale.y = 0.55;

        game.scene.add(this);

        this.position.x = -40;
        this.position.z = 0;
        this.position.y = 18;

        this.rotateY(deg2rad(0));// = deg2rad(0);



    }

    update(delta)
    {


    }
}
