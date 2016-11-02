/**
 * Created by Ben on 2-11-2016.
 */

class SEntrance extends THREE.Object3D
{

    constructor()
    {
        super();

        for(let i = 0; i < game.assets.sEntrance.children.length; i++)
        {
            let child = game.assets.sEntrance.children[i].clone();
            let texture = game.assets.sEntranceTexture;

            child.material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});
            child.castShadow = true;
            child.receiveShadow = true;
            child.wrapAround = true;
            this.add(child);
        }

        this.scale.x = 0.01;
        this.scale.z = 0.01;
        this.scale.y = 0.01;

        game.scene.add(this);

        this.position.x = 60;
        this.position.z = 47;
        this.position.y = 0;
        this.rotateY(deg2rad(90));// = deg2rad(0);



    }

    update(delta)
    {


    }
}
