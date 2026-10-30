# V7 — Little Caesars: reference-inspired live website

The V7 homepage was implemented from the visual reference approved in the conversation. It is real HTML/CSS/JavaScript, not a screenshot or a non-interactive image.

## Implemented design

- Horizontal header and navigation; the previous sidebar remains available in internal planning pages.
- Orange Creative Studio hero with oversized editorial title, live links, brand product photography and Caesar-inspired mascot illustration.
- Campaign journey from scroll to craving, interaction, and local store intent; steps are interactive and explanatory.
- Campaign Impact cards show **modeled** impressions, unique reach and intent clicks. Figures update with the original simulator controls. They are not claimed as actual campaign results or physical store visits.
- Dark Media Flightboard, with the existing Meta 55%, TikTok 25%, Google 20% recommendation. The COP allocations update when the simulator budget changes.
- Creative concept cards linked to the existing Creative Studio.
- Store finder and functional Leaflet/OpenStreetMap mini-map with the original 18 reference stores in Bogotá, Cali, Chía. City buttons and text search filter the displayed pins. Coordinates remain APPROXIMATE and must not be used for operational ads without geocoding/verification.
- Responsive mobile layout; an original Caesar-inspired SVG illustration appears across the page as an artistic placeholder for an approved client-supplied character kit.
- The footer includes model limitations, navigation and brand.

## Files and rollback

- `reference-v7.js` inserts the V7 homepage, connects its controls to the original simulator, and creates the mini-map.
- `reference-v7.css` implements the complete layout and visual design.
- `assets/caesar-ambassador.svg` is original concept artwork of a pizza ambassador, **not an official trademark asset**.
- `index.html` includes these files after all existing layers. The old homepage is hidden by CSS in summary mode, not removed. Removing V7 script and stylesheet restores the earlier design.

## Visual assets and rights

- Product photography is linked from publicly accessible catalog URLs for Little Caesars Colombia referenced in previous README entries.
- Brand logo remains the Little Caesars wordmark hosted by Wikimedia Commons, as previously documented.
- Platform icons are stored as local SVGs from Simple Icons.
- To publish commercial advertising or pitch materials externally, request the *approved Little Caesars mascot artwork*, approved product photos and creative brand guide from the brand/client. The Caesar-inspired vector here is a visual prototype rather than a claimed official mascot.

## Modeling and public store data

- Default budget **COP 20,000,000**, split **40% national reach / 60% store-intent traffic**.
- Base CPM/CPC/frequency remain editable in the original simulator; the new homepage uses those same values.
- The store directory and territory map retain 18 source-referenced places. Count of stores is NOT a current operational audit. City Salitre precise address pending verification.
- The illustrative source image contained example US locations, store count and fictitious performance numbers; these were deliberately NOT reproduced because the working project is a Colombian media planning app.
