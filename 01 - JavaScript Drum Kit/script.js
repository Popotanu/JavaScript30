const playSound = e => {
  const [key, soundDom]= document.querySelectorAll(`[data-key='${e.keyCode}']`);
  const sound = new Audio(soundDom.getAttribute('src'));
  if(!key){ return }
  key.classList.add('playing');
  sound.play();
}

const removeTransition = e => {
  if(e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
