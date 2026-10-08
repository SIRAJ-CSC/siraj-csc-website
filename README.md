# SIRAJ CSC — Website

**AI-Powered Automation for Digital Service Workflows**

Live: [sirajcsc.com](https://sirajcsc.com)

---

## What Is SIRAJ CSC?

SIRAJ CSC is an India-based digital-service and technology initiative based in Kalaburagi, Karnataka. We are building AI-assisted automation tools for CSC operators and digital-service workflows — reducing repetitive document and browser-based work while keeping sensitive actions under human control.

---

## What This Website Represents

This repository contains the official public website for SIRAJ CSC at [sirajcsc.com](https://sirajcsc.com).

The website serves as:
- The official online presence for SIRAJ CSC
- A public-facing landing page for our software and AI development work
- An early-stage company introduction for developers, operators and potential collaborators

---

## Current Development Status

> **Early-stage development.** The software products and capabilities described on this website are under development and are not yet available as production services.

Current phase: **Research & Architecture**

---

## Technology Direction

We are exploring and evaluating:

- **AI / Large Language Models** — for document understanding, reasoning and workflow intelligence
- **Browser Automation** — for controlled, operator-supervised navigation of service portals
- **Document Processing** — OCR, vision models and structured extraction
- **API Integration** — modular API layers connecting AI capabilities with automation
- **Workflow Orchestration** — sequencing automation steps with human checkpoints
- **Human-in-the-Loop Systems** — pausing and verification for sensitive operator decisions

---

## Website Structure

```
/
├── index.html          # Homepage (all main sections)
├── contact.html        # Contact page
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Use
├── css/
│   └── main.css        # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript
└── assets/
    └── favicon.svg     # SVG favicon
```

---

## How to Run Locally

No build step required. Open directly in a browser:

```bash
# Option 1: Open index.html directly in your browser
# (some features like font loading require a local server)

# Option 2: Use Python's built-in server
python -m http.server 8080
# Then open http://localhost:8080

# Option 3: Use Node.js serve
npx serve .
# Then open http://localhost:3000

# Option 4: Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## How to Deploy

### GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root directory**
4. Your site will be available at `https://yourusername.github.io/repo-name`
5. Configure your custom domain `sirajcsc.com` in the Pages settings
6. Add the required DNS records at your domain registrar:
   - `A` records pointing to GitHub Pages IPs
   - Or a `CNAME` record pointing to `yourusername.github.io`

### Netlify / Vercel

1. Connect the GitHub repository
2. No build command needed (static site)
3. Set publish directory to `/` (root)
4. Add your custom domain in the platform settings

### Traditional Web Hosting (cPanel / FTP)

1. Upload all files to your `public_html` directory via FTP or cPanel File Manager
2. Ensure `index.html` is in the root
3. Configure the domain DNS to point to your hosting server

---

## Contact

**Email:** info@sirajcsc.com  
**Location:** Kalaburagi, Karnataka, India  
**Website:** https://sirajcsc.com

---

## Notes

- This is an independent private initiative. SIRAJ CSC is not affiliated with, endorsed by, or acting on behalf of any government entity.
- No funding, revenue, partnership or customer claims are made on this website.
- Development status is accurately reflected as early-stage.

---

&copy; 2026 SIRAJ CSC. All rights reserved.
