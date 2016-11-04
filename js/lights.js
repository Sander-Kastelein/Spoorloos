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
        let spot1 = new THREE.PointLight(0xEBD6AD, 2,30,0.9, 0.9);
        spot1.add(new THREE.Mesh(spot1Geometry, spot1Material));
        spot1.position.set(0,15,20);
        spot1.castShadow = true;
        spot1.receiveShadow = true;
        this.add(spot1);

        let spot2 = spot1.clone()
        spot2.position.set(0,15,-20);
        spot2.castShadow = true;
        spot2.receiveShadow = true;
        this.add(spot2);

        game.scene.add(this);

        this.matrixAutoUpdate = false;
        this.updateMatrix();
      }

      update()
      {
      }
    }
