/**
 * Created by Ben on 2-11-2016.
 */

 class Building extends THREE.Object3D
 {
    constructor()
    {
        super();
        let texture = game.assets.stationbuildingTexture;
        let material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: true})

        for(let i = 0; i < game.assets.stationbuilding.children.length; i++)
        {
            let child = game.assets.stationbuilding.children[i].clone();
            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
            this.add(child);
        }

        this.castShadow = true;
        this.receiveShadow = true;
        this.scale.x = 0.002;
        this.scale.z = 0.002;
        this.scale.y = 0.004;
        this.position.x = -36.2;
        this.position.z = 0;
        this.position.y = 0;
        this.rotateY(deg2rad(-27));
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
    }




    update(delta)
    {
    }
}