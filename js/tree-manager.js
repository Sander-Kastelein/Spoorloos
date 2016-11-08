/**
 * Created by Reinder on 2-11-2016.
 */


class TreeManager
{
    constructor()
    {
        this.trees = [

            (new Tree( new THREE.Vector3(60, 0.1, 90))),
            (new Tree( new THREE.Vector3(52, 0, 20))),
            (new Tree( new THREE.Vector3(64, 0.1, -65))),
            (new Tree( new THREE.Vector3(55, 0, 0))),
            (new Tree( new THREE.Vector3(46, 0, -97.6))),
            (new Tree( new THREE.Vector3(13.5, 0, 20))),
            (new Tree( new THREE.Vector3(10.5, 0, -58))),

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