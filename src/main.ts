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
            <p>${image.category}</p>
          </div>
        </div>
      </article>
    `).join('')}
  </div>
`;

const nav = `
<nav>some navigation
  <ul>
    <li>maybe a link</li>
  </ul>
</nav>
`;

const aboutSection = `
<section>
  <p>Jenny.</p>
  <p>Karlstad.</p>
  <p>Hej.</p>
  <p>gillar att fota</p>
</section>
`;

const sortSection = `
  <section class="sortSection">
    <p>sortera på:</p>
    <p>abs</p>
    <p>datum</p>
    <p>kategori</p>
  </section>
`;

const techcontainer = `
  <section>
    <h4>Lights, CAMERA, actions</h4>
    <p>kamera 1:</p>
    <p>kamera 2:</p>
    <p>redigering:</p>
  </section>
`;


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${nav}
  <div>
    <h1>jennys fotosida</h1>
    ${aboutSection}
    ${sortSection}
    ${container}
    ${techcontainer}
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

