import { GitFork, Link, Share2, Terminal } from 'lucide-react';
import { personalData } from '../data/personalData';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-dark-border">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ai-cyan to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-ai-cyan" />
            <span className="font-mono text-lg font-semibold text-white">
              manish<span className="text-ai-cyan">.dev</span>
            </span>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {['about', 'skills', 'projects', 'journey', 'certificates', 'contact'].map(s => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="hover:text-ai-cyan transition-colors capitalize"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href={personalData.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <GitFork className="w-5 h-5" />
            </a>
            <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-ai-cyan transition-colors">
              <Link className="w-5 h-5" />
            </a>
            <a href={personalData.instagram} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-pink-400 transition-colors">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-border text-center text-sm text-slate-600">
          <p>
            Built with{' '}
            <span className="text-ai-cyan">React + Vite</span> by{' '}
            <span className="text-white font-medium">Manish Kumar Baitha</span>
            {' '}·{' '}
            <span className="font-mono text-xs">© {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
