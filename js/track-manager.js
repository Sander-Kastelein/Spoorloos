/**
 * Created by Ben on 31-10-2016.
 */

class TrackManager
{

    constructor()
    {
        this.tracks = [];
    }


    generateTracks()
    {
        (new Track(new THREE.Vector3(12, 0, 17),new THREE.Vector3(0, 0, 0)));
        (new Track(new THREE.Vector3(12, 5, 17),new THREE.Vector3(0, 0, 0)));
        (new Track(new THREE.Vector3(12, 10, 17),new THREE.Vector3(0, 0, 0)));
    }

    update(delta)
    {
        for (let i = 0; i < this.tracks.length; i++)
        {
            let track = this.tracks[i];
            track.update(delta);
        }
    }



}