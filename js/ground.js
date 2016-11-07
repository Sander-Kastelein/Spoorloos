/**
 * Created by Ruud on 27-10-2016.
 */
 class Ground extends THREE.Object3D
 {
    constructor()
    {
        super();
        
        let groundTexture = game.assets.groundTexture;
        let groundMaterial = new THREE.MeshPhongMaterial({map: groundTexture, side: THREE.doubleSided});
        let groundGeometry = new THREE.PlaneBufferGeometry(1000,1000);
        this.ground = new THREE.Mesh(groundGeometry, groundMaterial);

        

        groundTexture.wrapS = THREE.RepeatWrapping;
        groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set( 100, 100 );

        this.rotation.x = -0.5*Math.PI;
        this.receiveShadow = true;

        this.add(this.ground);

        this.plants = [
        'plant_1',
        'plant_2',
        'plant_3',
        'plant_4',
        'plant_5',
        'plant_6',
        'plant_7',
        'plant_8',
        'gras',
        'dandelion',
        'flower_1',
        'flower_2'
        ];        

        this.models = {};


        var material = new THREE.MeshPhongMaterial({
            color : new THREE.Color(0xffffff),
            side : THREE.DoubleSide,
            shininess :0,
            map : game.assets.plantsTexture,
            bumpMap : game.assets.plantsTexture,
            bumpScale : -.05,
            transparent : true,
            depthTest : true,
            depthWrite : true,
            alphaTest : .25,
        }); 







        this.plants.forEach(
            (function(p,index){
                this.loadPlant(index,p,'https://saschas.github.io/experiments/flower/assets/json/'+p+'.json');
            }).bind(this)
            );







        this.matrixAutoUpdate = false;
        this.updateMatrix();

        this.position.y = 0;

        game.scene.add(this);
    }

    update(delta)
    {


    }


    createGrass(plantsPerRow){
        let count = plantsPerRow * plantsPerRow;
        if(count <= 0) return; // Ignore.

        let coordinateInterval = 200 / plantsPerRow;


        var group = new THREE.Object3D();

        for(var row = 0; row < plantsPerRow; row++)
        {
            for(var col = 0; col < plantsPerRow; col++)
            {

                let g = (row * plantsPerRow) + col;

                group.children[g] = this.models.gras.clone();

                group.children[g].position.x = row * coordinateInterval - 100;
                group.children[g].position.z = col * coordinateInterval - 100;

                group.children[g].rotation.y = deg2rad(randNum(0,360,true)); // Random rotation
                var scaler = randNum(0.2,0.3,false); // Random size 0.2 - 0.3x model size
                group.children[g].scale.set(scaler,scaler,scaler);

                this.add(group);
            }
        }



        return group;
    }



    loadPlant(id,name,url){
        var ID = id;
        var name = name;
        assetLoader.JSONLoader.load(url,
            (function(geometry){

                var material = new THREE.MeshPhongMaterial({
                    color : new THREE.Color(0xffffff),
                    side : THREE.DoubleSide,
                    shininess :0,
                    map : game.assets.plantsTexture,
                    bumpMap : game.assets.plantsTexture,
                    bumpScale : -.05,
                    transparent : true,
                    depthTest : true,
                    depthWrite : true,
                    alphaTest : .25,
                });

                var plant = new THREE.Mesh(geometry,material);

                this.models[name] = plant;
                this.models[name]._id = ID;
                if(this.models.gras) this.createGrass(200);

            }).bind(this)
            );
    }






}