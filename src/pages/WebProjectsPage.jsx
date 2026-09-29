import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Code2, Filter } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'API Integration'];

const WebProjectsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const projects = projectsData.webDev || [];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-dark-base grid-bg pt-20">
      {/* Page header */}
      <div className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-ai-emerald/10 via-transparent to-ai-cyan/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-ai-emerald/10 border border-ai-emerald/30">
              <Code2 className="w-8 h-8 text-ai-emerald" />
            </div>
            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold"
                style={{ textShadow: '0 0 20px rgba(16,185,129,0.6)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Web Development Projects
              </motion.h1>
              <motion.p
                className="text-slate-400 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                React · Node.js · Full Stack · UI/UX · APIs
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-slate-500" />
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                filter === cat
                  ? 'bg-ai-emerald text-dark-base font-semibold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'glass border border-dark-border text-slate-400 hover:border-ai-emerald/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                accentColor="#10b981"
                index={i}
                onClick={() => navigate(`/projects/web/${project.id}`)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebProjectsPage;
