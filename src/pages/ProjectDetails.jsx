import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { projectsData } from "../data/projectsData";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project in both categories
  const allProjects = [...projectsData.webDev, ...projectsData.aiMl];
  const project = allProjects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-500 text-white pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-primary-500 rounded-lg text-dark-500 font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-dark-500 pt-24 pb-20 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/#projects")}
          className="flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 font-medium transition-colors"
        >
          <FiArrowLeft size={20} />
          Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Project Image */}
          <div className="relative h-64 md:h-[500px] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent" />
            <div className="absolute bottom-6 left-6 md:left-10">
              <span className="px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm text-primary-400 font-medium">
                {project.category}
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Features */}
            {project.features && (
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary-500 rounded-full" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-primary-500/30 transition-colors">
                      <span className="text-primary-400 mt-1 font-bold text-lg">▹</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary-500 rounded-full" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm md:text-base font-medium border ${getTechColor(tech.color)}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-4 glass-effect rounded-xl font-bold hover:border-primary-400 transition-all duration-300 flex items-center justify-center gap-3 text-white"
              >
                <FiGithub size={22} />
                View Source Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-4 bg-primary-500 text-dark-500 rounded-xl font-bold hover:bg-primary-400 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FiExternalLink size={22} />
                Live Application
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
