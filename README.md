
# Technology Curriculum – Starter Site

A lightweight, static website that mimics the K–5 technology curriculum layout with a Kindergarten mega‑menu.

## Personalize the Teacher Name
Open `script.js` and change:
```js
const TEACHER_NAME = "Ms. Brooks";
```

## Add Your Real Links/Units
Open `site-data.js` and replace `href: "#"` with your actual links. Each entry is `{ text, href }`.

## Run Locally
Just double‑click `index.html` to open it in your browser. No build tools required.

## Publish to GitHub Pages
1. Create a new GitHub repo (e.g., `tech-curriculum-site`).
2. Upload these files (`index.html`, `style.css`, `script.js`, `site-data.js`).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set **Branch** to `main` (root) and save. GitHub will give you a public URL in ~1 minute.
6. Share that URL with students/families.

## Optional: Custom Domain
- Buy a domain (e.g., via Google Domains or Namecheap), then connect it in **Settings → Pages → Custom domain**.

Enjoy!
