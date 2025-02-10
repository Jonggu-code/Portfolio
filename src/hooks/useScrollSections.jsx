import { useState, useEffect } from "react";

export const useScrollSections = (sectionRefs) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sectionPositions = sectionRefs.map((ref, index) => ({
        id: ref.id,
        offset: ref.ref.current.offsetTop - 70,
      }));

      const currentSection = sectionPositions.find((section, index) => {
        const nextSection = sectionPositions[index + 1];
        if (nextSection) {
          return (
            scrollPosition >= section.offset &&
            scrollPosition < nextSection.offset
          );
        } else {
          return scrollPosition >= section.offset;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return activeSection;
};
