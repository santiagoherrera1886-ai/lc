/* V6 Creative Studio / product-backed Little Caesars campaign explorations. */
(function v6Studio(){
"use strict";
const $=(id)=>document.getElementById(id);
const q=(sel,scope=document)=>scope.querySelector(sel);
const qa=(sel,scope=document)=>[...scope.querySelectorAll(sel)];
const fmt=(n)=>new Intl.NumberFormat("es-CO",{maximumFractionDigits:0}).format(Math.round(Number(n)||0));
const assets={
pepperoni:"https://img0.didiglobal.com/static/soda_public/img_8d6adfb490b9533d4fb81d933b35d3bb.jpg",
combo:"https://img0.didiglobal.com/static/soda_public/do1_E8gDvXml7Ra9rilRSUJZ",
cheesy:"https://img0.didiglobal.com/static/soda_public/do1_qhKCrrhavc3yzBW1lZ5r",
box:"https://img0.didiglobal.com/static/soda_public/do1_1CKH9MjJQGKrcPqyU7yv"
};
const tracks=[
{
id:"parche",number:"01",platform:"Meta",icon:"meta",platformCaption:"META / REELS + STORIES",
category:"ALCANCE NACIONAL",role:"Descubrimiento",name:"Pizza para el parche",
headline:["EL PLAN","SE ARMA","CON PIZZA."],copy:"Un mensaje de producto para los momentos que se comparten. Reconocimiento de marca sin limitar la pauta a ciudades con tienda.",format:"Reel / Story · 9:16",objective:"Alcance nacional",cta:"Arma el plan",product:assets.combo,gradient:"orange",cardLine:"EL PLAN NO ESPERA.",audience:"Amigos / planes casuales",proof:"Cobertura y frecuencia, sin visitas inferidas",
hook:"El mejor plan empieza con un antojo."
},
{
id:"pov",number:"02",platform:"TikTok",icon:"tiktok",platformCaption:"TIKTOK / FULL SCREEN",
category:"ALCANCE NACIONAL",role:"Entretenimiento",name:"POV: llegó la pizza",
headline:["POV:","LLEGÓ","LA PIZZA."],copy:"Una pieza de video corto que muestra el antojo de forma espontánea y reconocible. Es una propuesta de contenido, no una campaña publicada.",format:"Video vertical · 9:16",objective:"Alcance nacional",cta:"Pizza Pizza!",product:assets.cheesy,gradient:"ink",cardLine:"¿QUIÉN PIDIO PIZZA?",audience:"Jóvenes adultos / contenido social",proof:"Reproducciones, cobertura, recuerdo",
hook:"POV: alguien dijo «¿pedimos pizza?»"
},
{
id:"cerca",number:"03",platform:"Google",icon:"google",platformCaption:"GOOGLE / SEARCH + MAPS",
category:"INTENCIÓN LOCAL",role:"Cercanía",name:"Pizza cerca de ti",
headline:["LA PIZZA","ESTÁ MÁS","CERCA."],copy:"En búsquedas locales y acciones de mapas, se invita a encontrar una tienda que esté operativa. La dirección y el horario deben estar validados.",format:"Search / Maps · local",objective:"Tráfico de intención",cta:"Cómo llegar",product:assets.box,gradient:"cream",cardLine:"ENCUENTRA TU TIENDA",audience:"Personas cerca de tiendas confirmadas",proof:"Solicitudes de ruta o clics, no entradas verificadas",
hook:"¿Pizza cerca de mí? Aquí tienes una opción."
},
{
id:"listo",number:"04",platform:"Meta",icon:"meta",platformCaption:"META / LOCAL CREATIVE",
category:"INTENCIÓN LOCAL",role:"Conveniencia",name:"El antojo está listo",
headline:["¿ANTOJO?","YA TENEMOS","EL PLAN."],copy:"Creatividad local para recordar la conveniencia y facilitar la búsqueda de un establecimiento cercano. Solo se activa sobre tiendas verificadas.",format:"Story / carrusel · local",objective:"Tráfico de intención",cta:"Encuentra tu tienda",product:assets.pepperoni,gradient:"red",cardLine:"READY WHEN YOU ARE",audience:"Públicos de proximidad",proof:"Clics a indicaciones y acciones de intención",
hook:"¿Se te antojó? Encuentra tu Little Caesars."
}
];
let active=0;
const logo=(platform)=>"./assets/platforms/"+platform+".svg";
function initPage(){
const nav=q(".side-nav");
if(!nav)return;
const button=document.createElement("button");
button.type="button";button.className="nav-item lc6-nav-creative";button.dataset.route="creative";
button.innerHTML='<span>✳</span> Creative Studio <small>06</small>';
const sourceButton=q('[data-route="sources"]',nav);
if(sourceButton){
sourceButton.insertAdjacentElement("beforebegin",button);
const sm=sourceButton.querySelector("small");if(sm)sm.textContent="07";
}
const sources=$("view-sources");
if(!sources)return;
const page=document.createElement("section");
page.className="view lc6-creative-page";
page.id="view-creative";
page.setAttribute("aria-labelledby","lc6Title");
page.innerHTML=`
<div class="lc6-breadcrumb"><span>06 / LITTLE CAESARS CREATIVE STUDIO</span><span>CONCEPTUAL / CLIENT PRESENTATION</span></div>
<section class="lc6-intro" aria-label="Creative studio, Little Caesars">
<div class="lc6-intro-copy">
<div class="lc6-studio-pill"><span>✳</span> THE CRAVING STUDIO / COLOMBIA</div>
<h1 id="lc6Title">LAS IDEAS<br><em>TAMBIÉN</em><br>SON PIZZA.</h1>
<p>Cuatro conceptos creativos que conectan el producto, las plataformas y dos objetivos distintos: alcance nacional e intención hacia tiendas.</p>
<div class="lc6-intro-buttons"><button type="button" id="lc6ViewDeck">Explorar creatividades <b>↗</b></button><button type="button" data-goto="media">Ver arquitectura de medios</button></div>
</div>
<div class="lc6-intro-visual">
<div class="lc6-intro-rim"></div><img src="${assets.pepperoni}" alt="Pizza pepperoni Little Caesars del menú colombiano" loading="lazy">
<div class="lc6-intro-sticker">MADE<br>TO CRAVE <span>✳</span></div>
<div class="lc6-intro-footer">PIZZA PIZZA! / MARKETING SYSTEM</div>
</div></section>
<div class="lc6-studio-strip"><span>CREATIVE THINKING</span><span>✳</span><span>PLATFORM-NATIVE DESIGN</span><span>✳</span><span>STORE INTENT</span><span>✳</span><span>BRAND REACH</span></div>
<section class="lc6-concept-area" id="lc6Deck">
<div class="lc6-section-head"><div><div class="lc6-overline">01 / CREATIVE DECK</div><h2>UNA MARCA.<br><em>CUATRO GRANDES IDEAS.</em></h2></div>
<p>Selecciona un concepto. Cambiarán la pieza, el formato y el brief para presentarlo en reunión.</p></div>
<div class="lc6-concept-buttons" id="lc6ConceptTabs" role="group" aria-label="Elegir concepto creativo">
${tracks.map((t,i)=>`<button type="button" data-lc6-choice="${i}" aria-pressed="${i===0}" class="${i===0?"active":""}">
<span>${t.number}</span><b>${t.name}</b><small>${t.category}</small></button>`).join("")}
</div>
<div class="lc6-showcase" id="lc6Showcase" data-theme="orange">
<div class="lc6-showcase-left">
<div class="lc6-stage-frame"><span class="lc6-frame-label">CREATIVE MOCKUP / NOT LIVE</span><span class="lc6-stage-star">✷</span>
<div class="lc6-phone">
<div class="lc6-phone-top"><span class="lc6-phone-cam"></span><span id="lc6PhonePlatform">LITTLE CAESARS · META REELS</span><span>•••</span></div>
<div class="lc6-phone-image"><img id="lc6PhoneImage" src="${assets.combo}" alt="Pizza Little Caesars en anuncio conceptual" loading="lazy">
<div class="lc6-phone-photo-text" id="lc6PhotoText">EL PLAN NO ESPERA.</div></div>
<div class="lc6-phone-bottom"><div class="lc6-social-dots"><span>♥</span><span>◉</span><span>↗</span></div><div class="lc6-maps-info"><strong>Little Caesars Pizza</strong><small>📍 Buscar tienda cercana · Indicaciones</small></div><div class="lc6-phone-account"><strong>littlecaesars</strong><span id="lc6PhoneHook">El mejor plan empieza con un antojo.</span></div>
<div class="lc6-phone-faux-cta" id="lc6PhoneCTA">Arma el plan ↗</div></div>
</div><div class="lc6-bg-word">PIZZA!</div>
<div class="lc6-left-foot"><span>DESIGN SYSTEM © 2026</span><span id="lc6LeftRole">DISCOVERY / REACH</span></div>
</div></div>
<div class="lc6-showcase-right">
<div class="lc6-showcase-head"><span class="lc6-deck-num" id="lc6DeckNum">01 / 04</span><span class="lc6-showcase-tag" id="lc6Objective">ALCANCE NACIONAL</span></div>
<span class="lc6-title-eyebrow" id="lc6PlatformName">META / REELS + STORIES</span>
<h3 id="lc6HeadText">EL PLAN<br>SE ARMA<br><em>CON PIZZA.</em></h3>
<p id="lc6Description">Un mensaje de producto para los momentos que se comparten. Reconocimiento de marca sin limitar la pauta a ciudades con tienda.</p>
<div class="lc6-brief-lines">
<div><small>ROL</small><strong id="lc6Role">Descubrimiento</strong></div>
<div><small>FORMATO</small><strong id="lc6Format">Reel / Story · 9:16</strong></div>
<div><small>AUDIENCIA</small><strong id="lc6Audience">Amigos / planes casuales</strong></div>
<div><small>MEDICIÓN PROPUESTA</small><strong id="lc6Proof">Cobertura y frecuencia, sin visitas inferidas</strong></div>
</div>
<div class="lc6-showcase-actions"><button type="button" id="lc6CopyBrief">Copiar brief <span>↗</span></button><button type="button" id="lc6Next">Siguiente idea <span>→</span></button></div>
</div></div>
<div class="lc6-showcase-caption"><span>✳ CONCEPTOS EDITORIALES, NO ANUNCIOS APROBADOS NI PUBLICADOS</span><span>LOS OBJETIVOS DE PAUTA SE MANTIENEN SEPARADOS</span></div>
</section>
<section class="lc6-wall">
<div class="lc6-section-head"><div><div class="lc6-overline">02 / CAMPAIGN ART DIRECTION</div><h2>UNA GALERÍA<br><em>CON MUCHO ANTOJO.</em></h2></div><p>Cuatro formatos ilustrativos con la pizza en primer plano. Haz clic para abrir el concepto en el estudio.</p></div>
<div class="lc6-wall-grid">
${tracks.map((t,i)=>`<button type="button" class="lc6-wall-card" data-lc6-wall="${i}" data-theme="${t.gradient}">
<img src="${t.product}" alt="Producto Little Caesars para concepto ${t.name}" loading="lazy">
<span class="lc6-wall-top"><img src="${logo(t.icon)}" alt="" aria-hidden="true"><span>${t.category}</span></span>
<span class="lc6-wall-copy"><small>0${i+1} / ${t.platform.toUpperCase()}</small><strong>${t.headline.join("<br>")}</strong><span>EXPLORAR IDEA ↗</span></span></button>`).join("")}
</div></section>
<section class="lc6-bottom-story">
<div><span>THE CREATIVE RULE</span><h2>EL ANTOJO ES NACIONAL.<br><em>LAS TIENDAS SON LOCALES.</em></h2></div>
<div><p>La creatividad puede llegar a toda Colombia. Las campañas de intención a tienda se orientan únicamente a ubicaciones operativas, después de verificar direcciones y elegibilidad.</p>
<button data-goto="territory" type="button">EXPLORAR RED DE TIENDAS ↗</button></div></section>
<div class="lc6-creative-footnote"><span>VISUALES DE CONCEPTO · IMÁGENES DE CATÁLOGO LITTLE CAESARS COLOMBIA · META / TIKTOK / GOOGLE COMO REFERENCIA DE CANAL</span></div>`;
sources.insertAdjacentElement("beforebegin",page);
$("lc6ViewDeck")?.addEventListener("click",()=>$("lc6Deck")?.scrollIntoView({behavior:"smooth",block:"start"}));
const tabs=$("lc6ConceptTabs");
tabs?.addEventListener("click",e=>{
 const target=e.target.closest("[data-lc6-choice]");if(!target)return;select(Number(target.dataset.lc6Choice));
});
$("lc6Next")?.addEventListener("click",()=>select((active+1)%tracks.length));
$("lc6CopyBrief")?.addEventListener("click",copyBrief);
qa("[data-lc6-wall]").forEach(b=>b.addEventListener("click",()=>{select(Number(b.dataset.lc6Wall));$("lc6Deck")?.scrollIntoView({behavior:"smooth",block:"start"})}));
if(location.hash==="#creative")button.click();
}
function select(index){
active=Math.max(0,Math.min(tracks.length-1,index));
const t=tracks[active];
$("lc6Showcase").dataset.theme=t.gradient;q(".lc6-phone").dataset.channel=t.platform.toLowerCase();
$("lc6DeckNum").textContent=t.number+" / 04";
$("lc6Objective").textContent=t.category;
$("lc6PlatformName").textContent=t.platformCaption;
$("lc6HeadText").innerHTML=t.headline.map((v,i)=>i===2?"<em>"+v+"</em>":v).join("<br>");
$("lc6Description").textContent=t.copy;
$("lc6Role").textContent=t.role;
$("lc6Format").textContent=t.format;
$("lc6Audience").textContent=t.audience;
$("lc6Proof").textContent=t.proof;
$("lc6PhonePlatform").textContent="LITTLE CAESARS · "+t.platform.toUpperCase();
$("lc6PhoneImage").src=t.product;
$("lc6PhoneCTA").textContent=t.cta+" ↗";
$("lc6PhoneHook").textContent=t.hook;
$("lc6PhotoText").textContent=t.cardLine;
$("lc6LeftRole").textContent=t.objective.toUpperCase();
qa("[data-lc6-choice]").forEach(b=>{
const sel=Number(b.dataset.lc6Choice)===active;b.classList.toggle("active",sel);b.setAttribute("aria-pressed",String(sel))});
}
async function copyBrief(){
const t=tracks[active];
const value=["LITTLE CAESARS COLOMBIA · CREATIVE STUDIO","Concepto: "+t.name,"Canal: "+t.platform,"Formato: "+t.format,
"Objetivo: "+t.objective,"Hook: "+t.hook,"Headline: "+t.headline.join(" "),"CTA: "+t.cta,
"Rol: "+t.role,"Audiencia: "+t.audience,"Medición propuesta: "+t.proof,"Idea: "+t.copy,
"CONCEPTO EDITORIAL. No es anuncio publicado ni validado por el cliente."].join("\n");
const b=$("lc6CopyBrief");
try{await navigator.clipboard.writeText(value);b.innerHTML="✓ Brief copiado";setTimeout(()=>b.innerHTML='Copiar brief <span>↗</span>',1900)}
catch(e){window.prompt("Copiar brief creativo:",value)}
}
function summaryEntry(){
const nav=q("#view-summary .lc5-journey");
if(!nav)return;
nav.insertAdjacentHTML("afterend",`<div class="lc6-home-banner">
<div class="lc6-home-banner-photo"><img src="${assets.pepperoni}" alt="Pizza Little Caesars Colombia" loading="lazy"><span>CREATIVE<br>DROP 006</span></div>
<div class="lc6-home-banner-content"><span>NEW / CREATIVE EXPERIENCE</span><h2>LA PIZZA TAMBIÉN<br><em>SE PRESENTA ASÍ.</em></h2>
<p>Explora el nuevo estudio de conceptos visuales para Meta, TikTok y Google: piezas, mensajes y briefs para presentar.</p>
<button type="button" data-goto="creative">ENTRAR AL CREATIVE STUDIO <b>↗</b></button></div></div>`);
const med=q("#view-media .lc4-platform-philosophy");
if(med)med.insertAdjacentHTML("afterend",`<div class="lc6-media-cta"><div><span>CREATIVE STUDIO / NEW</span><strong>LAS PLATAFORMAS YA TIENEN UNA IDEA VISUAL.</strong></div><button type="button" data-goto="creative">ABRIR GALERÍA CREATIVA ↗</button></div>`);
}
function decorative(){
const creative=q("#view-creative");
if(!creative)return;
creative.addEventListener("keydown",e=>{if(e.target.closest("button,input,textarea,select"))return;if(e.key==="ArrowLeft")select((active+3)%4);if(e.key==="ArrowRight")select((active+1)%4)});
const photos=qa("#view-creative img");
photos.forEach(img=>img.addEventListener("error",()=>{
img.classList.add("lc6-img-fail");
if(img.src!==assets.pepperoni&&img.alt&&!img.alt.toLowerCase().includes("logo")){
img.src=assets.pepperoni;
}else{
img.style.opacity="0";
}
},{once:true}));
}
function boot(){initPage();summaryEntry();decorative();select(0)}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();