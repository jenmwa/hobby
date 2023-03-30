import './style/style.scss';
import images from './imgArray';

let imgSection = renderImgSection();

const aboutSection = `
<section class="about-section">
  <div class="about-upper">
    <h1>WELCOME!</h1>
      <p>To my image gallery.<br>
      Project made in the course Work Methology for programmers at MedieInstitutet February 2023.
      </p>
  </div>
    <div class="about-down">
      <p class="introduction">
      Using TypeScript, focusing on keyboard accessibility, 
      where you can tab between the images in the gallery view, 
      and open/close the popup modals using the keyboards enter and esc key.<br>
      Played around with tabindex to create a flow FROM GALLERY VIEW TO POP UP MODAL.<br>
      Fun little project and learned a lot!<br><br>


      </p>
    </div>

</section>
`;

// const sortSection = `
//   <section class="sortSection">
//     <div class="upper">
//       <p>sort by:</p>
//     </div>
//     <div class="down">
//       <p>abc</p>
//       <p>date</p>
//       <p>category</p>
//     <div>
//   </section>
// `;

let createImgPopup = '';

for (let i = 0; i < images.length; i++) {
  const imgtext = images[i];
createImgPopup += `
  <div class="image-view"></div>
    <div class="image-box">
      <button id="prev-btn">
      </button>
      <button id="next-btn"></button>
      <div class="image-text-container">
        <p>${imgtext.imgText}</p>
      </div>
    </div>
  </div>
`;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav id="navBar">this is the navigation bar

  </nav>
  <main>
    ${aboutSection}
  
    <div class="container">
      ${imgSection}
    </div>
    ${createImgPopup}
    <section class="tech-container">
      <p>this could be the techSection</p>
    </section>
    <section class="tech-container">
      <p>this could be the contactSection</p>
    </section>
  </main>

  <footer><a href="mailto:hej@jenwaller.se" target="_blank"> hej@jenwaller.se</footer>
`;

const navBar: HTMLElement | null = document.querySelector('#navBar');
navBar?.addEventListener('click', function() {
  console.log('click')
})

// const zoomBtns: NodeListOf<Element> = document.querySelectorAll('.zoom-text');
const nextBtn: HTMLButtonElement | null = document.getElementById('next-btn') as HTMLButtonElement;
const prevBtn: HTMLButtonElement | null = document.getElementById('prev-btn') as HTMLButtonElement;

const allImages = document.querySelectorAll<HTMLButtonElement>('.img-container');
const imageView: HTMLElement | null = document.querySelector('.image-view');
const imageBox: HTMLElement | null = document.querySelector('.image-box');

let currentImageIndex = 0;

function renderImgSection() {
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
  return imgSection;
}

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

