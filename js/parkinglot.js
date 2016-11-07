/**
 * Created by Reinder on 04-11-2016.
 */

class Parkinglot extends THREE.Object3D
{

    constructor()
    {
        super();
        let material = new THREE.MeshPhongMaterial({color: 0x424242});

        for(let i = 0; i < game.assets.parkinglot.children.length; i++)
        {
            let child = game.assets.parkinglot.children[i].clone();

            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;

            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.scale.x = this.scale.z = 0.04;
        this.scale.y = 0.02;
        this.rotateY(deg2rad(90));
        this.position.x = 100;
        this.position.z = -30;
        this.position.y = 0;
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }

    update()
    {
    }
}
