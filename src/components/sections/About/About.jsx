import { useContext, useRef } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import useScrollPosition from "../../../hooks/useScrollPosition";
import Education from "./Education";
import Question from "./Question";

const About = () => {
  const { isDark } = useContext(DarkModeContext);
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef);

  // 스크롤 이벤트 리스너 등록

  return (
    <div
      ref={aboutRef}
      className={`relative w-svw p-6 h-max flex justify-center
        ${isDark ? "bg-customDark text-white" : "bg-blue-100 text-basicFont"}
        
        `}
    >
      {/* title */}
      <h1
        className={`absolute top-6 left-6 sm:top-10 sm:left-10 opacity-0 text-2xl sm:text-4xl w-full font-bold ${isScrolled ? "animate-textIn" : ""}`}
        style={{ animationDelay: `100ms` }}
      >
        About Me
      </h1>

      <div className="max-w-[1000px] mt-16 sm:mt-20">
        {/* Education */}
        <Education isDark={isDark} isScrolled={isScrolled} />

        {/* Question */}
        <Question isDark={isDark} isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default About;
