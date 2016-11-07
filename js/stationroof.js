/**
 * Created by Reinder on 1-11-2016.
 */
/**
 * Created by Reinder on 31-10-2016.
 */


class Stationroof extends THREE.Object3D
{

    constructor()
    {
        super();

        let material = new THREE.MeshPhongMaterial({color: 0xa7a7a7});

        for(let i = 0; i < game.assets.stationroof.children.length; i++)
        {
            let child = game.assets.stationroof.children[i].clone();

            child.material = material;
            child.castShadow = true;
            child.receiveShadow = true;

            this.add(child);
        }

        this.scale.x = 6;
        this.scale.z = 25.10;
        this.scale.y = 2.50;
        this.position.x = 0;
        this.position.z = 50;
        this.reflectivity = 0.01;
        this.refractionRatio = 0.01;
        this.position.y = 0;
        this.rotateY(deg2rad(0));// = deg2rad(0);
        this.matrixAutoUpdate = false;
        this.updateMatrix();

        game.scene.add(this);
    }

    update()
    {
    }
}
