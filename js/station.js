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

        let texture = game.assets.stationTexture;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 10, 10);
        let material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});

        for(let i = 0; i < game.assets.station.children.length; i++)
        {
            let child = game.assets.station.children[i].clone();

            child.material = material;
            child.castShadow = true;
            child.receiveShadow = true;

            this.add(child);
        }

        this.scale.x = 0.05;
        this.scale.z = 0.015;
        this.scale.y = 0.015;
        this.position.x = -38.5;
        this.position.z = 150;
        this.position.y = 0;
        this.rotateY(deg2rad(90));
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }

    update()
    {
    }
}
