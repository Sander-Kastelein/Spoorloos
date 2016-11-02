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
        let intensity = 5;
        let distance = 100;
        let angle = 0.6;
        let spot1 = new THREE.SpotLight(color, intensity,distance,angle);
        spot1.position.set(0,15.5,35);
        spot1.castShadow = true;
        this.add(spot1);

        let spotLightHelper = new THREE.SpotLightHelper(spot1);
        this. add(spotLightHelper);

        game.scene.add(this);
      }

      update()
      {

      }
    }
