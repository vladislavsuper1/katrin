document.getElementById("audio").volume = 0.3;

// attempts to replay the audio on reload

window.addEventListener("load", function () {
    document.getElementById("audio").play();
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("audio").play();
});

window.addEventListener("beforeunload", function () {
    document.getElementById("audio").play();
});

audio.addEventListener("ended", function () {
    // resets audio to beginning
    this.currentTime = 0;

    // plays audio again
    this.play();
});
