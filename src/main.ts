import './style.scss';
import images from './imgArray';

let imgSection = '';

for (let i = 0; i < images.length; i++) {
  const image = images[i];
  
  imgSection += `
      <article>
        <button class="img-container">
          <img class="img" src="${image.url}" alt="${image.alt}" width="300">
          <div class="content">
            <h2>${image.title}</h2>
            <p>#${image.category}</p>
          </div>
        </button>
      </article>
  `;
}

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


let createImgPopup = '';

for (let i = 0; i < images.length; i++) {
  const imgtext = images[i];
createImgPopup += `
  <div class="image-view"></div>
    <div class="image-box">
      <button id="prev-btn"></button>
      <button id="next-btn"></button>
      <div class="image-text-container">
    <p>${imgtext.imgText}</p>
  </div>
    </div>
  </div>
`;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${nav}
  <div>
    <h1>jennys foton</h1>
    ${aboutSection}
    ${sortSection}
    <div class="container">
      ${imgSection}
    </div>
    ${createImgPopup}
    ${techcontainer}

  <footer>here's the footer</footer>
`;

// const zoomBtns: NodeListOf<Element> = document.querySelectorAll('.zoom-text');
const nextBtn: HTMLButtonElement | null = document.getElementById('next-btn') as HTMLButtonElement;
const prevBtn: HTMLButtonElement | null = document.getElementById('prev-btn') as HTMLButtonElement;

const allImages = document.querySelectorAll<HTMLButtonElement>('.img-container');
const imageView: HTMLElement | null = document.querySelector('.image-view');
const imageBox: HTMLElement | null = document.querySelector('.image-box');

let currentImageIndex = 0;

function openImagePopup(index: number) {
  if (imageView && imageBox) {
    imageView.style.display = 'block';
    imageBox.style.display = 'block';
    currentImageIndex = index;
    currentImageDisplay(currentImageIndex);
    addTabIndexToImageContainers();
    imageView.addEventListener('click', closeImagePopup);
    window.addEventListener('keyup', handlePopupEscapeBtn);
  }
}

function addTabIndexToImageContainers() {
  if (imageView && imageBox) {
    allImages.forEach((imgContainer) => {
      if (imageView.style.display === 'block') {
        imgContainer.setAttribute('tabindex', '-1');
      } else {
        imgContainer.removeAttribute('tabindex');
      }
    });
  }
}

function closeImagePopup() {
  if (imageView && imageBox) {
    imageView.style.display = 'none';
    imageBox.style.display = 'none';
    removeTabIndexFromImageContainers();
    imageView.removeEventListener('click', closeImagePopup);
    window.removeEventListener('keyup', handlePopupEscapeBtn);
  }
}

function removeTabIndexFromImageContainers() {
  allImages.forEach((imgContainer) => {
    imgContainer.removeAttribute('tabindex');
  });
}

function handlePopupEscapeBtn(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    closeImagePopup();
  }
}

allImages.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (imageView && imageBox) {
      openImagePopup(index);
    }
  });
});

function updateImgText(index: number): void {
  let currentImgText = '';
  if (allImages) {
    currentImgText = images[index].imgText;
    const imgTextContainer = document.querySelector('.image-text-container');
    if (imgTextContainer) {
      imgTextContainer.innerHTML = `<p>${currentImgText}</p>`;
    }
  }
}

function currentImageDisplay(index: number): void {
  if (imageBox && allImages) {
    const image = allImages[index].querySelector('img');
    const imageUrl = image?.getAttribute('src');
    if (imageUrl) {
      imageBox.style.background = `url(${imageUrl}) center/cover no-repeat`;
      updateImgText(index);
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

