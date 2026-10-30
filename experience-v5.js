/* Little Caesars V5 — Integrated brand experience, interactive story and live media flightboard. */
(function v5Experience(){
"use strict";
const $=(id)=>document.getElementById(id);
const q=(selector,root=document)=>root.querySelector(selector);
const qa=(selector,root=document)=>[...root.querySelectorAll(selector)];
const f=(n)=>new Intl.NumberFormat("es-CO",{maximumFractionDigits:0}).format(Math.round(Number(n)||0));
const m=(n)=>"$"+f(n);
const pic=[
"https://img0.didiglobal.com/static/soda_public/img_8d6adfb490b9533d4fb81d933b35d3bb.jpg",
"https://images.rappi.com/restaurants_background/ll-1649262016299_hq.jpeg?d=700x100&e=webp&q=80",
"https://img0.didiglobal.com/static/soda_public/do1_E8gDvXml7Ra9rilRSUJZ"
];
const safeVal=(id,defaultVal)=>{const e=$(id);const n=Number(e?.value);return e&&Number.isFinite(n)?n:defaultVal};
const budget=()=>safeVal("budget",20000000);
const traffic=()=>safeVal("storePercent",60);
const cpc=()=>Math.max(1,safeVal("cpc",1000));
const icon=(platform)=>"./assets/platforms/"+platform+".svg";
const STAGES=[
{number:"01",tag:"AMPLIFICACIÓN NACIONAL",title:"QUE COLOMBIA<br><em>LA VEA.</em>",copy:"Video, feed y cobertura. La marca debe estar presente en la conversación, incluso en territorios donde todavía no hay una tienda validada.",meta:"AWARNESS · TODA COLOMBIA",photo:pic[0],budgetLabel:"INVERSIÓN PARA ALCANCE",budgetType:"awareness"},
{number:"02",tag:"DESEO DE MARCA",title:"QUE SE<br><em>ANTOJE.</em>",copy:"Creatividades que hacen protagonista al producto, al momento de consumo y al plan de compartir. Es un enfoque creativo, no una tercera línea presupuestal.",meta:"META · TIKTOK · VIDEO",photo:pic[1],budgetLabel:"3 PLATAFORMAS",budgetType:"media"},
{number:"03",tag:"ACCIÓN DE PROXIMIDAD",title:"QUE LLEGUE<br><em>A LA TIENDA.</em>",copy:"Cuando la tienda ya existe y está confirmada, activamos intención local: búsqueda, mapas, indicaciones y clics de personas cercanas.",meta:"SEARCH · MAPS · TIENDAS REALES",photo:pic[2],budgetLabel:"INVERSIÓN DE TRÁFICO",budgetType:"traffic"}
];
const PLATFORMS=[
{id:"meta",name:"Meta",share:.55,job:"REELS · STORIES · FEED",tactic:"Construcción de demanda + cercanía",icon:"meta"},
{id:"tiktok",name:"TikTok",share:.25,job:"FULL SCREEN · DISCOVERY",tactic:"Deseo, entretenimiento y video corto",icon:"tiktok"},
{id:"google",name:"Google",share:.20,job:"SEARCH · MAPS",tactic:"Intención cercana y rutas hacia tienda",icon:"google"}
];
let journeyIndex=0,intersection=null;
function renderHero(){
const stage=q(".lc4-stage");if(!stage)return;
stage.classList.add("lc5-stage");
const copy=q(".lc4-stage-copy",stage);
if(copy)copy.insertAdjacentHTML("beforeend",'<div class="lc5-stage-corner"><span>CREATIVE SYSTEM <b>●</b> LITTLE CAESARS</span><span>SEASON ONE — 2026</span></div>');
const top=q(".lc4-stage-top",stage);
if(top)top.insertAdjacentHTML("beforeend",'<span class="lc5-stage-label">WE LOVE A GOOD PIZZA PLAN ✳</span>');
const bottom=q(".lc4-stage-bottom",stage);
if(bottom)bottom.insertAdjacentHTML("beforeend",'<div class="lc5-stage-track" aria-hidden="true"><span id="lc5SlideProgress"></span></div>');
function progress(){
const chosen=qa("[data-lc4-slide].active",stage);
const index=chosen.length?Number(chosen[0].dataset.lc4Slide):0;
if($("lc5SlideProgress"))$("lc5SlideProgress").style.width=((index+1)/3*100)+"%";
}
qa("[data-lc4-slide],#lc4Prev,#lc4Next",stage).forEach(b=>b.addEventListener("click",progress));
progress();
}
function storyModule(){
const anchor=q("#view-summary .lc4-nav-tiles");if(!anchor)return;
anchor.insertAdjacentHTML("afterend",`<section class="lc5-journey" aria-labelledby="lc5JourneyTitle">
<div class="lc5-journey-heading"><div><span class="lc5-eyebrow">THE CRAVING JOURNEY / CAMPAIGN EXPERIENCE</span>
<h2 id="lc5JourneyTitle">DEL SCROLL <em>A LA PIZZA.</em></h2></div>
<p>Elige un momento para entender cómo conviven alcance nacional, deseo y tráfico local.</p></div>
<div class="lc5-journey-body">
<div class="lc5-journey-tabs" role="group" aria-label="Momentos de campaña">
${STAGES.map((s,i)=>`<button type="button" class="lc5-step ${i===0?"active":""}" data-lc5-step="${i}" aria-pressed="${i===0}">
<span class="lc5-step-num">${s.number}</span><span class="lc5-step-text"><b>${["Despertar el antojo","Hacerlo inolvidable","Encontrar la tienda"][i]}</b>
<small>${s.tag}</small></span><span class="lc5-step-arrow">↗</span></button>`).join("")}
</div>
<div class="lc5-journey-feature">
<div class="lc5-journey-photo"><img id="lc5JourneyImage" src="${STAGES[0].photo}" alt="Producto Little Caesars" loading="lazy">
<div class="lc5-photo-sign">THE PIZZA EFFECT / COLOMBIA</div></div>
<div class="lc5-journey-copy"><span id="lc5JourneyTag">01 / AMPLIFICACIÓN NACIONAL</span>
<h3 id="lc5JourneyText">QUE COLOMBIA<br><em>LA VEA.</em></h3><p id="lc5JourneyDesc">${STAGES[0].copy}</p>
<div class="lc5-journey-meta"><span id="lc5JourneyMeta">${STAGES[0].meta}</span><div><small id="lc5JourneyBudgetLabel">INVERSIÓN PARA ALCANCE</small><b id="lc5JourneyBudget">—</b></div></div></div>
</div></div><div class="lc5-journey-bottom"><span>✷ LITTLE CAESARS / STORE IMPACT LAB</span>
<button data-goto="simulator" type="button">CONFIGURAR MI INVERSIÓN <b>↗</b></button></div></section>`);
const steps=qa("[data-lc5-step]");
const update=()=>{
const s=STAGES[journeyIndex];
steps.forEach((b,i)=>{b.classList.toggle("active",i===journeyIndex);b.setAttribute("aria-pressed",String(i===journeyIndex))});
$("lc5JourneyImage").src=s.photo;$("lc5JourneyTag").textContent=s.number+" / "+s.tag;
$("lc5JourneyText").innerHTML=s.title;$("lc5JourneyDesc").textContent=s.copy;
$("lc5JourneyMeta").textContent=s.meta;$("lc5JourneyBudgetLabel").textContent=s.budgetLabel;
$("lc5JourneyBudget").textContent=s.budgetType==="media"?"META · TIKTOK · GOOGLE":m(budget()*(s.budgetType==="traffic"?traffic()/100:(100-traffic())/100));
};
steps.forEach(b=>b.addEventListener("click",()=>{journeyIndex=Number(b.dataset.lc5Step);update()}));
["budget","storePercent"].forEach(id=>$(id)?.addEventListener("input",update));
$("resetSim")?.addEventListener("click",()=>requestAnimationFrame(update));
$("lc5JourneyImage")?.addEventListener("error",e=>{e.currentTarget.onerror=null;e.currentTarget.src=pic[0]},{once:true});
update();
}
function mediaFlightboard(){
const media=q("#view-media .lc-media-header-banner");if(!media)return;
media.insertAdjacentHTML("afterend",`<section class="lc5-media-flight" aria-labelledby="lc5MediaFlightTitle">
<div class="lc5-flight-header"><div><span class="lc5-eyebrow">MEDIA INVESTMENT / DISTRIBUCIÓN REFERENCIAL</span><h2 id="lc5MediaFlightTitle">UN PRESUPUESTO.<br><em>TRES MOTORES.</em></h2></div>
<div class="lc5-flight-budget"><span>INVERSIÓN TOTAL DEL ESCENARIO</span><strong id="lc5MediaTotal">—</strong><small>COLOMBIA · COP</small></div></div>
<div class="lc5-flight-columns">
${PLATFORMS.map((p,i)=>`<article class="lc5-flight-card" data-media="${p.id}">
<div class="lc5-flight-icon"><img src="${icon(p.icon)}" alt="Logo ${p.name}"></div><div class="lc5-flight-no">0${i+1} / MEDIA</div>
<h3>${p.name}</h3><span class="lc5-flight-job">${p.job}</span><p>${p.tactic}</p>
<div class="lc5-flight-track"><span style="--share:${p.share*100}%"></span></div>
<div class="lc5-flight-finance"><strong id="lc5Media${i}">—</strong><small>${Math.round(p.share*100)}% DEL TOTAL</small></div>
</article>`).join("")}
</div>
<div class="lc5-flight-bottom"><div><span>ALCANCE NACIONAL</span><b id="lc5FlightAwareness">—</b></div><span class="lc5-flight-plus">+</span><div><span>INTENCIÓN HACIA TIENDAS</span><b id="lc5FlightTraffic">—</b></div>
<button type="button" data-goto="simulator">CAMBIAR DISTRIBUCIÓN ↗</button></div>
<div class="lc5-flight-disclaimer">La participación por plataforma (55% / 25% / 20%) es una recomendación fija sobre el total modelado. El simulador reparte inversión por objetivo, no por plataforma. Clics e indicaciones no equivalen a visitas verificadas.</div>
</section>`);
const update=()=>{
const b=budget(),t=traffic();
$("lc5MediaTotal").textContent=m(b);
PLATFORMS.forEach((p,i)=>{$("lc5Media"+i).textContent=m(b*p.share)});
$("lc5FlightAwareness").textContent=m(b*(100-t)/100);
$("lc5FlightTraffic").textContent=m(b*t/100);
};
["budget","storePercent"].forEach(id=>$(id)?.addEventListener("input",update));
$("resetSim")?.addEventListener("click",()=>requestAnimationFrame(update));
update();
}
function editorialAccents(){
const grids=q("#view-summary .lc4-nav-tiles");
if(grids)grids.classList.add("lc5-navigation");
const personas=q("#view-audiences .persona-grid");
if(personas)personas.classList.add("lc5-persona-grid");
const mediaCards=q("#view-media .lc-media-artcards");
if(mediaCards)mediaCards.classList.add("lc5-media-cards");
const compare=q("#view-simulator .lc4-compare");
if(compare)compare.classList.add("lc5-compare");
const nav=q(".side-nav");
if(nav)nav.insertAdjacentHTML("beforebegin",'<div class="lc5-sidebar-line"><span>PLANNING SUITE</span><i>2026</i></div>');
const note=q("#view-sources .methodology");
if(note)note.insertAdjacentHTML("beforebegin",'<div class="lc5-source-head"><span>NO INVENTAMOS RESULTADOS.</span><strong>DISEÑO PARA INSPIRAR.<br>DATOS PARA DECIDIR.</strong></div>');
}
function realPhotoSafety(){
 // Add a fallback to external product photography used by new V5 modules.
 qa("#lc5JourneyImage").forEach(img=>img.addEventListener("error",function(){this.onerror=null;this.parentElement.classList.add("lc5-image-fallback")},{once:true}));
}
function reveal(){
if(!("IntersectionObserver" in window))return;
const elems=qa(".lc5-flight-card,.lc5-journey,.lc4-manifest,.lc4-nav-tiles,.lc4-compare,.lc5-source-head");
intersection=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("lc5-inview");intersection.unobserve(e.target)}});
},{threshold:.08,rootMargin:"0px 0px 35px 0px"});
elems.forEach(e=>{e.classList.add("lc5-reveal");intersection.observe(e)});
}
function init(){renderHero();storyModule();mediaFlightboard();editorialAccents();realPhotoSafety();reveal();}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();