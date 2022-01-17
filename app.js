const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector(".play-forward")
const prevBtn = document.querySelector(".play-back")
let isPlaying = true;
let indexSong = 0;
const musics = ["buocquanhau.mp3", "Cauhuachuatrongven.mp3", "Coduyenkhongno.mp3", "Saigondaulongqua.mp3", "MuonRoiMaSaoCon.mp3","NeuNgayMaiToiKhongTroVe.mp3"];
song.setAttribute("src",`./music/${musics[indexSong]}`);
nextBtn.addEventListener("click", function() {
  changeSong(1);
});
prevBtn.addEventListener("click", function() {
  changeSong(-1);
});
function changeSong(dir) {
  if (dir === 1 ) {
    //next Song
    indexSong++;
    if (indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (dir === -1 ) {
    //prev Song
    indexSong--;
    if (indexSong < 0 ) {
      indexSong = musics.length -1;
    }
    isPlaying = true;
  }
  song.setAttribute("src",`./music/${musics[indexSong]}`);
  playPause();
}
playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
  } else {
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = true;
  }
}
