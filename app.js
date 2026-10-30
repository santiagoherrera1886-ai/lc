/* Little Caesars Store Impact Lab — static, editable, transparent planning tool.
   Public storefront source list: 17 in 2026 official campaign terms + 18th Ciudad Salitre press report.
   Coordinates are approximate and should NEVER be used as operational GPS pins. */
(function(){
'use strict';
const DATA_SOURCE='https://www.promesaespromesalc.com/terminos-y-condiciones';
const NEWS_SOURCE='https://www.halconesypalomas.com/2026/09/07/little-caesars-pizza-franquicia-de-la-estadounidense-abrio-su-decimoctavo-punto-de-venta-en-colombia/';
const stores=[
{id:1,name:'Calle 134',city:'Bogotá',address:'Av. Calle 134 #54-11',lat:4.7296,lng:-74.0686,zone:'Suba / Niza',source:DATA_SOURCE},
{id:2,name:'Calle 170',city:'Bogotá',address:'Carrera 55A #169A-39',lat:4.7510,lng:-74.0540,zone:'Norte',source:DATA_SOURCE},
{id:3,name:'Calle 26',city:'Bogotá',address:'Calle 26 #32-61',lat:4.6336,lng:-74.0871,zone:'Teusaquillo / El Dorado',source:DATA_SOURCE},
{id:4,name:'Restrepo',city:'Bogotá',address:'Carrera 27 #16-51 Sur',lat:4.5862,lng:-74.1030,zone:'Antonio Nariño',source:DATA_SOURCE},
{id:5,name:'Lagartos',city:'Bogotá',address:'Av. Boyacá #95-31',lat:4.6902,lng:-74.0913,zone:'Boyacá / Lagartos',source:DATA_SOURCE},
{id:6,name:'Madelena',city:'Bogotá',address:'Calle 63 Sur #70C-25',lat:4.5967,lng:-74.1531,zone:'Ciudad Bolívar',source:DATA_SOURCE},
{id:7,name:'Javeriana',city:'Bogotá',address:'Carrera 7 #46-05',lat:4.6329,lng:-74.0639,zone:'Chapinero',source:DATA_SOURCE},
{id:8,name:'Kennedy',city:'Bogotá',address:'Carrera 78B #38B-27 Sur',lat:4.6062,lng:-74.1592,zone:'Kennedy',source:DATA_SOURCE},
{id:9,name:'NQS',city:'Bogotá',address:'Carrera 30 #4-51',lat:4.6074,lng:-74.1020,zone:'NQS',source:DATA_SOURCE},
{id:10,name:'Calle 127',city:'Bogotá',address:'Autopista Norte #125-91',lat:4.7043,lng:-74.0496,zone:'Usaquén',source:DATA_SOURCE},
{id:11,name:'Uniandes',city:'Bogotá',address:'Calle 20 #2A-78',lat:4.6036,lng:-74.0648,zone:'La Candelaria',source:DATA_SOURCE},
{id:12,name:'Suba',city:'Bogotá',address:'Carrera 104 #150C-46',lat:4.7334,lng:-74.1164,zone:'Suba',source:DATA_SOURCE},
{id:13,name:'Ciudad Salitre',city:'Bogotá',address:'Ciudad Salitre (dirección exacta pendiente de validar)',lat:4.6490,lng:-74.1100,zone:'Ciudad Salitre',source:NEWS_SOURCE,needsAddress:true},
{id:14,name:'Chía',city:'Chía',address:'Av. Pradilla, Diagonal 13 #4 Este-23',lat:4.8589,lng:-74.0570,zone:'Sabana norte',source:DATA_SOURCE},
{id:15,name:'Roosevelt',city:'Cali',address:'Calle 6 #36A Bis-25',lat:3.4314,lng:-76.5470,zone:'Sur / Roosevelt',source:DATA_SOURCE},
{id:16,name:'Caney',city:'Cali',address:'Calle 48 #80-26',lat:3.3923,lng:-76.5310,zone:'El Caney',source:DATA_SOURCE},
{id:17,name:'Av. Sexta',city:'Cali',address:'Calle 27N #6A-10',lat:3.4699,lng:-76.5298,zone:'Norte',source:DATA_SOURCE},
{id:18,name:'Plaza Toros',city:'Cali',address:'Calle 5 #52-163',lat:3.4256,lng:-76.5517,zone:'Plaza de Toros',source:DATA_SOURCE}
];
const markets=[
{name:'Medellín',lat:6.2442,lng:-75.5812,tier:'Región prioritaria'},
{name:'Barranquilla',lat:10.9639,lng:-74.7964,tier:'Región prioritaria'},
{name:'Cartagena',lat:10.3910,lng:-75.4794,tier:'Región prioritaria'},
{name:'Bucaramanga',lat:7.1254,lng:-73.1198,tier:'Región prioritaria'},
{name:'Pereira',lat:4.8133,lng:-75.6961,tier:'Crecimiento de marca'},
{name:'Manizales',lat:5.0703,lng:-75.5138,tier:'Crecimiento de marca'},
{name:'Armenia',lat:4.5339,lng:-75.6811,tier:'Crecimiento de marca'},
{name:'Ibagué',lat:4.4389,lng:-75.2322,tier:'Crecimiento de marca'},
{name:'Villavicencio',lat:4.1420,lng:-73.6266,tier:'Crecimiento de marca'},
{name:'Cúcuta',lat:7.8891,lng:-72.4967,tier:'Crecimiento de marca'},
{name:'Santa Marta',lat:11.2408,lng:-74.1990,tier:'Crecimiento de marca'},
{name:'Montería',lat:8.7500,lng:-75.8814,tier:'Exploración'},
{name:'Pasto',lat:1.2136,lng:-77.2811,tier:'Exploración'},
{name:'Neiva',lat:2.9386,lng:-75.2819,tier:'Exploración'},
{name:'Valledupar',lat:10.4631,lng:-73.2532,tier:'Exploración'}
];
const personas=[
{name:'La familia práctica',key:'FAMILIA / 25–54',description:'Resuelve una comida para varios con conveniencia, tamaño compartible y una promesa clara de valor.',signals:['Comida familiar','Ofertas y combos','Fines de semana'],creative:'Una pizza grande, cero complicaciones.',image:'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=85'},
{name:'El parche del antojo',key:'SOCIAL / 18–34',description:'Amigos, fútbol, videojuegos y planes espontáneos que transforman un antojo en un momento compartido.',signals:['Parches con amigos','Deporte y entretenimiento','Video corto'],creative:'El parche pide pizza. Sin pensarlo tanto.',image:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85'},
{name:'El día sin pausas',key:'CONVENIENCIA / 22–44',description:'Personas con poco tiempo que valoran pasar, comprar y seguir con su día.',signals:['Comida para llevar','Cercanía geográfica','Rapidez'],creative:'Pasa. Recoge. Sigue.',image:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=85'},
{name:'Plan de media tarde',key:'ESTILO DE VIDA / 18–45',description:'Estudiantes, parejas y jóvenes profesionales que deciden por ubicación y deseo de compartir.',signals:['Universidades','Planes en pareja','Precio compartible'],creative:'Un plan simple puede saber gigante.',image:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=85'}
];
const channels=[
{name:'Meta Ads',icon:'∞',slug:'meta',percent:55,subtitle:'Cobertura + proximidad',idea:'Reels, Stories, video y tráfico geográfico. Dos líneas: awareness nacional y clics locales a rutas/landing.',notes:'Ad delivery y objetivo de tráfico se validan en Ads Manager.'},
{name:'TikTok Ads',icon:'♪',slug:'tiktok',percent:25,subtitle:'Descubrimiento y cultura',idea:'Creadores, trends contextualizados, comida real y branding para nuevos mercados. Test de tráfico solo si es viable.',notes:'Sin atribuir compras físicas a vistas o clics.'},
{name:'Google Ads',icon:'G',slug:'google',percent:20,subtitle:'Capturar intención cercana',idea:'Search y/o Performance Max con metas de tienda según elegibilidad, ubicación y activos de negocio.',notes:'Requiere validar Google Business Profile y medición de acciones locales.'}
];
const sources=[
{title:'Términos oficiales: Promesa es promesa',type:'FUENTE PRIMARIA · JUNIO 2026',description:'Enumera 17 establecimientos participantes con nombres y direcciones en Bogotá, Cali y Chía.',url:DATA_SOURCE},
{title:'Apertura de tienda 18 · Ciudad Salitre',type:'PRENSA · SEPTIEMBRE 2026',description:'Reporta el local número 18 y su ubicación general en Ciudad Salitre. No publica dirección exacta.',url:NEWS_SOURCE},
{title:'Little Caesars en Rappi Colombia',type:'DIRECTORIO COMERCIAL · CONSULTA OCT 2026',description:'Complementa nombres y direcciones comerciales y muestra referencias adicionales como Cajicá, no incorporadas como tienda confirmada sin cotejo.',url:'https://www.rappi.com.co/restaurantes/delivery/40216-little-caesars-pizza'},
{title:'Little Caesars · expansión (Forbes Colombia)',type:'HISTÓRICO · AGOSTO 2023',description:'Aporta contexto de expansión y menciona otras ciudades como planes futuros, no como sedes abiertas.',url:'https://forbes.co/negocios/este-gigante-de-pizzas-cumple-tres-anos-en-colombia-ya-tiene-14-locales-y-alista-nuevos-productos'},
{title:'Dale la vuelta · campaña Colombia',type:'MARCA / PROMOCIÓN · SEPTIEMBRE 2026',description:'Referencia de ejecución en tienda física y comunicación promocional; no certifica GPS ni tiendas activas actuales.',url:'https://dalelavueltaconlc.com/terminos-y-condiciones'},
{title:'Web oficial Little Caesars Colombia',type:'MARCA · REFERENCIA',description:'Portal oficial de productos y comunicación, sujeto a disponibilidad geográfica.',url:'https://co.littlecaesars.com/es-co/'}
];
const DEFAULT={budget:20000000,storePercent:60,cpm:7000,frequency:2.5,cpc:1000,days:30};
let state={...DEFAULT};
try{const saved=JSON.parse(localStorage.getItem('little-caesars-planning-v1'));if(saved&&typeof saved==='object'){Object.keys(DEFAULT).forEach(k=>{if(typeof saved[k]==='number'&&isFinite(saved[k]))state[k]=saved[k]})}}catch(e){}
const $=id=>document.getElementById(id);
const fmt=(n)=>new Intl.NumberFormat('es-CO',{maximumFractionDigits:0}).format(Math.round(n));
const money=n=>'$'+fmt(n);
const compact=n=>n>=1000000?(n/1000000).toLocaleString('es-CO',{maximumFractionDigits:2})+' M':n>=1000?(n/1000).toLocaleString('es-CO',{maximumFractionDigits:1})+' mil':fmt(n);
const compactMoney=n=>'$'+(n/1000000).toLocaleString('es-CO',{maximumFractionDigits:1})+' M';
function $all(sel){return [...document.querySelectorAll(sel)]}
function compute(){
const total=state.budget;
const awareness=total*(100-state.storePercent)/100;
const traffic=total-awareness;
const impressions=total*1000/state.cpm;
const audienceGross=impressions/state.frequency;
return {total,awareness,traffic,impressions,reach:audienceGross*.85,clicks:traffic/state.cpc,daily:total/state.days,cpr:total/(audienceGross*.85)*1000};
}
function renderSummary(){
const m=compute();
$('kpiBudget').textContent=compactMoney(m.total);
$('kpiReach').textContent=compact(m.reach);
$('kpiImpressions').textContent=compact(m.impressions);
$('kpiClicks').textContent=compact(m.clicks);
$('mixCenter').textContent=compactMoney(m.total);
$('mixReach').textContent=compactMoney(m.awareness);
$('mixStore').textContent=compactMoney(m.traffic);
const a=100-state.storePercent;
$('mixDonut').style.background='conic-gradient(var(--orange) 0% '+a+'%,#19221b '+a+'% 100%)';
$('reachBar').style.width=a+'%';$('storeBar').style.width=state.storePercent+'%';
}
function renderPersonas(){
$('summaryPersonas').innerHTML=personas.map((p,i)=>'<button class="audience-preview" data-goto="audiences"><div class="audience-photo" style="background-image:url(&quot;'+p.image+'&quot;)"></div><div class="audience-caption"><small>0'+(i+1)+' / '+p.key+'</small><strong>'+p.name+'</strong><p>'+p.creative+'</p></div></button>').join('');
$('personaGrid').innerHTML=personas.map((p,i)=>'<article class="persona-card"><div class="persona-visual" style="background-image:url(&quot;'+p.image+'&quot;)"></div><div class="persona-body"><small>0'+(i+1)+' / '+p.key+'</small><h3>'+p.name+'</h3><p>'+p.description+'</p><div class="pills">'+p.signals.map(s=>'<span>'+s+'</span>').join('')+'</div><p><b>Idea creativa:</b> '+p.creative+'</p></div></article>').join('');
}
function renderChannels(){
$('channelGrid').innerHTML=channels.map(c=>'<article class="channel-card"><div class="channel-logo '+c.slug+'">'+c.icon+'</div><h3>'+c.name+'</h3><p><b>'+c.subtitle+'</b></p><p>'+c.idea+'</p><div class="channel-spend"><div><small>INVERSIÓN BASE · '+c.percent+'%</small><strong>'+compactMoney(DEFAULT.budget*c.percent/100)+'</strong></div><small>SIMULADO</small></div><p>'+c.notes+'</p></article>').join('');
}
function renderSources(){
$('sourcesGrid').innerHTML=sources.map(s=>'<article class="source-card"><small>'+s.type+'</small><h3>'+s.title+'</h3><p>'+s.description+'</p><a href="'+s.url+'" target="_blank" rel="noopener noreferrer">Consultar fuente ↗</a></article>').join('');
}
function renderMarketChips(){
$('marketChips').innerHTML=markets.map(m=>'<span class="market-chip">'+m.name+' <strong>↗</strong></span>').join('');
}
let map=null,markers=[],currentMode='stores';
function initMap(){
if(typeof L==='undefined'){const m=$('map');m.innerHTML='<p style="padding:25px">El mapa requiere conexión para cargar Leaflet y OpenStreetMap. El directorio con direcciones sigue disponible a la derecha.</p>';return}
map=L.map('map',{scrollWheelZoom:false,zoomControl:true}).setView([4.65,-74.3],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'© OpenStreetMap contributors'}).addTo(map);
}
function goToPlace(lat,lng,zoom){
if(!map)return;
map.setView([lat,lng],zoom||13,{animate:true});
}
function clearMarkers(){markers.forEach(m=>m.remove());markers=[]}
function addMarker(place,kind){
if(!map)return;
const html=kind==='store'?'<div class="custom-pin">★</div>':'<div class="market-pin"></div>';
const icon=L.divIcon({className:'',html,iconSize:kind==='store'?[27,27]:[15,15],iconAnchor:kind==='store'?[13,13]:[7,7]});
const marker=L.marker([place.lat,place.lng],{icon}).addTo(map);
const label=kind==='store'?'Little Caesars · '+place.name:place.name+' · mercado de alcance';
const detail=kind==='store'?place.address:'Sin tienda validada aquí: awareness solamente';
marker.bindPopup('<div class="map-popup"><b>'+label+'</b><p>'+detail+'</p></div>');
markers.push(marker);
}
function linkToMaps(s){
const q=(s.needsAddress?'Little Caesars Ciudad Salitre Bogotá':('Little Caesars '+s.name+' '+s.address+' '+s.city));
return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
}
function renderLocations(){
const mode=currentMode;
const list=$('locationList');
const city=$('cityFilter').value;
const term=$('storeSearch').value.trim().toLowerCase();
const filtered=mode==='stores'?stores.filter(s=>(city==='all'||s.city===city)&&[s.name,s.city,s.address,s.zone].join(' ').toLowerCase().includes(term)):markets.filter(m=>m.name.toLowerCase().includes(term));
clearMarkers();filtered.forEach(x=>addMarker(x,mode==='stores'?'store':'market'));
if(mode==='stores'){
list.innerHTML=filtered.length?filtered.map(s=>'<div class="location-item" data-place="'+s.id+'"><span class="store-no">#'+String(s.id).padStart(2,'0')+'</span><small>'+s.city+' · '+s.zone+'</small><h4>'+s.name+'</h4><p>'+s.address+(s.needsAddress?' · Confirmar dirección':'')+'</p><a href="'+linkToMaps(s)+'" target="_blank" rel="noopener noreferrer">Abrir en Google Maps ↗</a></div>').join(''):'<p style="padding:20px">No hay tiendas en ese filtro.</p>';
if(map&&filtered.length){map.fitBounds(L.latLngBounds(filtered.map(s=>[s.lat,s.lng])).pad(.25),{maxZoom:13,animate:false})}
}else{
list.innerHTML=filtered.length?filtered.map((m,i)=>'<div class="market-item" data-market="'+m.name+'"><small>AWARNESS · '+m.tier+'</small><h4>'+m.name+'</h4><p>Territorio sugerido para análisis y cobertura. Sin tienda física confirmada en este inventario; no prometer tráfico presencial.</p></div>').join(''):'<p style="padding:20px">No hay mercados con esa búsqueda.</p>';
if(map){map.setView([5.5,-74.8],5,{animate:false})}
}
}
function bindLocations(){
$('locationList').addEventListener('click',e=>{
if(e.target.closest('a'))return;
const item=e.target.closest('[data-place]');
if(item){const s=stores.find(x=>x.id===Number(item.dataset.place));if(s)goToPlace(s.lat,s.lng,15)}
const market=e.target.closest('[data-market]');
if(market){const m=markets.find(x=>x.name===market.dataset.market);if(m)goToPlace(m.lat,m.lng,11)}
});
$('territoryMode').addEventListener('click',e=>{
const btn=e.target.closest('[data-mode]');if(!btn)return;
currentMode=btn.dataset.mode;
$all('#territoryMode button').forEach(b=>b.classList.toggle('selected',b===btn));
$('cityFilter').disabled=currentMode!=='stores';
$('cityFilter').value='all';
$('storeSearch').value='';
$('storeSearch').placeholder=currentMode==='stores'?'Buscar tienda, calle o zona…':'Buscar mercado de alcance…';
renderLocations();
});
$('cityFilter').addEventListener('change',renderLocations);
$('storeSearch').addEventListener('input',renderLocations);
}
function renderSim(){
const m=compute();
for(const [key,suffix,format] of [['budget','Output',money],['storePercent','Output',x=>fmt(x)+'%'],['cpm','Output',money],['frequency','Output',x=>x.toLocaleString('es-CO',{maximumFractionDigits:1})],['cpc','Output',money],['days','Output',x=>fmt(x)+' días']]){
$(key).value=state[key];$(key+suffix).textContent=format(state[key]);
}
$('simReach').textContent=compact(m.reach);
$('simImpressions').textContent=compact(m.impressions);
$('simClicks').textContent=compact(m.clicks);
$('simDaily').textContent=money(m.daily);
$('simCpr').textContent=money(m.cpr);
$('simAwarenessBudget').textContent=compactMoney(m.awareness);
$('simTrafficBudget').textContent=compactMoney(m.traffic);
$('simTrackAw').style.width=(100-state.storePercent)+'%';
$('simTrackTr').style.width=state.storePercent+'%';
renderSummary();
}
function bindSim(){
Object.keys(DEFAULT).forEach(key=>{$(key).addEventListener('input',e=>{state[key]=Number(e.target.value);renderSim();try{localStorage.setItem('little-caesars-planning-v1',JSON.stringify(state))}catch(err){}})});
$('resetSim').addEventListener('click',()=>{state={...DEFAULT};renderSim();try{localStorage.removeItem('little-caesars-planning-v1')}catch(e){}});
$('copyScenario').addEventListener('click',async()=>{
const m=compute();
const txt=['LITTLE CAESARS · ESCENARIO DE MEDIOS (MODELADO)','Presupuesto: '+money(m.total),'Alcance nacional: '+money(m.awareness),'Tráfico a tienda: '+money(m.traffic),'Impresiones estimadas: '+fmt(m.impressions),'Alcance combinado estimado: '+fmt(m.reach),'Clics de intención potenciales: '+fmt(m.clicks),'CPM: '+money(state.cpm),'CPC: '+money(state.cpc),'Frecuencia: '+state.frequency,'Días: '+state.days,'Importante: clics no son visitas físicas. Supuestos de planeación, no resultados reales.'].join('\n');
try{await navigator.clipboard.writeText(txt);const b=$('copyScenario');const old=b.textContent;b.textContent='✓ Escenario copiado';setTimeout(()=>{b.textContent=old},1800)}catch(e){window.prompt('Copia tu escenario:',txt)}
});
}
function csvCell(v){return '"'+String(v??'').replaceAll('"','""')+'"'}
function downloadCSV(){
const m=compute();
const rows=[['TIPO','NOMBRE','CIUDAD','DIRECCION / CONCEPTO','MONTO COP','FUENTE'],
['Presupuesto','Total','','',m.total,'Escenario editable'],
['Objetivo','Alcance nacional','Colombia','Cobertura nacional sin restringirse a ciudades con tienda',Math.round(m.awareness),'Simulación'],
['Objetivo','Tráfico a tienda','Bogotá / Cali / Chía','Clics de intención alrededor de tiendas verificables',Math.round(m.traffic),'Simulación'],
...channels.map(c=>['Medio',c.name,'Colombia','Participación indicativa '+c.percent+'%',Math.round(m.total*c.percent/100),'Propuesta estratégica']),
...stores.map(s=>['Tienda',s.name,s.city,s.address,'',s.source]),
...markets.map(x=>['Mercado de awareness',x.name,x.name,'No confirmar tienda sin fuente','', 'Hipótesis estratégica'])];
const csv='\ufeff'+rows.map(r=>r.map(csvCell).join(';')).join('\r\n');
const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download='Little-Caesars-Store-Impact-Lab.csv';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(u);
}
function route(name,changeHash){
if(!['summary','territory','audiences','media','simulator','creative','sources'].includes(name))name='summary';
$all('.view').forEach(v=>v.classList.toggle('active',v.id==='view-'+name));
$all('[data-route]').forEach(b=>b.classList.toggle('active',b.dataset.route===name));
if(changeHash)history.replaceState(null,'','#'+name);
$('sidebar').classList.remove('open');
window.scrollTo({top:0,behavior:'instant'});
if(name==='territory'){if(!map)initMap();renderLocations();if(map)setTimeout(()=>map.invalidateSize(),20)}
}
function bindNav(){
document.addEventListener('click',e=>{
const b=e.target.closest('[data-goto],[data-route]');
if(b){const name=b.dataset.goto||b.dataset.route;route(name,true)}
});
$('mobileTrigger').addEventListener('click',()=>$('sidebar').classList.toggle('open'));
window.addEventListener('hashchange',()=>route(location.hash.slice(1),false));
$('downloadPlan').addEventListener('click',downloadCSV);
}
function boot(){
renderPersonas();renderChannels();renderMarketChips();renderSources();bindLocations();bindSim();bindNav();renderSim();route(location.hash.slice(1)||'summary',false);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();