/**
 * Created by Ben on 2-11-2016.
 */

class SEntrance extends THREE.Object3D
{

    constructor()
    {
        super();

        let texture = game.assets.sEntranceTexture;
        let material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});

        for(let i = 0; i < game.assets.sEntrance.children.length; i++)
        {
            let child = game.assets.sEntrance.children[i].clone();

            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.scale.x = 0.01;
        this.scale.z = 0.01;
        this.scale.y = 0.01
        this.position.x = 60;
        this.position.z = 25;
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
