# 🚀 INSTALLATION INSTRUCTIONS

## ⚠️ Important Note
This folder does NOT include `node_modules` to keep the download size small.
You need to install dependencies after extracting the files.

## 📥 Installation Steps

### Step 1: Extract the Files
Download and extract the `portfolio-manish` folder to your desired location.

### Step 2: Open Terminal/Command Prompt
Navigate to the project folder:

**On Windows (Command Prompt or PowerShell):**
```cmd
cd path\to\portfolio-manish
```

**On Mac/Linux (Terminal):**
```bash
cd path/to/portfolio-manish
```

### Step 3: Install Dependencies
This will download all required packages (React, Vite, Tailwind CSS, etc.):

```bash
npm install
```

**Wait time:** 1-3 minutes depending on your internet speed

### Step 4: Start the Development Server
```bash
npm run dev
```

### Step 5: Open in Browser
The terminal will show you a URL, usually:
```
http://localhost:5173
```

Open this URL in your browser - your portfolio is now running! 🎉

---

## ✅ What Gets Installed

When you run `npm install`, it will install:
- React 18
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- All necessary development tools

**Total size after installation:** ~150 MB

---

## 🔧 Troubleshooting

### "npm not found"
→ You need to install Node.js first from https://nodejs.org
→ Download the LTS version and install it
→ Restart your terminal and try again

### "Port already in use"
→ Another app is using port 5173
→ Run: `npm run dev -- --port 3000`

### Installation taking too long
→ Check your internet connection
→ Try: `npm install --verbose` to see progress

### Installation errors
→ Delete `package-lock.json` and `node_modules` folder (if exists)
→ Run `npm install` again

---

## 📝 Next Steps After Installation

1. ✅ Make sure the site is running (`npm run dev`)
2. ✅ Open `src/data/personalData.js` and update your information
3. ✅ Replace sample projects and certificates with yours
4. ✅ Customize colors if desired
5. ✅ Build for production: `npm run build`
6. ✅ Deploy to Vercel or Netlify

---

## 📚 Need Help?

- Read **START_HERE.md** for quick start guide
- Read **SETUP_GUIDE.md** for detailed customization
- Read **PROJECT_SUMMARY.md** for complete overview
- Read **README.md** for full documentation

---

**Your portfolio is ready to go! Just install dependencies and start customizing! 🌟**
