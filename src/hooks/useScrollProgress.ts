import { useState, useEffect } from "react";

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(Math.max(value, 0), 1));
    };

    const listener = () => window.requestAnimationFrame(updateProgress);

    window.addEventListener("scroll", listener, { passive: true });
    updateProgress(); 

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return progress;
}
