import { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * GlowCard — reusable 3D tilt card with glow on hover
 * @param {string} glowColor - 'cyan' | 'purple' | 'emerald'
 */
const GlowCard = ({ children, className = '', glowColor = 'cyan', onClick }) => {
  const cardRef = useRef(null);

  const glowMap = {
    cyan: 'rgba(6,182,212,0.4)',
    purple: 'rgba(124,58,237,0.4)',
    emerald: 'rgba(16,185,129,0.4)',
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -10;
    const rotY = ((x - cx) / cx) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
    card.style.boxShadow = `0 20px 60px ${glowMap[glowColor]}, 0 0 30px ${glowMap[glowColor]}`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    card.style.boxShadow = '';
  };

  return (
    <motion.div
      ref={cardRef}
      className={`card-3d transition-all duration-300 ease-out cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;
