# Gruppprojekt – Upplevelsebokning med Vue.js

## Syfte
Att tillämpa Vue.js, TypeScript, Vue Router och Pinia i ett gruppprojekt samt visa förmåga att motivera och välja lösningar för komponentstruktur, routing och state management utifrån en kravspecifikation.

---

## Instruktioner
Ni ska bygga en webbsida för upplevelser!  
Välj valfritt tema på upplevelsen och passande tema för sidan.

Nu när mörkret och snön faller kanske du är extra sugen på skidresa?  
Eller kanske fly vardagen till tropisk värme eller en safariupplevelse.

### Teknologier
- Vue.js  
- TypeScript  
- Vue Router (eller Nuxt.js)  
- Pinia  
- AI-verktyg (frivilligt men rekommenderat – särskilt för att generera artiklar och innehåll)

Tips: använd gärna strategier från Cloud-kursen, t.ex. Git workflows, tester och ev. Test-driven development.

### Exempel på liknande sidor
- https://ramundberget.se  
- https://www.skistar.com/sv  
- https://www.liveit.se  
- https://aventyrsbanan.se  
- https://www.stockholmadventures.com  
- https://www.ving.se  

---

## Kravspecifikation

## Startsida
**Det ska finnas:**
- Sökformulär med val för:
  - Datum
  - Antal personer
  - Ålderskategorier (Barn/Vuxen/Senior)
- Lista med upplevelser med knappar:
  - **"Läs mer"**  
    → inkluderar sökformulärsval i query params när man går till upplevelsesidan.
  - **"Boka"**  
    → inkluderar sökformulärsval i query params när man går till bokningssidan.
- Tre korta artiklar om upplevelserna

---

## Visa upplevelse-sida
**Det ska finnas:**
- Bild
- Kort beskrivning
- Summering av val från startsidan (via query params)
- **"Boka"-knapp** → går till bokningssidan

---

## Bokningssida
**Det ska finnas:**
- Förifyllt formulär baserat på query params (om de finns)
- Antal dagar resan ska vara
- Antal personer
- Ålderskategorier (Barn 0–12, Vuxen 13–64, Senior 65+)
  - *Valfritt:* olika priser per kategori
- URL params ska uppdateras dynamiskt när användaren ändrar val
- Knapp för att lägga till bokningen i kundkorg (Pinia)

---

## Paketerbjudanden
**Det ska finnas:**
- Minst 3 paket/tillval, t.ex:
  - Skiduthyrning
  - Liftkortspaket
  - Après-ski middag
  - Spa-behandling  
- Paketen visas på bokningssidan  
- Kan läggas i kundkorgen tillsammans med huvudupplevelsen

---

## Kundkorg
**Det ska finnas:**
- Möjlighet att lägga in bokningar (Pinia)
- Summering av total kostnad m.m.
- Möjlighet att tömma kundkorgen
- Knapp “Gå till betalning” (endast bekräftelsesida – ingen riktig betalning krävs)

---

## Skapa datan
**Det ska finnas:**
- Minst tre artiklar om upplevelser (totalt)
- 5–8 olika upplevelser
- 1–3 tillval per upplevelse

**Datakälla kan vara:**
- *Enklast:* `data.json` som importeras eller hämtas via fetch  
- *Valfritt:* enkel backend (t.ex. Express med JSON-fil eller MongoDB)

---

## Routing
Applikationen ska använda Vue Router eller Nuxt.js.

**Minst följande routes:**
- `/` – Startsida  
- `/upplevelse/:id` – Visa specifik upplevelse  
- `/boka/:id` – Bokningssida  
- `/kundkorg` – Kundkorg  
- *Valfritt:* `/artikel/:id` för artikelsidor

---

## Individuell bidragsrapport
Varje gruppmedlem ska skriva en rapport som motiverar tekniska val, baserat på projektet.

---

# Bedömning

## Krav för Godkänt
- Funktionell applikation enligt kravspecifikation
- Vue.js + TypeScript
- Vue Router/Nuxt.js + Pinia
- Individuell rapport som motiverar:
  - Komponentstruktur
  - Routing-lösning
  - State management

## Vidareutveckling för Väl Godkänt
- Allt från Godkänt
- Hög kvalitet och säkerhet i motiveringarna i den individuella rapporten

---

# Inlämning

## Gruppinlämning (Canvas)
- GitHub-länk till projektet  
- *Valfritt:* deploy / Docker  
- Deadline: **18/12-2025**

## Individuell inlämning
- Info finns i separat instruktion  
- Deadline: **18/12-2025**

## Redovisning – 18/12-2025
- Demonstrera applikationen
- Förklara tekniska lösningar
- Motivera val av komponentstruktur, routing och state management

---

# Kursmål som uppfylls

### Primärt kursmål
- **Kursmål 9:** Motivera och välja lösningar för komponentstruktur, routing och state management i ett Vue-projekt.

### Sekundära mål
- **Kursmål 5–8:**  
  - Tolka/anpassa AI-genererad kod  
  - Routing & state management  
  - TypeScript  
  - Utveckling av webbtjänster i Vue.js

---

# Tips innan ni börjar
- Använd gärna arbetssätt ni gillade från Cloud-kursen
- Gör research på liknande sidor – hur fungerar de?
- Skissa sitemap och wireframes

---

# Exempel på användarflöde (checklista)

1. Användaren kommer till startsidan  
2. Fyller i formulär: datum 2024-12-20, 2 vuxna, 1 barn  
3. Klickar **Läs mer** eller **Boka** på ”Skidresa i Åre”  
4. Om läs mer → `/upplevelse/123?datum=2024-12-20&vuxna=2&barn=1`  
5. Klickar **Boka**  
6. Kommer till `/boka/123` med förifyllda värden  
7. Lägger till paket (t.ex. skiduthyrning + liftkort)  
8. Klickar “Lägg till i kundkorg”  
9. Går till `/kundkorg`  
10. Klickar “Gå till betalning” → bekräftelsesida

