import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Cpu, Network } from 'lucide-react';

const InitialLoader = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "INITIALIZING NEURAL NETWORKS...",
    "LOADING MACHINE LEARNING MODELS...",
    "ESTABLISHING SECURE CONNECTION...",
    "BOOTING UP AI PORTFOLIO...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 400); // Change text every 400ms
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center justify-center relative">
        {/* Animated AI Core */}
        <div className="relative flex items-center justify-center mb-16 w-32 h-32">
          {/* Outer rotating dashed ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-ai-cyan/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner rotating solid ring */}
          <motion.div
            className="absolute inset-2 rounded-full border border-ai-purple/50 border-t-ai-cyan"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Core pulsing glow */}
          <motion.div
            className="absolute inset-4 rounded-full bg-ai-cyan/20 blur-xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central Icon */}
          <motion.div
            className="relative z-10 text-ai-cyan"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrainCircuit size={40} className="drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
          </motion.div>
          
          {/* Floating nodes */}
          {[Cpu, Network].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-ai-purple/70"
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                x: index === 0 ? [0, -50, -60] : [0, 50, 60],
                y: index === 0 ? [0, -30, -40] : [0, 30, 40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 1,
                ease: "easeOut"
              }}
            >
              <Icon size={20} />
            </motion.div>
          ))}
        </div>
        
        {/* Loading bar container */}
        <div className="w-72 h-1 bg-dark-border rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(6,182,212,0.1)]">
          {/* Progress bar */}
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-ai-cyan shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
          />
        </div>
        
        {/* Dynamic Loading Text */}
        <div className="mt-8 h-4 overflow-hidden relative w-72 text-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 font-mono text-[10px] sm:text-xs text-ai-cyan tracking-[0.2em] uppercase"
            >
              {loadingTexts[textIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default InitialLoader;
