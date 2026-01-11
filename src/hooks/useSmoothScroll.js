import { useCallback } from "react";

const useSmoothScroll = () => {
  return useCallback((id) => {
    const headerHeight = document.querySelector("header")?.offsetHeight || 72;
    if (!id) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
      window.scrollTo({ top, left: 0, behavior: "smooth" });
    } else {
      // fallback to top if element not found
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);
};

export default useSmoothScroll;
