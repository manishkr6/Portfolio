import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { personalData } from '../data/personalData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, url: personalData.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalData.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, url: personalData.twitter, label: 'Twitter' },
    { icon: FiMail, url: `mailto:${personalData.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative bg-dark-400/30 backdrop-blur-sm border-t border-primary-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">
              &lt;MKB /&gt;
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & AI/ML Enthusiast passionate about creating innovative solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href={`mailto:${personalData.email}`} className="hover:text-primary-400 transition-colors">
                  {personalData.email}
                </a>
              </li>
              <li>{personalData.phone}</li>
              <li>{personalData.location}</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Designed & Built with{' '}
              <FiHeart className="text-red-500 animate-pulse" size={16} />
              by {personalData.name.split(' ')[0]}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 text-dark-500 rounded-full flex items-center justify-center hover:bg-primary-400 transition-all duration-300 hover-glow z-40 group"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
