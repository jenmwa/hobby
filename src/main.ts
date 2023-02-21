import './style.scss'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav>some navigation</nav>
    <div>
      <h1>jennys fotosida</h1>
      <div>
        <p> gillar att fota
        </p>
      </div>
     

        <div class='container'>
          <article>
            <div class = "img-container">
              <img src = "/img/avatar_photoBy_Jenny-Waller.webp" alt = "Avatar fållan Stockholm 2022">
              <div class = "content">
                <div class = "zoom-text">
                      Click
                </div>
                  <h2>Concert One</h2>
              </div>
            </div>
          </article>

          <article>
            <div class = "img-container">
              <img src = "/img/behemoth_photoBy_Jenny-Waller.webp" alt = "Behemoth Globen Stockholm 2020">
              <div class = "content">
                <div class = "zoom-text">
                      Click
                </div>
                  <h2>Concert Two</h2>
              </div>
            </div>
          </article>

          <article>
            <div class = "img-container">
              <img src = "/img/gerstner_photoBy_Jenny-Waller.webp" alt = "Helloween SRF 2012">
              <div class = "content">
                <div class = "zoom-text">
                      Click
                </div>
                  <h2>Concert Three</h2>
              </div>
            </div>
          </article>

          <article>
            <div class = "img-container">
              <img src = "/img/ghost_photoBy_Jenny-Waller.webp" alt = "Ghost Annexet Stockholm 2019">
              <div class = "content">
                <div class = "zoom-text">
                      Click
                </div>
                  <h2>Concert Four</h2>
              </div>
            </div>
          </article>
        </div>


      <div class="image-view">
      </div>

      <div class = "image-box">
        <div id = "prev-btn"></div>
        <div id = "next-btn"></div>
      </div>
     

    </div>
  <footer>here's the footer</footer>

    `

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

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