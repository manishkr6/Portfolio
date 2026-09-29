import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, GitFork, Link, Share2, Send, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalData } from '../data/personalData';

const SOCIALS = [
  { icon: GitFork, label: 'GitHub', href: personalData.github, color: '#aaaaaa' },
  { icon: Link, label: 'LinkedIn', href: personalData.linkedin, color: '#0ea5e9' },
  { icon: Share2, label: 'Instagram', href: personalData.instagram, color: '#ec4899' },
  { icon: Mail, label: 'Email', href: `mailto:${personalData.email}`, color: '#06b6d4' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Web3Forms integration
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Replace with actual key
          ...form,
          to_email: personalData.email,
        }),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${personalData.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.message)}`;
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-cyan/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="// get in touch"
          title="Contact Me"
          subtitle="Open to internships, collaborations, and exciting AI/ML projects."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT — contact info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 border border-dark-border">
              <h3 className="text-xl font-bold text-white mb-6">Let's Build Something Together</h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-ai-cyan/10 border border-ai-cyan/20">
                    <Mail className="w-5 h-5 text-ai-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Email</p>
                    <a href={`mailto:${personalData.email}`} className="text-slate-300 hover:text-ai-cyan transition-colors text-sm">
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-ai-purple/10 border border-ai-purple/20">
                    <MapPin className="w-5 h-5 text-ai-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Location</p>
                    <p className="text-slate-300 text-sm">{personalData.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8">
                <p className="text-xs text-slate-500 font-mono mb-4 tracking-widest">FIND ME ON</p>
                <div className="flex gap-4">
                  {SOCIALS.map(social => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        title={social.label}
                        className="p-3 rounded-xl glass border border-dark-border hover:border-ai-cyan/40 transition-all duration-200"
                        style={{ '--hover-color': social.color }}
                      >
                        <Icon
                          className="w-5 h-5 text-slate-400 hover:text-white transition-colors"
                          style={{ color: 'inherit' }}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-xl p-5 border border-ai-emerald/30 bg-ai-emerald/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-ai-emerald animate-pulse" />
                <div>
                  <p className="text-ai-emerald text-sm font-medium">Available for Opportunities</p>
                  <p className="text-slate-400 text-xs mt-0.5">Internships · Freelance · Full-time</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 border border-dark-border">
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring' }}
                  >
                    <CheckCircle className="w-16 h-16 text-ai-emerald" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-center">I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-ai-cyan text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-500 mb-1.5 block">Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-dark-base/50 border border-dark-border rounded-lg px-4 py-3 text-sm text-slate-300
                                   placeholder-slate-600 focus:outline-none focus:border-ai-cyan/60 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]
                                   transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-500 mb-1.5 block">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-dark-base/50 border border-dark-border rounded-lg px-4 py-3 text-sm text-slate-300
                                   placeholder-slate-600 focus:outline-none focus:border-ai-cyan/60 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]
                                   transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-500 mb-1.5 block">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full bg-dark-base/50 border border-dark-border rounded-lg px-4 py-3 text-sm text-slate-300
                                 placeholder-slate-600 focus:outline-none focus:border-ai-cyan/60 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]
                                 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-500 mb-1.5 block">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-dark-base/50 border border-dark-border rounded-lg px-4 py-3 text-sm text-slate-300
                                 placeholder-slate-600 focus:outline-none focus:border-ai-cyan/60 focus:shadow-[0_0_10px_rgba(6,182,212,0.2)]
                                 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-ai-cyan text-dark-base font-semibold
                               hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200
                               shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)]"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-dark-base/30 border-t-dark-base rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
