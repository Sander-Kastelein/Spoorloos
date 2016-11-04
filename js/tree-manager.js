/**
 * Created by Reinder on 2-11-2016.
 */


class TreeManager
{
    constructor()
    {
        this.trees = [
            (new Tree( new THREE.Vector3(60, 0.1,30))),
            (new Tree( new THREE.Vector3(60, 0, 20))),
            (new Tree( new THREE.Vector3(60, 0.1,10))),
            (new Tree( new THREE.Vector3(60, 0, 0))),
            (new Tree( new THREE.Vector3(60, 0, -10))),
            (new Tree( new THREE.Vector3(60, 0, -20))),
            (new Tree( new THREE.Vector3(60, 0, -30))),

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