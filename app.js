const galleryInput = document.getElementById("galleryInput");
const cameraInput = document.getElementById("cameraInput");
const apiKeyInput = document.getElementById("apiKey");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const result = document.getElementById("result");
const status = document.getElementById("status");

let imageDataUrl = null;

apiKeyInput.value = localStorage.getItem("gartendoc_api_key") ?? "";

apiKeyInput.addEventListener("change", () => {
  localStorage.setItem("gartendoc_api_key", apiKeyInput.value.trim());
});

function setImage(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    imageDataUrl = String(reader.result);
    preview.src = imageDataUrl;
    preview.classList.remove("hidden");
    status.textContent = "Bild geladen. Bereit zur Analyse.";
  };
  reader.readAsDataURL(file);
}

galleryInput.addEventListener("change", (event) => setImage(event.target.files?.[0]));
cameraInput.addEventListener("change", (event) => setImage(event.target.files?.[0]));

analyzeBtn.addEventListener("click", async () => {
  const apiKey = apiKeyInput.value.trim();

  if (!apiKey) {
    alert("Bitte zuerst einen OpenAI API-Key eingeben.");
    return;
  }

  if (!imageDataUrl) {
    alert("Bitte zuerst ein Foto auswählen oder aufnehmen.");
    return;
  }

  status.textContent = "Analysiere Bild…";
  analyzeBtn.disabled = true;
  result.textContent = "Analyse läuft…";

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text:
                  "Analysiere diese Pflanze für einen Schrebergarten in Deutschland. Gib bitte: 1) Vermutete Pflanzenart(en) mit Sicherheit in %, 2) Gesundheitszustand (Ampel), 3) Mögliche Probleme (Über-/Unterwässerung, Nährstoffmangel, Schädlinge, Pilz, Bakterien, Virus), 4) Konkrete Maßnahmen heute, diese Woche und langfristig, 5) Warnsignale, wann ich dringend handeln muss. Antworte auf Deutsch in klaren Stichpunkten.",
              },
              {
                type: "input_image",
                image_url: imageDataUrl,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API-Fehler (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    result.textContent = data.output_text ?? "Keine Textausgabe erhalten.";
    status.textContent = "Analyse abgeschlossen ✅";
  } catch (error) {
    console.error(error);
    result.textContent = `Fehler bei der Analyse:\n${error.message}`;
    status.textContent = "Analyse fehlgeschlagen ❌";
  } finally {
    analyzeBtn.disabled = false;
  }
});
