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
        let spot1 = new THREE.SpotLight(0xEBD6AD, 1,30, 0.9);
        spot1.angle = deg2rad(200);
        
        spot1.add(new THREE.Mesh(spot1Geometry, spot1Material));
        spot1.position.set(0,15,20);
        spot1.castShadow = true; // Performance

        let anchor1 = new THREE.Object3D();
        anchor1.position.set(spot1.position.x, 0, spot1.position.z); 
        this.add(anchor1);

        spot1.target = anchor1;

        this.add(spot1);

        let spot2 = spot1.clone()
        let anchor2 = new THREE.Object3D();
        spot2.position.set(0,15,-20);
        spot2.castShadow = true;
        spot2.target = anchor2;
        this.add(spot2);

        anchor2.position.set(spot2.position.x, 0, spot2.position.z);
        this.add(anchor2);

        this.matrixAutoUpdate = false;
        this.updateMatrix();
        game.scene.add(this);
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
