(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))p(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const s=[{url:"/myles-kennedy_photoBy_Jenny-Waller.webp",alt:"Alter Bridge live photo by Jenny Waller",title:"Alter Bridge",category:"music",imgText:"Alter Bridge, Partille Arena, Göteborg, november 2022"},{url:"img/avatar_photoBy_Jenny-Waller.webp",alt:"Avatar live photo by Jenny Waller",title:"Avatar",category:"music",imgText:"Avatar, Fållan, Stockholm, mars 2022"},{url:"img/hank_photoBy_Jenny-Waller.webp",alt:"Hank von Hell live photo by Jenny Waller",title:"Hank von Hell",category:"music",imgText:"Hank von Hell, Nöjesfabriken Karlstad december 2018"},{url:"img/ghost_photoBy_Jenny-Waller.webp",alt:"Ghost live photo by Jenny Waller",title:"Ghost",category:"music",imgText:"Ghost, Avicci Arena, Stockholm, april 2022"},{url:"img/gerstner_photoBy_Jenny-Waller.webp",alt:"Helloween live photo by Jenny Waller",title:"Helloween",category:"music",imgText:"Helloween, Sweden Rock Festival, june 2010"},{url:"img/rammstein_photoBy_Jenny-Waller.webp",alt:"Rammstein live photo by Jenny Waller",title:"Rammstein",category:"music",imgText:"Rammstein, Stockholm Stadion, august 2019"},{url:"img/myrkur_photoBy_Jenny-Waller.webp",alt:"Myrkur live photo by Jenny Waller",title:"Myrkur",category:"music",imgText:"Myrkyr, Göta Lejon, Stockholm, may 2022"},{url:"img/behemoth_photoBy_Jenny-Waller.webp",alt:"Behemoth live photo by Jenny Waller",title:"Behemoth",category:"music",imgText:"Behemoth, Ericsson Globe, Stockholm february 2020"},{url:"img/in-flames_photoBy_Jenny-Waller.webp",alt:"In Flames live photo by Jenny Waller",title:"In Flames",category:"music",imgText:"In Flames, Berns, Stockholm, mars 2017"},{url:"img/tobias-sammet_photoBy_Jenny-Waller.webp",alt:"Avantasia live photo by Jenny Waller",title:"Avantasia",category:"music",imgText:"Avantasia, Sweden Rock Festival, june 2012"}];let b=k();const f=`
<section class="about-section">
  <div class="about-upper">
    <h1>HEJ!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
  </div>
    <div class="about-down">
      <p class="introduction">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
    </div>

</section>
`,x=`
  <section class="sortSection">
    <div class="upper">
      <p>sortera på:</p>
    </div>
    <div class="down">
      <p>abc</p>
      <p>datum</p>
      <p>kategori</p>
    <div>
  </section>
`;let v="";for(let e=0;e<s.length;e++){const t=s[e];v+=`
  <div class="image-view"></div>
    <div class="image-box">
      <button id="prev-btn">
      </button>
      <button id="next-btn"></button>
      <div class="image-text-container">
        <p>${t.imgText}</p>
      </div>
    </div>
  </div>
`}document.querySelector("#app").innerHTML=`
  <nav>some navigation
    <ul>
      <li>maybe a link</li>
      <li>maybe two?</li>
    </ul>
  </nav>
  <main>
    ${f}
    ${x}
    <div class="container">
      ${b}
    </div>
    ${v}
    <section class="tech-container">
      <h4>Lights, CAMERA, actions</h4>
      <p>techSection</p>
    </section>
    <section class="tech-container">
      <p>contactSection</p>
    </section>
  </main>

  <footer>here's the footer</footer>
`;const y=document.getElementById("next-btn"),g=document.getElementById("prev-btn"),a=document.querySelectorAll(".img-container"),r=document.querySelector(".image-view"),c=document.querySelector(".image-box");let l=0;function k(){let e="";for(let t=0;t<s.length;t++){const n=s[t];e+=`
      <article>
        <button class="img-container">
          <img class="img" src="${n.url}" alt="${n.alt}" width="300">
          <div class="content">
            <h2>${n.title}</h2>
            <p>#${n.category}</p>
          </div>
        </button>
      </article>
  `}return e}function w(e){r&&c&&(r.style.display="block",c.style.display="block",l=e,d(l),S(),r.addEventListener("click",u),window.addEventListener("keyup",h))}function S(){r&&c&&a.forEach(e=>{r.style.display==="block"?e.setAttribute("tabindex","-1"):e.removeAttribute("tabindex")})}function u(){r&&c&&(r.style.display="none",c.style.display="none",B(),r.removeEventListener("click",u),window.removeEventListener("keyup",h))}function B(){a.forEach(e=>{e.removeAttribute("tabindex")})}function h(e){e.key==="Escape"&&u()}a.forEach((e,t)=>{e.addEventListener("click",()=>{r&&c&&w(t)})});function J(e){let t="";if(a){t=s[e].imgText;const n=document.querySelector(".image-text-container");n&&(n.innerHTML=`<p>${t}</p>`)}}function d(e){if(c&&a){const t=a[e].querySelector("img"),n=t==null?void 0:t.getAttribute("src");n&&(c.style.background=`url(${n}) center/cover no-repeat`,J(e))}}g&&g.addEventListener("click",function(){l--,l<0&&(l=a.length-1),d(l)});y&&y.addEventListener("click",function(){l++,l===a.length&&(l=0),d(l)});
