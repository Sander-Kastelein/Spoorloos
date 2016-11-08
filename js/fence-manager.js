/**
 * Created by Ruud on 7-11-2016.
 */


class FenceManager
{
    constructor()
    {
        this.fences = [
            (new Fence( new THREE.Vector3(40, 0, 0))),
            (new Fence( new THREE.Vector3(40, 0, -22))),
            (new Fence( new THREE.Vector3(40, 0, -44))),
            (new Fence( new THREE.Vector3(40, 0, -66))),
            (new Fence( new THREE.Vector3(40, 0, -88))),
            (new Fence( new THREE.Vector3(40, 0, -110))),
            (new Fence( new THREE.Vector3(40, 0, -132))),
            (new Fence( new THREE.Vector3(40, 0, -154))),
            (new Fence( new THREE.Vector3(40, 0, -176))),
            (new Fence( new THREE.Vector3(40, 0, -198))),

            (new Fence( new THREE.Vector3(40, 0, 22))),
            (new Fence( new THREE.Vector3(40, 0, 44))),
            (new Fence( new THREE.Vector3(40, 0, 66))),
            (new Fence( new THREE.Vector3(40, 0, 88))),
            (new Fence( new THREE.Vector3(40, 0, 110))),
            (new Fence( new THREE.Vector3(40, 0, 132))),
            (new Fence( new THREE.Vector3(40, 0, 154))),
            (new Fence( new THREE.Vector3(40, 0, 176))),
            (new Fence( new THREE.Vector3(40, 0, 198))),

            (new Fence( new THREE.Vector3(0, 0, -60))),
            (new Fence( new THREE.Vector3(0, 0, -82))),
            (new Fence( new THREE.Vector3(0, 0, -104))),
            (new Fence( new THREE.Vector3(0, 0, -126))),
            (new Fence( new THREE.Vector3(0, 0, -148))),
            (new Fence( new THREE.Vector3(0, 0, -170))),
            (new Fence( new THREE.Vector3(0, 0, -192))),
            (new Fence( new THREE.Vector3(0, 0, -192))),

            (new Fence( new THREE.Vector3(2, 2, -43), new THREE.Vector3(0,deg2rad(0),0), new THREE.Vector3(0.03, 0.015, 0.03))),
            (new Fence( new THREE.Vector3(9.5, 2, 43), new THREE.Vector3(0,deg2rad(0),0), new THREE.Vector3(0.012, 0.015, 0.03))),
            (new Fence( new THREE.Vector3(-9.5, 2, 43), new THREE.Vector3(0,deg2rad(0),0), new THREE.Vector3(0.012, 0.015, 0.03))),

            (new Fence( new THREE.Vector3(-14.5, 2, 47.5), null, new THREE.Vector3(0.012, 0.015, 0.03))),
            (new Fence( new THREE.Vector3(-4.5, 2, 47.5), null, new THREE.Vector3(0.012, 0.015, 0.03))),
            (new Fence( new THREE.Vector3(14.5, 2, 47.5), null, new THREE.Vector3(0.012, 0.015, 0.03))),
            (new Fence( new THREE.Vector3(4.5, 2, 47.5), null, new THREE.Vector3(0.012, 0.015, 0.03))),
        ];
    }

    update(delta)
    {
        for (let i = 0; i < this.fences.length; i++)
        {
            let Fence = this.fences[i];
            Fence.update(delta);
        }
    }
}
