import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { journeyData } from '../data/journeyData';

const ICON_MAP = {
  education: { icon: GraduationCap, color: 'text-ai-purple', bg: 'bg-ai-purple/10', border: 'border-ai-purple/30', dot: 'bg-ai-purple' },
  internship: { icon: Briefcase, color: 'text-ai-cyan', bg: 'bg-ai-cyan/10', border: 'border-ai-cyan/30', dot: 'bg-ai-cyan' },
  work: { icon: Briefcase, color: 'text-ai-emerald', bg: 'bg-ai-emerald/10', border: 'border-ai-emerald/30', dot: 'bg-ai-emerald' },
  certification: { icon: Award, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30', dot: 'bg-yellow-400' },
};

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  const style = ICON_MAP[item.type] || ICON_MAP.work;
  const Icon = style.icon;

  return (
    <div className="relative flex items-start gap-0">
      {/* Card — alternating sides on desktop */}
      <motion.div
        className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:ml-auto md:pl-8'} mb-12`}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className={`glass rounded-xl p-6 border ${style.border} hover:scale-[1.02] transition-transform duration-200`}>
          {/* Type badge + status */}
          <div className="flex items-center justify-between mb-3">
            <div className={`flex items-center gap-2 px-2 py-1 rounded-md ${style.bg} ${style.border} border`}>
              <Icon className={`w-3 h-3 ${style.color}`} />
              <span className={`text-xs font-mono capitalize ${style.color}`}>{item.type}</span>
            </div>
            {item.status && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                item.status === 'Ongoing'
                  ? 'bg-ai-emerald/10 text-ai-emerald border border-ai-emerald/20'
                  : 'bg-slate-700/50 text-slate-400 border border-slate-700'
              }`}>
                {item.status}
              </span>
            )}
          </div>

          <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
          <p className={`text-sm font-medium mb-1 ${style.color}`}>{item.organization}</p>
          <p className="text-xs text-slate-500 font-mono mb-3">{item.duration}</p>
          <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>

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
      </motion.div>

      {/* Center dot on timeline (desktop only) */}
      <motion.div
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full ${style.dot} border-2 border-dark-base z-10`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2 }}
        style={{ boxShadow: `0 0 12px currentColor` }}
      />
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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: 'Education', color: 'bg-ai-purple' },
            { label: 'Work / Internship', color: 'bg-ai-cyan' },
            { label: 'Full-time', color: 'bg-ai-emerald' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2 text-sm text-slate-400">
              <div className={`w-3 h-3 rounded-full ${l.color}`} />
              {l.label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-ai-cyan via-ai-purple to-ai-emerald"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ai-cyan to-ai-purple" />

          {/* Items */}
          <div className="relative pl-8 md:pl-0">
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
