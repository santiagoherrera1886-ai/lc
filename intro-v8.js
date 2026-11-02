/* LITTLE CAESARS — EXPERIENCE V8
   Branded intro, accessible motion control, navigation polish, refined page choreography.
   Progressive enhancement: existing maps, simulator, store dataset and creative tools remain unchanged.
*/
(function(){
'use strict';
const DOC=document;
const $=id=>DOC.getElementById(id);
const $$=(sel,root=DOC)=>Array.from(root.querySelectorAll(sel));
const KEY='lc-intro-v8-seen';
const KEY_NO_MOTION=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let intro=$('lc8Intro');
let closing=false;
let removeTimer=0,showTimer=0,stageTimer=0,autoTimer=0;
const safeStore={
 get(){try{return window.sessionStorage.getItem(KEY)==='1'}catch(e){return false}},
 set(){try{window.sessionStorage.setItem(KEY,'1')}catch(e){}}
};
function dismissIntro(skipped){
 if(!intro||closing)return;
 closing=true;
 safeStore.set();
 window.clearTimeout(showTimer);
 window.clearTimeout(stageTimer);
 window.clearTimeout(autoTimer);
 intro.classList.add('lc8-leaving');
 intro.setAttribute('aria-hidden','true');
 if(skipped)intro.setAttribute('data-skipped','1');
 const finish=()=>{
  if(!intro.isConnected)return;
  intro.remove();
  DOC.body.classList.remove('lc8-intro-open');
  DOC.body.classList.add('lc8-intro-complete');
  DOC.documentElement.classList.add('lc8-intro-finished');
  window.dispatchEvent(new Event('resize'));
 };
 if(KEY_NO_MOTION)finish();
 else{
  removeTimer=window.setTimeout(finish,680);
  intro.addEventListener('transitionend',e=>{
   if(e.target===intro&&e.propertyName==='opacity'){
    window.clearTimeout(removeTimer);
    finish();
   }
  },{once:true});
 }
}
function replayIntro(){
 if(DOC.getElementById('lc8Intro'))return;
 const template=$('lc8IntroTemplate');
 if(!template)return;
 const content=template.content.cloneNode(true);
 const el=content.querySelector('#lc8Intro');
 if(!el)return;
 closing=false;
 DOC.body.prepend(el);
 intro=el;
 DOC.body.classList.add('lc8-intro-open');
 DOC.body.classList.remove('lc8-intro-complete');
 DOC.documentElement.classList.remove('lc8-intro-finished');
 initIntro(el,true);
}
function initIntro(node,replay){
 if(!node)return;
 if(KEY_NO_MOTION||(!replay&&safeStore.get())){
  node.remove();
  DOC.documentElement.classList.add('lc8-intro-finished');
  DOC.body.classList.add('lc8-intro-complete');
  DOC.body.classList.remove('lc8-intro-open');
  return;
 }
 DOC.body.classList.add('lc8-intro-open');
 DOC.body.classList.remove('lc8-intro-complete');
 node.removeAttribute('aria-hidden');
 node.dataset.stage='1';
 const skip=node.querySelector('[data-lc8-skip]');
 skip?.addEventListener('click',()=>dismissIntro(true),{once:true});
 // Escape never traps people behind the opening sequence.
 const escape=e=>{
  if(e.key==='Escape'){
   dismissIntro(true);
   DOC.removeEventListener('keydown',escape);
  }
 };
 DOC.addEventListener('keydown',escape);
 node.addEventListener('transitionend',()=>{
  if(node.classList.contains('lc8-leaving'))DOC.removeEventListener('keydown',escape);
 },{once:true});
 // Each card is a short part of the story, not a misleading percent loader.
 stageTimer=window.setTimeout(()=>node.dataset.stage='2',650);
 showTimer=window.setTimeout(()=>node.dataset.stage='3',1400);
 autoTimer=window.setTimeout(()=>dismissIntro(false),2700);
}
function addReplay(){
 const foot=DOC.querySelector('.lc7-footer-links');
 if(foot&&!foot.querySelector('.lc8-replay')){
  const replay=DOC.createElement('button');
  replay.className='lc8-replay';
  replay.type='button';
  replay.textContent='↻ Ver intro';
  replay.addEventListener('click',replayIntro);
  foot.append(replay);
 }
 const hero=DOC.querySelector('.lc7-hero-art');
 if(hero&&!DOC.querySelector('.lc8-hero-edition')){
  const tag=DOC.createElement('div');
  tag.className='lc8-hero-edition';
  tag.innerHTML='<span>CAMPAIGN EXPERIENCE</span><strong>08<span> / </span>26</strong>';
  hero.append(tag);
 }
 const header=DOC.querySelector('.topbar-right');
 if(header&&!header.querySelector('.lc8-home-link')){
  const home=DOC.createElement('button');
  home.className='lc8-home-link';
  home.type='button';
  home.dataset.goto='summary';
  home.innerHTML='<span aria-hidden="true">⌂</span> Volver al inicio';
  home.setAttribute('aria-label','Volver al inicio de Creative Studio');
  header.insertBefore(home,header.firstChild);
 }
}
function ensureProductFallbacks(){
 const fallbacks=[
 '.lc7-hero-photo img','.lc7-photo-card>img',
 '.lc7-concept-image>img:first-child','.lc6-intro-visual>img',
 '.lc6-phone-image img','.lc6-wall-card>img'
 ];
 $$(fallbacks.join(',')).forEach(img=>{
  if(img.dataset.lc8Fallback)return;
  img.dataset.lc8Fallback='1';
  img.addEventListener('error',function(){
   if(this.dataset.lc8ErrorDone)return;
   this.dataset.lc8ErrorDone='1';
   this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&q=85';
  });
 });
}
function accessibility(){
 const introMascot=DOC.querySelector('.lc8-intro-mascot');
 if(introMascot){
  introMascot.addEventListener('error',()=>{
   introMascot.setAttribute('src','./assets/caesar-ambassador.svg');
  },{once:true});
 }
 const sections=$$('.view');
 sections.forEach(section=>{
  if(!section.hasAttribute('tabindex'))section.setAttribute('tabindex','-1');
 });
}
function buildReveal(){
 if(KEY_NO_MOTION||!('IntersectionObserver' in window))return;
 const selectors=[
 '.lc7-journey','.lc7-photo-card','.lc7-impact',
 '.lc7-flight','.lc7-concepts','.lc7-location',
 '.lc6-intro','.lc6-concept-area','.lc6-wall',
 '.lc3-territory-stage','.lc5-media-flight',
 '#view-simulator .sim-grid','.lc4-compare',
 '#view-audiences .persona-grid'
 ];
 const selected=$$(selectors.join(','));
 if(!selected.length)return;
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){
    entry.target.classList.add('lc8-visible');
    observer.unobserve(entry.target);
   }
  });
 },{threshold:0.09,rootMargin:'0px 0px -12px 0px'});
 selected.forEach(el=>{
  el.classList.add('lc8-reveal');
  observer.observe(el);
 });
}
function sectionPolish(){
 // Apply a restrained cursor halo only to user-interactive cards.
 const cards=$$('.lc7-flight-card,.lc7-concept,.lc6-wall-card,.lc7-journey-step');
 if(KEY_NO_MOTION)return;
 cards.forEach(card=>{
  card.addEventListener('pointermove',e=>{
   if(e.pointerType==='touch')return;
   const r=card.getBoundingClientRect();
   card.style.setProperty('--lc8-x',((e.clientX-r.left)/r.width*100).toFixed(0)+'%');
   card.style.setProperty('--lc8-y',((e.clientY-r.top)/r.height*100).toFixed(0)+'%');
  },{passive:true});
 });
}
function observeRoute(){
 const main=$('main');
 if(!main)return;
 const update=()=>{
  const active=DOC.querySelector('.view.active');
  if(!active)return;
  DOC.body.dataset.lc8View=active.id.replace('view-','');
 };
 const observer=new MutationObserver(update);
 $$('.view',main).forEach(el=>observer.observe(el,{attributes:true,attributeFilter:['class']}));
 update();
}
function boot(){
 initIntro(intro,false);
 addReplay();
 accessibility();
 ensureProductFallbacks();
 buildReveal();
 sectionPolish();
 observeRoute();
}
if(DOC.readyState==='loading')DOC.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();