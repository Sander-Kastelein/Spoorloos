/**
 * Created by Ruud on 2-11-2016.
 */
class Lights extends THREE.Object3D
    {
      constructor()
      {
        super();

        // station roof lights
        let spot1Texture = game.assets.spot1Texture;
        let spot1Geometry = new THREE.CylinderGeometry(0.5,1,1,8,8);
        let spot1Material = new THREE.MeshPhongMaterial({map: spot1Texture, side: THREE.DoubleSide});
        let spot1 = new THREE.SpotLight(0xEBD6AD, 2,30,0.9, 0.9);
        
        spot1.add(new THREE.Mesh(spot1Geometry, spot1Material));

        spot1.position.set(0,14,20);
        spot1.castShadow = true;

        spot1.shadow.mapSize.width = 128;
        spot1.shadow.mapSize.height = 128;

        spot1.shadow.camera.near = 16;
        spot1.shadow.camera.far = 16;
        spot1.shadow.camera.fov = 30;

        let anchor1 = new THREE.Object3D();
        anchor1.position.set(spot1.position.x, 0, spot1.position.z); 
        this.add(anchor1);

        spot1.target = anchor1;

        this.add(spot1);

        let spot2 = spot1.clone()
        spot2.position.set(0,14,-20);
        spot2.castShadow = true;

        let anchor2 = new THREE.Object3D();
        anchor2.position.set(spot2.position.x, 0, spot2.position.z); 
        this.add(anchor2);

        spot2.target = anchor2;

        this.add(spot2);

        game.scene.add(this);

        this.matrixAutoUpdate = false;
        this.updateMatrix();
      }

      on()
      {
        // Turn lights on
      }

      off()
      {
        // Turn lights off
      }

      update()
      {
      }
    }
