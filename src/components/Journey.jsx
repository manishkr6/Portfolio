import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiCheckCircle, FiClock } from 'react-icons/fi';
import { journeyData } from '../data/journeyData';

const Journey = () => {
  const getIcon = (type) => {
    return type === 'education' ? FiBookOpen : FiBriefcase;
  };

  const getStatusIcon = (status) => {
    return status === 'completed' ? FiCheckCircle : FiClock;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="journey" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Education, internships, and professional experiences that shaped my career
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500 opacity-30" />

          {journeyData.map((item, index) => {
            const Icon = getIcon(item.type);
            const StatusIcon = getStatusIcon(item.status);
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary-500 ring-4 ring-dark-500 z-10 animate-pulse" />

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-xl p-6 hover-glow cursor-pointer group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                          <Icon className="text-primary-400" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-400">{item.organization}</p>
                        </div>
                      </div>
                    </div>

                    {/* Duration & Status */}
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <span className="text-primary-400 font-medium">{item.duration}</span>
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                        item.status === 'completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        <StatusIcon size={12} />
                        <span className="capitalize">{item.status}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{item.description}</p>

                    {/* Details */}
                    {item.details && (
                      <ul className="space-y-2 mb-4">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-primary-400 mt-1">▹</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-${tech.color}-500/20 text-${tech.color}-400 border border-${tech.color}-500/30`}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
