import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, GitFork, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const ProjectDetail = ({ type = 'ai' }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProjects = type === 'ai' ? projectsData.aiMl : projectsData.webDev;
  const project = allProjects?.find(p => String(p.id) === String(id));
  const accentColor = type === 'ai' ? '#06b6d4' : '#10b981';
  const backPath = type === 'ai' ? '/projects/ai' : '/projects/web';

  // Related projects (others from same list)
  const related = allProjects?.filter(p => String(p.id) !== String(id)).slice(0, 3) || [];

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-base flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 text-xl mb-4">Project not found</p>
          <button
            onClick={() => navigate(backPath)}
            className="text-ai-cyan hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-base pt-20">
      {/* Hero banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/70 to-dark-base/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <button
            onClick={() => navigate(backPath)}
            className="absolute top-6 left-6 flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-xs font-mono px-3 py-1 rounded-full mb-3 inline-block"
              style={{ background: accentColor + '20', color: accentColor, border: `1px solid ${accentColor}40` }}
            >
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{project.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT — image + extra info */}
          <motion.div
            className="md:col-span-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden border border-dark-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-dark-border glass text-slate-300 hover:border-ai-cyan/50 hover:text-white transition-all"
                >
                  <GitFork className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all"
                  style={{
                    background: accentColor,
                    color: '#030712',
                    boxShadow: `0 0 20px ${accentColor}40`,
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>

            {/* Tech stack */}
            <div className="glass rounded-xl p-5 border border-dark-border">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4" style={{ color: accentColor }} />
                <span className="text-sm font-semibold text-white">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map(tech => (
                  <span
                    key={tech.name}
                    className="text-xs px-2.5 py-1 rounded-lg font-mono"
                    style={{
                      background: accentColor + '15',
                      color: accentColor,
                      border: `1px solid ${accentColor}30`,
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — description + features */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-xl p-6 border border-dark-border">
              <h2 className="text-xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-slate-400 leading-relaxed text-sm">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key highlights / features */}
            {project.features && (
              <div className="glass rounded-xl p-6 border border-dark-border">
                <h2 className="text-xl font-bold text-white mb-4">Key Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.07 }}
                    >
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: accentColor }}
                      />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* AI badge for AI projects */}
            {type === 'ai' && (
              <div
                className="flex items-center gap-3 rounded-xl p-4 border"
                style={{ background: accentColor + '10', borderColor: accentColor + '30' }}
              >
                <span className="text-2xl">🤖</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: accentColor }}>
                    AI-Powered Project
                  </p>
                  <p className="text-xs text-slate-400">
                    Built with cutting-edge AI/ML technologies and intelligent systems.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              More <span style={{ color: accentColor }}>Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((proj, i) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  accentColor={accentColor}
                  index={i}
                  onClick={() => {
                    navigate(`/projects/${type}/${proj.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
