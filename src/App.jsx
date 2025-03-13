import "./App.css";

import About from "./components/About";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { useEffect, useRef } from "react";
import { DarkModeProvider } from "./util/DarkModeContext";
import { useScrollSections } from "./hooks/useScrollSections";
import { scrollToSection } from "./util/scrollToSection";

function App() {
  const introduceRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { id: "introduce", ref: introduceRef },
    { id: "about", ref: aboutRef },
    { id: "skills", ref: skillsRef },
    { id: "projects", ref: projectsRef },
    { id: "contact", ref: contactRef },
  ];

  const activeSection = useScrollSections(sectionRefs);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Intro 페이지 모두 로드되기 전에 스크롤 방지

    window.scrollTo(0, 0); // 페이지 로드 시 스크롤을 맨 위로 이동
    window.history.scrollRestoration = "manual"; // 세션 스크롤 복원 방지

    const scrollOn = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 6000);

    return () => {
      clearTimeout(scrollOn);
    };
  }, []);

  return (
    <DarkModeProvider>
      <div className="App">
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
        />
        <div ref={introduceRef}>
          <Introduce />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;
