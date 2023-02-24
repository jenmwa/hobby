import './style.scss'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav>some navigation
    <ul>
      <li>maybe a link</li>
      <li>maybe two?</li>
    </ul>
  </nav>
  <main>
    ${aboutSection}
    ${sortSection}
    <div class="container">
      ${imgSection}
    </div>
    ${createImgPopup}
    <section class="tech-container">
      <h4>Lights, CAMERA, actions</h4>
      <p>techSection</p>
    </section>
    <section class="tech-container">
      <p>contactSection</p>
    </section>
  </main>

  <footer>here's the footer</footer>
`;

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

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
