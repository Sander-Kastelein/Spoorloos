/**
 * Created by Ruud on 4-11-2016.
 */

class PlatformRoof extends THREE.Object3D
{

    constructor(position, rotation, scale)

    {
        if(!scale) scale = new THREE.Vector3(1.6, 2.2, 38);
        if(!rotation) rotation = new THREE.Vector3(0, deg2rad(0), 0);
        super();

        let material = new THREE.MeshPhongMaterial({color: 0xa7a7a7});

        for(let i = 0; i < game.assets.platformroof.children.length; i++)
        {
            let child = game.assets.platformroof.children[i].clone();
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


