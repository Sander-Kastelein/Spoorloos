/**
 * Created by Reinder on 3-11-2016.
 */


class Streetlamp extends THREE.Object3D
{

    constructor(position, rotation, scale)

    {
        if(!scale) scale = new THREE.Vector3(1.00, 1.00, 1.00);
        if(!rotation) rotation = new THREE.Vector3(0, 0, 0);
        super();

        for(let i = 0; i < game.assets.streetlamp.children.length; i++)
        {
            let child = game.assets.streetlamp.children[i].clone();
            let texture = game.assets.streetlampTexture;

            child.material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: false});
            child.castShadow = true;
            child.receiveShadow = true;
            this.add(child);
        }

        game.scene.add(this);

        this.position.set(position.x, position.y, position.z);
        this.rotation.x = rotation.x;
        this.rotation.y = rotation.y;
        this.rotation.z = rotation.z;
        this.scale.x = scale.x; //0.001;
        this.scale.z = scale.z; //0.0050;
        this.scale.y = scale.y; //0.001;
    }

    update()
    {
    }
}

