/**
 * Created by Ben on 2-11-2016.
 */

class Building extends THREE.Object3D
{
    constructor()
    {
        super();

        for(let i = 0; i < game.assets.stationbuilding.children.length; i++)
        {
            let child = game.assets.stationbuilding.children[i].clone();
            let texture = game.assets.stationbuildingTexture;

            child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
            child.castShadow = false;
            child.receiveShadow = false;
            child.wrapAround = true;
            this.add(child);

            this.scale.x = 0.002;
            this.scale.z = 0.002;
            this.scale.y = 0.004;

            game.scene.add(this);

            this.position.x = -36.2;
            this.position.z = 0;
            this.position.y = 0;
            this.rotateY(deg2rad(-27));
        }
    }




    update(delta)
    {


    }
}