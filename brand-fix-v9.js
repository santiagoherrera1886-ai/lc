/* V9 · Little Caesars brand cleanup.
   Replaces improvised mascot drawings with a recognizable brand emblem,
   restores a readable logo, and upgrades platform/metric icon presentation.
   Does not change planning data or routing.
*/
(function(){
"use strict";
const BRAND_ICON="https://asset.brandfetch.io/idPvg-ka_0/idKNuyVmpf.jpeg";
const fallbackLabel="Little Caesars";
const $=(s,root=document)=>root.querySelector(s);
const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
function emblemError(img){
 if(!img.isConnected)return;
 const mark=document.createElement("span");
 mark.className=(img.getAttribute("class")||"")+" lc9-icon-fallback";
 mark.textContent="LC";
 mark.setAttribute("role","img");
 mark.setAttribute("aria-label","Little Caesars");
 img.replaceWith(mark);
}
function setEmblem(img){
 if(!img||img.dataset.lc9Official==="1")return;
 img.dataset.lc9Official="1";
 img.classList.add("lc9-brand-emblem");
 img.removeAttribute("style");
 img.alt=img.closest(".lc7-hero-art")?"Emblema clásico de Little Caesars":img.alt||"Emblema de Little Caesars";
 img.referrerPolicy="no-referrer";
 img.addEventListener("error",()=>emblemError(img),{once:true});
 img.src=BRAND_ICON;
}
function fixLogo(){
 const brand=$(".topbar .brand");
 if(!brand||$(".lc9-brand-symbol",brand))return;
 const badge=document.createElement("span");
 badge.className="lc9-brand-symbol";
 const icon=document.createElement("img");
 icon.alt="Emblema de Little Caesars";icon.src=BRAND_ICON;icon.referrerPolicy="no-referrer";
 icon.onerror=()=>emblemError(icon);
 badge.appendChild(icon);
 brand.prepend(badge);
 const wordmark=$(".lc-top-logo",brand);
 const readable=document.createElement("span");
 readable.className="lc9-wordmark-fallback";
 readable.innerHTML='<strong>Little Caesars</strong><small>CREATIVE STUDIO · COLOMBIA</small>';
 if(wordmark){
  wordmark.addEventListener("load",()=>brand.classList.add("lc9-wordmark-loaded"),{once:true});
  wordmark.addEventListener("error",()=>{wordmark.style.display="none";brand.classList.remove("lc9-wordmark-loaded")},{once:true});
  if(wordmark.complete&&wordmark.naturalWidth>0)brand.classList.add("lc9-wordmark-loaded");
  wordmark.alt=fallbackLabel;
 }
 brand.append(readable);
}
function fixIntroLogo(){
 for(const root of $$(".lc8-intro-topmark")){
   const img=$("img",root);
   if(img){
    img.style.filter="brightness(0) saturate(100%) invert(42%) sepia(84%) saturate(1964%) hue-rotate(354deg) brightness(99%) contrast(105%)";
    img.onerror=()=>{img.style.display="none";root.insertAdjacentHTML("afterbegin",'<strong class="lc9-intro-brand-fallback">Little Caesars</strong>')};
   }
 }
}
function replaceMascots(){
 const selectors=[
 ".lc7-hero-mascot",".lc7-photo-sticker img",".lc7-peek-mascot",
 ".lc7-thumb-mascot",".lc7-outro>img",".lc7-footer-seal img",
 ".lc8-intro-mascot"
 ];
 $$(selectors.join(",")).forEach(setEmblem);
}
const pictograms={
 eye:'<circle cx="11" cy="11" r="2.7"/><path d="M2 11s3.6-6.7 9-6.7 9 6.7 9 6.7-3.6 6.7-9 6.7S2 11 2 11Z"/>',
 people:'<path d="M16 20v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="6.5" r="3.5"/><path d="M20 20v-2a4 4 0 0 0-3-3.9M15 2.3a3.5 3.5 0 0 1 0 6.7"/>',
 marker:'<path d="M20 10.4c0 5.8-8 11.6-8 11.6S4 16.2 4 10.4a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10.2" r="2.6"/>'
};
function fixMetricIcons(){
 const icons=$$(".lc7-impact-card>span:first-child");
 icons.forEach((el,i)=>{
  if(el.dataset.lc9Applied)return;el.dataset.lc9Applied="1";
  const art=[pictograms.eye,pictograms.people,pictograms.marker][i];
  if(!art)return;
  el.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">'+art+'</svg>';
 });
}
function fixMediaBranding(){
 const cards=$$(".lc7-flight-card");
 cards.forEach((card,i)=>{
  const img=$("img",card);
  if(!img||card.dataset.lc9Brand)return;
  card.dataset.lc9Brand="1";
  const labels=[
   {name:"Meta Ads",detail:"SOCIAL / VIDEO",tone:"meta"},
   {name:"TikTok Ads",detail:"DISCOVERY / VIDEO",tone:"tiktok"},
   {name:"Google Ads",detail:"SEARCH / MAPS",tone:"google"}
  ];
  const data=labels[i];if(!data)return;
  const header=document.createElement("div");
  header.className="lc9-platform-heading lc9-platform-"+data.tone;
  const icon=document.createElement("span");icon.className="lc9-platform-symbol";icon.append(img);
  header.append(icon);
  const name=document.createElement("span");name.className="lc9-platform-name";
  const strong=document.createElement("strong");strong.textContent=data.name;
  const small=document.createElement("small");small.textContent=data.detail;
  name.append(strong,small);header.append(name);
  card.insertBefore(header,card.firstChild);
  const old=$(":scope>strong",card);if(old)old.remove();
 });
}
function initialize(){
 fixLogo();fixIntroLogo();replaceMascots();fixMetricIcons();fixMediaBranding();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initialize,{once:true});else initialize();
})();
