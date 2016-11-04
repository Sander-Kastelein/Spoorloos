/**
 * Created by Reinder on 1-11-2016.
 */
/**
 * Created by Reinder on 31-10-2016.
 */


class Stationroof extends THREE.Object3D
{

    constructor(stationroofObject)
    {
        super();

        this.data = stationroofObject;

        for(let i = 0; i < game.assets.stationroof.children.length; i++)
        {
            let child = game.assets.stationroof.children[i].clone();
            let texture = game.assets.stationroofTexture;

            child.material = new THREE.MeshPhongMaterial({color: 0xffffff});
            child.castShadow = true;
            child.receiveShadow = true;

            this.add(child);
        }

        this.scale.x = 6;
        this.scale.z = 25.10;
        this.scale.y = 3.15;

        game.scene.add(this);

        this.position.x = 0;
        this.position.z = 50;
        this.position.y = 0;

        this.rotateY(deg2rad(0));// = deg2rad(0);
    }

    update()
    {
    }
}
