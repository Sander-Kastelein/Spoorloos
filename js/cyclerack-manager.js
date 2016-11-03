/**
 * Created by Ben on 3-11-2016.
 */

class CycleRackManager
{

    constructor()
    {
        this.cycleracks = [
            (new CycleRack( new THREE.Vector3(30, 0.1, 10))),
            (new CycleRack( new THREE.Vector3(30, 0.1, 15))),
            (new CycleRack( new THREE.Vector3(30, 0, 20))),
            (new CycleRack( new THREE.Vector3(30, 0, 25))),
            (new CycleRack( new THREE.Vector3(30, 0.1, 30))),
            (new CycleRack( new THREE.Vector3(30, 0.1, 35))),
            (new CycleRack( new THREE.Vector3(30, 0, 40))),
            (new CycleRack( new THREE.Vector3(30, 0, 45))),
            (new CycleRack( new THREE.Vector3(30, 0, 50))),
            (new CycleRack( new THREE.Vector3(30, 0, 55))),
            (new CycleRack( new THREE.Vector3(30, 0, 60))),
            (new CycleRack( new THREE.Vector3(30, 0, 65))),
            (new CycleRack( new THREE.Vector3(30, 0, 70))),
            (new CycleRack( new THREE.Vector3(30, 0, 75)))
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