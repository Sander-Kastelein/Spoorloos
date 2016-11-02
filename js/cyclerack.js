/**
 * Created by Ben on 2-11-2016.
 */

//Trying to get this shit working

class CycleRack extends THREE.Object3D
{

    constructor(position, rotation, scale)
    {
        super();

        for(let i = 0; i < game.assets.cycleRack.children.length; i++)
        {
            let child = game.assets.cycleRack.children[i].clone();
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
