console.log('hello');
// slideshow
import SlideShow from './slideshow';
// Images must be copied to the same dist dir; URL is relative to the index.js
const imagesPath = [
  `bg-section-1.jpg`,
  `bg-section-2.jpg`,
  `bg-section-3.jpg`,
  `bg-section-4.jpg`,
  `bg-section-5.jpg`,
];
new SlideShow('.slide-show', imagesPath, {
  numberOfSlides: 5,
  duration: 5000,
});
// Cube
import Cube from './cube';
new Cube(document.querySelector('.cube'), { rotate: false });

// Macbook
const section3Content = document.querySelector('.section-3-content');
window.addEventListener('scroll', (e) => {
  if (
    section3Content.getBoundingClientRect().top +
      section3Content.offsetHeight / 2 <
    window.innerHeight
  ) {
    document.querySelector('.macbook-screen').style.transform = 'rotateX(0)';
    document.querySelector('.loading-wrapper').style.opacity = '1';
    document.querySelector('.progress-bar-inside').style.width = '100%';
    document.querySelector('.loading').style.opacity = '0';
    document.querySelector('.macbook-info').style.opacity = '1';
  }
});
