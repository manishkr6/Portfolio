import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiJavascript, 
  SiHtml5, SiCss, SiMysql, SiPostgresql, SiPython, SiTensorflow, SiPytorch, 
  SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiKeras, SiDocker, SiLinux, 
  SiPostman, SiStreamlit, SiMistralai, SiLangchain 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';

export const skillsData = [
  {
    id: 1,
    category: "Web Development",
    description: "Building modern, responsive, and scalable web applications",
    skills: [
      { name: "React.js", color: "#61DAFB", icon: SiReact },
      { name: "Node.js", color: "#339933", icon: SiNodedotjs },
      { name: "Express.js", color: "#888888", icon: SiExpress },
      { name: "MongoDB", color: "#47A248", icon: SiMongodb },
      { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
      { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
      { name: "HTML5", color: "#E34F26", icon: SiHtml5 },
      { name: "CSS3", color: "#1572B6", icon: SiCss },
      { name: "MySQL", color: "#4479A1", icon: SiMysql },
      { name: "PostgreSQL", color: "#4169E1", icon: SiPostgresql },
    ]
  },
  {
    id: 2,
    category: "AI/ML & Data Science",
    description: "Creating intelligent solutions with machine learning and data analysis",
    skills: [
      { name: "Python", color: "#3776AB", icon: SiPython },
      { name: "TensorFlow", color: "#FF6F00", icon: SiTensorflow },
      { name: "PyTorch", color: "#EE4C2C", icon: SiPytorch },
      { name: "Scikit-learn", color: "#F7931E", icon: SiScikitlearn },
      { name: "Pandas", color: "#150458", icon: SiPandas },
      { name: "NumPy", color: "#4DABCF", icon: SiNumpy },
      { name: "Jupyter", color: "#F37626", icon: SiJupyter },
      { name: "Keras", color: "#D00000", icon: SiKeras },
      { name: "LangChain", color: "#22d3ee", icon: SiLangchain },
      { name: "Mistral AI", color: "#a78bfa", icon: SiMistralai },
    ]
  },
  {
    id: 3,
    category: "Tools & Technologies",
    description: "Essential development tools and version control systems",
    skills: [
      { name: "Git", color: "#F05032", icon: FaGitAlt },
      { name: "GitHub", color: "#aaaaaa", icon: FaGithub },
      { name: "VS Code", color: "#007ACC", icon: VscVscode },
      { name: "Docker", color: "#2496ED", icon: SiDocker },
      { name: "Linux", color: "#FCC624", icon: SiLinux },
      { name: "Postman", color: "#FF6C37", icon: SiPostman },
      { name: "Streamlit", color: "#FF4B4B", icon: SiStreamlit },
      { name: "ChromaDB", color: "#10b981", icon: FaDatabase },
    ]
  }
];
