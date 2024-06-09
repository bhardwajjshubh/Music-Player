let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
  progress.max = song.duration;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

song.ontimeupdate = function() {
  progress.value = song.currentTime;
};

progress.addEventListener('input', function() {
  song.currentTime = progress.value;
  if (song.paused) {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
});

forward.addEventListener('click', function() {
  song.currentTime = Math.min(song.duration, song.currentTime + 10);
});

backward.addEventListener('click', function() {
  song.currentTime = Math.max(0, song.currentTime - 10);
});