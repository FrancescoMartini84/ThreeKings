window.onload = function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playlist = ["Cinco.mp3"];
    var currentTrack = 0;

    // Play the audio automatically if possible
    audioPlayer.src = playlist[currentTrack];
    var playPromise = audioPlayer.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            console.log("Audio started playing.");
        }).catch(function(error) {
            console.error("Autoplay failed:", error);
        });
    }

    // Continue to next track when the audio ends
    audioPlayer.addEventListener('ended', function() {
        currentTrack++;
        if (currentTrack < playlist.length) {
            audioPlayer.src = playlist[currentTrack];
            audioPlayer.play();
        }
    });
};
