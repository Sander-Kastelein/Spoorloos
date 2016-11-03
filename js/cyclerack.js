/**
 * Created by Ben on 3-11-2016.
 */

class CycleRack extends THREE.Object3D
{

    constructor(position, rotation, scale)

    {
        if(!scale) scale = new THREE.Vector3(0.005, 0.005, 0.003);
        if(!rotation) rotation = new THREE.Vector3(0, 0, 0);
        super();

        for(let i = 0; i < game.assets.cyclerack.children.length; i++)
        {
            let child = game.assets.cyclerack.children[i].clone();
            let texture = game.assets.cyclerackTexture;

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
        this.scale.x = scale.x;
        this.scale.z = scale.z;
        this.scale.y = scale.y;
    }

    update(delta)
    {


    }
}
