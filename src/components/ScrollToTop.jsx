import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    } else {
      // If there's a hash, let the browser handle it, or force scroll after a tiny delay
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 10);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
