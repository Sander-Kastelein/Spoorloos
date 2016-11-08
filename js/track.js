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

        this.trainStartPosition = new THREE.Vector3(this.position.x, this.position.y, this.position.z - 45);
        this.trainEndPosition = new THREE.Vector3(this.position.x, this.position.y, this.position.z + 90);


        game.scene.add(this);
    }

    update()
    {


    }


    moveTrain(train, timeFromDeparture)
    {

        let newPosition;

        if(timeFromDeparture >= 0)
        {
            newPosition = this.trainStartPosition;
        }else
        {
            let percentage = Math.abs(timeFromDeparture / 30);
            newPosition = this.getPointInBetweenByPerc(this.trainStartPosition, this.trainEndPosition, percentage);
        }
        return newPosition;
    }


    /*
        http://stackoverflow.com/questions/27426053/find-specific-point-between-2-points-three-js
        percentage 0..1
    */
    getPointInBetweenByPerc(pointA, pointB, percentage) {
        percentage = Math.sqrt(percentage);


        var dir = pointB.clone().sub(pointA);
        var len = dir.length();
        dir = dir.normalize().multiplyScalar( len*percentage );
        return pointA.clone().add(dir);

    }



}