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

import Cube from './cube';
new Cube(document.querySelector('.cube'), { rotate: false });
