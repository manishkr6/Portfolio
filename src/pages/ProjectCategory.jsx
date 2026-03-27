import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub, FiMaximize2 } from "react-icons/fi";
import { projectsData, projectCategories } from "../data/projectsData";

const ProjectCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (categoryId === "web-development") {
      setCategory(projectCategories.webDev);
      setProjects(projectsData.webDev);
    } else if (categoryId === "ai-ml-data-science") {
      setCategory(projectCategories.aiMl);
      setProjects(projectsData.aiMl);
    }
  }, [categoryId]);

  if (!category) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const getTechColor = (color) => {
    const colors = {
      cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      green: "bg-green-500/20 text-green-400 border-green-500/30",
      gray: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      indigo: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      red: "bg-red-500/20 text-red-400 border-red-500/30",
      teal: "bg-teal-500/20 text-teal-400 border-teal-500/30",
      black: "bg-gray-900/20 text-gray-300 border-gray-700/30",
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-dark-500">
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {category.title} <span className="text-primary-500">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl">
              {category.longDescription || category.description}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="glass-effect rounded-2xl overflow-hidden hover-glow cursor-pointer group"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/20 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-500/20 backdrop-blur-md text-primary-400 text-xs font-semibold border border-primary-500/30">
                    {project.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-lg text-xs font-medium border ${getTechColor(tech.color)}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-500/20 text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary-400 font-semibold group-hover:gap-3 transition-all">
                    View Details
                    <FiMaximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectCategory;
