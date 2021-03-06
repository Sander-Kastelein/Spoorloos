/**
 * Created by Reinder on 2-11-2016.
 */


class StreetlampManager
{

    constructor()
    {
        this.streetlamps = [
            //lights platform 4/5
            (new Streetlamp( new THREE.Vector3(23.5,-4, 90), new THREE.Vector3(0, 360/360*Math.PI, 0))),
            (new Streetlamp( new THREE.Vector3(23.5,-4, 120), new THREE.Vector3(0, 360/360*Math.PI, 0))),
            (new Streetlamp( new THREE.Vector3(23.5,-4, 150), new THREE.Vector3(0, 360/360*Math.PI, 0))),

            //platform 1
            (new Streetlamp( new THREE.Vector3(-22.5,-4, 90))),
            (new Streetlamp( new THREE.Vector3(-22.5,-4, 120))),
            (new Streetlamp( new THREE.Vector3(-23.5,-4, 150), null,new THREE.Vector3(0.4, 1, 0.8))),
            (new Streetlamp( new THREE.Vector3(-23.5,-4, 180), null, new THREE.Vector3(0.4, 1, 0.8))),
            (new Streetlamp( new THREE.Vector3(-23.5,-4, 205), null, new THREE.Vector3(0.4, 1, 0.8))),

            //platform 5/8
            (new Streetlamp( new THREE.Vector3(23.5,-4, -70), new THREE.Vector3(0, 360/360*Math.PI, 0),new THREE.Vector3(0.4, 1, 0.8))),
            (new Streetlamp( new THREE.Vector3(23.5,-4, -155), new THREE.Vector3(0, 360/360*Math.PI, 0),new THREE.Vector3(0.4, 1, 0.8))),

            (new Streetlamp( new THREE.Vector3(4.3,-4, 102.5), new THREE.Vector3(0, 360/360*Math.PI, 0))),
            (new Streetlamp( new THREE.Vector3(4.3,-4, 157.5), new THREE.Vector3(0, 360/360*Math.PI, 0))),
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
