
class TrackManager
{

    constructor()
    {
        this.tracks = [
            (new Track( new THREE.Vector3(26, 0.1, 40),null, new THREE.Vector3(0.001, 0.001, 0.005))),     // Track 5a
            (new Track( new THREE.Vector3(26, 0.1, 130),null, new THREE.Vector3(0.001, 0.001, 0.005))),
            (new Track( new THREE.Vector3(22.3, 0, -120), new THREE.Vector3(0,5/360*Math.PI,0))),   // Track 5b
            (new Track( new THREE.Vector3(21.9, 0, -130), new THREE.Vector3(0,5/360*Math.PI,0))),   // Track 5b
            (new Track( new THREE.Vector3(31, 0.1, 40),null, new THREE.Vector3(0.001, 0.001, 0.005))),     // Sidetrack 1
            (new Track( new THREE.Vector3(31, 0.1, 130),null, new THREE.Vector3(0.001, 0.001, 0.005))),
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



}