diff --git a/README.md b/README.md
index d775ebd4ce9a2ac4ba7d0a536c3c44527c8bc13d..57bbea8cec8bc70d23181db339411920a4b8c326 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,49 @@
-# Claude-Code
-Claude Code Inhalte werden hier in der Repository erstellt
+# GartenDoc
+
+Eine einfache Web-App für Schrebergärten:
+
+- Foto aus dem Album auswählen **oder** direkt mit der Kamera aufnehmen.
+- Pflanze durch ein Vision-Modell analysieren lassen.
+- Ausgabe enthält Pflanzenart, Gesundheitszustand, mögliche Krankheiten/Schädlinge und konkrete Maßnahmen.
+
+## Sofort als öffentlicher Link veröffentlichen (ohne Installation)
+
+Wenn du keinen Projektordner/kein Terminal auf deinem Rechner nutzen willst, geht es am einfachsten mit **Netlify Drop**:
+
+1. Öffne auf deinem Rechner oder Handy diese Seite:
+   - https://app.netlify.com/drop
+2. Lade diese 4 Dateien hoch:
+   - `index.html`
+   - `styles.css`
+   - `app.js`
+   - `README.md` (optional)
+3. Netlify erstellt sofort einen öffentlichen Link (z. B. `https://deinname.netlify.app`).
+4. Öffne den Link auf deinem Handy und nutze die App direkt.
+
+> Hinweis: Der Link ist sofort öffentlich. Wenn du den Link änderst oder dauerhaft verwalten willst, kannst du danach kostenlos ein Netlify-Konto anlegen.
+
+## Alternative: GitHub Pages (dauerhaft, kostenlos)
+
+1. Erstelle auf GitHub ein neues Repository, z. B. `gartendoc`.
+2. Lade `index.html`, `styles.css`, `app.js` ins Repository hoch.
+3. Öffne auf GitHub: **Settings → Pages**.
+4. Unter **Build and deployment** wähle:
+   - Source: **Deploy from a branch**
+   - Branch: **main** und Folder: **/(root)**
+5. Speichern, 1–2 Minuten warten.
+6. Dein Link ist dann:
+   - `https://<dein-github-name>.github.io/gartendoc/`
+
+## Nutzung
+
+1. OpenAI API-Key eintragen (wird im Browser `localStorage` gespeichert).
+2. Bild auswählen oder aufnehmen.
+3. Auf **„Pflanze analysieren“** klicken.
+
+## Sicherheitshinweis
+
+Diese Version ist ein reines Frontend. Der API-Key liegt im Browser des Nutzers. Für produktive Nutzung sollte ein eigenes Backend verwendet werden, damit kein API-Key im Client gespeichert wird.
+
+## Medizin-/Fachhinweis
+
+Diese App ersetzt keine professionelle Pflanzenberatung oder Laboranalyse. Sie liefert eine KI-basierte Ersteinschätzung.
