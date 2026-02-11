import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';

const Skills = () => {
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-10 sm:top-20 right-6 sm:right-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3.5xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-3 sm:mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-effect rounded-2xl p-5 sm:p-6 lg:p-8 hover-glow group h-full"
            >
              {/* Category Header */}
              <div className="mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                  {category.category}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">{category.description}</p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.04 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-dark-400/30 hover:bg-dark-400/50 transition-all duration-300 cursor-pointer group/skill"
                  >
                    <div
                      className="text-3xl sm:text-4xl transition-transform duration-300 group-hover/skill:scale-110"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </div>
                    <span className="text-xs sm:text-sm text-center text-gray-400 group-hover/skill:text-gray-200 transition-colors font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {[
            { label: 'Total Skills', value: skillsData.reduce((acc, cat) => acc + cat.skills.length, 0) },
            { label: 'Categories', value: skillsData.length },
            { label: 'Years Learning', value: '3+' },
            { label: 'Projects Built', value: '15+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-4 sm:p-6 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;