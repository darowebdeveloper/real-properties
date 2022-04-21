export default class Cube {
  constructor(cube) {
    this.y = 20;
    this.x = 0;
    this.z = 0;
    this.isRotate = true;
    this.interval;
    this.cube = cube;

    this.test();
  }
  playPause() {
    if (this.isRotate) {
      this.interval = setInterval(() => {
        this.cube.style.transform = `rotateY(${this.y++}deg) rotateX(${
          this.x
        }deg) rotateZ(${this.z}deg)`;
      }, 100);
    } else {
      clearInterval(this.interval);
    }
  }
  events() {
    document.querySelector('.reset-control').addEventListener('click', (e) => {
      e.preventDefault();
      this.x = 0;
      this.y = 20;
      this.z = 0;
      this.cube.style.transform = `rotateX(${this.x}deg) rotateY(${this.y}deg) rotateZ(${this.z}deg)`;
    });

    document.querySelector('.top-x-control').addEventListener('click', (e) => {
      e.preventDefault();
      this.cube.style.transform = `rotateX(${(this.x += 20)}deg) rotateY(${
        this.y
      }deg) rotateZ(${this.z}deg)`;
    });

    document
      .querySelector('.bottom-x-control')
      .addEventListener('click', (e) => {
        e.preventDefault();
        this.cube.style.transform = `rotateX(${(this.x -= 20)}deg) rotateY(${
          this.y
        }deg) rotateZ(${this.z}deg)`;
      });

    document.querySelector('.left-y-control').addEventListener('click', (e) => {
      e.preventDefault();
      this.cube.style.transform = `rotateY(${(this.y -= 20)}deg) rotateX(${
        this.x
      }deg) rotateZ(${this.z}deg)`;
    });

    document
      .querySelector('.right-y-control')
      .addEventListener('click', (e) => {
        e.preventDefault();
        this.cube.style.transform = `rotateY(${(this.y += 20)}deg) rotateX(${
          this.x
        }deg) rotateZ(${this.z}deg)`;
      });

    document.querySelector('.top-z-control').addEventListener('click', (e) => {
      e.preventDefault();
      this.cube.style.transform = `rotateY(${this.y}deg) rotateX(${
        this.x
      }deg) rotateZ(${(this.z -= 20)}deg)`;
    });

    document
      .querySelector('.bottom-z-control')
      .addEventListener('click', (e) => {
        e.preventDefault();
        this.cube.style.transform = `rotateY(${this.y}deg) rotateX(${
          this.x
        }deg) rotateZ(${(this.z += 20)}deg)`;
      });

    document.querySelector('.controls').addEventListener('mouseover', () => {
      this.isRotate = false;
      this.playPause();
    });
    document.querySelector('.controls').addEventListener('mouseout', () => {
      this.isRotate = true;
      this.playPause();
    });
  }
  test() {
    this.playPause();
    this.events();
  }
}
