class SlideShow {
  constructor(container, { numberOfSlides, duration }) {
    this.container = document.querySelector(container);
    this.timeout;
    this.currentSlide = 1;
    this.slides = [];
    this.duration = duration;
    this.numberOfSlides = numberOfSlides;

    this.test();
  }
  createEachImage() {
    for (let i = 1; i <= this.numberOfSlides; i++) {
      const div = document.createElement('div');
      div.className =
        'w-full h-full absolute bg-cover bg-center bg-no-repeat opacity-0 trasition-all duration-1000';

      i === 1 && div.classList.add('opacity-100');

      div.style.backgroundImage = `url(section-1-bg-${i}.jpg)`;
      this.slides.push(div);
      this.container.appendChild(div);
    }
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
    this.createEachImage();
    this.runSlideshow();
  }
}
export default SlideShow;
