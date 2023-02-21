import './style.scss';
import images from './imgArray';

// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'

const container = `
  <div class="container">
    ${images.map(image => `
      <article>
        <div class="img-container">
          <img src="${image.url}" alt="${image.alt}">
          <div class="content">
            <div class="zoom-text">
              Click
            </div>
            <h2>${image.title}</h2>
          </div>
        </div>
      </article>
    `).join('')}
  </div>
`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav>some navigation</nav>
  <div>
    <h1>jennys fotosida</h1>
    <div>
      <p>gillar att fota</p>
    </div>
    ${container}
    <div class="image-view"></div>
    <div class="image-box">
      <button id="prev-btn"></button>
      <button id="next-btn"></button>
    </div>
  </div>
  <footer>here's the footer</footer>
`;

const zoomBtns: NodeListOf<Element> = document.querySelectorAll('.zoom-text');
const allImages:NodeListOf<Element> = document.querySelectorAll('.img-container');
const imageView: HTMLElement | null = document.querySelector('.image-view');
const nextBtn: HTMLButtonElement | null = document.getElementById('next-btn') as HTMLButtonElement;
const prevBtn: HTMLButtonElement | null = document.getElementById('prev-btn') as HTMLButtonElement;
const imageBox: HTMLDivElement | null= document.querySelector('.image-box');

let currentImageIndex: number = 0;

if (imageView) {
  imageView.addEventListener('click', function(){
      this.style.display = "none";
      if (imageBox) {
        imageBox.style.display = "none";
      }
  });
};

zoomBtns.forEach(function(btn, index) {
  btn.addEventListener('click', function() {
    if (imageView && imageBox) {
      imageView.style.display = "block";
      imageBox.style.display = "block";
      currentImageIndex = index + 1;
      currentImageDisplay(currentImageIndex);
    }
  })
})

function currentImageDisplay(index: number): void {
  if (imageBox) {
    imageBox.style.background = `url(images/img${currentImageIndex}.webp) center/cover no-repeat`;
  }
}

if (prevBtn) {
  prevBtn.addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex === 0) {
      currentImageIndex = allImages.length;
    }
    currentImageDisplay(currentImageIndex);
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex === 5) {
      currentImageIndex = 1;
    }
    currentImageDisplay(currentImageIndex);
  });
}

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// <a href="https://vitejs.dev" target="_blank">
// <img src="/vite.svg" class="logo" alt="Vite logo" />
// </a>
// <a href="https://www.typescriptlang.org/" target="_blank">
// <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
// </a>
// <h1>Vite + TypeScript</h1>
// <div class="card">
// <button id="counter" type="button"></button>
// </div>
// <p class="read-the-docs">
// Click on the Vite and TypeScript logos to learn more
// </p>