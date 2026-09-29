import { useRef } from 'react';
import { motion } from 'framer-motion';
import { GitFork, ExternalLink, ArrowRight } from 'lucide-react';

/**
 * ProjectCard — reusable card for AI/ML & Web projects
 * @param {object} project
 * @param {string} accentColor - CSS color string
 * @param {function} onClick
 */
const ProjectCard = ({ project, accentColor = '#06b6d4', onClick, index = 0 }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
    card.style.boxShadow = `0 20px 50px ${accentColor}30`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    card.style.boxShadow = '';
  };

  return (
    <motion.div
      ref={cardRef}
      className="glass rounded-xl overflow-hidden border border-dark-border group cursor-pointer transition-all duration-300"
      style={{ willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-80 group-hover:opacity-60 transition-opacity"
        />
        {/* Category badge */}
        <span
          className="absolute top-3 left-3 text-xs font-mono px-2 py-1 rounded-full"
          style={{ background: accentColor + '20', color: accentColor, border: `1px solid ${accentColor}40` }}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3
          className="text-base font-bold text-white group-hover:transition-colors line-clamp-1"
          style={{ '--hover-color': accentColor }}
        >
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.technologies?.slice(0, 4).map(tech => (
            <span
              key={tech.name}
              className="text-xs px-2 py-0.5 rounded-md font-mono"
              style={{
                background: accentColor + '10',
                color: accentColor,
                border: `1px solid ${accentColor}25`,
              }}
            >
              {tech.name}
            </span>
          ))}
          {project.technologies?.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md font-mono bg-dark-border/50 text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-2 pt-2 border-t border-dark-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <GitFork className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: accentColor }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          <button
            className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-400 transition-colors ml-auto"
            onClick={onClick}
          >
            Details <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
