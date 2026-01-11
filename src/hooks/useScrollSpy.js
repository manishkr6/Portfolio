import { useEffect, useState } from "react";

const useScrollSpy = (ids = [], options = { threshold: 0.6 }) => {
  const [activeId, setActiveId] = useState(ids[0] || "");

  useEffect(() => {
    if (!ids || ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, threshold: options.threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids.join(","), options.threshold]);

  return activeId;
};

export default useScrollSpy;
