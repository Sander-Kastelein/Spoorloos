/**
 * Created by Ruud on 7-11-2016.
 */

class Fence extends THREE.Object3D
{

    constructor(position, rotation, scale)

    {
        if(!position) position = new THREE.Vector3(35   ,0, 0);
        if(!scale) scale = new THREE.Vector3(0.03, 0.03, 0.03);
        if(!rotation) rotation = new THREE.Vector3(0, deg2rad(90), 0);
        super();
        let texture = game.assets.fenceTexture
        let material = new THREE.MeshPhongMaterial({map: texture, side: THREE.doubleSided});

        for(let i = 0; i < game.assets.fence.children.length; i++)
        {
            let child = game.assets.fence.children[i].clone();
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