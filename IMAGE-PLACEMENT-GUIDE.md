# SIRAJ CSC — Image Placement Guide

> **CRITICAL STEP**: The website is fully built but needs your actual uploaded images placed in the correct folders. Follow these instructions exactly.

---

## 📁 Required Folder Structure

```
siraj-csc-website/
└── assets/
    ├── brand/
    │   ├── siraj-csc-logo.jpg       ← PRIMARY LOGO (used everywhere)
    │   └── siraj-csc-logo-sq.jpg    ← Optional: alternate square crop
    └── posters/
        ├── insurance-poster.jpg     ← Insurance page + vehicle CSS crops
        ├── csc-services.jpg         ← CSC services banner (wide)
        └── meity-services.jpg       ← MeitY full services tree poster
```

---

## 🖼️ Image 1 — SIRAJ CSC Logo (Version 1, with gear pattern)

**Save as:** `assets/brand/siraj-csc-logo.jpg`

**Used in:**
- Navigation bar (all pages)
- Homepage hero
- About page (large display)
- Footer (all pages)

**How to save:**
Right-click the logo image you uploaded → "Save image as" → navigate to `siraj-csc-website/assets/brand/` → save as `siraj-csc-logo.jpg`

---

## 🖼️ Image 2 — SIRAJ CSC Logo (Version 2, clean gradient)

**Save as:** `assets/brand/siraj-csc-logo-sq.jpg` *(optional alternate)*

If you prefer this cleaner version as the primary, rename it to `siraj-csc-logo.jpg` instead.

---

## 🖼️ Image 3 — CSC Services Banner (wide banner with orange border)

**Save as:** `assets/posters/csc-services.jpg`

**Used in:**
- Services page header visual reference
- *(Not used as primary UI — used as supporting banner)*

---

## 🖼️ Image 4 — Insurance Poster (vehicles + insurer logos, wide)

**Save as:** `assets/posters/insurance-poster.jpg`

**Used in:**
- Insurance page hero banner (full image)
- Vehicle thumbnail CSS crops:
  - **Left portion** → 2 Wheeler motorcycle card
  - **Center** → 4 Wheeler car card  
  - **Right portion** → 3 Wheeler auto-rickshaw card
- Insurance providers visual reference

> This is the most important poster to place correctly. The vehicle image cards use CSS `background-position` to crop specific vehicle areas from this image.

---

## 🖼️ Image 5 — MeitY / CSC Services Tree (full services listing)

**Save as:** `assets/posters/meity-services.jpg`

**Used in:**
- Services page — displayed as a full-width visual reference above the services grid
- Shows the full range of CSC services from the Ministry of Electronics & IT poster

---

## ✅ Verification Checklist

After placing all images:

- [ ] `assets/brand/siraj-csc-logo.jpg` → logo appears in navbar on homepage
- [ ] `assets/brand/siraj-csc-logo.jpg` → logo appears as large image in hero section
- [ ] `assets/brand/siraj-csc-logo.jpg` → logo appears in footer
- [ ] `assets/posters/insurance-poster.jpg` → insurance page shows full banner
- [ ] `assets/posters/insurance-poster.jpg` → vehicle cards show cropped vehicles (bike left, car center, auto right)
- [ ] `assets/posters/meity-services.jpg` → services page shows tree diagram poster

---

## 🔄 Fallback Behaviour (if images not yet placed)

The website handles missing images gracefully:

| Image | Fallback |
|---|---|
| SIRAJ CSC Logo | CSS text logo in navy with Kannada tagline |
| Vehicle card images | SVG vehicle icon with label |
| Insurance poster | Banner area hidden |
| MeitY poster | Poster area hidden |

The website will look and function correctly even without images, but will look much better once images are placed.

---

## 📐 CSS Vehicle Crop Positions

The vehicle cards on the homepage and insurance page use CSS `background-position` to crop specific areas from the insurance poster:

```css
/* 2 Wheeler — motorcycle is on the LEFT of the poster */
.v-bike { background: url('../assets/posters/insurance-poster.jpg') 4% 60% / 380% auto no-repeat; }

/* 4 Wheeler — Suzuki Swift is in the CENTER of the poster */
.v-car  { background: url('../assets/posters/insurance-poster.jpg') 54% 70% / 320% auto no-repeat; }

/* 3 Wheeler — auto-rickshaw is on the RIGHT of the poster */
.v-auto { background: url('../assets/posters/insurance-poster.jpg') 96% 60% / 350% auto no-repeat; }
```

If the vehicle crops look slightly off, adjust the position values in `css/main.css` (search for `.v-bike`, `.v-car`, `.v-auto`).

---

## 🌐 Local Preview

```bash
# Server is already running at:
http://localhost:8787

# If not running, start it:
python -m http.server 8787 --directory "G:\My Drive\Siraj CSC\ANTYGRAVITY\siraj-csc-website"
```

---

## 🚀 Deploy

Upload all files (including `assets/` folder with images) to:
- **GitHub Pages**: push entire `siraj-csc-website/` folder contents to repo root
- **Netlify Drop**: drag entire `siraj-csc-website/` folder to netlify.com/drop
- **cPanel/FTP**: upload all files to `public_html/`

**Important**: Always include the `assets/` folder when deploying — the images won't load otherwise.
