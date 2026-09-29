import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="font-mono text-ai-cyan text-sm tracking-[0.3em] uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold glow-cyan">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div className="flex items-center gap-3 mt-2">
        <div className="h-px w-12 bg-ai-cyan opacity-60" />
        <div className="h-1 w-1 rounded-full bg-ai-cyan" />
        <div className="h-px w-24 bg-gradient-to-r from-ai-cyan to-ai-purple opacity-60" />
        <div className="h-1 w-1 rounded-full bg-ai-purple" />
        <div className="h-px w-12 bg-ai-purple opacity-60" />
      </div>
    </motion.div>
  );
};

export default SectionHeading;
