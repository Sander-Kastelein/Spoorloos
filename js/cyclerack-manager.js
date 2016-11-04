/**
 * Created by Ben on 3-11-2016.
 */

class CycleRackManager
{
    constructor()
    {
        this.cycleracks = [
            (new CycleRack( new THREE.Vector3(55, 0.1, -100))),
            (new CycleRack( new THREE.Vector3(55, 0.1, -95))),
            (new CycleRack( new THREE.Vector3(55, 0, -90))),
            (new CycleRack( new THREE.Vector3(55, 0, -85))),
            (new CycleRack( new THREE.Vector3(55, 0.1, -80))),
            (new CycleRack( new THREE.Vector3(55, 0.1, -75))),
            (new CycleRack( new THREE.Vector3(55, 0, -70))),
            (new CycleRack( new THREE.Vector3(55, 0, -65))),
            (new CycleRack( new THREE.Vector3(55, 0, -60))),
            (new CycleRack( new THREE.Vector3(55, 0, -55))),
            (new CycleRack( new THREE.Vector3(55, 0, -50))),
            (new CycleRack( new THREE.Vector3(55, 0, -45))),
            (new CycleRack( new THREE.Vector3(55, 0, -40))),
            (new CycleRack( new THREE.Vector3(55, 0, -35)))
        ];
    }

    update(delta)
    {
        for (let i = 0; i < this.cycleracks.length; i++)
        {
            let cyclerack = this.cycleracks[i];
            cyclerack.update(delta);
        }
    }
}