
class TrackManager
{

    constructor()
    {
        this.tracks = [
            (new Track( new THREE.Vector3(26, 0.1, 40))),     // Track 5a
            (new Track( new THREE.Vector3(26, 0.1, 130))),    // track 5a
            (new Track( new THREE.Vector3(22.48, 0, -120), new THREE.Vector3(0,5/360*Math.PI,0))),   // Track 5b
            (new Track( new THREE.Vector3(22.08, 0, -130), new THREE.Vector3(0,5/360*Math.PI,0))),
            (new Track( new THREE.Vector3(31, 0.1, 40))),     // Sidetrack 1a
            (new Track( new THREE.Vector3(31, 0.1, 130))),
            (new Track( new THREE.Vector3(27.48, 0, -120), new THREE.Vector3(0,5/360*Math.PI,0))),   // Sidetrack 1b
            (new Track( new THREE.Vector3(27.08, 0, -130), new THREE.Vector3(0,5/360*Math.PI,0))),
            (new Track( new THREE.Vector3(36, 0, 130))),    // Sidetrack 2
            (new Track( new THREE.Vector3(12, 0, 130))),    // 4
            (new Track( new THREE.Vector3(7, 0, 130))),     // Track 3
            (new Track( new THREE.Vector3(-7, 0, 130))),    // Track 2
            (new Track( new THREE.Vector3(-12, 0, 130))),   // Track 1
            (new Track( new THREE.Vector3(8.3, 0, -130), new THREE.Vector3(0,5/360*Math.PI,0))),   // Track 8
        ];
    }

    update(delta)
    {
        for (let i = 0; i < this.tracks.length; i++)
        {
            let track = this.tracks[i];
            track.update(delta);
        }
    }


    findClosestTrack(position)
    {
        let best = this.tracks[0];

        for(let track of this.tracks)
        {
            if(position.distanceTo(best) > position.distanceTo(track))
            {
                best = track;
            }
        }
        return track;
    }

}