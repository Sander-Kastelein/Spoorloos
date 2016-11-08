/**
 * Created by Reinder on 31-10-2016.
 */


class ShelterPew extends THREE.Object3D
{

    constructor()
    {
        super();

        let material = new THREE.MeshPhongMaterial({color : 0x424242});

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
        this.scale.x = 0.015;
        this.scale.z = 0.015;
        this.scale.y = 0.015;
        this.position.x = 12;
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
