/**
 * Created by Reinder on 2-11-2016.
 */


class HouseManager
{

    constructor()
    {
        this.houses = [
            (new House( new THREE.Vector3(100, 0, -100)))
        ];
    }




    update(delta)
    {
        for (let i = 0; i < this.houses.length; i++)
        {
            let houses = this.houses[i];
            houses.update(delta);
        }
    }
}

