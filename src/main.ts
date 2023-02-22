import './style.scss';
import images from './imgArray';

// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'

const container = `
  <div class="container">
    ${images.map(image => `
      <article>
        <button class="img-container">
          <img class="img" src="${image.url}" alt="${image.alt}" width="300">
          <div class="content">
            <h2>${image.title}</h2>
            <p>#${image.category}</p>
          </div>
        </button>
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
    <p>abc</p>
    <p>datum</p>
    <p>kategori</p>
  </section>
`;

const techcontainer = `
  <section class="tech-container">
    <h4>Lights, CAMERA, actions</h4>
    <p>kamera 1:</p>
    <p>kamera 2:</p>
    <p>redigering:</p>
  </section>
`;

const createImgPopup = `
  <div class="image-view"></div>
    <div class="image-box">
      <button id="prev-btn"></button>
      <button id="next-btn"></button>
      <div class="image-text-container">
    <p>some img-text here regarding the img from array</p>
  </div>
    </div>
  </div>

`;


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${nav}
  <div>
    <h1>jennys foton</h1>
    ${aboutSection}
    ${sortSection}
    ${container}
    ${createImgPopup}
    ${techcontainer}

  <footer>here's the footer</footer>
`;



// const zoomBtns: NodeListOf<Element> = document.querySelectorAll('.zoom-text');
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

allImages.forEach(function(btn, index) {
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

