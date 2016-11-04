/**
 * Created by Reinder on 3-11-2016.
 */


 class Streetlamp extends THREE.Object3D
 {

    constructor(position, rotation, scale)

    {
        if(!scale) scale = new THREE.Vector3(0.4, 0.8, 0.8);
        if(!rotation) rotation = new THREE.Vector3(0, 0, 0);
        super();

        for(let i = 0; i < game.assets.streetlamp.children.length; i++)
        {
            let child = game.assets.streetlamp.children[i].clone();
            let texture = game.assets.streetlampTexture;
            child.material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true});
            this.add(child);
        }
        let light = new THREE.PointLight(0xEBD6AD, 0.2,40,1)
        light.position.y = 10;
        light.position.x = 8;
        this.add(light);

        this.position.set(position.x, position.y, position.z);
        this.rotation.x = rotation.x;
        this.rotation.y = rotation.y;
        this.rotation.z = rotation.z;
        this.scale.x = scale.x;
        this.scale.z = scale.z;
        this.scale.y = scale.y;

        game.scene.add(this);

        this.matrixAutoUpdate = false;
        this.updateMatrix();
    }

    update()
    {
    }
}

