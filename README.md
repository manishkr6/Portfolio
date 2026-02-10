# 🚀 Manish Kumar Baitha - Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Tailwind CSS featuring a stunning dark cyberpunk aesthetic.

## ✨ Features

- **Responsive Design** - Fully responsive across all devices
- **Modern UI/UX** - Dark theme with cyberpunk-inspired design
- **Interactive Animations** - Smooth animations using Framer Motion
- **Active Navigation** - Navbar with active section highlighting
- **Dynamic Sections**:
  - Hero/About section with profile photo
  - Journey timeline with education and internships
  - Skills showcase with categorized technologies
  - Certificates gallery with modal view and filtering
  - Projects portfolio with detailed modals
  - Contact form with social links
- **Optimized Performance** - Fast loading with Vite
- **SEO Ready** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd portfolio-manish
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
portfolio-manish/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with active effects
│   │   ├── Hero.jsx             # Hero section with about info
│   │   ├── Journey.jsx          # Timeline of education & internships
│   │   ├── Skills.jsx           # Skills categorized display
│   │   ├── Certificates.jsx     # Certificates with modal & filtering
│   │   ├── Projects.jsx         # Projects showcase with modals
│   │   ├── Contact.jsx          # Contact form and info
│   │   └── Footer.jsx           # Footer with links
│   ├── data/
│   │   ├── personalData.js      # Personal information
│   │   ├── journeyData.js       # Education & internship data
│   │   ├── skillsData.js        # Skills and technologies
│   │   ├── certificatesData.js  # Certificates information
│   │   └── projectsData.js      # Projects portfolio data
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### 1. Update Personal Information
Edit `src/data/personalData.js`:
```javascript
export const personalData = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your.email@example.com",
  // ... more fields
};
```

### 2. Add Your Journey
Edit `src/data/journeyData.js` to add your education and internship experiences.

### 3. Update Skills
Modify `src/data/skillsData.js` to showcase your skills and technologies.

### 4. Add Certificates
Update `src/data/certificatesData.js` with your certifications.

### 5. Showcase Projects
Edit `src/data/projectsData.js` to add your projects.

### 6. Change Colors
Modify `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... }, // Your primary color
      dark: { ... },    // Your dark theme colors
    }
  }
}
```

## 🖼️ Adding Images

1. **Profile Photo**: Replace the URL in `personalData.js`
2. **Project Images**: Update image URLs in `projectsData.js`
3. **Certificate Images**: Update image URLs in `certificatesData.js`

You can use:
- Local images in the `public` folder
- External URLs (Unsplash, your own hosting)
- Base64 encoded images

## 📱 Sections Overview

### Hero/About
- Profile photo with animated effects
- Personal introduction
- Download resume button
- Social media links

### Journey
- Timeline layout
- Education history
- Internship experiences with detailed descriptions
- Technology tags for each experience

### Skills
- Three categorized sections (Web Dev, AI/ML, Tools)
- Icon and name for each skill
- Hover animations
- Statistics display

### Certificates
- Initial display of 3 certificates
- Modal view for detailed information
- Category filtering
- "View All" functionality

### Projects
- Separate sections for Web Dev and AI/ML projects
- Project cards with images and tech stacks
- Detailed modal views
- Links to GitHub and live demos

### Contact
- Contact information display
- Working contact form
- Social media links
- Availability status

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### GitHub Pages
1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🎯 Performance Tips

- Images are lazy-loaded
- Animations use CSS when possible
- Code splitting with React.lazy (can be added)
- Optimized bundle size with Vite

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- Email: manish.baitha@example.com
- GitHub: [@manishbaitha](https://github.com/manishbaitha)
- LinkedIn: [manishbaitha](https://linkedin.com/in/manishbaitha)

---

**Made with ❤️ by Manish Kumar Baitha**
