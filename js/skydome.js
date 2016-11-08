/**
 * Created by Ruud on 31-10-2016.
 */
class SkyDome extends THREE.Mesh
{
    constructor()
    {
        let vertexShader = document.getElementById( 'vertexShader' ).textContent;
        let fragmentShader = document.getElementById( 'fragmentShader' ).textContent;
        let uniforms = {
            topColor:    { value: new THREE.Color( 0x0077ff ) },
            bottomColor: { value: new THREE.Color( 0xffffff ) },
            offset:      { value: 33 },
            exponent:    { value: 0.6 }
        };

        let skyGeo = new THREE.SphereGeometry( 4000, 32, 15 );
        let skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );

        super(skyGeo, skyMat);
        game.scene.add(this);

        this.matrixAutoUpdate = false;
        this.updateMatrix();
    }

    update()
    {
    }
}
