/**
 * Created by Ben on 7-11-2016.
 */

class BackEntrance extends THREE.Object3D
{

    constructor()
    {
        super();

        let texture = game.assets.stationbuildingTexture;
        let material = new THREE.MeshPhongMaterial({map: texture, side: THREE.doubleSided});

        for(let i = 0; i < game.assets.backentrance.children.length; i++)
        {
            let child = game.assets.backentrance.children[i].clone();

            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.scale.x = 0.006;
        this.scale.z = 0.006;
        this.scale.y = 0.006;
        this.position.x = 7;
        this.position.z = 25;
        this.position.y = 2;
        this.rotateY(deg2rad(270));// = deg2rad(0);
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }

    update()
    {
    }
}

