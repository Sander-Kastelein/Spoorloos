/**
 * Created by Reinder on 31-10-2016.
 */


class ShelterPew extends THREE.Object3D
{

    constructor()
    {
        super();

        let texture = game.assets.shelterPew;
        let material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});

        for(let i = 0; i < game.assets.hokje.children.length; i++)
        {
            let child = game.assets.hokje.children[i].clone();

            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;

            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.scale.x = 0.01;
        this.scale.z = 0.01;
        this.scale.y = 0.01;
        this.position.x = 15;
        this.position.z = -55;
        this.position.y = 2;
        this.rotateY(deg2rad(90));
        this.matrixAutoUpdate = false;
        this.updateMatrix();

        game.scene.add(this);
    }

    update()
    {
    }
}
