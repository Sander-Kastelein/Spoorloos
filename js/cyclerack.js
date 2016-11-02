/**
 * Created by Ben on 2-11-2016.
 */

class CycleRack extends THREE.Object3D
{
    constructor()
    {
        super();

        for(let i = 0; i < game.assets.cyclerack.children.length; i++)
        {
            let child = game.assets.cyclerack.children[i].clone();
            let texture = game.assets.cyclerackTexture;

            child.material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});
            child.castShadow = false;
            child.receiveShadow = false;
            child.wrapAround = true;
            this.add(child);

            this.scale.x = 0.005;
            this.scale.z = 0.005;
            this.scale.y = 0.003;

            game.scene.add(this);

            this.position.x = 50;
            this.position.z = -20;
            this.position.y = 0;
        }
    }




    update(delta)
    {


    }
}
