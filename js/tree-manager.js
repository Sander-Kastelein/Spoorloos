/**
 * Created by Reinder on 2-11-2016.
 */


class TreeManager
{

    constructor()
    {
        this.trees = [
            (new Tree( new THREE.Vector3(26, 0.1, 40))),
            (new Tree( new THREE.Vector3(26, 0.1, 130))),
            (new Tree( new THREE.Vector3(22.48, 0, -120),
            (new Tree( new THREE.Vector3(22.08, 0, -130),
            (new Tree( new THREE.Vector3(31, 0.1, 40))),
            (new Tree( new THREE.Vector3(31, 0.1, 130))),
            (new Tree( new THREE.Vector3(27.48, 0, -120),
            (new Tree( new THREE.Vector3(27.08, 0, -130),
            (new Tree( new THREE.Vector3(36, 0, 130))),
            (new Tree( new THREE.Vector3(12, 0, 130))),
            (new Tree( new THREE.Vector3(7, 0, 130))),
            (new Tree( new THREE.Vector3(-7, 0, 130))),
            (new Tree( new THREE.Vector3(-12, 0, 130))),
            (new Tree( new THREE.Vector3(8.3, 0, -130)))))))))))
        ];
    }




    update(delta)
    {
        for (let i = 0; i < this.trees.length; i++)
        {
            let tree = this.trees[i];
            tree.update(delta);
        }
    }



}