/**
 * Created by Ben on 4-11-2016.
 */

class PlazaTower extends THREE.Object3D
{

    constructor()
    {
        super();

        let texture = game.assets.plazatowerTexture;
        let material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});

        for(let i = 0; i < game.assets.plazatower.children.length; i++)
        {
            let child = game.assets.plazatower.children[i].clone();

            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.scale.x = 0.001;
        this.scale.z = 0.001;
        this.scale.y = 0.001
        this.position.x = 95;
        this.position.z = 100;
        this.position.y = 0;
        this.rotateY(deg2rad(90));// = deg2rad(0);
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }

    update()
    {
    }
}
