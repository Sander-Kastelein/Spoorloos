/**
 * Created by Ruud on 1-11-2016.
 */
class SpotLight extends THREE.Object3D
{
    constructor()
    {
        super()
        let spot1Texture = game.assets.spotLightTexture;
        let spot1Geometry = new THREE.CylinderGeometry(0.5,1,1,8,8);
        let spot1Material = new THREE.MeshPhongMaterial({map: spot1Texture, side: THREE.DoubleSide});
        let color = 0xff0000;
        let intensity = 15
        let distance = 50;
        let spot1 = new THREE.PointLight(color, intensity, distance);
        spot1.add(new THREE.Mesh(spot1Geometry, spot1Material));
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