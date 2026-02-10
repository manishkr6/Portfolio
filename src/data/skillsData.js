import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, 
  SiJavascript, SiHtml5, SiCss3, SiMysql, SiPostgresql,
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, 
  SiNumpy, SiJupyter, SiKeras,
  SiGit, SiGithub, SiVisualstudiocode, SiPostman, SiFigma,
  SiDocker, SiLinux, SiNpm
} from 'react-icons/si';

export const skillsData = [
  {
    id: 1,
    category: "Web Development",
    description: "Building modern, responsive, and scalable web applications",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ]
  },
  {
    id: 2,
    category: "AI/ML & Data Science",
    description: "Creating intelligent solutions with machine learning and data analysis",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
    ]
  },
  {
    id: 3,
    category: "Tools & Technologies",
    description: "Essential development tools and version control systems",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "NPM", icon: SiNpm, color: "#CB3837" },
    ]
  }
];
