const keys = document.querySelectorAll('.key');
keys.forEach(function (key) { key.addEventListener('click', playAudio); });
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', (event) => playSound(event));

const buttonLetters = document.querySelectorAll('.button-letters');
const buttonNotes = document.querySelectorAll('.button-notes');
buttonLetters.forEach(function (button) { button.addEventListener('click', renameLetters); });
buttonNotes.forEach(function (button) { button.addEventListener('click', renameNotes); });

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
function renameLetters(e) {
  let button = e.target;
  button.classList.add('button-active');
  let elem = document.querySelector("#a");
  elem.classList.remove('button-active');
  
  
  let d = document.getElementById('d');
  let f = document.getElementById('f');
  let g = document.getElementById('g');
  let h = document.getElementById('h');
  let j = document.getElementById('j');
  let k = document.getElementById('k');
  let l = document.getElementById('l');
  let r = document.getElementById('r');
  let t = document.getElementById('t');
  let u = document.getElementById('u');
  let i = document.getElementById('i');
  let o = document.getElementById('o');


  d.innerText = "D";f.innerText = "F";g.innerText = "G";h.innerText = "H";j.innerText = "J";k.innerText = "K";
  l.innerText = "L";r.innerText = "R";t.innerText = "T";u.innerText = "U";i.innerText = "I";o.innerText = "O";
  
  
}
function renameNotes(e) {
  let button = e.target;
  button.classList.add('button-active');
  let elem = document.querySelector("#b");
  elem.classList.remove('button-active');
  
  let d = document.getElementById('d');
  let f = document.getElementById('f');
  let g = document.getElementById('g');
  let h = document.getElementById('h');
  let j = document.getElementById('j');
  let k = document.getElementById('k');
  let l = document.getElementById('l');
  let r = document.getElementById('r');
  let t = document.getElementById('t');
  let u = document.getElementById('u');
  let i = document.getElementById('i');
  let o = document.getElementById('o');


  d.innerText = "C";f.innerText = "D";g.innerText = "E";h.innerText = "F";j.innerText = "G";k.innerText = "A";
  l.innerText = "B";r.innerText = "C#";t.innerText = "D#";u.innerText = "F#";i.innerText = "G#";o.innerText = "A#";
  
  note.addEventListener('ended',() =>{key.classList.remove('active');})
}