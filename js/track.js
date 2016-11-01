/**
 * Created by Ruud on 27-10-2016.
 */


class Track extends THREE.Object3D
{

    constructor(position, rotation)
    {
        super();

        for(let i = 0; i < game.assets.track.children.length; i++)
        {
            let child = game.assets.track.children[i].clone();
            let texture = game.assets.trackTexture;

            child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: false});
            child.castShadow = true;
            child.receiveShadow = true;
            child.wrapAround = true;
            this.add(child);
        }

        this.scale.x = 0.001;
        this.scale.z = 0.0050;
        this.scale.y = 0.001;

        game.scene.add(this);

        this.position.set(position.x, position.y, position.z);
        this.rotation.x = rotation.x;
        this.rotation.y = rotation.y;
        this.rotation.z = rotation.z;
    }

    update(delta)
    {


    }
}