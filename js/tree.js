/**
 * Created by Reinder on 27-10-2016.
 */


class Tree extends THREE.Object3D
{

    constructor(position, rotation, scale)

    {
        if(!scale) scale = new THREE.Vector3(1.00, 1.00, 1.00);
        if(!rotation) rotation = new THREE.Vector3(0, 0, 0);
        super();

        let texture = game.assets.treeTexture;
        let material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: false});

        for(let i = 0; i < game.assets.tree.children.length; i++)
        {
            let child = game.assets.tree.children[i].clone();

            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.position.set(position.x, position.y, position.z);
        this.rotation.x = rotation.x;
        this.rotation.y = rotation.y;
        this.rotation.z = rotation.z;
        this.scale.x = scale.x; //0.001;
        this.scale.z = scale.z; //0.0050;
        this.scale.y = scale.y; //0.001;
        this.matrixAutoUpdate = false;
        this.updateMatrix();

        game.scene.add(this);
    }

    update()
    {
    }
}