/* Little Caesars V7 — Pixel-inspired reference landing, connected to existing simulator and Colombian store directory. */
(function lc7Reference(){
"use strict";
const $=id=>document.getElementById(id);
const qs=(sel,root=document)=>root.querySelector(sel);
const qsa=(sel,root=document)=>[...root.querySelectorAll(sel)];
const MASCOT="./assets/caesar-ambassador.svg";
const CLASSIC_MASCOT="https://www.liblogo.com/img-logo/li7198l305-little-caesars-logo-little-caesars-pizza-best-value-delivery-and-carryout.png";
const STICKER_MASCOT="https://www.clipartmax.com/png/middle/90-904333_pizza-pizza-little-caesars.png";
const PIZZA="https://img0.didiglobal.com/static/soda_public/img_8d6adfb490b9533d4fb81d933b35d3bb.jpg";
const PIZZA2="https://img0.didiglobal.com/static/soda_public/do1_E8gDvXml7Ra9rilRSUJZ";
const PIZZA3="https://img0.didiglobal.com/static/soda_public/do1_dkSybJU5Qi4e6FutGsF1";
const BOX="https://images.rappi.com/restaurants_background/ll-1649262016299_hq.jpeg?d=700x100&e=webp&q=80";
const LOGO="https://upload.wikimedia.org/wikipedia/commons/0/06/Little_Caesars_wordmark.svg";
const storeList=[
{n:"Calle 134",c:"Bogotá",a:"Av. Calle 134 #54-11",p:[4.7296,-74.0686]},
{n:"Calle 170",c:"Bogotá",a:"Carrera 55A #169A-39",p:[4.7510,-74.0540]},
{n:"Calle 26",c:"Bogotá",a:"Calle 26 #32-61",p:[4.6336,-74.0871]},
{n:"Restrepo",c:"Bogotá",a:"Carrera 27 #16-51 Sur",p:[4.5862,-74.1030]},
{n:"Lagartos",c:"Bogotá",a:"Av. Boyacá #95-31",p:[4.6902,-74.0913]},
{n:"Madelena",c:"Bogotá",a:"Calle 63 Sur #70C-25",p:[4.5967,-74.1531]},
{n:"Javeriana",c:"Bogotá",a:"Carrera 7 #46-05",p:[4.6329,-74.0639]},
{n:"Kennedy",c:"Bogotá",a:"Carrera 78B #38B-27 Sur",p:[4.6062,-74.1592]},
{n:"NQS",c:"Bogotá",a:"Carrera 30 #4-51",p:[4.6074,-74.1020]},
{n:"Calle 127",c:"Bogotá",a:"Autopista Norte #125-91",p:[4.7043,-74.0496]},
{n:"Uniandes",c:"Bogotá",a:"Calle 20 #2A-78",p:[4.6036,-74.0648]},
{n:"Suba",c:"Bogotá",a:"Carrera 104 #150C-46",p:[4.7334,-74.1164]},
{n:"Ciudad Salitre",c:"Bogotá",a:"Dirección pendiente de confirmar",p:[4.6490,-74.1100]},
{n:"Chía",c:"Chía",a:"Av. Pradilla, Diagonal 13 #4 Este-23",p:[4.8589,-74.0570]},
{n:"Roosevelt",c:"Cali",a:"Calle 6 #36A Bis-25",p:[3.4314,-76.5470]},
{n:"Caney",c:"Cali",a:"Calle 48 #80-26",p:[3.3923,-76.5310]},
{n:"Av. Sexta",c:"Cali",a:"Calle 27N #6A-10",p:[3.4699,-76.5298]},
{n:"Plaza Toros",c:"Cali",a:"Calle 5 #52-163",p:[3.4256,-76.5517]}
];
const format=n=>new Intl.NumberFormat("es-CO",{maximumFractionDigits:0}).format(Math.round(Number(n)||0));
const compact=n=>n>=1e6?(n/1e6).toLocaleString("es-CO",{maximumFractionDigits:2})+" M":n>=1e3?(n/1e3).toLocaleString("es-CO",{maximumFractionDigits:1})+" mil":format(n);
const money=n=>"$"+format(n);
const num=(id,d)=>Number($(id)?.value||d);
const state=()=>{const total=num("budget",20000000),cp=num("cpm",7000),freq=num("frequency",2.5),cpc=num("cpc",1000),share=num("storePercent",60);return {total,impressions:total/cp*1000,reach:total/cp*1000/freq*.85,clicks:total*share/100/cpc,share,awareness:total*(100-share)/100,traffic:total*share/100}};
let miniMap=null,miniMarkers=[],choice=0;
const conceptCards=[
{n:"HOT-N-READY EN TU FEED",media:"Meta / Reels",image:PIZZA,id:0},
{n:"PIZZA PEOPLE UNITE",media:"TikTok / Video",image:PIZZA2,id:1},
{n:"MÁS PIZZA. MENOS DRAMA.",media:"Google / Local",image:PIZZA3,id:2}
];
const media=[
{name:"Meta",id:"meta",pct:55,copy:"Alcance + proximidad",className:"blue"},
{name:"TikTok",id:"tiktok",pct:25,copy:"Cultura + video",className:"pink"},
{name:"Google",id:"google",pct:20,copy:"Intención local",className:"orange"}
];
function app(){
const view=$("view-summary");if(!view||$("lc7Root"))return;
view.insertAdjacentHTML("afterbegin",`<div id="lc7Root" class="lc7-site">
<section class="lc7-hero">
 <div class="lc7-hero-art">
 <div class="lc7-hero-copy"><div class="lc7-eyebrow">CAMPAIGN PLANNING · COLOMBIA / 2026</div>
 <h1><span>Creative</span><strong>Studio</strong></h1>
 <div class="lc7-script">IDEAS HOY. PIZZA MAÑANA. ✳</div>
 <p>Convertimos ideas en campañas que despiertan el antojo: alcance en Colombia y tráfico hacia puntos de venta.</p>
 <div class="lc7-hero-actions"><button type="button" data-goto="simulator">Crear escenario <span>↗</span></button><button type="button" data-goto="creative">Explorar creativos</button></div>
 </div>
 <img class="lc7-hero-mascot" src="${MASCOT}" alt="Personaje César inspirado en Little Caesars, sosteniendo una pizza">
 <div class="lc7-hero-photo"><img src="${PIZZA}" alt="Pizza de pepperoni Little Caesars"></div>
 <div class="lc7-hero-scribble scribble-1">PIZZA<br>FUEL<br>FOR IDEAS ✷</div>
 <div class="lc7-hero-scribble scribble-2">HOT.<br>READY.<br>FULL OF<br>IDEAS. ↗</div>
 <div class="lc7-hero-star">✳</div>
 </div>
 <div class="lc7-hero-ribbon"><span>PIZZA PIZZA! ✳</span><span>ALCANCE NACIONAL + INTENCIÓN LOCAL</span><span>MEDIA LAB / COP 20 MILLONES</span></div>
</section>
<section class="lc7-daily">
<div class="lc7-journey" id="lc7Journey">
 <div class="lc7-journey-intro"><span class="lc7-small-label">01 / EL CAMINO DEL ANTOJO</span><h2>DEL SCROLL<br><em>A LA PIZZA.</em></h2>
 <p>De un impacto digital a una intención cercana. Cada paso cuenta.</p>
 <button type="button" data-goto="audiences">Explorar audiencias ↗</button></div>
 <div class="lc7-journey-steps" role="group" aria-label="Fases de la campaña">
 ${[
 ["smartphone","Scroll","La ven"],
 ["heart","Antojo","La desean"],
 ["messages-square","Interacción","La recuerdan"],
 ["store","Tienda","Buscan la ruta"]
 ].map((p,i)=>`<button class="lc7-journey-step ${i===0?"active":""}" data-lc7-step="${i}" type="button" aria-pressed="${i===0}"><span class="lc7-icon">${["◧","♥","☏","⌖"][i]}</span><b>${i+1}. ${p[1]}</b><small>${p[2]}</small></button>${i<3?'<span class="lc7-step-arrow">→</span>':""}`).join("")}
 </div>
 <div class="lc7-journey-caption" id="lc7JourneyCaption">01 — Marca presente en las pantallas de Colombia.</div>
</div>
<div class="lc7-photo-card">
 <img src="${BOX}" alt="Little Caesars, fotografía de producto de catálogo">
 <div class="lc7-photo-sticker"><img src="${MASCOT}" alt="" aria-hidden="true"><span>LAS GRANDES<br>IDEAS DAN<br>HAMBRE.</span></div>
 <div class="lc7-photo-card-label">PRODUCTO + PROXIMIDAD ↗</div>
</div>
<div class="lc7-impact"><div class="lc7-impact-heading"><b>CAMPAIGN IMPACT</b><button data-goto="simulator" type="button">Ver escenario ↗</button></div>
<div class="lc7-impact-grid">
 <div class="lc7-impact-card"><span>◉</span><strong id="lc7Imp">—</strong><small>Impresiones modeladas</small><em>HIPÓTESIS</em></div>
 <div class="lc7-impact-card"><span>♧</span><strong id="lc7Reach">—</strong><small>Alcance estimado</small><em>HIPÓTESIS</em></div>
 <div class="lc7-impact-card"><span>⌖</span><strong id="lc7Clicks">—</strong><small>Clics de intención</small><em>NO VISITAS</em></div>
 </div><p class="lc7-impact-note">Modelo editable, no rendimiento medido ni visitas físicas.</p></div>
</section>
<section class="lc7-middle">
<div class="lc7-flight"><img class="lc7-peek-mascot" src="${MASCOT}" alt="" aria-hidden="true">
<div class="lc7-flight-intro"><div class="lc7-small-label">02 / MEDIA ARCHITECTURE</div><h2>MEDIA<br>FLIGHTBOARD</h2><p>La plataforma correcta. La audiencia correcta. Más personas pensando en pizza.</p><button type="button" data-goto="media">Planear medios ↗</button></div>
<div class="lc7-flight-cards">${media.map((v,i)=>`<button type="button" data-goto="media" class="lc7-flight-card"><img src="./assets/platforms/${v.id}.svg" alt="Logo ${v.name}"><strong>${v.name}</strong>
<div class="lc7-platform-share">${v.pct}%</div><small>del presupuesto</small>
<div class="lc7-mini-bars ${v.className}">${[28,47,64,89].map(v=>`<i style="height:${v}%"></i>`).join("")}</div>
<p>${v.copy}</p><span class="lc7-platform-spend" id="lc7Platform${i}">—</span></button>`).join("")}</div>
</div>
<div class="lc7-concepts"><div class="lc7-concepts-head"><div><h2>CREATIVE CONCEPTS</h2><p>Ideas de campaña para presentar, no anuncios publicados.</p></div><button type="button" data-goto="creative">Ver conceptos ↗</button></div>
<div class="lc7-concept-row">${conceptCards.map((c,i)=>`<button type="button" class="lc7-concept" data-lc7-concept="${c.id}"><div class="lc7-concept-image"><img src="${c.image}" alt="Producto Little Caesars para ${c.media}"><strong>${c.n}</strong>${i===0?`<img class="lc7-thumb-mascot" src="${MASCOT}" alt="" aria-hidden="true">`:""}</div><div><span>◉ ${c.media}</span><b>↗</b></div></button>`).join("")}</div></div>
</section>
<section class="lc7-location">
<div class="lc7-store-search"><div class="lc7-small-label">03 / TIENDAS Y COBERTURA</div><h2>ENCUENTRA<br>UNA TIENDA.</h2><p>Inventario documentado en Colombia. Georreferencia aproximada; confirmar direcciones antes de pautar.</p>
<div class="lc7-search-box"><input id="lc7Search" aria-label="Buscar ciudad o tienda" placeholder="Bogotá, Cali, Chía o nombre del local…"><button type="button" id="lc7SearchButton">Buscar ↗</button></div>
<div class="lc7-city-options"><button type="button" data-lc7-city="Bogotá" class="active">Bogotá</button><button type="button" data-lc7-city="Cali">Cali</button><button type="button" data-lc7-city="Chía">Chía</button><button type="button" data-lc7-city="Todas">Todas</button></div>
</div>
<div class="lc7-store-tally"><span>⌖</span><strong>18</strong><b>ubicaciones documentadas*</b><small>13 Bogotá · 4 Cali · 1 Chía</small><button type="button" data-goto="territory">Explorar directorio ↗</button></div>
<div class="lc7-map-panel"><div id="lc7Map"></div><div class="lc7-map-glass"><span>STORE EXPLORER</span><strong id="lc7MapTitle">Bogotá · Tiendas</strong><small id="lc7MapCount">13 referencias aproximadas</small><a id="lc7MapLink" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Little%20Caesars%20Bogot%C3%A1">Abrir Google Maps ↗</a></div><span class="lc7-map-bottom">Pines aproximados, no GPS operativo.</span></div>
</section>
<section class="lc7-outro"><img src="${MASCOT}" alt="" aria-hidden="true"><div><span>✳ LITTLE CAESARS / STORE IMPACT LAB</span><strong>LA PIZZA ESTÁ LISTA.<br>QUE EL PAÍS SE ANTOJE.</strong></div><button type="button" data-goto="simulator">Simular los $20 millones ↗</button></section>
<footer class="lc7-footer"><div class="lc7-footer-mark"><img src="${LOGO}" alt="Little Caesars"><span>COLOMBIA / 2026</span></div>
<div class="lc7-footer-links"><button data-goto="summary">Resumen</button><button data-goto="audiences">Audiencias</button><button data-goto="media">Medios</button><button data-goto="creative">Creativos</button><button data-goto="territory">Tiendas</button><button data-goto="sources">Fuentes</button></div>
<div class="lc7-footer-seal"><img src="${MASCOT}" alt="" aria-hidden="true"><span>PIZZA PEOPLE<br>ALWAYS WIN! ✳</span></div>
<div class="lc7-footer-disclaimer">Proyecto de planeación · Sin afiliación con herramientas internas de Little Caesars · Todas las métricas son escenarios, no resultados reales. *El inventario de tiendas está sujeto a verificación operativa.</div>
</footer></div>`);
// Prefer actual classic mascot imagery where available, falling back to the hosted concept SVG.
qsa(".lc7-hero-mascot,.lc7-photo-sticker img,.lc7-peek-mascot,.lc7-thumb-mascot,.lc7-footer-seal img").forEach((img,i)=>{
 const remote=(i===1||i===3)?STICKER_MASCOT:CLASSIC_MASCOT;
 img.addEventListener("error",function(){if(this.src!==new URL(MASCOT,location.href).href){this.onerror=null;this.src=MASCOT}},{once:true});
 img.src=remote;
});
qsa("#lc7Root img").forEach(img=>{
 const source=img.getAttribute("src")||"";
 if(source.includes("didiglobal")||source.includes("rappi"))img.addEventListener("error",function(){
  this.onerror=null;this.src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&q=85";
 },{once:true});
});
renderNav();
observeHome();
addEvents();
updateMetrics();
miniMapInit();
}
function renderNav(){
const bar=qs(".topbar");
if(!bar||qs(".lc7-topnav",bar))return;
const nav=document.createElement("nav");nav.className="lc7-topnav";nav.setAttribute("aria-label","Navegación principal");
nav.innerHTML='<button type="button" data-goto="summary" class="active">Inicio</button><button type="button" data-goto="creative">Creative Studio</button><button type="button" data-goto="media">Medios</button><button type="button" data-goto="audiences">Audiencias</button><button type="button" data-goto="territory">Tiendas</button><button type="button" data-goto="simulator">Simulador</button>';
const right=qs(".topbar-right",bar);bar.insertBefore(nav,right);
}
function observeHome(){
const home=$("view-summary"),refresh=()=>{
const yes=home.classList.contains("active");
document.body.classList.toggle("lc7-home-active",yes);
qsa(".lc7-topnav button").forEach(b=>b.classList.toggle("active",b.dataset.goto===(yes?"summary":(qs(".view.active")?.id||"").replace("view-",""))));
if(yes&&miniMap)requestAnimationFrame(()=>miniMap.invalidateSize());
};
const watch=new MutationObserver(refresh);watch.observe(home,{attributes:true,attributeFilter:["class"]});
qsa(".view").filter(v=>v!==home).forEach(v=>watch.observe(v,{attributes:true,attributeFilter:["class"]}));
refresh();
}
function addEvents(){
const descriptions=[
"01 — La marca aparece en pantallas de toda Colombia; no únicamente cerca de las tiendas.",
"02 — Creatividad de producto y momentos de consumo para despertar el antojo.",
"03 — Video, clics y conversación; los indicadores de interacción se miden por plataforma.",
"04 — Las personas buscan rutas hacia locales validados; clics no son visitas verificadas."
];
qsa("[data-lc7-step]").forEach(button=>button.addEventListener("click",()=>{
choice=Number(button.dataset.lc7Step);
qsa("[data-lc7-step]").forEach(b=>{const ok=b===button;b.classList.toggle("active",ok);b.setAttribute("aria-pressed",String(ok))});
$("lc7JourneyCaption").textContent=descriptions[choice];
}));
qsa("[data-lc7-concept]").forEach(button=>button.addEventListener("click",()=>{
const i=Number(button.dataset.lc7Concept);
qs('[data-goto="creative"]')?.click();
requestAnimationFrame(()=>qs(`[data-lc6-choice="${i}"]`)?.click());
}));
const search=$("lc7Search");
search?.addEventListener("keydown",e=>{if(e.key==="Enter")updateMapFilter()});
$("lc7SearchButton")?.addEventListener("click",updateMapFilter);
qsa("[data-lc7-city]").forEach(btn=>btn.addEventListener("click",()=>{
search.value=btn.dataset.lc7City==="Todas"?"":btn.dataset.lc7City;updateMapFilter();
}));
["budget","cpm","cpc","frequency","storePercent"].forEach(id=>$(id)?.addEventListener("input",updateMetrics));
$("resetSim")?.addEventListener("click",()=>requestAnimationFrame(updateMetrics));
}
function updateMetrics(){
const a=state();
$("lc7Imp").textContent=compact(a.impressions);
$("lc7Reach").textContent=compact(a.reach);
$("lc7Clicks").textContent=compact(a.clicks);
media.forEach((p,i)=>{const el=$("lc7Platform"+i);if(el)el.textContent=money(a.total*p.pct/100)});
}
function miniMapInit(){
const div=$("lc7Map");if(!div)return;
if(typeof window.L==="undefined"){div.innerHTML='<div class="lc7-map-fallback"><b>Mapa interactivo</b><span>Consulta los puntos documentados desde el directorio de tiendas.</span></div>';return}
miniMap=window.L.map(div,{zoomControl:false,scrollWheelZoom:false,attributionControl:true}).setView([4.67,-74.1],10);
window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"© OpenStreetMap contributors"}).addTo(miniMap);
window.L.control.zoom({position:"bottomright"}).addTo(miniMap);
updateMapFilter();
}
function updateMapFilter(){
const term=($("lc7Search")?.value||"").trim().toLocaleLowerCase("es-CO");
const filtered=storeList.filter(s=>!term||[s.n,s.c,s.a].join(" ").toLocaleLowerCase("es-CO").includes(term));
qsa("[data-lc7-city]").forEach(b=>{
const text=b.dataset.lc7City;const active=(text==="Todas"&&!term)||(text!=="Todas"&&term===text.toLocaleLowerCase("es-CO"));b.classList.toggle("active",active);
});
$("lc7MapCount").textContent=filtered.length+" referencias aproximadas";
$("lc7MapTitle").textContent=term?($("lc7Search").value+" · Tiendas"):"Colombia · Tiendas";
const query=term?$("lc7Search").value+" Little Caesars Colombia":"Little Caesars Colombia";
$("lc7MapLink").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(query);
if(!miniMap)return;
miniMarkers.forEach(marker=>marker.remove());miniMarkers=[];
filtered.forEach(s=>{
 const html='<span class="lc7-map-pin">●</span>';
 const icon=window.L.divIcon({className:"",html,iconSize:[23,32],iconAnchor:[11,30]});
 const marker=window.L.marker(s.p,{icon}).addTo(miniMap);
 marker.bindPopup('<div class="lc7-mini-popup"><b>Little Caesars · '+s.n+'</b><p>'+s.c+' · '+s.a+'</p><small>Sector aproximado · validar</small></div>');
 marker.on("click",()=>{$("lc7MapTitle").textContent="Little Caesars · "+s.n;$("lc7MapLink").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Little Caesars "+s.n+" "+s.a+" "+s.c)});
 miniMarkers.push(marker);
});
if(filtered.length){const bounds=window.L.latLngBounds(filtered.map(s=>s.p));miniMap.fitBounds(bounds.pad(.2),{maxZoom:12,animate:false})}
else miniMap.setView([4.7,-74.2],6,{animate:false});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",app);else app();
})();