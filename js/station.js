/**
 * Created by Reinder on 31-10-2016.
 */
/**
 * Created by Reinder on 31-10-2016.
 */


class Station extends THREE.Object3D
{

    constructor()
    {
        super();

        let texture = game.assets.stationbuildingTexture;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 100,100);
        let material = new THREE.MeshPhongMaterial({map: texture});

        for(let i = 0; i < game.assets.blockbuild.children.length; i++)
        {
            let child = game.assets.blockbuild.children[i].clone();

            child.material = material;
            child.castShadow = true;
            child.receiveShadow = true;

            this.add(child);
        }

        this.scale.x = 1;
        this.scale.z = 1;
        this.scale.y = 1;
        this.position.set(-31, 0, 90);
        this.rotateY(deg2rad(180));
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }

    update()
    {
    }
}
