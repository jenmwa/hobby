(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const y of l.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&m(y)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function m(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();const s=[{url:"img/myles-kennedy_photoBy_Jenny-Waller.webp",urlImg1440:"img/myles-kennedy_highRes_photoBy_Jenny-Waller.webp",alt:"Alter Bridge live photo by Jenny Waller",title:"Alter Bridge",category:"music",imgText:"Alter Bridge, Partille Arena, Göteborg, november 2022"},{url:"img/avatar_photoBy_Jenny-Waller.webp",urlImg1440:"img/avatar_1440_photoBy_Jenny-Waller.webp",alt:"Avatar live photo by Jenny Waller",title:"Avatar",category:"music",imgText:"Avatar, Fållan, Stockholm, mars 2022"},{url:"img/hank_photoBy_Jenny-Waller.webp",urlImg1440:"img/hank_1440_photoBy_Jenny-Waller.webp",alt:"Hank von Hell live photo by Jenny Waller",title:"Hank von Hell",category:"music",imgText:"Hank von Hell, Nöjesfabriken Karlstad december 2018"},{url:"img/ghost_photoBy_Jenny-Waller.webp",urlImg1440:"img/ghost_1440_photoBy_Jenny-Waller.webp",alt:"Ghost live photo by Jenny Waller",title:"Ghost",category:"music",imgText:"Ghost, Avicci Arena, Stockholm, april 2022"},{url:"img/gerstner_photoBy_Jenny-Waller.webp",urlImg1440:"img/gerstner_1440_photoBy_Jenny-Waller.webp",alt:"Helloween live photo by Jenny Waller",title:"Helloween",category:"music",imgText:"Helloween, Sweden Rock Festival, june 2010"},{url:"img/rammstein_photoBy_Jenny-Waller.webp",urlImg1440:"img/rammstein_1440_photoBy_Jenny-Waller.webp",alt:"Rammstein live photo by Jenny Waller",title:"Rammstein",category:"music",imgText:"Rammstein, Stockholm Stadion, august 2019"},{url:"img/myrkur_photoBy_Jenny-Waller.webp",urlImg1440:"img/myrkur_1440_photoBy_Jenny-Waller.webp",alt:"Myrkur live photo by Jenny Waller",title:"Myrkur",category:"music",imgText:"Myrkyr, Göta Lejon, Stockholm, may 2022"},{url:"img/behemoth_photoBy_Jenny-Waller.webp",urlImg1440:"img/behemoth_1440_photoBy_Jenny-Waller.webp",alt:"Behemoth live photo by Jenny Waller",title:"Behemoth",category:"music",imgText:"Behemoth, Ericsson Globe, Stockholm february 2020"},{url:"img/in-flames_photoBy_Jenny-Waller.webp",urlImg1440:"img/in-flames_1440_photoBy_Jenny-Waller.webp",alt:"In Flames live photo by Jenny Waller",title:"In Flames",category:"music",imgText:"In Flames, Berns, Stockholm, mars 2017"},{url:"img/tobias-sammet_photoBy_Jenny-Waller.webp",urlImg1440:"img/tobias-sammet_1440_photoBy_Jenny-Waller.webp",alt:"Avantasia live photo by Jenny Waller",title:"Avantasia",category:"music",imgText:"Avantasia, Sweden Rock Festival, june 2012"},{url:"img/helloween_photoBy_Jenny-Waller.webp",urlImg1440:"img/helloween_1440_photoBy_Jenny-Waller.webp",alt:"Helloween live photo by Jenny Waller",title:"Helloween",category:"music",imgText:"Helloween, Partille Arena, december 2017"}];let f=w();const _=`
<section class="about-section">
  <div class="about-upper">
    <h1>WELCOME STRANGER!</h1>
      <p>this is my image gallery.<br>
      Project made in the course Work Methology for programmers at MedieInstitutet February 2023.
      </p>
  </div>
    <div class="about-down">
      <p class="introduction">
      Using TypeScript, focusing on keyboard accessibility, 
      where you can tab between the images in the gallery view, 
      and open/close the popup modals using the keyboards enter and esc key.<br>
      Played around with tabindex to create a flow from gallery view to pop up modal.<br>
      Fun little project and learned a lot!<br><br>

      </p>
    </div>

</section>
`;let b="";for(let e=0;e<s.length;e++){const t=s[e];b+=`
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
  <nav id="navBar">this is the navigation bar

  </nav>
  <main>
    ${_}
  
    <div class="container">
      ${f}
    </div>
    ${b}
    <section class="tech-container">
      <p>this could be the techSection</p>
    </section>
    <section class="tech-container">
      <p>this could be the contactSection</p>
    </section>
  </main>

  <footer><a href="mailto:hej@jenwaller.se" target="_blank"> hej@jenwaller.se</footer>
`;const u=document.querySelector("#navBar");u==null||u.addEventListener("click",function(){console.log("click")});const d=document.getElementById("next-btn"),h=document.getElementById("prev-btn"),a=document.querySelectorAll(".img-container"),r=document.querySelector(".image-view"),c=document.querySelector(".image-box");let i=0;function w(){let e="";for(let t=0;t<s.length;t++){const o=s[t];e+=`
      <article>
        <button class="img-container">
          <img class="img" src="${o.url}" alt="${o.alt}" width="300">
          <div class="content">
            <h2>${o.title}</h2>
            <p>#${o.category}</p>
          </div>
        </button>
      </article>
  `}return e}function B(e){r&&c&&(r.style.display="block",c.style.display="block",i=e,p(i),k(),r.addEventListener("click",g),window.addEventListener("keyup",v))}function k(){r&&c&&a.forEach(e=>{r.style.display==="block"?e.setAttribute("tabindex","-1"):e.removeAttribute("tabindex")})}function g(){r&&c&&(r.style.display="none",c.style.display="none",W(),r.removeEventListener("click",g),window.removeEventListener("keyup",v))}function W(){a.forEach(e=>{e.removeAttribute("tabindex")})}function v(e){e.key==="Escape"&&g()}a.forEach((e,t)=>{e.addEventListener("click",()=>{r&&c&&B(t)})});function I(e){let t="";if(a){t=s[e].imgText;const o=document.querySelector(".image-text-container");o&&(o.innerHTML=`<p>${t}</p>`)}}function p(e){if(c&&a){const t=a[e].querySelector("img"),o=t==null?void 0:t.getAttribute("src"),m=s[e].urlImg1440;o&&(c.style.background=`url(${m}) center/cover no-repeat`,I(e))}}h&&h.addEventListener("click",function(){i--,i<0&&(i=a.length-1),p(i)});d&&d.addEventListener("click",function(){i++,i===a.length&&(i=0),p(i)});
