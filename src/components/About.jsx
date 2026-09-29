import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, MapPin, Mail, Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalData } from '../data/personalData';

const STATS = [
  { label: 'Projects Built', value: 7, suffix: '+' },
  { label: 'Internship', value: 1, suffix: '' },
  { label: 'Certifications', value: 6, suffix: '+' },
  { label: 'GitHub Repos', value: 10, suffix: '+' },
];

const WHAT_I_BRING = [
  'End-to-end ML pipeline development',
  'LLM & RAG-based intelligent systems',
  'Full-stack MERN web applications',
  'Data analysis and visualization',
  'Multi-agent AI architectures',
  'Clean, production-ready code',
];

const Counter = ({ value, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="// about me"
          title="Who Am I?"
          subtitle="Crafting intelligent systems at the intersection of AI, data, and the web."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* LEFT — Avatar card + stats */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Profile card */}
            <div className="glass rounded-2xl p-6 gradient-border flex flex-col items-center gap-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-ai-cyan/40">
                <img
                  src={personalData.profileImage2 || personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">{personalData.name}</h3>
                <p className="text-ai-cyan text-sm font-mono mt-1">{personalData.title}</p>
              </div>
              <div className="flex flex-col gap-2 w-full text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-ai-cyan flex-shrink-0" />
                  {personalData.location}
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-ai-cyan flex-shrink-0" />
                  {personalData.email}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-ai-purple flex-shrink-0" />
                  Open to Internships & Jobs
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(stat => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 border border-dark-border text-center hover:border-ai-cyan/40 transition-colors"
                >
                  <div className="text-3xl font-bold text-ai-cyan font-mono">
                    <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Bio + what I bring */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 border border-dark-border">
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate about <span className="text-ai-cyan">AI</span> & <span className="text-ai-purple">Data</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm an MCA student specializing in AI & Data Science at ICFAI University Sikkim, 
                with hands-on experience building real-world intelligent systems. From multi-agent 
                LLM pipelines to full-stack MERN applications, I bridge the gap between cutting-edge 
                AI research and practical software engineering.
              </p>
              <p className="text-slate-400 leading-relaxed">
                My internship with the Government of Sikkim IT Department gave me exposure to 
                enterprise-grade systems. I'm driven by the challenge of turning complex data into 
                actionable insights and intelligent products that make a real difference.
              </p>
            </div>

            {/* What I bring */}
            <div className="glass rounded-2xl p-6 border border-dark-border">
              <h4 className="text-lg font-semibold text-white mb-4 font-mono">
                <span className="text-ai-cyan">&gt;</span> What I Bring
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {WHAT_I_BRING.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-ai-cyan flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
