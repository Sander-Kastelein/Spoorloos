/**
 * Created by Ben on 3-11-2016.
 */

class CycleRackManager
{
    constructor()
    {
        this.cycleracks = [
            (new CycleRack( new THREE.Vector3(55, 0.1, 8))),
            (new CycleRack( new THREE.Vector3(55, 0.1, 3))),
            (new CycleRack( new THREE.Vector3(55, 0, -2))),
            (new CycleRack( new THREE.Vector3(55, 0, -7))),
            (new CycleRack( new THREE.Vector3(55, 0.1, -12))),
            (new CycleRack( new THREE.Vector3(55, 0.1, -17))),
            (new CycleRack( new THREE.Vector3(55, 0, -22))),
            (new CycleRack( new THREE.Vector3(55, 0, -27))),
            (new CycleRack( new THREE.Vector3(55, 0, -32))),
            (new CycleRack( new THREE.Vector3(55, 0, -37))),
            (new CycleRack( new THREE.Vector3(55, 0, -42))),
            (new CycleRack( new THREE.Vector3(55, 0, -47))),
            (new CycleRack( new THREE.Vector3(56.5, 0.1, 8))),
            (new CycleRack( new THREE.Vector3(56.5, 0.1, 3))),
            (new CycleRack( new THREE.Vector3(56.5, 0, -2))),
            (new CycleRack( new THREE.Vector3(56.5, 0, -7))),
            (new CycleRack( new THREE.Vector3(56.5, 0.1, -12))),
            (new CycleRack( new THREE.Vector3(56.5, 0.1, -17))),
            (new CycleRack( new THREE.Vector3(56.5, 0, -22))),
            (new CycleRack( new THREE.Vector3(56.5, 0, -27))),
            (new CycleRack( new THREE.Vector3(56.5, 0, -32))),
            (new CycleRack( new THREE.Vector3(56.5, 0, -37))),
            (new CycleRack( new THREE.Vector3(56.5, 0, -42))),
            (new CycleRack( new THREE.Vector3(56.5, 0, -47)))
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