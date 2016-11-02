/**
 * Created by Ben on 2-11-2016.
 */


class CycleRackManager
{
    constructor()
    {
        this.cycleracks = [
            (new CycleRack( new THREE.Vector3(30, 0.1, 40))),
            (new CycleRack( new THREE.Vector3(50, 0.1, 130))),
            (new CycleRack( new THREE.Vector3(60.48, 0, -120),
            (new CycleRack( new THREE.Vector3(46.08, 0, -130),
            (new CycleRack( new THREE.Vector3(35, 0.1, 40))),
            (new CycleRack( new THREE.Vector3(37, 0.1, 130))),
            (new CycleRack( new THREE.Vector3(28.48, 0, -120),
            (new CycleRack( new THREE.Vector3(80.08, 0, -130),
            (new CycleRack( new THREE.Vector3(47, 0, 130))),
            (new CycleRack( new THREE.Vector3(60, 0, 130))),
            (new CycleRack( new THREE.Vector3(32, 0, 130))),
            (new CycleRack( new THREE.Vector3(-65, 0, 130))),
            (new CycleRack( new THREE.Vector3(-22, 0, 130))),
            (new CycleRack( new THREE.Vector3(-33, 0, -130)))))))))))
        ];
    }

    update(delta)
    {
        for (let i = 0; i < this.cycleracks.length; i++)
        {
            let CycleRack = this.cycleracks[i];
            CycleRack.update(delta);
        }
    }



}
