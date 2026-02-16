import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import { projectsData, projectCategories } from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollRef = useRef(0);

  // Lock body scroll when any modal is open (prevents background scrolling)
  useEffect(() => {
    if (selectedCategory || selectedProject) {
      if (document.body.style.position !== "fixed") {
        scrollRef.current = window.scrollY;
      }
      
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";
    } else {
      // Restore scroll position
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      window.scrollTo(0, scrollRef.current);
    }
  }, [selectedCategory, selectedProject]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
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

  const CategoryCard = ({ category, projects }) => (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={() => setSelectedCategory(category)}
      className="glass-effect rounded-xl overflow-hidden hover-glow cursor-pointer group h-full"
    >
      {/* Category Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${category.color}/20 via-dark-500/50 to-transparent`}
        />
      </div>

      {/* Category Info */}
      <div className="p-8">
        <h3 className="text-3xl font-bold text-white group-hover:text-primary-400 transition-colors mb-3">
          {category.title}
        </h3>
        <p className="text-gray-400 mb-6 line-clamp-2">
          {category.description}
        </p>

        {/* Top Skills */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">
            Key Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {category.skills.slice(0, 6).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500/20 text-gray-300 border border-gray-600/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Project Count and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <span className="text-sm text-primary-400 font-semibold">
            {projects.length} Project{projects.length !== 1 ? "s" : ""}
          </span>
          <div className="flex items-center gap-2 text-gray-400 group-hover:text-primary-400 transition-colors">
            <FiExternalLink size={18} />
            <span className="text-sm font-medium">Explore</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const ProjectCard = ({ project, onClick }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="glass-effect rounded-xl overflow-hidden hover-glow cursor-pointer group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/50 to-transparent" />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-500/20 backdrop-blur-sm text-primary-400 text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-3 line-clamp-2 text-sm">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded-lg text-xs font-medium border ${getTechColor(tech.color)}`}
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 rounded-lg text-xs font-medium bg-gray-500/20 text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my work across web development and artificial intelligence
          </p>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <CategoryCard
            category={projectCategories.webDev}
            projects={projectsData.webDev}
          />
          <CategoryCard
            category={projectCategories.aiMl}
            projects={projectsData.aiMl}
          />
        </motion.div>
      </div>

      {/* Full Screen Category/Projects Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 z-50 bg-dark-500/80 backdrop-blur-md border-b border-gray-700/50">
              <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">
                    {selectedCategory.title} Projects
                  </h2>
                  <p className="text-gray-400 mt-1">
                    {selectedCategory.longDescription}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="w-12 h-12 rounded-full bg-dark-400/50 hover:bg-dark-400 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>

            {/* Projects List */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4 py-12">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {(selectedCategory.id === "web"
                    ? projectsData.webDev
                    : projectsData.aiMl
                  ).map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect rounded-2xl max-w-5xl w-full my-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-dark-400/50 hover:bg-dark-400 flex items-center justify-center text-gray-400 hover:text-white transition-all z-10"
              >
                <FiX size={24} />
              </button>

              {/* Project Image */}
              <div className="relative h-96 rounded-t-2xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm text-primary-400 font-medium">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <h2 className="text-4xl font-display font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                {selectedProject.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-primary-400 mt-1">▹</span>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${getTechColor(tech.color)}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-6 border-t border-gray-700">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 glass-effect rounded-lg font-semibold hover:border-primary-400 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiGithub size={20} />
                    View Code
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-primary-500 text-dark-500 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FiExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
