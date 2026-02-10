# 🎯 Portfolio Setup Guide

This guide will help you customize and deploy your portfolio website.

## 📋 Prerequisites

Before you begin, make sure you have:
- Node.js (v18 or higher) installed
- npm or yarn package manager
- A code editor (VS Code recommended)
- Git (for version control and deployment)

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
cd portfolio-manish
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## ✏️ Customization Checklist

### 1. Personal Information (`src/data/personalData.js`)

Update the following:
- ✅ Name
- ✅ Title
- ✅ Description
- ✅ Email
- ✅ Phone
- ✅ Location
- ✅ Social media links (GitHub, LinkedIn, Twitter)
- ✅ Profile image URL
- ✅ Resume link

**Example:**
```javascript
export const personalData = {
  name: "Manish Kumar Baitha",
  title: "Full Stack Developer & AI/ML Enthusiast",
  email: "your.email@example.com",
  // ... update all fields
};
```

### 2. Journey/Timeline (`src/data/journeyData.js`)

Add your:
- ✅ Education (BCA, MCA)
- ✅ Internships and work experience
- ✅ Technologies used in each role
- ✅ Key accomplishments

**Tips:**
- Keep descriptions concise but informative
- Highlight your key achievements
- Use the `technologies` array to showcase tech stacks

### 3. Skills (`src/data/skillsData.js`)

Customize:
- ✅ Web Development skills
- ✅ AI/ML skills
- ✅ Tools & Technologies
- ✅ Skill descriptions

**Note:** The icons are from `react-icons`. You can find more at [react-icons.github.io](https://react-icons.github.io/react-icons/)

### 4. Certificates (`src/data/certificatesData.js`)

Add your certifications:
- ✅ Title
- ✅ Issuer
- ✅ Date
- ✅ Category (web-dev, ai-ml, data-science)
- ✅ Description
- ✅ Image URL
- ✅ Credential ID
- ✅ Skills covered

**Image Sources:**
- Use actual certificate images (screenshot and host them)
- Or use placeholder images from Unsplash
- Recommended size: 800x600px

### 5. Projects (`src/data/projectsData.js`)

Showcase your work:
- ✅ Web Development projects
- ✅ AI/ML projects
- ✅ Project images
- ✅ Descriptions (short and long)
- ✅ Technologies used
- ✅ GitHub and live demo links
- ✅ Key features

**Image Tips:**
- Use project screenshots
- Or create mockups at [mockup.io](https://mockup.io)
- Recommended size: 1200x800px

## 🎨 Styling Customization

### Change Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Change these values for different primary colors
    400: '#2dd4ca', // Light shade
    500: '#14b8ad', // Main color
  },
  // ... more color variants
}
```

**Popular Color Schemes:**
- **Cyan (Current):** Modern, tech-focused
- **Purple:** Creative, innovative
- **Blue:** Professional, trustworthy
- **Green:** Growth, eco-friendly
- **Orange:** Energetic, bold

### Change Fonts

Edit `tailwind.config.js`:

```javascript
fontFamily: {
  display: ['Your Display Font', 'system-ui', 'sans-serif'],
  body: ['Your Body Font', 'monospace'],
  sans: ['Your Sans Font', 'system-ui', 'sans-serif'],
}
```

Import new fonts in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

## 📸 Adding Images

### Option 1: Using External URLs (Easiest)
```javascript
image: "https://images.unsplash.com/photo-xxxxx"
```

### Option 2: Local Images
1. Add images to `public/images/` folder
2. Reference them:
```javascript
image: "/images/your-image.jpg"
```

### Option 3: Image Hosting Services
- [Cloudinary](https://cloudinary.com) (Free tier available)
- [Imgur](https://imgur.com)
- [GitHub](https://github.com) (Store in repository)

## 🔧 Environment Variables

Create `.env.local` file (optional):
```
VITE_EMAIL_SERVICE_URL=your_email_service_url
VITE_ANALYTICS_ID=your_analytics_id
```

Access in code:
```javascript
const serviceUrl = import.meta.env.VITE_EMAIL_SERVICE_URL;
```

## 🚢 Deployment

### Deploy to Vercel (Recommended - Free)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click Deploy
   - Done! Your site is live 🎉

### Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Your site is live!

### Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Select `gh-pages` branch
   - Save

## 📊 Add Analytics (Optional)

### Google Analytics
1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Performance Optimization

### Image Optimization
- Compress images with [tinypng.com](https://tinypng.com)
- Use WebP format when possible
- Lazy load images

### Code Optimization
- Remove unused dependencies
- Use dynamic imports for large components
- Enable gzip compression on hosting

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Check image URLs are correct
- Ensure CORS is enabled for external images
- Use HTTPS URLs, not HTTP

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite Documentation](https://vitejs.dev)

## 💡 Tips for Success

1. **Keep it Simple:** Don't overcomplicate the design
2. **Show Your Best Work:** Quality over quantity
3. **Regular Updates:** Keep your portfolio current
4. **Mobile First:** Test on mobile devices
5. **Fast Loading:** Optimize images and code
6. **Personal Touch:** Make it uniquely yours
7. **Proofread:** Check for typos and errors
8. **Test Everything:** Click all links and buttons
9. **Get Feedback:** Ask others to review it
10. **SEO Matters:** Use proper meta tags and descriptions

## 🆘 Need Help?

- Check the [README.md](README.md)
- Open an issue on GitHub
- Contact via email

---

**Happy Building! 🚀**
