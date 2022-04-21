class SlideShow {
  constructor(container, imagesPath = [], { numberOfSlides, duration }) {
    this.container = document.querySelector(container);
    this.timeout;
    this.images = imagesPath;
    this.currentSlide = 1;
    this.slides = [];
    this.duration = duration;
    this.numberOfSlides = numberOfSlides;

    this.test();
  }
  initialize() {
    // Using Tailwind CSS classes
    this.container.className = 'absolute top-0 left-0 w-full h-full -z-10';
    if (this.container.parentElement.classList.contains('relative') == true) {
      this.container.parentElement.classList.add('relative');
    }
  }
  createEachImage() {
    this.images.forEach((img, i) => {
      const div = document.createElement('div');
      div.className =
        'w-full h-full absolute bg-cover bg-center bg-no-repeat opacity-0 trasition-all duration-1000';

      i === 1 && div.classList.add('opacity-100');
      // images are copied to the dist dir using parcel plugin parcel-reporter-static-files-copy
      div.style.background = `linear-gradient(to right, rgba(202, 248, 253, 0.3), rgba(68, 216, 240, 0.5)),url(${img})`;
      this.slides.push(div);
      this.container.appendChild(div);
    });
  }
  runSlideshow() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (this.currentSlide < this.slides.length) {
        this.slides.map((slide) => {
          if (slide.classList.contains('opacity-100')) {
            slide.classList.remove('opacity-100');
          }
        });
        this.slides[this.currentSlide].classList.add('opacity-100');
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }

      this.runSlideshow();
    }, this.duration);
  }
  test() {
    this.initialize();
    this.createEachImage();
    this.runSlideshow();
  }
}
export default SlideShow;
