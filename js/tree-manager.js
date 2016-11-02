/**
 * Created by Reinder on 2-11-2016.
 */


class TreeManager
{

    constructor()
    {
        this.trees = [
            (new Tree( new THREE.Vector3(60, 0.1, 30))),
            (new Tree( new THREE.Vector3(60, 0.1, 20))),
            (new Tree( new THREE.Vector3(60, 0, 8))),
            (new Tree( new THREE.Vector3(60, 0, -5))),
            (new Tree( new THREE.Vector3(60, 0.1, -19))),
            (new Tree( new THREE.Vector3(60, 0.1, -30))),
            (new Tree( new THREE.Vector3(60, 0, -43))),
            (new Tree( new THREE.Vector3(60, 0, -50))),
            (new Tree( new THREE.Vector3(60, 0, -62))),
            (new Tree( new THREE.Vector3(60, 0, -80))),
            (new Tree( new THREE.Vector3(60, 0, -92))),
            (new Tree( new THREE.Vector3(60, 0, -100))),
            (new Tree( new THREE.Vector3(60, 0, -108))),
            (new Tree( new THREE.Vector3(60, 0, -110)))
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