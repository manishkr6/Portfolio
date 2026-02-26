import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiX, FiGithub, FiExternalLink, FiMaximize2 } from "react-icons/fi";
import { projectsData, projectCategories } from "../data/projectsData";

const Projects = () => {
  const navigate = useNavigate();

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

  const CategoryCard = ({ category }) => {
    // Generate route ID from category ID
    const routeId = category.id === "web" ? "web-development" : "ai-ml-data-science";
    
    return (
      <motion.div
        whileHover={{ y: -10 }}
        onClick={() => navigate(`/projects/${routeId}`)}
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

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <span className="text-sm text-primary-400 font-semibold uppercase tracking-widest">
              View All Projects
            </span>
            <div className="flex items-center gap-2 text-gray-400 group-hover:text-primary-400 transition-colors">
              <FiMaximize2 size={18} />
              <span className="text-sm font-medium">Explore</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      onClick={() => navigate(`/project/${project.id}`)}
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
    </section>
  );
};

export default Projects;
