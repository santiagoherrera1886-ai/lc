/* Brand-first V2 enhanced UI.
   Extends existing app.js without replacing finance, store map, routing, or exports. */
(function(){
'use strict';
const BRAND_LOGO='https://upload.wikimedia.org/wikipedia/commons/0/06/Little_Caesars_wordmark.svg';
const PIZZA_CLASSIC='https://img0.didiglobal.com/static/soda_public/img_8d6adfb490b9533d4fb81d933b35d3bb.jpg';
const PIZZA_DUAL='https://img0.didiglobal.com/static/soda_public/do1_3uzsWEFmC7L1KZGaW9xN';
const PIZZA_HAWAII='https://img0.didiglobal.com/static/soda_public/img_eb0c90888037add997bcd114d80bf8d5.jpg';
const logos={meta:'./assets/platforms/meta.svg',tiktok:'./assets/platforms/tiktok.svg',google:'./assets/platforms/google.svg'};
const brandImage=(alt,src,cls='')=>'<img loading="lazy" class="'+cls+'" src="'+src+'" alt="'+alt+'" referrerpolicy="no-referrer">';
const mediaInfo=[
{name:'Meta',slug:'meta',share:55,budget:'$11,0 M',role:'ALCANCE + PROXIMIDAD',title:'Haz que todos la vean.',desc:'Reels, Stories, Feed y video para construir alcance nacional; mensajes específicos alrededor de tiendas verificadas.',ad:'Hoy el plan<br>es pizza.',note:'Reach + tráfico local',pizza:PIZZA_CLASSIC,platformText:'Publicación de Little Caesars · Ejemplo'},
{name:'TikTok',slug:'tiktok',share:25,budget:'$5,0 M',role:'CULTURA + DESCUBRIMIENTO',title:'Que nazca el antojo.',desc:'Videos cortos, momentos de consumo y creadores. Exploración de públicos amplios sin acotar awareness a ciudades con local.',ad:'POV: alguien<br>dijo pizza 🍕',note:'Video corto + descubrimiento',pizza:PIZZA_DUAL,platformText:'Inspiración de pieza · Concepto'},
{name:'Google',slug:'google',share:20,budget:'$4,0 M',role:'INTENCIÓN + CERCANÍA',title:'Del antojo a la ruta.',desc:'Búsquedas, Maps y acciones locales elegibles para conectar a personas próximas con un punto de venta real.',ad:'Pizza cerca<br>de mí.',note:'Búsqueda + indicaciones',pizza:PIZZA_HAWAII,platformText:'Búsqueda / Maps · Concepto'}
];
function ecosystem(){
const cards=mediaInfo.map(x=>'<article class="lc-ecosystem-card"><div class="lc-ecosystem-visual">'+brandImage('Pizza Little Caesars, imagen de catálogo',x.pizza,'lc-visual-pizza')+'<div class="lc-platform-logo">'+brandImage('Logo '+x.name,logos[x.slug])+'</div></div><div class="lc-ecosystem-copy"><div><b>'+x.name+'</b><small>'+x.role+'</small></div><button type="button" data-goto="media" aria-label="Explorar '+x.name+'">↗</button></div></article>').join('');
return '<section class="lc-ecosystem" aria-label="Ecosistema de plataformas"><div class="lc-ecosystem-header"><div><span class="kicker">02 / MEDIA ECOSYSTEM</span><h2>Las plataformas también <span style="color:#e66200">tienen hambre.</span></h2></div><p>Una misión distinta para cada entorno. Alcance para construir deseo, cercanía para mover intención.</p></div><div class="lc-ecosystem-cards">'+cards+'</div></section>';
}
function card(x){
const scene=x.slug==='google'
 ? '<div class="lc-phone-top">GOOGLE SEARCH</div>'+brandImage('Pizza del menú Little Caesars',x.pizza)+
   '<div class="lc-phone-bottom"><b>Little Caesars Pizza</b><small>Indicaciones · Buscar tienda</small></div>'
 : '<div class="lc-phone-top">'+(x.slug==='tiktok'?'♪  PARA TI':'◉  REELS')+'</div>'+brandImage('Vista de pizza Little Caesars',x.pizza)+
   '<div class="lc-phone-bottom"><b>'+x.ad.replace(/<br>/g,' ')+'</b><small>'+x.platformText+'</small></div>';
return '<article class="lc-media-card"><div class="lc-media-card-top"><div class="lc-media-platform"><div class="lc-media-logo">'+brandImage('Logo '+x.name,logos[x.slug])+'</div><div><b>'+x.name+'</b><small>'+x.note+'</small></div></div><strong class="lc-media-percent">'+x.share+'%</strong></div><div class="lc-media-showcase '+x.slug+'"><div class="lc-wave">CREATIVE CONCEPT / NOT LIVE</div><div class="lc-phone">'+scene+'</div><div class="lc-sticker">'+x.ad+'</div></div><div class="lc-media-card-body"><div class="lc-role">'+x.role+'</div><h3>'+x.title+'</h3><p>'+x.desc+'</p><div class="lc-media-card-meta"><b>'+x.budget+'</b><span>INVERSIÓN BASE<br>INDICATIVA</span></div></div><div class="lc-media-card-bottom"><button type="button" data-goto="simulator">Abrir simulador ↗</button></div></article>';
}
function mediaBanner(){
return '<div class="lc-media-header-banner"><div><span class="kicker" style="color:#ffdfbd">PLATFORM THINKING · LITTLE CAESARS</span><h2>Una pizza. Tres formas<br>de encender el antojo.</h2><p>Meta para cobertura y cercanía, TikTok para crear deseo, Google para capturar intención. Son roles propuestos, no resultados garantizados.</p></div><div class="lc-vertical-logos">'+mediaInfo.map(x=>'<span>'+brandImage('Logo '+x.name,logos[x.slug])+'</span>').join('')+'</div></div>';
}
function addMedia(){
const grid=document.getElementById('channelGrid');
if(!grid)return;
grid.classList.remove('channel-grid');
grid.classList.add('lc-media-artcards');
grid.innerHTML=mediaInfo.map(card).join('');
grid.insertAdjacentHTML('beforebegin',mediaBanner());
}
function addHome(){
const hero=document.querySelector('#view-summary .hero');
if(!hero)return;
hero.insertAdjacentHTML('afterend','<section class="lc-brand-story"><div><span class="lc-story-marker">✦</span><div><h3>La estrategia no empieza en el mapa. Empieza con el antojo.</h3><p>Creamos deseo de marca a escala nacional y transformamos la cercanía a los puntos de venta en acciones medibles.</p></div></div><div class="lc-story-nums"><div><span>MODELO</span><b>2 objetivos</b></div><div><span>COBERTURA</span><b>Colombia</b></div></div></section>');
const two=document.querySelector('#view-summary .two-col');
if(two)two.insertAdjacentHTML('afterend',ecosystem());
const gallery='<section class="lc-editorial-gallery" aria-label="Galería de producto"><div class="lc-gallery-feature">'+brandImage('Pizza dos sabores Little Caesars',PIZZA_DUAL)+'<div class="lc-gallery-content"><small>PRODUCT · HERO CAMPAIGN</small><b>El producto se ve.<br>El antojo se siente.</b></div></div><div class="lc-gallery-small">'+brandImage('Pizza hawaiana Little Caesars',PIZZA_HAWAII)+'<div class="lc-gallery-content"><small>DESDE EL PRIMER IMPACTO</small><b>Branding que<br>abre el apetito.</b></div></div></section>';
const strip=document.querySelector('#view-summary .big-banner');
if(strip)strip.insertAdjacentHTML('beforebegin',gallery);
}
function addSidebar(){
const sidebar=document.getElementById('sidebar');
const kicker=sidebar&&sidebar.querySelector('.sidebar-kicker');
if(!kicker)return;
kicker.insertAdjacentHTML('afterend','<div class="lc-side-brand"><small>BRAND × MEDIA / 2026</small>'+brandImage('Little Caesars, logotipo',BRAND_LOGO)+'<b>La pizza está lista.<br><strong>Que se note.</strong></b></div>');
}
function presets(){
const panel=document.querySelector('#view-simulator .controls-panel');
const head=panel&&panel.querySelector('.control-head');
const slider=document.getElementById('storePercent');
if(!head||!slider)return;
head.insertAdjacentHTML('afterend','<div class="lc-preset-wrap"><span>ESCENARIOS DE DISTRIBUCIÓN RÁPIDA</span><div class="lc-preset-grid"><button type="button" data-preset="40">Marca primero <small>60/40</small></button><button type="button" data-preset="60">Balanceado <small>40/60</small></button><button type="button" data-preset="75">Tiendas primero <small>25/75</small></button></div></div>');
const update=()=>{
const val=Number(slider.value);
document.querySelectorAll('[data-preset]').forEach(b=>b.classList.toggle('active',Number(b.dataset.preset)===val));
};
panel.querySelector('.lc-preset-grid').addEventListener('click',e=>{
const btn=e.target.closest('[data-preset]');if(!btn)return;
slider.value=btn.dataset.preset;
slider.dispatchEvent(new Event('input',{bubbles:true}));
update();
});
slider.addEventListener('input',update);
document.getElementById('resetSim')?.addEventListener('click',()=>setTimeout(update,0));
update();
const res=document.querySelector('#view-simulator .sim-explainer');
if(res)res.insertAdjacentHTML('beforebegin','<div class="lc-sim-note"><b>LECTURA DEL ESCENARIO:</b> estos controles modelan un reparto de inversión y métricas potenciales. No constituyen una promesa de visitas reales a tienda ni una medición de ventas incrementales.</div>');
}
function brandAssetsSources(){
const src=document.getElementById('sourcesGrid');
if(!src)return;
src.insertAdjacentHTML('beforeend','<article class="source-card"><small>BRAND / VISUAL ASSETS</small><h3>Identidad, fotografías y previews</h3><p>Logotipo Little Caesars de Wikimedia Commons (origen: marca); fotografías reales de productos del catálogo público de DiDi Food. Logos de plataformas mediante Simple Icons. Mockups visuales creados para ilustrar formatos, no son anuncios publicados.</p><a href="https://commons.wikimedia.org/wiki/File:Little_Caesars_wordmark.svg" target="_blank" rel="noopener noreferrer">Ver fuente del logotipo ↗</a></article>');
}
function setupImageFallback(){
document.querySelectorAll('.lc-media-logo img,.lc-platform-logo img,.lc-vertical-logos img').forEach(img=>{
img.addEventListener('error',function(){this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<b style="font-size:12px;color:#e66200">'+(this.alt||'Ads').replace('Logo ','')+'</b>')},{once:true});
});
}
function bootPremium(){
addSidebar();addHome();addMedia();presets();brandAssetsSources();setupImageFallback();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootPremium);else bootPremium();
})();