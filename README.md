# Little Caesars — Store Impact Lab Colombia

Dashboard de planeación estratégica de medios **alcance nacional + tráfico hacia tiendas**. Inspirado en la arquitectura de navegación de Ritual Audience Atlas, con identidad Little Caesars.

**Presupuesto de partida:** COP $20.000.000. **Escenario inicial:** 40% alcance (COP $8 M), 60% intención de tráfico físico (COP $12 M). Ambos son editables.

## Funcionalidades
- Resumen ejecutivo con KPIs de inversión, alcance, impresiones y clics modelados.
- Mapa Leaflet/OpenStreetMap con 18 sedes documentadas (coordenadas ilustrativas de sector, no GPS final) y 15 mercados adicionales de awareness, más cobertura nacional completa.
- Directorio con direcciones y búsqueda, enlaces de consulta individual en Google Maps.
- Cuatro clústeres creativos de audiencia. No representan universos reales medidos.
- Plan de medios indicativo: Meta 55%, TikTok 25%, Google 20%. El presupuesto del simulador se reparte entre alcance nacional y tráfico local; la mezcla de plataformas es una hipótesis editorial y no se usa para predecir resultados.
- Simulador editable y persistente localmente: presupuesto, porcentaje a tienda, CPM, CPC, frecuencia y duración.
- Exportación de CSV de presupuesto, medios, sedes y mercados.
- Sección de fuentes y supuestos.

## Cobertura y verificación de tiendas
- Los **17 locales** enumerados en los términos públicos de la campaña *Promesa es promesa* (2026): 12 Bogotá, 4 Cali y 1 Chía.
- Una nota de prensa del 7 de septiembre de 2026 informa la apertura del **local número 18 en Ciudad Salitre** (Bogotá), sin dirección precisa.
- El directorio de Rappi muestra también, entre otros, una entrada para Cajicá. Esa sede NO se considera validada en este inventario, por ausencia de conciliación con el listado de 18.
- Medellín, Barranquilla, Cartagena y las demás ciudades de awareness **no se representan como ciudades con tienda**. Las declaraciones históricas de expansión no equivalen a aperturas.

Revisar en campo antes de pautar. Los puntos de mapa son **centroides estimados del sector**, no coordenadas GPS verificadas. Para dirigir a clientes se abre una búsqueda de la tienda por nombre/dirección en Google Maps.

### Fuentes
- Tiendas en términos públicos: https://www.promesaespromesalc.com/terminos-y-condiciones
- Apertura número 18 (nota de prensa): https://www.halconesypalomas.com/2026/09/07/little-caesars-pizza-franquicia-de-la-estadounidense-abrio-su-decimoctavo-punto-de-venta-en-colombia/
- Rappi: https://www.rappi.com.co/restaurantes/delivery/40216-little-caesars-pizza
- Contexto de expansión: https://forbes.co/negocios/este-gigante-de-pizzas-cumple-tres-anos-en-colombia-ya-tiene-14-locales-y-alista-nuevos-productos

## Metodología del simulador
- Alcance nacional presupuestado = presupuesto × (100 − porcentaje tienda) / 100
- Tráfico local presupuestado = presupuesto × porcentaje tienda / 100
- Impresiones esperadas = presupuesto / CPM × 1000
- Alcance bruto modelo = impresiones / frecuencia supuesta
- Alcance combinado modelo = alcance bruto × 0,85 (hipótesis de 15% de deduplicación)
- Clics potenciales de intención = presupuesto tráfico / CPC supuesto

**No confundir clics con visitas físicas.** El simulador no estima ventas, conversión real ni lift de tráfico. CPM, CPC, frecuencia y factor de deduplicación son **supuestos**, y deben recalibrarse con datos de plataformas. El modelo es aritmético, no un forecast auditado.

## Implementación
Web estática sin build, apta para publicación en Vercel. Abre index.html o ejecuta un servidor local:

~~~bash
python3 -m http.server 4173
~~~

Archivos: index.html, styles.css, app.js. Tipografía Google Fonts, mapa Leaflet/OpenStreetMap y fotografías de Unsplash se cargan por CDN (requieren conexión).

## Siguientes validaciones antes de activar campañas
1. Confirmar sedes activas, dirección exacta, cobertura de pickup y horarios.
2. Obtener ficha de Google Business Profile o ubicación vinculada para cada tienda.
3. Validar mercados adicionales con el cliente y calendario de aperturas; no usar CTA de visita donde no haya punto operativo.
4. Confirmar campañas de alcance y tráfico disponibles en las cuentas de Meta, TikTok y Google; validar habilitación de objetivos de tienda.
5. Definir UTM, búsquedas de rutas, conversiones locales y medición incremental / cupones por sede.

Actualización de directorio y supuestos: 30 octubre 2026.


## Rediseño V2 · 30 de octubre de 2026

Se añadió una capa brand-first inspirada en la estructura editorial de Ritual, con identidad gráfica específica de Little Caesars. Esta capa conserva el directorio, mapa, simulador, cálculos y exportación CSV.

