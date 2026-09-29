import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Code2, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlowCard from './GlowCard';
import { projectsData } from '../data/projectsData';

const AI_TECHS = ['Python', 'TensorFlow', 'LangChain', 'Mistral AI', 'ChromaDB', 'Streamlit'];
const WEB_TECHS = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'Clerk Auth'];

const TechBadge = ({ name, color }) => (
  <span
    className="px-2 py-1 rounded-md text-xs font-mono border"
    style={{ borderColor: color + '40', color, backgroundColor: color + '15' }}
  >
    {name}
  </span>
);

const Projects = () => {
  const navigate = useNavigate();
  const aiCount = projectsData.aiMl?.length ?? 0;
  const webCount = projectsData.webDev?.length ?? 0;

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-cyan/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="// my work"
          title="Projects"
          subtitle="From intelligent AI systems to production web apps — built with purpose."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {/* AI/ML Card */}
          <GlowCard
            glowColor="cyan"
            onClick={() => navigate('/projects/ai')}
            className="gradient-border rounded-2xl glass p-8 flex flex-col gap-6 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-ai-cyan/10 border border-ai-cyan/20">
                <Brain className="w-8 h-8 text-ai-cyan" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-ai-cyan/10 text-ai-cyan border border-ai-cyan/20">
                {aiCount} Projects
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-ai-cyan transition-colors">
                AI & ML Projects
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Machine Learning · Deep Learning · NLP · LLMs · Data Science
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed">
              Intelligent systems built with cutting-edge AI — from multi-agent LLM pipelines 
              and RAG architectures to computer vision and predictive analytics.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {AI_TECHS.map(t => (
                <TechBadge key={t} name={t} color="#06b6d4" />
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-ai-cyan text-sm font-medium mt-auto group-hover:gap-4 transition-all">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ai-cyan via-ai-purple to-ai-cyan rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          </GlowCard>

          {/* Web Dev Card */}
          <GlowCard
            glowColor="emerald"
            onClick={() => navigate('/projects/web')}
            className="gradient-border-emerald rounded-2xl glass p-8 flex flex-col gap-6 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-ai-emerald/10 border border-ai-emerald/20">
                <Code2 className="w-8 h-8 text-ai-emerald" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-ai-emerald/10 text-ai-emerald border border-ai-emerald/20">
                {webCount} Projects
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-ai-emerald transition-colors">
                Web Development Projects
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                React · Node.js · Full Stack · UI/UX · APIs
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed">
              Scalable full-stack applications with modern UI — from government IT systems 
              to hotel booking platforms with real-time features and secure authentication.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {WEB_TECHS.map(t => (
                <TechBadge key={t} name={t} color="#10b981" />
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-ai-emerald text-sm font-medium mt-auto group-hover:gap-4 transition-all">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ai-emerald via-ai-cyan to-ai-emerald rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          </GlowCard>
        </div>

        {/* Featured project teaser */}
        <motion.div
          className="mt-8 glass rounded-xl p-5 border border-dark-border text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-400 text-sm">
            ✨ Featured: <span className="text-ai-cyan font-medium">MinuteCraftAI</span> — 
            AI Video & Audio Intelligence System with Whisper AI + Mistral + RAG + ChromaDB
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
