/**
 * Created by Ben on 3-11-2016.
 */

class CycleRackManager
{
    constructor()
    {
        this.cycleracks = [
            (new CycleRack( new THREE.Vector3(55, 0.5, 8))),
            (new CycleRack( new THREE.Vector3(55, 0.5, 3))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -2))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -7))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -12))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -17))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -22))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -27))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -32))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -37))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -42))),
            (new CycleRack( new THREE.Vector3(55, 0.5, -47))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, 8))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, 3))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -2))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -7))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -12))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -17))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -22))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -27))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -32))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -37))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -42))),
            (new CycleRack( new THREE.Vector3(56.5, 0.5, -47)))
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