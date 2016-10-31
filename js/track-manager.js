/**
 * Created by Ben on 31-10-2016.
 */

class TrackManager
{

    constructor()
    {
        this.tracks = [];
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