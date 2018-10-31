// Initialize Key Pressing
window.addEventListener("keydown", init);

function init(e) {
  const audio = document.querySelector(`.audio[data-key='${e.key}']`);
  const key = document.querySelector(`.key[data-key='${e.key}']`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  // Key Style
  key.classList.add("btn-primary");
  key.classList.remove("btn-outline-primary");
}

// Keys Animation
const keys = document.querySelectorAll("#front-keys .key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
  this.classList.remove("btn-primary");
  this.classList.add("btn-outline-primary");
}
