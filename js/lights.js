/**
 * Created by Ruud on 2-11-2016.
 */
class Lights extends THREE.Object3D
    {
      constructor()
      {
        super();

        // station roof light
        let srlTexture = game.assets.srlTexture;
        let spot1Geometry = new THREE.CylinderGeometry(0.5,3,3,32,32);
        let spot1Material = new THREE.MeshPhongMaterial({map: srlTexture, side: THREE.DoubleSide});
        let color = 0xff0000;
        let intensity = 15;
        let distance = 50;
        let spot1 = new THREE.PointLight(color, intensity, distance);
        spot1.add(spot1Geometry, spot1Material);
        spot1.position.set(0,14,0);
        spot1.castShadow = true;
        spot1.shadowCameraVisible = true;
        this.add(spot1);

        game.scene.add(this);
      }

      update()
      {

      }
    }
