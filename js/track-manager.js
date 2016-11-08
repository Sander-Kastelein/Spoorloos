
class TrackManager
{

    constructor()
    {
        this.tracks = [
            (new Track( "5a", new THREE.Vector3(26, 0.1, 40))),     // Track 5a
            (new Track( "5a-2", new THREE.Vector3(26, 0.1, 130))),    // track 5a
            (new Track( "5b", new THREE.Vector3(22.48, 0, -120), new THREE.Vector3(0,deg2rad(2.5),0))),   // Track 5b
            (new Track( "?-1", new THREE.Vector3(22.08, 0, -130), new THREE.Vector3(0,deg2rad(2.5),0))),
            (new Track( "1a", new THREE.Vector3(31, 0.1, 40))),     // Sidetrack 1a
            (new Track( "?-2", new THREE.Vector3(31, 0.1, 130))),
            (new Track( "1b", new THREE.Vector3(27.48, 0, -120), new THREE.Vector3(0,deg2rad(2.5),0))),   // Sidetrack 1b
            (new Track( "?-3", new THREE.Vector3(27.08, 0, -130), new THREE.Vector3(0,deg2rad(2.5),0))),
            (new Track( "2", new THREE.Vector3(36, 0, 130))),    // Sidetrack 2
            (new Track( "4", new THREE.Vector3(12, 0, 130))),    // 4
            (new Track( "3", new THREE.Vector3(7, 0, 130))),     // Track 3
            (new Track( "2-2", new THREE.Vector3(-7, 0, 130))),    // Track 2
            (new Track( "1", new THREE.Vector3(-12, 0, 130))),   // Track 1
            (new Track( "8", new THREE.Vector3(8.3, 0, -130), new THREE.Vector3(0,deg2rad(2.5),0))),   // Track 8
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
            if(position.distanceTo(best.line) > position.distanceTo(track.line))
            {
                best = track;
            }
        }
        return track;
    }

    getTracksByPlatform(platform)
    {
        // this only works for Leeuwarden with < 10 Platforms! Hack hack hack, I'm such a happy little hack
        return this.tracks.filter(
            (track) => track.platform.indexOf(platform) === 0
        );
    }

    getFirstTrackByPlatform(platform)
    {
        return this.getTracksByPlatform(platform)[0] || null;
    }

}