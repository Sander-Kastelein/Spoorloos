/**
 * Created by Ruud on 27-10-2016.
 */


class Track extends THREE.Object3D
{

    constructor(platform, position, rotation, scale)
    {
        if(!scale) scale = new THREE.Vector3(0.001, 0.001, 0.005);
        if(!rotation) rotation = new THREE.Vector3(0, 0, 0);
        super();

        this.platform = platform;



        let texture = game.assets.trackTexture;
        let material = new THREE.MeshPhongMaterial({map: texture, needsUpdate: false});

        for(let i = 0; i < game.assets.track.children.length; i++)
        {
            let child = game.assets.track.children[i].clone();

            child.material = material;
            child.castShadow = false;
            child.receiveShadow = false;
            this.add(child);
        }   
        this.receiveShadow = true;
        this.castShadow = true;

        this.castShadow = false;
        this.receiveShadow = true;
        this.position.set(position.x, position.y, position.z);
        this.rotation.x = rotation.x;
        this.rotation.y = rotation.y;
        this.rotation.z = rotation.z;
        this.scale.x = scale.x; //0.001;
        this.scale.z = scale.z; //0.0050;
        this.scale.y = scale.y; //0.001;


            
        
        let lineMaterial = new THREE.LineBasicMaterial({color: 0x00FF00});

        let geo = new THREE.Geometry();
        geo.vertices.push(
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(0, 100, 0)
        );


        this.line = new THREE.Line(
            geo,
            lineMaterial
        );   

        this.add(this.line);  

        this.matrixAutoUpdate = false;
        this.updateMatrix();

        game.scene.add(this);
    }

    update()
    {
        
        
    }
}