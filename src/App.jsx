import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const AIProjectsPage = lazy(() => import('./pages/AIProjectsPage'));
const WebProjectsPage = lazy(() => import('./pages/WebProjectsPage'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const Loader = () => (
  <div className="min-h-screen bg-dark-base flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-2 border-dark-border border-t-ai-cyan animate-spin" />
      <p className="text-slate-500 text-sm font-mono">Loading...</p>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Suspense fallback={<Loader />}><Home /></Suspense></PageTransition>} />
        <Route path="/projects/ai" element={<PageTransition><Suspense fallback={<Loader />}><AIProjectsPage /></Suspense></PageTransition>} />
        <Route path="/projects/web" element={<PageTransition><Suspense fallback={<Loader />}><WebProjectsPage /></Suspense></PageTransition>} />
        <Route path="/projects/ai/:id" element={<PageTransition><Suspense fallback={<Loader />}><ProjectDetail type="ai" /></Suspense></PageTransition>} />
        <Route path="/projects/web/:id" element={<PageTransition><Suspense fallback={<Loader />}><ProjectDetail type="web" /></Suspense></PageTransition>} />
        <Route path="*" element={
          <div className="min-h-screen bg-dark-base flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-mono font-bold text-ai-cyan mb-4">404</h1>
              <p className="text-slate-400 mb-8">Page not found</p>
              <a href="/" className="text-ai-cyan hover:underline">Back to Home</a>
            </div>
          </div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-base">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
