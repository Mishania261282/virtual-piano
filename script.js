const keys = document.querySelectorAll('.key');
keys.forEach(function (key) { key.addEventListener('click', playAudio); });
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', (event) => playSound(event));

function playAudio(e) {
  let key = e.target;
  let note = document.getElementById(key.dataset.note);
  key.classList.add('active');
  note.currentTime = 0;
  note.play();
  note.addEventListener('ended',() =>{key.classList.remove('active');})
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-letter="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-letter="${e.keyCode}"]`);
  key.classList.add('active');
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  audio.addEventListener('ended',() =>{key.classList.remove('active');})

}