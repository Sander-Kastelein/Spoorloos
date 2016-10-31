/**
 * Created by Ruud on 27-10-2016.
 */
class Track extends THREE.Object3D
{

    constructor(x, y, z)
    {
        super();


        for(let i = 0; i < game.assets.track.children.length; i++)
        {
            let child = game.assets.track.children[i].clone();
            let texture = game.assets.trackTexture;

            child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
            child.castShadow = true;
            child.receiveShadow = true;
            this.add(child);
        }

        this.scale.x = 0.001;
        this.scale.z = 0.0050;
        this.scale.y = 0.001;

        game.scene.add(this);

        this.position.x = x;
        this.position.z = z;
        this.position.y = y;


        game.trackManager.tracks.push(this);
    }

    update(delta)
    {


    }
}