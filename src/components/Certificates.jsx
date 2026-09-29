import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certificatesData, certificateCategories } from '../data/certificatesData';

const CertCard = ({ cert, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-64 cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setFlipped(v => !v)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden border border-dark-border glass"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-sm font-semibold line-clamp-2">{cert.title}</p>
            <p className="text-ai-cyan text-xs mt-1">{cert.issuer}</p>
          </div>
          <div className="absolute top-3 right-3 text-xs text-slate-400 bg-dark-base/70 px-2 py-0.5 rounded-full font-mono">
            click to flip
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-xl glass border border-ai-cyan/30 p-5 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-ai-cyan" />
              <span className="text-xs font-mono text-ai-cyan uppercase tracking-widest">Certificate</span>
            </div>
            <h3 className="text-sm font-bold text-white mb-2 leading-snug">{cert.title}</h3>
            <p className="text-xs text-slate-400 mb-2">{cert.description}</p>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="w-3 h-3" />
              {cert.date}
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1 mb-3">
            {cert.skills?.slice(0, 4).map(s => (
              <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-ai-cyan/10 text-ai-cyan border border-ai-cyan/20 font-mono">
                {s}
              </span>
            ))}
          </div>

          {cert.credentialId ? (
            <a
              href={`https://www.credly.com/badges/${cert.credentialId}`}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-ai-cyan hover:text-white transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              View Credential
            </a>
          ) : (
            <span className="text-xs text-slate-600 font-mono">Issued by {cert.issuer}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? certificatesData
    : certificatesData.filter(c => c.category === activeCategory);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-emerald/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="// achievements"
          title="Certificates"
          subtitle="Industry-recognized credentials across AI/ML, Data Science, and Web Development."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {certificateCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === cat.id
                  ? 'bg-ai-cyan text-dark-base font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'glass border border-dark-border text-slate-400 hover:border-ai-cyan/40 hover:text-white'
              }`}
            >
              {cat.name}
              <span className="ml-1.5 text-xs opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
