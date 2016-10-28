/**
 * Created by Ruud on 27-10-2016.
 */
class Track extends THREE.Object3D
{

    constructor(trackObject)
    {
        super();

        this.data = trackObject;

        for(let i = 0; i < game.assets.track.children.length; i++)
        {
            let child = game.assets.track.children[i].clone();
            let texture = game.assets.trackTexture;

            child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
            this.add(child);
        }

        this.scale.x = 0.001;
        this.scale.z = 0.0050;
        this.scale.y = 0.001;

        game.scene.add(this);

        this.position.x = 12;
        this.position.z = 127;
        this.position.y = 0;



    }

    update(delta)
    {


    }
}