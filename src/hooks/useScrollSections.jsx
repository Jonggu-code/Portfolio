import { useState, useEffect } from "react";

export const useScrollSections = (sectionRefs) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // 화면 여유분
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.sectionId;
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sectionRefs.forEach((item) => {
      if (item.ref.current) {
        item.ref.current.dataset.sectionId = item.id;
        observer.observe(item.ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return { activeSection };
};
