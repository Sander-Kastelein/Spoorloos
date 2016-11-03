/**
 * Created by Reinder on 3-11-2016.
 */

/**
 * Created by Reinder on 2-11-2016.
 */


class StreetlampManager
{

    constructor()
    {
        this.streetlamps = [
            (new Streetlamp( new THREE.Vector3(0, 0, -20))),
        ];
    }




    update(delta)
    {
        for (let i = 0; i < this.streetlamps.length; i++)
        {
            let streetlamps = this.streetlamps[i];
            streetlamps.update(delta);
        }
    }
}
