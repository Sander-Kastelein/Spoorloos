/**
 * Created by Reinder on 31-10-2016.
 */


class Hokje extends THREE.Object3D
{

    constructor(hokjeObject)
    {
        super();

        this.data = hokjeObject;

        for(let i = 0; i < game.assets.hokje.children.length; i++)
        {
            let child = game.assets.hokje.children[i].clone();
            let texture = game.assets.hokjeTexture;

            child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
            this.add(child);
        }

        this.scale.x = 0.01;
        this.scale.z = 0.01;
        this.scale.y = 0.01;

        game.scene.add(this);

        this.position.x = 15;
        this.position.z = -55;
        this.position.y = 2;
        this.rotateY(deg2rad(90));// = deg2rad(0);



    }

    update(delta)
    {


    }
}
