/**
 * Created by Ben on 4-11-2016.
 */

class Cyclerackroof extends THREE.Object3D
{

    constructor()
    {
        super();

        for(let i = 0; i < game.assets.stationroof.children.length; i++)
        {
            let child = game.assets.stationroof.children[i].clone();
            let texture = game.assets.stationroofTexture;

            child.material = new THREE.MeshPhongMaterial({color: 0x666666});
            child.castShadow = false;
            child.receiveShadow = false;

            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.scale.x = 1.5;
        this.scale.z = 17.5;
        this.scale.y = 1;

        game.scene.add(this);

        this.position.x = 55;
        this.position.z = 15;
        this.position.y = 0.5;

        this.rotateY(deg2rad(0));// = deg2rad(0);

        this.matrixAutoUpdate = false;
        this.updateMatrix();
    }

    update()
    {
    }
}


