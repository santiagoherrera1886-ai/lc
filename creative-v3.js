/* Little Caesars Creative Studio V3: progressive enhancement of existing working app. */
(function premiumV3(){
"use strict";
const PIZZA="https://img0.didiglobal.com/static/soda_public/img_8d6adfb490b9533d4fb81d933b35d3bb.jpg";
const COMBO="https://img0.didiglobal.com/static/soda_public/do1_E8gDvXml7Ra9rilRSUJZ";
const BOX="https://images.rappi.com/restaurants_background/ll-1649262016299_hq.jpeg?d=700x100&e=webp&q=80";
const PIZZA2="https://img0.didiglobal.com/static/soda_public/do1_dkSybJU5Qi4e6FutGsF1";
const LOGO="./assets/platforms/";
const $=id=>document.getElementById(id);
const fmt=n=>Number(n).toLocaleString("es-CO",{maximumFractionDigits:1});
const compact=n=>n>=1e6?fmt(n/1e6)+" M":n>=1e3?fmt(n/1e3)+" mil":fmt(n);
function safeStorage(action,value){try{if(action==="get")return localStorage.getItem("lc-presentation-mode-v3");localStorage.setItem("lc-presentation-mode-v3",value)}catch(e){return null}}
function addTicker(){
 const top=document.querySelector(".topbar");if(!top)return;
 top.insertAdjacentHTML("afterend",'<div class="lc3-ticker" aria-label="Concepto de comunicación"><div class="lc3-ticker-content" aria-hidden="true">'+Array(3).fill('<span>THE STORE IMPACT EDITION</span><i>✷</i><span>PIZZA PIZZA!</span><i>✷</i><span>COLOMBIA 2026</span><i>✷</i><span>REACH × STORE TRAFFIC</span><i>✷</i>').join("")+'</div></div>');
}
function presentationMode(){
 const actions=document.querySelector(".topbar-right");if(!actions)return;
 const b=document.createElement("button");b.type="button";b.id="lc3Presentation";b.className="lc3-present-button";
 b.title="Mostrar dashboard sin menú lateral";actions.insertBefore(b,actions.firstChild);
 const set=on=>{
  document.body.classList.toggle("lc3-presentation",on);b.setAttribute("aria-pressed",String(on));
  b.innerHTML=on?'<span aria-hidden="true">▤</span> <span>Salir de presentación</span>':'<span aria-hidden="true">▣</span> <span>Presentar</span>';
  safeStorage("set",on?"1":"0");window.dispatchEvent(new Event("resize"));
 };
 set(safeStorage("get")==="1");
 b.addEventListener("click",()=>set(!document.body.classList.contains("lc3-presentation")));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.body.classList.contains("lc3-presentation"))set(false)});
}
function billboard(){
 const metrics=document.querySelector("#view-summary .stats-grid");if(!metrics)return;
 metrics.insertAdjacentHTML("afterend",`<section class="lc3-billboard" aria-labelledby="lc3BillTitle">
 <div class="lc3-billboard-top"><span>CAMPAIGN PLATFORM / 001</span><span>COLOMBIA · 18+</span></div>
 <div class="lc3-billboard-content">
 <div class="lc3-billboard-copy"><span class="lc3-upper">NO ES SOLO UNA PIZZA. ES EL PLAN.</span>
 <h2 id="lc3BillTitle">PIZZA.<br><i>PIZZA.</i><br><em>POR TODAS<br>PARTES.</em></h2>
 <p>Una gran idea que vive en las plataformas y termina en el lugar donde importa: la tienda.</p>
 <button type="button" data-goto="media">Descubrir la campaña <b>↗</b></button></div>
 <div class="lc3-billboard-visual"><div class="lc3-pizza-halo"></div><img src="${PIZZA}" alt="Pizza de pepperoni Little Caesars" loading="lazy">
 <div class="lc3-pizza-caption">HOT<br><strong>&amp; READY</strong></div><div class="lc3-billboard-splash splash1">✷</div><div class="lc3-billboard-splash splash2">✳</div></div></div>
 <div class="lc3-billboard-bottom"><span>BRAND AT SCALE</span><span>LOCAL INTENT IN MOTION</span><span>CREATED FOR THE CRAVING</span></div></section>`);
}
function strip(){
 const s=document.querySelector("#view-summary .lc-brand-story");if(!s)return;
 s.insertAdjacentHTML("afterend",`<div class="lc3-steps" aria-label="Concepto de activación"><div><span class="lc3-step-index">01 / DESPERTAR</span><strong>Que te vean.</strong><p>Alcance abierto a toda Colombia.</p></div><span class="lc3-step-arrow">➜</span><div><span class="lc3-step-index">02 / ANTOJAR</span><strong>Que te recuerden.</strong><p>Ideas creativas con hambre de pizza.</p></div><span class="lc3-step-arrow">➜</span><div><span class="lc3-step-index">03 / ACTIVAR</span><strong>Que encuentren la tienda.</strong><p>Intención cercana y rutas medibles.</p></div></div>`);
}
function freshPhotography(){
 document.querySelectorAll('.lc-editorial-gallery img').forEach((img,i)=>{
  img.src=i===0?BOX:COMBO;
  img.alt=i===0?"Pizza, caja naranja con el César de Little Caesars y acompañamientos":"Combo de pizza Little Caesars";
  img.referrerPolicy="no-referrer";
 });
 document.querySelectorAll('#view-summary .lc-ecosystem-visual .lc-visual-pizza').forEach((img,i)=>{
   img.src=[PIZZA,COMBO,PIZZA2][i]||PIZZA;img.alt="Producto de pizza Little Caesars";
 });
 document.querySelectorAll('#view-media .lc-media-showcase .lc-phone>img').forEach((img,i)=>img.src=[PIZZA,PIZZA2,COMBO][i]||PIZZA);
 const hero=document.querySelector('.lc-hero-product');if(hero)hero.src=PIZZA;
}
function designTerritory(){
 const head=document.querySelector("#view-territory .page-head");if(!head)return;
 head.insertAdjacentHTML("afterend",`<div class="lc3-territory-stage"><div class="lc3-territory-copy">
 <span>GEO INTELLIGENCE / STORE NETWORK</span><h2>Una marca<br><em>sin fronteras.</em></h2>
 <p>Alcance de marca para Colombia. Tráfico local donde hay una tienda documentada, sin inventar locales en ciudades de expansión.</p>
 <div class="lc3-territory-tags"><span>● 18 sedes referenciadas</span><span>◎ 15 mercados de análisis</span></div></div>
 <div class="lc3-territory-map"><div class="lc3-country-shape">CO<span>✹</span></div><div class="lc3-map-ring ring1"></div><div class="lc3-map-ring ring2"></div>
 <div class="lc3-map-point point1">BOGOTÁ <strong>13</strong></div><div class="lc3-map-point point2">CALI <strong>04</strong></div><div class="lc3-map-point point3">CHÍA <strong>01</strong></div></div></div>`);
 const bar=document.querySelector("#view-territory .toolbar");
 if(bar)bar.insertAdjacentHTML("beforebegin",`<section class="lc3-city-selector" aria-label="Selección rápida de ciudades">
 <div><span class="lc3-eyebrow">TIENDAS EN EL INVENTARIO</span><h3>Elige un territorio.</h3></div><div class="lc3-city-pills">
 <button type="button" data-city="all" class="is-active">Todas <b>18</b></button>
 <button type="button" data-city="Bogotá">Bogotá <b>13</b></button>
 <button type="button" data-city="Cali">Cali <b>04</b></button>
 <button type="button" data-city="Chía">Chía <b>01</b></button></div></section>`);
 const buttons=[...document.querySelectorAll(".lc3-city-pills button")];const select=$("cityFilter"),mode=$("territoryMode");
 if(select&&mode){
 const sync=()=>buttons.forEach(b=>b.classList.toggle("is-active",b.dataset.city===select.value));
 buttons.forEach(b=>b.addEventListener("click",()=>{
  const stores=mode.querySelector('[data-mode="stores"]');if(stores&&!stores.classList.contains("selected"))stores.click();
  select.value=b.dataset.city;select.dispatchEvent(new Event("change",{bubbles:true}));sync();
  document.querySelector(".map-layout")?.scrollIntoView({behavior:"smooth",block:"center"});
 }));
 select.addEventListener("change",sync);mode.addEventListener("click",()=>setTimeout(sync,0));
 }
 const map=document.querySelector(".map-container");
 if(map)map.insertAdjacentHTML("afterbegin",`<div class="lc3-map-overlay"><small>LIVE EXPLORER</small><strong>STORE NETWORK</strong><span>Referencias geográficas aproximadas</span></div>`);
}
function designAudiences(){
 const head=document.querySelector("#view-audiences .page-head");if(!head)return;
 head.insertAdjacentHTML("afterend",`<div class="lc3-audience-opener"><div class="lc3-aud-type"><span>THE CRAVING IS UNIVERSAL</span>
 <h2>¿QUIÉN<br><em>DIJO<br>PIZZA?</em></h2><p>Todos. Pero cada momento pide una historia diferente.</p></div>
 <div class="lc3-aud-photo"><img src="${BOX}" alt="Pizza y caja Little Caesars con el personaje César" loading="lazy"><div class="lc3-aud-stamp">PIZZA<br>FOR<br>EVERY<br>PLAN ↗</div></div></div>`);
 document.querySelectorAll(".persona-card").forEach((el,i)=>{
  const visual=el.querySelector(".persona-visual");
  if(visual)visual.insertAdjacentHTML("beforeend",`<span class="lc3-persona-no">0${i+1}</span><span class="lc3-persona-tag">${["SHARE THE MOMENT","FRIENDS FIRST","FAST & READY","ANYTIME PLAN"][i]}</span>`);
 });
}
const STORIES=[
{media:"Meta",slug:"meta",head:"EL PLAN<br>SE COMPARTE.",subtitle:"REELS / STORIES / ALCANCE",copy:"La primera impresión debe despertar hambre: presencia nacional, impacto de producto y proximidad cuando el usuario está cerca de una tienda.",photo:PIZZA,step:"01 / DESCUBRIMIENTO",goal:"Reconocimiento + cobertura"},
{media:"TikTok",slug:"tiktok",head:"POV:<br>SE ANTOJARON.",subtitle:"SHORT-FORM / CULTURE / SOCIAL",copy:"Momentos reales, humor cotidiano, compartir pizza con amigos y videos que construyen memoria de marca.",photo:PIZZA2,step:"02 / CONSIDERACIÓN",goal:"Video corto + intención"},
{media:"Google",slug:"google",head:"PIZZA<br>CERCA DE MÍ.",subtitle:"SEARCH / MAPS / LOCAL ACTIONS",copy:"Cuando aparece la intención, el usuario necesita ubicación, horario, indicaciones y un camino sencillo hasta la tienda.",photo:COMBO,step:"03 / BÚSQUEDA",goal:"Rutas + clics cualificados"}
];
function creativeLab(){
 const grid=$("channelGrid");if(!grid)return;
 const html=`<section class="lc3-creative-lab" aria-label="Estudio de conceptos creativos">
 <div class="lc3-creative-heading"><div><span class="lc3-eyebrow">CONTENT PLAYGROUND / THE LITTLE CAESARS WAY</span><h2>Ideas que <em>dan hambre.</em></h2><p>Explora un concepto editorial por plataforma. Son ejemplos, no campañas publicadas.</p></div>
 <div class="lc3-creative-controls">${STORIES.map((s,i)=>`<button data-story="${i}" type="button" ${i===0?'class="active" aria-pressed="true"':'aria-pressed="false"'}><img src="${LOGO+s.slug}.svg" alt="" aria-hidden="true"> ${s.media}</button>`).join("")}</div></div>
 <div class="lc3-creative-frame"><div class="lc3-creative-visual"><div class="lc3-creative-sun"></div>
 <img id="lc3CreativeImage" src="${PIZZA}" alt="Producto Little Caesars" loading="lazy">
 <div class="lc3-creative-watermark">PIZZA PIZZA!</div><span class="lc3-creative-photo-note">CREATIVE CONCEPT · FOR PLANNING ONLY</span></div>
 <div class="lc3-creative-copy"><span id="lc3CreativeStep">01 / DESCUBRIMIENTO</span>
 <h3 id="lc3CreativeTitle">EL PLAN<br>SE COMPARTE.</h3><div class="lc3-creative-sub" id="lc3CreativeSub">REELS / STORIES / ALCANCE</div>
 <p id="lc3CreativeDesc">${STORIES[0].copy}</p><div class="lc3-creative-cta"><span id="lc3CreativeGoal">${STORIES[0].goal}</span>
 <button type="button" id="lc3CopyIdea">Copiar idea ↗</button></div></div></div></section>`;
 const funnel=grid.nextElementSibling;if(funnel)funnel.insertAdjacentHTML("beforebegin",html);else grid.insertAdjacentHTML("afterend",html);
 const buttons=[...document.querySelectorAll("[data-story]")];
 const update=idx=>{
  const s=STORIES[idx];$("lc3CreativeImage").src=s.photo;$("lc3CreativeTitle").innerHTML=s.head;
  $("lc3CreativeSub").textContent=s.subtitle;$("lc3CreativeDesc").textContent=s.copy;
  $("lc3CreativeStep").textContent=s.step;$("lc3CreativeGoal").textContent=s.goal;
  buttons.forEach(b=>{const on=Number(b.dataset.story)===idx;b.classList.toggle("active",on);b.setAttribute("aria-pressed",String(on))});
 };
 buttons.forEach(b=>b.addEventListener("click",()=>update(Number(b.dataset.story))));
 $("lc3CopyIdea")?.addEventListener("click",async e=>{
  const idx=buttons.findIndex(b=>b.classList.contains("active")),s=STORIES[Math.max(idx,0)];
  const msg=`LITTLE CAESARS / ${s.media}\n${s.head.replaceAll("<br>"," ")}\n${s.subtitle}\n${s.copy}\nObjetivo: ${s.goal}\nConcepto sujeto a aprobación.`;
  try{await navigator.clipboard.writeText(msg);const old=e.currentTarget.textContent;e.currentTarget.textContent="✓ Idea copiada";setTimeout(()=>e.currentTarget.textContent=old,1500)}catch(err){window.prompt("Copia la idea",msg)}
 });
}
function designSim(){
 const sim=document.querySelector("#view-simulator .sim-grid");if(!sim)return;
 sim.insertAdjacentHTML("beforebegin",`<div class="lc3-sim-intro"><div><span>THE IMPACT ENGINE / BUILD YOUR SCENARIO</span>
 <strong>Tu idea. Tus números.<br><em>Tu siguiente impacto.</em></strong></div><div class="lc3-dial">↗<small>LIVE<br>MODEL</small></div></div>`);
 sim.insertAdjacentHTML("afterend",`<section class="lc3-curve" aria-labelledby="lc3CurveTitle">
 <div class="lc3-curve-head"><div><span class="lc3-eyebrow">ALCANCE / VISUALIZACIÓN ILUSTRATIVA</span>
 <h3 id="lc3CurveTitle">De un impacto a <em>muchas personas.</em></h3>
 <p>Distribución ilustrativa del alcance modelado durante la campaña. No es una predicción temporal validada ni representa entregas reales.</p></div>
 <div class="lc3-curve-total"><small>ALCANCE FINAL MODELADO</small><strong id="lc3CurveReach">—</strong></div></div>
 <div class="lc3-chart-box"><svg id="lc3ReachChart" viewBox="0 0 900 240" role="img" aria-label="Curva ilustrativa de alcance acumulado">
 <defs><linearGradient id="lc3AreaGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e66200" stop-opacity=".33"/><stop offset="1" stop-color="#e66200" stop-opacity="0"/></linearGradient></defs>
 <g class="lc3-chart-grid"><line x1="50" y1="25" x2="860" y2="25"/><line x1="50" y1="85" x2="860" y2="85"/><line x1="50" y1="145" x2="860" y2="145"/><line x1="50" y1="205" x2="860" y2="205"/></g>
 <path id="lc3Area" fill="url(#lc3AreaGradient)"></path><path id="lc3CurveLine" fill="none" stroke="#e66200" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
 <circle id="lc3Endpoint" r="8" fill="#e66200" stroke="white" stroke-width="4"></circle></svg>
 <div class="lc3-chart-axis"><span>DÍA 1</span><span id="lc3MidDay">DÍA 15</span><span id="lc3EndDay">DÍA 30</span></div></div>
 <div class="lc3-curve-foot"><span><i></i> Modelo acumulado ilustrativo</span><span>PRESUPUESTO × CPM × FRECUENCIA × DEDUPLICACIÓN SUPUESTA</span></div></section>`);
 const inputs=["budget","storePercent","cpm","frequency","cpc","days"];
 const update=()=>{
  const budget=Number($("budget")?.value||20000000),cpm=Math.max(1,Number($("cpm")?.value||7000));
  const freq=Math.max(.1,Number($("frequency")?.value||2.5)),days=Math.max(1,Number($("days")?.value||30));
  const reach=budget*1000/cpm/freq*.85;
  const poly=Array.from({length:46},(_,i)=>{const t=i/45,share=(1-Math.exp(-3*t))/(1-Math.exp(-3));
   return (i===0?"M":"L")+(50+t*810).toFixed(1)+","+(205-share*175).toFixed(1)}).join(" ");
  $("lc3CurveLine").setAttribute("d",poly);$("lc3Area").setAttribute("d",poly+" L860,205 L50,205 Z");
  $("lc3Endpoint").setAttribute("cx","860");$("lc3Endpoint").setAttribute("cy","30");
  $("lc3CurveReach").textContent=compact(reach);
  $("lc3MidDay").textContent="DÍA "+Math.ceil(days/2);$("lc3EndDay").textContent="DÍA "+days;
 };
 inputs.forEach(id=>$(id)?.addEventListener("input",update));
 $("resetSim")?.addEventListener("click",()=>requestAnimationFrame(update));update();
}
function ornaments(){
 document.querySelectorAll(".page-head").forEach((el,i)=>{el.classList.add("lc3-page-head");el.setAttribute("data-page-number","0"+(i+2))});
 const summary=document.querySelector("#view-summary .page-eyebrow");
 if(summary)summary.insertAdjacentHTML("afterend",'<div class="lc3-summary-topline"><span>CAMPAIGN SYSTEM / LITTLE CAESARS</span><span>MARKETING SCIENCE × BRAND BUILDING</span></div>');
}
function start(){
 addTicker();presentationMode();billboard();strip();freshPhotography();designTerritory();designAudiences();creativeLab();designSim();ornaments();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();