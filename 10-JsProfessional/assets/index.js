import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const btnTogglePlay = document.querySelector(".btnTogglePlay");
const btnToggleMute = document.querySelector(".btnToggleMute")

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()]});

btnTogglePlay.onclick = () => player.togglePlay();
btnToggleMute.onclick = () => player.toggleMute();