- premium-v2.css: diseño editorial responsive en naranja Clementine, crema y carbón.
- premium-v2.js: galerías de producto, mockups editoriales de Meta/TikTok/Google, cards de medios y presets de asignación 60/40, 40/60 y 25/75 alcance/tráfico.
- assets/platforms/*.svg: SVG de logos de Meta, TikTok y Google alojados en el repositorio; fuente: https://simpleicons.org/
- Logo wordmark: https://commons.wikimedia.org/wiki/File:Little_Caesars_wordmark.svg
- Imágenes de productos de catálogo público Little Caesars: https://web.didiglobal.com/co/food/bogota/little-caesars-pizza-calle-134/5764607790761640952/ y https://web.didiglobal.com/co/food/bogota/little-caesars-pizza-calle-170/5764607628165252084/
- Referencia de identidad: https://turnerduckworth.com/work/little-caesars

Las vistas de anuncios son **conceptos editoriales**, no piezas publicadas ni aprobadas. La mezcla por plataformas es una sugerencia fija independiente del simulador por objetivos. Para uso comercial externo, confirmar derechos de uso de marca y fotografías, preferiblemente con el kit oficial provisto por el cliente.


## Creative Studio V3 · 30 de octubre de 2026

Esta versión es **mejora incremental** del proyecto existente, sin reemplazar su lógica de inversión, mapa ni directorio.

- creative-v3.css: franja de marca animada, manifiesto publicitario con producto, estrategia en tres etapas, visual geográfico, perfiles editoriales, laboratorio de ideas y curva visual con ajustes responsive.
- creative-v3.js: modo presentación (oculta lateral, se guarda localmente, Esc para salir), botones rápidos de Bogotá/Cali/Chía conectados al filtro real del directorio, alternancia Meta/TikTok/Google con copia de ideas, y curva de alcance recalculada al cambiar presupuesto/CPM/frecuencia/días.
- Fuentes de las fotografías de marca/producto: catálogo de Little Caesars en DiDi Food Colombia y fotografía de marca/caja en Rappi, identificadas en los archivos fuente.
- La visualización temporal de alcance es una **curva ilustrativa de distribución, no forecast temporal**, normalizada al valor total del modelo existente. No representa resultados medidos ni conversiones reales.
- Se conservan la distribución editable COP $20M, las 18 ubicaciones de referencia que requieren validación de operación, y los 15 mercados adicionales de alcance.

La app requiere conexión de red para cargar fotos externas, Google Fonts y Leaflet/OpenStreetMap. Para presentaciones comerciales formales, revisar licencias y sustituir fotos por recursos aprobados por Little Caesars.


## V4 — Creative Experience (30 octubre 2026)

La versión V4 sustituye visualmente las portadas y banners redundantes de V2/V3 con una **portada cinematográfica en tres escenas seleccionables**: alcance, tráfico hacia tienda e impacto de medios. Incorpora tipografía publicitaria, identidad Clementine, fotografías de producto, una narrativa en cards y mejoras responsive. La capa se carga a continuación de app.js, premium-v2.js y creative-v3.js; no altera las reglas de geografía ni los cálculos base.

**Interacciones nuevas**
- Carrusel manual de 3 escenas con navegación anterior/siguiente, botones 01/02/03 y teclado al enfocar el escenario. Sin reproducción automática.
- Navegación rápida visual a Audience Lab, medios y tiendas.
- Filtro editorial de los cuatro perfiles de audiencia (con la opción Todos), sin cambiar los universos.
- Comparación de hasta tres escenarios en el simulador. Guarda y recupera desde localStorage y exporta CSV con presupuesto, split, CPM, frecuencia, impresiones, alcance y clics potenciales.
- En móvil se reducen controles de cabecera sin ocultar acciones importantes.

**Archivos**: experience-v4.js, experience-v4.css. Para volver a V3, basta quitar esos enlaces de index.html. Las secciones previas no se borraron.

**Limitaciones**: Los escenarios son simulaciones aritméticas. Los clics potenciales no son visitas a tiendas. Las fotos de productos de DiDi/Rappi son referencias de catálogo en URLs externas y pueden necesitar sustitución por material aprobado por la marca para un uso comercial definitivo. No se verificaron creativos en un navegador con capturas; se validó sintaxis de JavaScript/CSS y publicación estática en Vercel.


## V8 — Animated introduction & premium visual refresh (2 Nov 2026)

The V8 release is **implemented in production code** and added after the existing V7 reference landing page. No original simulator, store dataset, map logic or creative page was replaced.

**New files**
- \`intro-v8.css\` — orange cinematic intro: original Caesar-inspired local SVG, product photography, staggered editorial headline, subtle rings, mascot lift, segmented non-numeric sequence indicator and scene-to-home transitions. Also refines the hero, KPI cards, platform cards, typography, imagery, maps and internal sections with scoped CSS.
- \`intro-v8.js\` — first-open logic using per-tab sessionStorage, **Saltar intro**, **Escape to skip**, **↻ Ver intro** replay link in the footer, responsive navigation link to the home page, subtle scroll reveals and route-aware enhancements.
- \`index.html\` — initially-visible accessible splash markup and an inert \`<template>\` for replay. Includes \`intro-v8.css\` and \`intro-v8.js\` after V7. A very small preflight script prevents a splash flash on repeated visits to the same browser session.

**Accessibility and robustness**
- Respects \`prefers-reduced-motion\`: skips the intro and disables page entrance animations.
- Allows visitors to skip the intro immediately; it never pretends to report actual download progress.
- A CSS fail-open fallback releases the overlay if a deferred script cannot run.
- The intro plays once per tab session, but the user can replay it from the footer.

**Still real, still modeled**
- The baseline investment is COP 20,000,000, with an editable split between national reach and location-intent traffic.
- All estimates, store pins and platform allocations remain their original modeled values.
- 18 Colombian store references remain **subject to operational verification** and map coordinates remain approximate.
- The mascot in the opening is original Caesar-inspired concept artwork, not an official character file. Brand-approved assets are recommended for external campaign publishing.

**Deployment:** GitHub \`main\` automatically deploys to Vercel project \`sa-ntiago/lc\`, public domain \`https://lc-sa-ntiago.vercel.app/\`.
