import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSmoothScroll from "../hooks/useSmoothScroll";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const smoothScroll = useSmoothScroll();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // small delay to allow DOM to settle after navigation
      setTimeout(() => smoothScroll(id), 50);
      return;
    }

    // default: scroll to top
    smoothScroll();
  }, [pathname, hash, smoothScroll]);

  return null;
};

export default ScrollToTop;
