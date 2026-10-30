/* Little Caesars V4 — Campaign experience. This layer preserves existing app features. */
(function studioV4(){
"use strict";
const $=id=>document.getElementById(id), qs=(sel,root=document)=>root.querySelector(sel), all=(sel,root=document)=>Array.from(root.querySelectorAll(sel));
const PHOTO={
 pizza:"https://img0.didiglobal.com/static/soda_public/img_8d6adfb490b9533d4fb81d933b35d3bb.jpg",
 box:"https://images.rappi.com/restaurants_background/ll-1649262016299_hq.jpeg?d=700x100&e=webp&q=80",
 combo:"https://img0.didiglobal.com/static/soda_public/do1_E8gDvXml7Ra9rilRSUJZ"
};
const SLIDES=[
 {eyebrow:"01 / LA GRAN IDEA",kicker:"UNA PIZZA. TODO UN PAÍS.",a:"ALCANCE",b:"QUE ABRE",c:"EL APETITO.",desc:"Deja que Colombia la vea. Y cuando la tienda esté cerca, conviértelo en un plan.",photo:PHOTO.combo,side:"BRAND FIRST",tone:"orange",stat:"20 M",sub:"PRESUPUESTO COP"},
 {eyebrow:"02 / LA ESTRATEGIA",kicker:"DEL SCROLL A LA CALLE",a:"DE LA",b:"PANTALLA",c:"A LA TIENDA.",desc:"Cobertura a escala país y mensajes de proximidad solo alrededor de establecimientos validados.",photo:PHOTO.box,side:"STORE FIRST",tone:"ink",stat:"18",sub:"TIENDAS / REFERENCIA"},
 {eyebrow:"03 / LA EXPERIENCIA",kicker:"INTENCIÓN QUE SE MUEVE",a:"MÁS",b:"ANTOJO.",c:"MÁS IMPACTO.",desc:"Tres plataformas, cuatro momentos de consumo y una herramienta para cambiar escenarios al instante.",photo:PHOTO.pizza,side:"MEDIA ENGINE",tone:"cream",stat:"3",sub:"ECOSISTEMAS DE MEDIOS"}
];
function localGet(key){try{return JSON.parse(localStorage.getItem(key))}catch(e){return null}}
function localSet(key,val){try{localStorage.setItem(key,JSON.stringify(val))}catch(e){}}
function format(n){return new Intl.NumberFormat("es-CO",{maximumFractionDigits:0}).format(Math.round(n))}
function money(n){return "$"+format(n)}
function short(n){return n>=1e6? (n/1e6).toLocaleString("es-CO",{maximumFractionDigits:2})+" M":n>=1e3?(n/1e3).toLocaleString("es-CO",{maximumFractionDigits:1})+" mil":format(n)}
let activeSlide=0;
function newHero(){
const original=qs("#view-summary .hero");if(!original)return;
const html=`<section class="lc4-stage" aria-label="Conceptos de campaña Little Caesars">
<div class="lc4-stage-top"><div class="lc4-stage-topbrand"><span class="lc4-sun">✳</span><span>LITTLE CAESARS<br><b>BRAND × MEDIA</b></span></div>
<div class="lc4-issue">THE COLOMBIA EDITION <span>2026 ©</span></div><div class="lc4-slide-numbers"><b id="lc4SlideCurrent">01</b><span>/ 03</span></div></div>
<div class="lc4-stage-grid"><div class="lc4-stage-copy"><div class="lc4-kicker" id="lc4SlideKicker">UNA PIZZA. TODO UN PAÍS.</div>
<div class="lc4-monument" id="lc4SlideTitle"><span>ALCANCE</span><span>QUE ABRE</span><em>EL APETITO.</em></div>
<p id="lc4SlideDesc">Deja que Colombia la vea. Y cuando la tienda esté cerca, conviértelo en un plan.</p>
<div class="lc4-stage-cta"><button type="button" class="lc4-primary" data-goto="simulator">Mover los $20 millones <span>↗</span></button><button type="button" class="lc4-secondary" data-goto="territory">Ver el mapa ↗</button></div>
<div class="lc4-subscript"><span class="lc4-pulse"></span> PLANEACIÓN INTERACTIVA / NO RESULTADOS REALES</div>
</div><div class="lc4-stage-photo"><img id="lc4StageImage" src="${PHOTO.combo}" alt="Productos Little Caesars Colombia" fetchpriority="high">
<div class="lc4-halo"></div><div class="lc4-photo-note" id="lc4PhotoNote">BRAND FIRST</div>
<div class="lc4-stage-seal"><b>HOT-N-READY</b><span>✹</span><small>IDEAS HECHAS<br>PARA COMPARTIR</small></div>
<div class="lc4-cutout"><span>IMPACT / 2026</span><b id="lc4StageStat">20 M</b><small id="lc4StageSub">PRESUPUESTO COP</small></div>
</div></div>
<div class="lc4-stage-bottom"><div class="lc4-stage-selection">
<button type="button" data-lc4-slide="0" aria-label="Concepto 1" aria-pressed="true" class="active">01 <span>ALCANCE</span></button>
<button type="button" data-lc4-slide="1" aria-label="Concepto 2" aria-pressed="false">02 <span>TIENDAS</span></button>
<button type="button" data-lc4-slide="2" aria-label="Concepto 3" aria-pressed="false">03 <span>IMPACTO</span></button></div>
<div class="lc4-stage-arrow-controls"><button type="button" id="lc4Prev" aria-label="Concepto anterior">←</button><button type="button" id="lc4Next" aria-label="Concepto siguiente">→</button></div></div></section>`;
original.insertAdjacentHTML("beforebegin",html);
function selectSlide(i){
activeSlide=(i+SLIDES.length)%SLIDES.length;
const d=SLIDES[activeSlide],stage=qs(".lc4-stage");
if(!stage)return;
stage.dataset.scene=d.tone;
$("lc4SlideKicker").textContent=d.kicker;
$("lc4SlideTitle").innerHTML=`<span>${d.a}</span><span>${d.b}</span><em>${d.c}</em>`;
$("lc4SlideDesc").textContent=d.desc;
const image=$("lc4StageImage");
image.src=d.photo;image.alt=d.side+" — producto Little Caesars";
$("lc4PhotoNote").textContent=d.side;
$("lc4StageStat").textContent=d.stat;$("lc4StageSub").textContent=d.sub;
$("lc4SlideCurrent").textContent=String(activeSlide+1).padStart(2,"0");
all("[data-lc4-slide]").forEach(b=>{let on=Number(b.dataset.lc4Slide)===activeSlide;b.classList.toggle("active",on);b.setAttribute("aria-pressed",String(on))});
}
$("lc4StageImage").addEventListener("error",e=>{if(e.currentTarget.src!==PHOTO.pizza)e.currentTarget.src=PHOTO.pizza},{once:true});
all("[data-lc4-slide]").forEach(b=>b.addEventListener("click",()=>selectSlide(Number(b.dataset.lc4Slide))));
$("lc4Prev").addEventListener("click",()=>selectSlide(activeSlide-1));
$("lc4Next").addEventListener("click",()=>selectSlide(activeSlide+1));
stageShortcuts();
}
function stageShortcuts(){
 const stage=qs(".lc4-stage");if(!stage)return;
 stage.setAttribute("tabindex","0");
 stage.addEventListener("keydown",e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){if(e.target.tagName==="BUTTON")return;e.preventDefault();(e.key==="ArrowRight"?$("lc4Next"):$("lc4Prev")).click()}});
}
function studioHeader(){
const sidebar=qs(".sidebar");
if(sidebar)sidebar.insertAdjacentHTML("beforeend",'<div class="lc4-signature"><div class="lc4-signature-line">DESIGNED FOR THE CRAVING</div><strong>THINK BIG.<br>THINK PIZZA.</strong><span>AN AUDIENCE & IMPACT EXPERIENCE</span></div>');
const main=$("view-summary");
if(main){
const first=qs(".page-eyebrow",main);
if(first)first.insertAdjacentHTML("beforebegin",`<div class="lc4-overline"><span>LC<span class="lc4-dot">●</span>CREATIVE PERFORMANCE STUDIO</span><span class="lc4-overline-right">REACH / STORE IMPACT / MEDIA</span></div>`);
}
}
function homeNarrative(){
const stage=qs(".lc4-stage");if(!stage)return;
stage.insertAdjacentHTML("afterend",`<section class="lc4-manifest" aria-label="Principio estratégico">
<div class="lc4-manifest-title"><span>THIS IS THE BIG IDEA</span><h2>LA MARCA<br><i>SE ANTOJA.</i><br>LA TIENDA<br><em>SE ENCUENTRA.</em></h2></div>
<div class="lc4-manifest-side"><div class="lc4-manifest-orbit"><span>✳</span><small>MORE REACH<br>MORE CRAVING</small></div>
<p><b>Reach a todo el país.</b> Store traffic solo donde existe una ubicación verificable. Dos objetivos conectados, sin confundir clics con visitas físicas.</p>
<button type="button" data-goto="territory">EXPLORAR TERRITORIOS ↗</button></div></section>`);
const gallery=qs("#view-summary .lc-editorial-gallery");
if(gallery)gallery.insertAdjacentHTML("afterend",`<section class="lc4-pizza-quote">
<div class="lc4-quote-index">✷ / CAMPAIGN PHILOSOPHY</div><div><h2>DONDE HAY<br><em>ANTOJO,</em><br>HAY UN PLAN.</h2><p>Piensa en alcance, creatividad y cercanía.<br>La pizza hace el resto.</p></div><span class="lc4-quote-stamp">PIZZA<br>PIZZA!<br>®</span></section>`);
}
function homeServiceTiles(){
const line=qs("#view-summary .section-line");
if(!line)return;
line.insertAdjacentHTML("beforebegin",`<div class="lc4-nav-tiles">
<button type="button" data-goto="audiences"><span>01 / PEOPLE</span><b>AUDIENCE<br>LAB</b><small>4 momentos de consumo ↗</small><i>◉</i></button>
<button type="button" data-goto="media"><span>02 / PLATFORMS</span><b>MEDIA<br>PLAYBOOK</b><small>Meta · TikTok · Google ↗</small><i>▦</i></button>
<button type="button" data-goto="territory"><span>03 / LOCATION</span><b>STORE<br>EXPLORER</b><small>18 puntos por validar ↗</small><i>⌖</i></button>
</div>`);
}
function geographicCards(){
const market=qs("#view-territory .national-panel");
if(!market)return;
market.insertAdjacentHTML("beforebegin",`<div class="lc4-market-story">
<div><span>BRAND COVERAGE</span><h2>LAS CIUDADES<br><em>NO SON EL LÍMITE.</em></h2></div>
<div class="lc4-market-story-data"><span><strong>+15</strong> mercados ilustrativos de awareness</span><span><strong>18</strong> tiendas en inventario de trabajo</span><p>La cobertura es nacional. La intención a tienda exige un local operativo.</p></div>
</div>`);
}
function personCards(){
const grid=$("personaGrid");if(!grid)return;
grid.insertAdjacentHTML("beforebegin",`<div class="lc4-audience-filters" aria-label="Explorar perfiles creativos"><span>EXPLORAR POR MOMENTO</span>
<div class="lc4-audience-tabs"><button type="button" class="active" data-lc4-person="all" aria-pressed="true">Todos</button>
<button type="button" data-lc4-person="0" aria-pressed="false">Compartir</button>
<button type="button" data-lc4-person="1" aria-pressed="false">El parche</button>
<button type="button" data-lc4-person="2" aria-pressed="false">Conveniencia</button>
<button type="button" data-lc4-person="3" aria-pressed="false">Media tarde</button></div></div>`);
const cards=all(".persona-card",grid),buttons=all("[data-lc4-person]");
buttons.forEach(b=>b.addEventListener("click",()=>{
const val=b.dataset.lc4Person;
cards.forEach((c,i)=>{c.hidden=val!=="all"&&i!==Number(val)});
buttons.forEach(q=>{const active=q===b;q.classList.toggle("active",active);q.setAttribute("aria-pressed",String(active))});
grid.classList.toggle("lc4-one-card",val!=="all");
}));
}
function creativeMood(){
const lab=qs("#view-media .lc3-creative-lab");
if(!lab)return;
lab.insertAdjacentHTML("afterend",`<section class="lc4-platform-philosophy">
<div class="lc4-platform-philosophy-title"><span>CAMPAIGN THINKING / 360°</span><h2>UN MENSAJE.<br><em>MUCHAS FORMAS<br>DE ANTOJAR.</em></h2></div>
<div class="lc4-platform-layers"><div><span>01</span><b>SCROLL</b><small>Impacto y reconocimiento.</small></div><div><span>02</span><b>SEARCH</b><small>Captura de interés cercano.</small></div><div><span>03</span><b>STORE</b><small>Ruta e intención local.</small></div></div></section>`);
}
const DATA_KEYS=["budget","storePercent","cpm","frequency","cpc","days"];
const BASE={budget:2e7,storePercent:60,cpm:7000,frequency:2.5,cpc:1000,days:30};
const RANGES={budget:[5e6,8e7],storePercent:[10,90],cpm:[3000,18000],frequency:[1,8],cpc:[300,3000],days:[7,90]};
const STORKEY="lc4-saved-scenarios";
function readForm(){
const obj={};for(const k of DATA_KEYS)obj[k]=Number($(k)?.value??BASE[k]);return obj;
}
function validateScenario(candidate){
if(!candidate||typeof candidate!=="object")return null;
const clean={};for(const k of DATA_KEYS){
const n=Number(candidate[k]),[low,high]=RANGES[k];if(!Number.isFinite(n)||n<low||n>high)return null;clean[k]=n;
}return clean;
}
function metrics(s){
const impressions=s.budget/s.cpm*1000;
return {impressions,reach:impressions/s.frequency*.85,clicks:s.budget*s.storePercent/100/s.cpc,awareness:s.budget*(100-s.storePercent)/100,traffic:s.budget*s.storePercent/100};
}
let saved=[];
function comparison(){
const sim=qs("#view-simulator .sim-explainer");if(!sim)return;
const parsed=localGet(STORKEY);
if(Array.isArray(parsed))saved=parsed.slice(0,3).map(v=>validateScenario(v)).filter(Boolean);
sim.insertAdjacentHTML("afterend",`<section class="lc4-compare" aria-labelledby="lc4CompareTitle">
<header class="lc4-compare-header"><div><span>THE PLANNING ROOM / 3 SCENARIOS</span><h2 id="lc4CompareTitle">JUEGA CON <em>EL IMPACTO.</em></h2><p>Guarda hasta tres escenarios, compáralos y recupera cualquiera de ellos. Son cálculos, no resultados de pauta.</p></div>
<div class="lc4-compare-actions"><button type="button" id="lc4Save">＋ Guardar escenario</button><button type="button" id="lc4CSV">↓ Exportar comparativa</button></div></header>
<div class="lc4-compare-grid" id="lc4CompareGrid" aria-live="polite"></div>
<div class="lc4-compare-foot">DATOS GUARDADOS EN ESTE NAVEGADOR · ESCENARIOS NO COMPARTIDOS AUTOMÁTICAMENTE</div>
</section>`);
$("lc4Save")?.addEventListener("click",()=>{
const s=validateScenario(readForm());if(!s)return;
saved=[...saved,s].slice(-3);localSet(STORKEY,saved);renderCompare();
});
$("lc4CSV")?.addEventListener("click",()=>{
if(!saved.length)return;
const rows=[["Escenario","Presupuesto COP","% tráfico tienda","Inversión alcance","Inversión tráfico","CPM","Frecuencia","Alcance modelado","Impresiones","Clics potenciales","Días"]];
saved.forEach((s,i)=>{const m=metrics(s);rows.push([`Escenario ${i+1}`,s.budget,s.storePercent,Math.round(m.awareness),Math.round(m.traffic),s.cpm,s.frequency,Math.round(m.reach),Math.round(m.impressions),Math.round(m.clicks),s.days])});
const csv="\ufeff"+rows.map(row=>row.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(";")).join("\r\n");
const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));
const a=document.createElement("a");a.href=url;a.download="Little-Caesars-comparativa-escenarios.csv";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
});
$("lc4CompareGrid")?.addEventListener("click",e=>{
const btn=e.target.closest("button[data-lc4-action]");if(!btn)return;
const i=Number(btn.dataset.index);
if(!Number.isInteger(i)||!saved[i])return;
if(btn.dataset.lc4Action==="delete"){saved.splice(i,1);localSet(STORKEY,saved);renderCompare();return}
const s=saved[i];
for(const k of DATA_KEYS){const el=$(k);if(el){el.value=s[k];el.dispatchEvent(new Event("input",{bubbles:true}))}}
qs("#view-simulator .sim-grid")?.scrollIntoView({behavior:"smooth",block:"start"});
});
renderCompare();
}
function renderCompare(){
const grid=$("lc4CompareGrid");if(!grid)return;
const slots=[0,1,2];
grid.innerHTML=slots.map(i=>{
const s=saved[i];
if(!s)return `<article class="lc4-scenario lc4-scenario-empty"><div class="lc4-scenario-no">0${i+1} / EMPTY SLOT</div><div class="lc4-plus">＋</div><p>Guarda un escenario<br>para compararlo aquí.</p></article>`;
const m=metrics(s);
return `<article class="lc4-scenario">
<div class="lc4-scenario-top"><span>SCENARIO / 0${i+1}</span><span>SIMULADO</span></div>
<strong class="lc4-scenario-budget">${money(s.budget)}</strong><div class="lc4-scenario-range"><span>ALCANCE ${100-s.storePercent}%</span><span>TIENDAS ${s.storePercent}%</span></div>
<div class="lc4-scenario-bar"><i style="width:${100-s.storePercent}%"></i><b style="width:${s.storePercent}%"></b></div>
<div class="lc4-scenario-detail"><div><span>ALCANCE MODELADO</span><b>${short(m.reach)}</b></div><div><span>CLICS POTENCIALES</span><b>${short(m.clicks)}</b></div><div><span>FRECUENCIA</span><b>${s.frequency.toLocaleString("es-CO")}</b></div><div><span>DURACIÓN</span><b>${s.days} DÍAS</b></div></div>
<div class="lc4-scenario-actions"><button type="button" data-lc4-action="load" data-index="${i}">Cargar ↗</button><button type="button" data-lc4-action="delete" data-index="${i}" aria-label="Eliminar escenario ${i+1}">✕</button></div></article>`;
}).join("");
const exportBtn=$("lc4CSV");if(exportBtn)exportBtn.disabled=!saved.length;
}
function pointers(){
 // React to scene changes with progressive animation; no external dependencies.
 const stage=qs(".lc4-stage");
 if(stage && typeof IntersectionObserver!=="undefined"){
 const watcher=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){stage.classList.add("lc4-appeared");watcher.disconnect()}}),{threshold:.15});watcher.observe(stage);
 }else stage?.classList.add("lc4-appeared");
 // Add accessibility feedback to external photos; all images have fallback color.
 all(".lc4-stage img").forEach(img=>img.addEventListener("error",()=>{img.parentElement.classList.add("lc4-photo-unavailable")}));
}
function init(){
newHero();studioHeader();homeNarrative();homeServiceTiles();geographicCards();personCards();creativeMood();comparison();pointers();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();