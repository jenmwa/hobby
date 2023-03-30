(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))p(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function p(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const s=[{url:"img/myles-kennedy_photoBy_Jenny-Waller.webp",alt:"Alter Bridge live photo by Jenny Waller",title:"Alter Bridge",category:"music",imgText:"Alter Bridge, Partille Arena, Göteborg, november 2022"},{url:"img/avatar_photoBy_Jenny-Waller.webp",alt:"Avatar live photo by Jenny Waller",title:"Avatar",category:"music",imgText:"Avatar, Fållan, Stockholm, mars 2022"},{url:"img/hank_photoBy_Jenny-Waller.webp",alt:"Hank von Hell live photo by Jenny Waller",title:"Hank von Hell",category:"music",imgText:"Hank von Hell, Nöjesfabriken Karlstad december 2018"},{url:"img/ghost_photoBy_Jenny-Waller.webp",alt:"Ghost live photo by Jenny Waller",title:"Ghost",category:"music",imgText:"Ghost, Avicci Arena, Stockholm, april 2022"},{url:"img/gerstner_photoBy_Jenny-Waller.webp",alt:"Helloween live photo by Jenny Waller",title:"Helloween",category:"music",imgText:"Helloween, Sweden Rock Festival, june 2010"},{url:"img/rammstein_photoBy_Jenny-Waller.webp",alt:"Rammstein live photo by Jenny Waller",title:"Rammstein",category:"music",imgText:"Rammstein, Stockholm Stadion, august 2019"},{url:"img/myrkur_photoBy_Jenny-Waller.webp",alt:"Myrkur live photo by Jenny Waller",title:"Myrkur",category:"music",imgText:"Myrkyr, Göta Lejon, Stockholm, may 2022"},{url:"img/behemoth_photoBy_Jenny-Waller.webp",alt:"Behemoth live photo by Jenny Waller",title:"Behemoth",category:"music",imgText:"Behemoth, Ericsson Globe, Stockholm february 2020"},{url:"img/in-flames_photoBy_Jenny-Waller.webp",alt:"In Flames live photo by Jenny Waller",title:"In Flames",category:"music",imgText:"In Flames, Berns, Stockholm, mars 2017"},{url:"img/tobias-sammet_photoBy_Jenny-Waller.webp",alt:"Avantasia live photo by Jenny Waller",title:"Avantasia",category:"music",imgText:"Avantasia, Sweden Rock Festival, june 2012"}];let f=k();const w=`
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
    ${w}
  
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
`;const u=document.querySelector("#navBar");u==null||u.addEventListener("click",function(){console.log("click")});const g=document.getElementById("next-btn"),h=document.getElementById("prev-btn"),a=document.querySelectorAll(".img-container"),l=document.querySelector(".image-view"),c=document.querySelector(".image-box");let r=0;function k(){let e="";for(let t=0;t<s.length;t++){const o=s[t];e+=`
      <article>
        <button class="img-container">
          <img class="img" src="${o.url}" alt="${o.alt}" width="300">
          <div class="content">
            <h2>${o.title}</h2>
            <p>#${o.category}</p>
          </div>
        </button>
      </article>
  `}return e}function x(e){l&&c&&(l.style.display="block",c.style.display="block",r=e,d(r),S(),l.addEventListener("click",y),window.addEventListener("keyup",v))}function S(){l&&c&&a.forEach(e=>{l.style.display==="block"?e.setAttribute("tabindex","-1"):e.removeAttribute("tabindex")})}function y(){l&&c&&(l.style.display="none",c.style.display="none",B(),l.removeEventListener("click",y),window.removeEventListener("keyup",v))}function B(){a.forEach(e=>{e.removeAttribute("tabindex")})}function v(e){e.key==="Escape"&&y()}a.forEach((e,t)=>{e.addEventListener("click",()=>{l&&c&&x(t)})});function T(e){let t="";if(a){t=s[e].imgText;const o=document.querySelector(".image-text-container");o&&(o.innerHTML=`<p>${t}</p>`)}}function d(e){if(c&&a){const t=a[e].querySelector("img"),o=t==null?void 0:t.getAttribute("src");o&&(c.style.background=`url(${o}) center/cover no-repeat`,T(e))}}h&&h.addEventListener("click",function(){r--,r<0&&(r=a.length-1),d(r)});g&&g.addEventListener("click",function(){r++,r===a.length&&(r=0),d(r)});
