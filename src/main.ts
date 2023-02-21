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
      currentImageIndex = index;
      currentImageDisplay(currentImageIndex);

      // Add click event listener to image in imageView
      imageView.addEventListener('click', function() {
        imageView.style.display = "none";
        imageBox.style.display = "none";
      });
    }
  });
});

function currentImageDisplay(index: number): void {
  if (imageBox && allImages) {
    const image = allImages[index].querySelector('img');
    const imageUrl = image?.getAttribute('src');
    if (imageUrl) {
      imageBox.style.background = `url(${imageUrl}) center/cover no-repeat`;
    }
  }
}

if (prevBtn) {
  prevBtn.addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = allImages.length -1;
    }
    currentImageDisplay(currentImageIndex);
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex === allImages.length) {
      currentImageIndex = 0;
    }
    currentImageDisplay(currentImageIndex);
  });
}

