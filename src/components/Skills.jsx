import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillsData } from '../data/skillsData';

const TABS = [
  { id: 'all', label: 'All Skills' },
  { id: 'Web Development', label: 'Web Dev' },
  { id: 'AI/ML & Data Science', label: 'AI / ML' },
  { id: 'Tools & Technologies', label: 'Tools' },
];

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.div
      className="group glass border border-dark-border rounded-xl p-4 flex flex-col items-center gap-2
                 hover:border-ai-cyan/50 hover:bg-ai-cyan/5 transition-all duration-200 cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 0 20px rgba(6,182,212,0.3)`,
        y: -4,
      }}
    >
      <div
        className="text-2xl"
        style={{ filter: `drop-shadow(0 0 6px ${skill.color})` }}
      >
        {skill.icon}
      </div>
      <span
        className="text-xs font-medium text-center text-slate-300 group-hover:text-white transition-colors"
      >
        {skill.name}
      </span>
      {/* Color dot indicator */}
      <div
        className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: skill.color }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-purple/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="// tech stack"
          title="Skills & Technologies"
          subtitle="The tools I use to build intelligent systems and scalable applications."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-ai-cyan text-dark-base shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'glass border border-dark-border text-slate-400 hover:text-white hover:border-ai-cyan/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-10"
          >
            {filteredCategories.map(category => (
              <div key={category.id}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-ai-cyan text-xs tracking-widest uppercase">
                    {category.category}
                  </span>
                  <div className="flex-1 h-px bg-dark-border" />
                  <span className="text-slate-600 text-xs">{category.skills.length} skills</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3">
                  {category.skills.map((skill, i) => (
                    <SkillBadge key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
