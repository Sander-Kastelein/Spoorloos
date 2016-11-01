
class TrackManager
{

    constructor()
    {
        this.tracks = [
            (new Track( new THREE.Vector3(26, 0, 130), new THREE.Vector3(0,0,0))),     // Track 5a
            (new Track( new THREE.Vector3(31, 0, 130), new THREE.Vector3(0,0,0))),    // Sidetrack 1
            (new Track( new THREE.Vector3(36, 0, 130), new THREE.Vector3(0,0,0))),    // Sidetrack 2
            (new Track( new THREE.Vector3(26, 0, -50), new THREE.Vector3(0,0,0))),    // Track plein
            (new Track( new THREE.Vector3(12, 0, 130), new THREE.Vector3(0,0,0))),    // 4
            (new Track( new THREE.Vector3(7, 0, 130), new THREE.Vector3(0,0,0))),     // Track 3
            (new Track( new THREE.Vector3(-7, 0, 130), new THREE.Vector3(0,0,0))),    // Track 2
            (new Track( new THREE.Vector3(-12, 0, 130), new THREE.Vector3(0,0,0))),   // Track 1
            (new Track( new THREE.Vector3(12, 0, -130), new THREE.Vector3(0,0,0))),   // Track 8
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



}