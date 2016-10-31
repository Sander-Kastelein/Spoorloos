/**
 * Created by Ben on 28-10-2016.
 */

class Restaurant extends THREE.Object3D
{

    constructor(restaurantObject)
    {
        super();

        this.data = restaurantObject;

        for(let i = 0; i < game.assets.restaurant.children.length; i++)
        {
            let child = game.assets.restaurant.children[i].clone();
            let texture = game.assets.restaurantTexture;

            child.material = new THREE.MeshLambertMaterial({map: texture, needsUpdate: true});
            this.add(child);
        }

        this.scale.x = 0.01;
        this.scale.z = 0.01;
        this.scale.y = 0.02;

        game.scene.add(this);

        this.position.x = 5;
        this.position.z = 10;
        this.position.y = 2;



    }

    update(delta)
    {


    }
}
