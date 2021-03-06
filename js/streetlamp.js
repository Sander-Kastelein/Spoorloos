/**
 * Created by Reinder on 3-11-2016.
 */


 class Streetlamp extends THREE.Object3D
 {

    constructor(position, rotation, scale)

    {
        if(!scale) scale = new THREE.Vector3(0.4, 0.7, 0.8);
        if(!rotation) rotation = new THREE.Vector3(0, 0, 0);
        super();

        //let texture = game.assets.streetlampTexture;
        let material = new THREE.MeshPhongMaterial({color: 0x001100});

        for(let i = 0; i < game.assets.streetlamp.children.length; i++)
        {
            let child = game.assets.streetlamp.children[i].clone();
            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
            this.add(child);
        }

        let anchor = new THREE.Object3D();
        anchor.position.y = 0;
        let light = new THREE.SpotLight(0xEBD6AD, 1, 30, deg2rad(180))
        light.position.y = 10;
        light.position.x = anchor.position.x = 8;
        light.target = anchor;
        this.light = light;
        this.castShadow = true;
        this.receiveShadow = true;
        this.add(light);
        this.add(anchor);
        this.position.set(position.x, position.y, position.z);
        this.rotation.x = rotation.x;
        this.rotation.y = rotation.y;
        this.rotation.z = rotation.z;
        this.scale.x = scale.x;
        this.scale.z = scale.z;
        this.scale.y = scale.y;
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }

    on()
    {
        // Turn lights on
        game.scene.add(this.light);
    }

    off()
    {
        // Turn lights off
        game.scene.remove(this.light);
    }

    update()
    {
        if (game.sun.position.y > 0)
        {
            this.off();
        }
        else
        {
            this.on();
        }
    }
}

