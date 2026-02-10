import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { personalData } from '../data/personalData';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, url: personalData.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalData.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, url: personalData.twitter, label: 'Twitter' },
    { icon: FiMail, url: `mailto:${personalData.email}`, label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-4">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient animate-gradient bg-gradient-to-r from-primary-400 via-purple-400 to-primary-500">
                {personalData.name}
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 font-medium"
            >
              {personalData.title}
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {personalData.description}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 text-gray-400"
            >
              <HiLocationMarker className="text-primary-400" size={20} />
              <span>{personalData.location}</span>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href={personalData.resume}
                className="px-6 py-3 bg-primary-500 text-dark-500 rounded-lg font-semibold hover:bg-primary-400 transition-all duration-300 flex items-center gap-2 hover-glow group"
              >
                <FiDownload className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 glass-effect rounded-lg font-semibold hover:border-primary-400 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400 transition-all duration-300 hover-glow"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative glass-effect rounded-full p-2 animate-float">
                <div className="relative rounded-full overflow-hidden aspect-square">
                  <img
                    src={personalData.profileImage}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/50 to-transparent" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-primary-500 rounded-full opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-purple-500 rounded-full opacity-20" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
