# KFI Sales Performance Dashboard

Vite + React dashboard for Kruger Family Industries target account sales performance.
**Updates every Monday, 7pm.**

---

## 📁 Project Structure

```
kfi-sales-dashboard/
├── src/
│   ├── App.jsx                    ← Main app & tab routing
│   ├── main.jsx                   ← React entry point
│   ├── index.css                  ← Tailwind + KFI custom styles
│   ├── components/
│   │   ├── Header.jsx             ← KFI branded header + update banner
│   │   ├── TabNav.jsx             ← Tab navigation bar
│   │   ├── TabDashboard.jsx       ← Dashboard tab with charts
│   │   ├── TabFindings.jsx        ← Key findings & what changed
│   │   ├── TabSummary.jsx         ← Team summary + monthly trend
│   │   ├── TabInactivity.jsx      ← Inactivity aging + heatmap
│   │   ├── TabRepDetail.jsx       ← Individual rep detail (10 tabs)
│   │   └── utils.js               ← Shared helpers & constants
│   └── data/
│       └── dashboardData.js       ← ← ← UPDATE THIS EACH WEEK
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── update_dashboard.py            ← Weekly update script
└── .gitignore
```

---

## 🚀 First-Time Setup

### 1. Install Node.js
Download from https://nodejs.org — install the LTS version.

### 2. Open in VS Code
```
File → Open Folder → select kfi-sales-dashboard
```

### 3. Install dependencies
Open the terminal in VS Code (View → Terminal):
```bash
npm install
```

### 4. Start the dev server
```bash
npm run dev
```
Open http://localhost:5173 in your browser. The dashboard is live!

---

## 🔄 Weekly Update (Every Monday)

### Option A — Use Claude (easiest)
1. Upload new Salesforce `.xls` files to Claude in this chat
2. Claude gives you a new `src/data/dashboardData.js`
3. Replace the file, then push:
```bash
git add src/data/dashboardData.js
git commit -m "Dashboard update - June 9, 2026"
git push
```

### Option B — Run the Python script yourself
```bash
pip install pandas openpyxl
python update_dashboard.py activities.xls opportunities.xls
```
Then edit `src/data/dashboardData.js` to add the FINDINGS and CHANGES arrays for the week.

---

## 🌐 Deploy to GitHub Pages (Free)

### One-time setup
```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add to `vite.config.js`:
```js
base: '/kfi-sales-dashboard/'
```

Then deploy:
```bash
npm run deploy
```

Your site: `https://YOUR_USERNAME.github.io/kfi-sales-dashboard/`

---

## 🌐 Deploy to Vercel (Recommended — easier)

1. Go to https://vercel.com and sign up with GitHub
2. Click **New Project** → Import your `kfi-sales-dashboard` repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy**

Every time you `git push`, Vercel rebuilds and redeploys automatically in ~30 seconds.
Your live URL: `https://kfi-sales-dashboard.vercel.app`
