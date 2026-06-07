# EXL Cloud Website

Rebuilt EXL Cloud website — React + Vite, deployed to GitHub Pages.

## Quick Deploy (today)

```bash
# 1. Clone or init the repo
cd exlcloud-site

# 2. Install dependencies
npm install

# 3. Test locally
npm run dev
# Opens at http://localhost:5173/exlcloud-site/

# 4. Deploy to GitHub Pages
npm run deploy
# This builds and pushes to gh-pages branch
```

## GitHub Setup

1. Create repo: `model-citizn/exlcloud-site` (public)
2. Push this folder to `main` branch
3. Run `npm run deploy` — creates `gh-pages` branch automatically
4. In GitHub → Settings → Pages → Source: `gh-pages` branch, `/ (root)`
5. Site goes live at: `https://model-citizn.github.io/exlcloud-site/`

## Custom Domain (exlcloud.io)

1. Add a `CNAME` file to `/public/` containing: `exlcloud.io`
2. Change `base` in `vite.config.js` to `'/'`
3. In your DNS provider, add:
   - `A` records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or `CNAME` record: `model-citizn.github.io`
4. In GitHub → Settings → Pages → Custom domain: `exlcloud.io`
5. Tick "Enforce HTTPS"
6. Redeploy: `npm run deploy`

## Pricing Note

Current prices ($50/$125) shown until 30 June 2026.
New prices ($70/$170) take effect 1 July 2026.
Update `src/App.jsx` Pricing section when the switchover happens.

## Structure

```
exlcloud-site/
├── index.html          # Entry point with meta tags
├── package.json        # Dependencies + deploy script
├── vite.config.js      # Vite config with base path
├── public/
│   ├── 404.html        # SPA redirect for GitHub Pages
│   └── .nojekyll       # Bypass Jekyll processing
└── src/
    ├── main.jsx        # React entry
    └── App.jsx         # Full site (all pages)
```
