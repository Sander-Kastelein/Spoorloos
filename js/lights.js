/**
 * Created by Ruud on 2-11-2016.
 */
class Lights extends THREE.Object3D
    {
      constructor()
      {
        super();

        // station roof light
        let color = 0xff0000;
        let intensity = 15;
        let distance = 1000;
        let spot1 = new THREE.SpotLight(color, intensity, distance);
        spot1.position.set(0,12,0);
        spot1.castShadow = true;
        spot1.shadowCameraVisible = true;
        spot1.target = game.stationFloor;
        this.add(spot1);

        game.scene.add(this);
      }

      update()
      {

      }
    }
