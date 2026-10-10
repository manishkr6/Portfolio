import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const targetId =
      location.state?.scrollTo ||
      (location.hash ? location.hash.replace('#', '') : null);

    if (location.pathname === '/') {
      if (targetId) {
        let attempts = 0;
        const maxAttempts = 35; // ~1.75s polling window for lazy imports and exit/enter page transitions

        const scrollToTarget = () => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return true;
          }
          return false;
        };

        if (!scrollToTarget()) {
          const interval = setInterval(() => {
            attempts++;
            if (scrollToTarget() || attempts >= maxAttempts) {
              clearInterval(interval);
            }
          }, 50);

          return () => clearInterval(interval);
        }
      } else {
        // Navigating to root without target section: scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      // Navigating to another page (e.g. project list or detail): scroll to top of that page
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash, location.state]);

  return null;
};

export default ScrollManager;
