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
