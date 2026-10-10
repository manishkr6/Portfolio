import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { journeyData } from '../data/journeyData';

const ICON_MAP = {
  education: {
    icon: GraduationCap,
    color: 'text-ai-purple',
    bg: 'bg-ai-purple/10',
    border: 'border-ai-purple/30',
    dot: 'bg-ai-purple',
    dotGlow: 'rgba(124, 58, 237, 0.6)',
    connectorBg: 'bg-gradient-to-r from-ai-purple/40 to-ai-purple',
    connectorBgRight: 'bg-gradient-to-r from-ai-purple to-ai-purple/40',
  },
  internship: {
    icon: Briefcase,
    color: 'text-ai-cyan',
    bg: 'bg-ai-cyan/10',
    border: 'border-ai-cyan/30',
    dot: 'bg-ai-cyan',
    dotGlow: 'rgba(6, 182, 212, 0.6)',
    connectorBg: 'bg-gradient-to-r from-ai-cyan/40 to-ai-cyan',
    connectorBgRight: 'bg-gradient-to-r from-ai-cyan to-ai-cyan/40',
  },
  work: {
    icon: Briefcase,
    color: 'text-ai-emerald',
    bg: 'bg-ai-emerald/10',
    border: 'border-ai-emerald/30',
    dot: 'bg-ai-emerald',
    dotGlow: 'rgba(16, 185, 129, 0.6)',
    connectorBg: 'bg-gradient-to-r from-ai-emerald/40 to-ai-emerald',
    connectorBgRight: 'bg-gradient-to-r from-ai-emerald to-ai-emerald/40',
  },
  certification: {
    icon: Award,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/30',
    dot: 'bg-yellow-400',
    dotGlow: 'rgba(250, 204, 21, 0.6)',
    connectorBg: 'bg-gradient-to-r from-yellow-400/40 to-yellow-400',
    connectorBgRight: 'bg-gradient-to-r from-yellow-400 to-yellow-400/40',
  },
};

const CardContent = ({ item, style, Icon }) => (
  <div className={`glass rounded-xl p-6 border ${style.border} hover:scale-[1.01] transition-transform duration-200 shadow-lg shadow-black/20`}>
    {/* Type badge + status */}
    <div className="flex items-center justify-between mb-3">
      <div className={`flex items-center gap-2 px-2.5 py-1 rounded-md ${style.bg} ${style.border} border`}>
        <Icon className={`w-3.5 h-3.5 ${style.color}`} />
        <span className={`text-xs font-mono capitalize ${style.color}`}>{item.type}</span>
      </div>
      {item.status && (
        <span
          className={`text-xs px-2.5 py-0.5 rounded-full capitalize font-medium ${
            item.status.toLowerCase() === 'ongoing'
              ? 'bg-ai-emerald/15 text-ai-emerald border border-ai-emerald/30'
              : 'bg-slate-800 text-slate-300 border border-slate-700'
          }`}
        >
          {item.status}
        </span>
      )}
    </div>

    <h3 className="text-base sm:text-lg font-bold text-white mb-1">{item.title}</h3>
    <p className={`text-sm font-medium mb-1 ${style.color}`}>{item.organization}</p>
    <p className="text-xs text-slate-400 font-mono mb-3">{item.duration}</p>
    <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>

    {/* Detail bullets if present */}
    {item.details && (
      <ul className="mt-3 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
        {item.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    )}

    {/* Tech tags if present */}
    {item.technologies && (
      <div className="flex flex-wrap gap-2 mt-4">
        {item.technologies.map(tech => (
          <span
            key={tech.name}
            className="text-xs px-2 py-0.5 rounded-md font-mono glass border border-dark-border text-slate-300"
          >
            {tech.name}
          </span>
        ))}
      </div>
    )}
  </div>
);

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  const style = ICON_MAP[item.type] || ICON_MAP.work;
  const Icon = style.icon;

  return (
    <div className="relative mb-14 last:mb-0">
      {/* DESKTOP LAYOUT (md and up) — symmetric 50/50 centered with smooth pacing */}
      <div className="hidden md:flex items-start">
        {/* Left Card Slot */}
        <div className={`w-[calc(50%-2.5rem)] ${isLeft ? 'block' : 'invisible pointer-events-none'}`}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: index * 0.22 + 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <CardContent item={item} style={style} Icon={Icon} />
            </motion.div>
          )}
        </div>

        {/* Center Node (w-20 = exactly 5rem wide: 2.5rem left + 2.5rem right) */}
        <div className="relative w-20 flex items-center justify-center flex-shrink-0 pt-[1.85rem]">
          {/* Left horizontal connector to card */}
          <motion.div
            className={`h-0.5 flex-1 ${
              isLeft ? style.connectorBg : 'bg-transparent'
            }`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.22 + 0.05, ease: 'easeOut' }}
            style={{ transformOrigin: 'right' }}
          />

          {/* Center glowing circle */}
          <motion.div
            className={`relative z-10 w-5 h-5 rounded-full ${style.dot} border-2 border-dark-base flex items-center justify-center flex-shrink-0`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.22, type: 'spring', stiffness: 180, damping: 14 }}
            style={{ boxShadow: `0 0 16px ${style.dotGlow}` }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </motion.div>

          {/* Right horizontal connector to card */}
          <motion.div
            className={`h-0.5 flex-1 ${
              !isLeft ? style.connectorBgRight : 'bg-transparent'
            }`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.22 + 0.05, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* Right Card Slot */}
        <div className={`w-[calc(50%-2.5rem)] ${!isLeft ? 'block' : 'invisible pointer-events-none'}`}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: index * 0.22 + 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <CardContent item={item} style={style} Icon={Icon} />
            </motion.div>
          )}
        </div>
      </div>

      {/* MOBILE LAYOUT (< md) — 100% centered node and card */}
      <div className="md:hidden relative flex flex-col items-center">
        {/* Center glowing circle */}
        <motion.div
          className={`relative z-10 w-9 h-9 rounded-full ${style.dot} border-2 border-dark-base flex items-center justify-center mb-3 flex-shrink-0`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: index * 0.18, type: 'spring', stiffness: 180, damping: 14 }}
          style={{ boxShadow: `0 0 16px ${style.dotGlow}` }}
        >
          <Icon className="w-4 h-4 text-white" />
        </motion.div>

        {/* Centered card */}
        <motion.div
          className="w-full relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: index * 0.18 + 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <CardContent item={item} style={style} Icon={Icon} />
        </motion.div>
      </div>
    </div>
  );
};

const Journey = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-purple/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="// timeline"
          title="My Journey"
          subtitle="Education, internships, and professional milestones that shaped my path."
        />

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {[
            { label: 'Education', color: 'bg-ai-purple' },
            { label: 'Work / Internship', color: 'bg-ai-cyan' },
            { label: 'Full-time', color: 'bg-ai-emerald' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2 text-sm text-slate-300">
              <div className={`w-3 h-3 rounded-full ${l.color} shadow-sm shadow-current`} />
              {l.label}
            </div>
          ))}
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line — graceful 2.2s reveal */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-0.5 bg-gradient-to-b from-ai-cyan via-ai-purple to-ai-emerald pointer-events-none"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Timeline Items */}
          <div className="relative w-full">
            {journeyData.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
