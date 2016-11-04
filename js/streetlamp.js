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

            child.material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});
            child.add(new THREE.PointLight(0xff0000, 2,20,0.9));
            child.castShadow = true;
            child.receiveShadow = true;
            this.add(child);
        }

        this.position.set(position.x, position.y, position.z);
        this.rotation.x = rotation.x;
        this.rotation.y = rotation.y;
        this.rotation.z = rotation.z;
        this.scale.x = scale.x;
        this.scale.z = scale.z;
        this.scale.y = scale.y;

        game.scene.add(this);
    }

    update()
    {
    }
}

