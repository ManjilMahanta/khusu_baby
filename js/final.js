const video = document.getElementById("loveVideo");

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function toggleMute() {
  video.muted = !video.muted;
}

function changeVolume(v) {
  video.volume = v;
}
