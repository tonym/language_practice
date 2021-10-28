let speech = new SpeechSynthesisUtterance();
speech.lang = 'cs-CZ';

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices().filter(voice => voice.lang === speech.lang);
  speech.voice = voices[0];
};

let playing = false;
let started = false;

const play = 'play_circle';
const pause = 'pause_circle';
const stop = 'play_circle_outline';
const playButton = document.querySelector('#play');
const playIcon = document.querySelector('#play-icon');
const textarea = document.querySelector('textarea');

speech.onend = e => {
  playing = false;
  started = false;
  selectPlayIcon();
};

speech.onpause = e => {
  playing = false;
  selectPlayIcon();
};

speech.onresume = e => {
  playing = true;
  selectPlayIcon();
};

speech.onstart = e => {
  console.log(e);
  playing = true;
  started = true;
  selectPlayIcon();
};

function selectPlayIcon() {
  playIcon.innerHTML = started ? (playing ? pause : play) : stop;
}

function startPlay() {
  speech.text = textarea.value;
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

playButton.addEventListener('click', e => {
  if (!started && !playing) {
    startPlay();
  } else if (started && playing) {
    pausePlay();
  } else if (started && !playing) {
    resumePlay();
  }
});

textarea.addEventListener('keyup', () => {
  playButton.disabled = !textarea.value.length > 0;
});
