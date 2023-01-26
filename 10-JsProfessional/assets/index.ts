import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/Ads";

const video = document.querySelector("video");
const btnTogglePlay: any = document.querySelector(".btnTogglePlay");
const btnToggleMute: any = document.querySelector(".btnToggleMute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

btnTogglePlay.onclick = () => player.togglePlay();
btnToggleMute.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((err) => {
    console.log(err.message);
  });
}