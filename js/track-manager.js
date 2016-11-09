
class TrackManager
{

    constructor()
    {
        this.tracks = [
            (new Track( "?-1", new THREE.Vector3(31, 0.1, 40), 1, 0, 0)),           // Sidetrack 1a         RIJDEN GEEN TREINEN OP
            (new Track( "?-2", new THREE.Vector3(31, 0.1, 130), 1, 0, 0)),          // Sidetrack 1a DEEL 2  RIJDEN GEEN TREINEN OP
            (new Track( "?-3", new THREE.Vector3(31, 0, -40), 1, 0, 0)),            // Sidetrack 1b         RIJDEN GEEN TREINEN OP
            (new Track( "?-4", new THREE.Vector3(31.08, 0, -130), 1, 0, 0)),        // Sidetrack 1b DEEL 2  RIJDEN GEEN TREINEN OP
            (new Track( "?-5", new THREE.Vector3(36, 0, 130), 1, 0, 0)),            // Sidetrack 2          RIJDEN GEEN TREINEN OP


            (new Track( "1", new THREE.Vector3(-12, 0, 130), 1, 75, 190)),          // Track 1  RICHTING SNEEK
            (new Track( "2", new THREE.Vector3(-7, 0, 130), 1, 75, 190)),           // Track 2  RICHTING HARLINGEN
            (new Track( "3", new THREE.Vector3(7, 0, 130), 1, 75, 190)),            // Track 3  ROTTERDAM CENTRAAL
            (new Track( "4", new THREE.Vector3(12, 0, 130), 1, 75, 190)),           // track 4  RICHTING DEN HAAG CENTRAAL

            (new Track( "5a", new THREE.Vector3(26, 0.1, 40), 2, 100, 190)),        // Track 5a RICHTING MEPPEL
            (new Track( "5b", new THREE.Vector3(26, 0, -130), 2, -25, -190)),       // Track 5b RICHTING GRONINGEN

            (new Track( "8", new THREE.Vector3(12, 0, -130), 2, -70 -190))          // Track 8  RICHTING GRONINGEN SNELTREIN
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
            (track) => {
                return   track.platform.indexOf(platform) === 0
            }
            );
    }

    getFirstTrackByPlatform(platform)
    {
        return this.getTracksByPlatform(platform)[0] || null;
    }

}