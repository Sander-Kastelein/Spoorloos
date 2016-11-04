/**
 * Created by Ben on 4-11-2016.
 */

class PlatformRoofManager
{

    constructor()
    {
        this.platformroofs = [
            (new PlatformRoof( new THREE.Vector3(-24.5, 0.1, 205))),
            (new PlatformRoof( new THREE.Vector3(-5.5, 0.1, 205))),
            (new PlatformRoof( new THREE.Vector3(13.5, 0, 205)))
        ];
    }




    update(delta)
    {
        for (let i = 0; i < this.platformroofs.length; i++)
        {
            let Platformroof = this.platformroofs[i];
            Platformroof.update(delta);
        }
    }



}
