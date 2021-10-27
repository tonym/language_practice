let speech = new SpeechSynthesisUtterance();
speech.lang = "cs-CZ";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices().filter(voice => voice.lang === speech.lang);
  speech.voice = voices[0];
};

let playing = false;
let started = false;

const play = 'Play';
const pause = 'Pause';
const playButton = document.querySelector("#play");

speech.onend = (e) => {
  playing = false;
  started = false;
  selectPlayIcon();
}

speech.onpause = (e) => {
  playing = false;
  selectPlayIcon();
}

speech.onresume = (e) => {
  playing = true;
  selectPlayIcon();
}

speech.onstart = (e) => {
  playing = true;
  started = true;
  selectPlayIcon();
}

function selectPlayIcon() {
  playButton.innerHTML = playing ? pause : play;
}

function startPlay() {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
}

function pausePlay() {
  playButton.innerHTML = play;
  window.speechSynthesis.pause();
  selectPlayIcon();
}

function resumePlay() {
  playButton.innerHTML = pause;
  window.speechSynthesis.resume();
  selectPlayIcon();
}

playButton.addEventListener("click", () => {
  if (!started && !playing) {
    startPlay();
  } else if (started && playing) {
    pausePlay();
  } else if (started && !playing) {
    resumePlay();
  }
});
