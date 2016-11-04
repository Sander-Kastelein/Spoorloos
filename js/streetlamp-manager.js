/**
 * Created by Reinder on 2-11-2016.
 */


class StreetlampManager
{

    constructor()
    {
        this.streetlamps = [
            (new Streetlamp( new THREE.Vector3(23.5,-4, 50), new THREE.Vector3(0, 360/360*Math.PI, 0))),
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
