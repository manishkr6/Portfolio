import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, GitFork, Link, Download, ExternalLink } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { personalData } from '../data/personalData';

const TECH_BADGES = ['Python', 'PyTorch', 'LangChain', 'React', 'FastAPI', 'ChromaDB'];

// Orbit positions for tech badges around the avatar
const ORBITS = [
  { angle: 0,   delay: 0 },
  { angle: 60,  delay: 0.5 },
  { angle: 120, delay: 1 },
  { angle: 180, delay: 1.5 },
  { angle: 240, delay: 2 },
  { angle: 300, delay: 2.5 },
];

const OrbitBadge = ({ label, angle, delay }) => {
  const rad = (angle * Math.PI) / 180;
  const r = 110;
  const x = Math.cos(rad) * r;
  const y = Math.sin(rad) * r;

  return (
    <motion.div
      className="absolute text-xs font-mono px-2 py-1 rounded-full glass border border-ai-cyan/30 text-ai-cyan whitespace-nowrap"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%,-50%)',
      }}
      animate={{
        y: [y, y - 6, y],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 3 + delay * 0.3,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {label}
    </motion.div>
  );
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/10 via-transparent to-ai-cyan/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — text content */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting */}
            <motion.div
              className="flex items-center gap-2 font-mono text-ai-cyan text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block w-8 h-px bg-ai-cyan" />
              <span>Hello, World! 👋</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="text-white">I'm </span>
              <span className="glow-cyan text-ai-cyan">Manish</span>
              <br />
              <span className="text-white">Kumar Baitha</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="text-xl sm:text-2xl font-semibold text-slate-300 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'AI/ML Engineer', 2000,
                  'Data Scientist', 2000,
                  'LLM App Developer', 2000,
                  'Full-Stack Developer', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-ai-purple"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {personalData.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-ai-cyan text-dark-base font-semibold
                           hover:bg-cyan-400 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.4)]
                           hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
              >
                <ExternalLink className="w-4 h-4" />
                View My Projects
              </button>
              <a
                href={personalData.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-ai-cyan/60 text-ai-cyan font-semibold
                           hover:border-ai-cyan hover:bg-ai-cyan/10 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              className="flex gap-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <GitFork className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-ai-cyan transition-colors"
              >
                <Link className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — avatar with orbiting badges */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            {/* Outer glow ring */}
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Rotating gradient ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #06b6d4, #7c3aed, #10b981, #06b6d4)',
                  padding: '3px',
                }}
              >
                <div className="w-full h-full rounded-full bg-dark-base" />
              </div>

              {/* Avatar */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-dark-card">
                <img
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Pulse rings */}
              {[1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-ai-cyan/20"
                  animate={{ scale: [1, 1.2 + i * 0.1], opacity: [0.3, 0] }}
                  transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                />
              ))}

              {/* Orbiting tech badges */}
              {TECH_BADGES.map((badge, i) => (
                <OrbitBadge
                  key={badge}
                  label={badge}
                  angle={ORBITS[i].angle}
                  delay={ORBITS[i].delay}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
