console.log('hello');
// slideshow
import SlideShow from './slideshow';

new SlideShow('.slide-show', { numberOfSlides: 5, duration: 10000 });

let y = 20;
let x = 0;
let z = 0;
let isRotate = true;
let interval;
const cube = document.querySelector('.cube');

document.querySelector('.top-x-control').addEventListener('click', (e) => {
  e.preventDefault();
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector('.bottom-x-control').addEventListener('click', (e) => {
  e.preventDefault();
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector('.left-y-control').addEventListener('click', (e) => {
  e.preventDefault();
  cube.style.transform = `rotateY(${(y -= 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});

document.querySelector('.right-y-control').addEventListener('click', (e) => {
  e.preventDefault();
  cube.style.transform = `rotateY(${(y += 20)}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
});

document.querySelector('.top-z-control').addEventListener('click', (e) => {
  e.preventDefault();
  cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector('.bottom-z-control').addEventListener('click', (e) => {
  e.preventDefault();
  cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg) rotateZ(${(z += 20)}deg)`;
});

const playPause = () => {
  if (isRotate) {
    interval = setInterval(() => {
      cube.style.transform = `rotateY(${y++}deg) rotateX(${x}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};
playPause();

document.querySelector('.controls').addEventListener('mouseover', () => {
  isRotate = false;
  playPause();
});
document.querySelector('.controls').addEventListener('mouseout', () => {
  isRotate = true;
  playPause();
});
