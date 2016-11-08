/**
 * Created by Ben on 28-10-2016.
 */

class Restaurant extends THREE.Object3D
{

    constructor()
    {
        super();
        let texture = game.assets.restaurantTexture;
        let material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});

        for(let i = 0; i < game.assets.restaurant.children.length; i++)
        {
            let child = game.assets.restaurant.children[i].clone();

            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;

            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.scale.x = 0.017;
        this.scale.z = 0.017;
        this.scale.y = 0.03;
        this.rotateY(deg2rad(145));
        this.position.x = 0;
        this.position.z = 10;
        this.position.y = 2;
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }

    update()
    {
    }
}
