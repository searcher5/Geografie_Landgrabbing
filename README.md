# 🌍 Land Grabbing — Interaktive Karte

Geografie-Projekt mit interaktiver Weltkarte zu globalen Land-Grabbing-Fallbeispielen.

## 📂 Dateistruktur

```
landgrabbing/
├── index.html          ← Startseite mit interaktiver Weltkarte
├── css/
│   └── style.css       ← Alle Styles
├── js/
│   └── map.js          ← Karten-Interaktivität
└── pages/
    ├── aethiopien.html
    ├── brasilien.html
    ├── indonesien.html
    ├── kambodscha.html
    └── ukraine.html
```

## 🚀 Auf GitHub Pages veröffentlichen

1. Gehe auf [github.com](https://github.com) und erstelle ein **neues Repository** (z.B. `land-grabbing`)
2. Lade alle Dateien hoch (achte darauf, die Ordnerstruktur beizubehalten!)
3. Gehe zu **Settings → Pages**
4. Unter „Source": wähle `Deploy from a branch` → Branch `main` → Ordner `/ (root)`
5. Speichern — nach 1–2 Minuten ist die Seite unter `https://DEINNAME.github.io/land-grabbing/` erreichbar

## ✏️ Texte einfüllen

Öffne die jeweilige Datei in `pages/` und ersetze die `[...]` Platzhalter mit deinen Texten.  
Grafiken kannst du als PNG/JPG in den `img/`-Ordner legen und mit `<img src="../img/meinbild.png" alt="...">` einbinden.

## 🖼️ Eigene Bilder einbinden

Ersetze die `<div class="img-placeholder">` Blöcke durch:
```html
<img src="../img/dateiname.jpg" alt="Bildbeschreibung" style="width:100%; border-radius:10px; margin:1.5rem 0;">
```
