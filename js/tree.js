/**
 * Created by Reinder on 2-11-2016.
 */


class Tree extends THREE.Object3D
{

    constructor()
    {
        super();

        for(let i = 0; i < game.assets.tree.children.length; i++)
        {
            let child = game.assets.tree.children[i].clone();
            let texture = game.assets.treeTexture;

            child.material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});
            child.castShadow = true;
            child.receiveShadow = true;
            child.wrapAround = true;
            this.add(child);
        }


        this.scale.x = 1.00;
        this.scale.z = 1.00;
        this.scale.y = 1.00;

            this.position.x = 40;
            this.position.z = 50;
            this.position.y = 0;
            this.rotateY(deg2rad(90));// = deg2rad(0);

        game.scene.add(this);


    }

    update(delta)
    {


    }
}
