const flapWrapper = document.querySelector('.flap-wrapper');
const quest = document.querySelector('.quest-badge');
const stamp = document.querySelector('.stamp');
const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');

setTimeout(() => {
  flapWrapper.style.transform =
    'rotateX(-155deg) translateZ(5px) translateY(-7px)';
}, 1500);

setTimeout(() => {
  stamp.classList.add('slide-out');
}, 1900);

setTimeout(() => {
  stamp.classList.add('front');
}, 2200);

setTimeout(() => {
  stamp.classList.add('scale');
}, 3100);

setTimeout(() => {
  envelope.classList.add('fade-out');
}, 3200);

setTimeout(() => {
  quest.style.opacity = '0';
}, 1800);

/* setTimeout(() => {
  
  letter.style.opacity = '1';
  letter.style.transform = 'translate(-50%, 6px)';
}, 950); */
