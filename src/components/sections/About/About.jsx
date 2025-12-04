import { useContext, useRef } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import useScrollPosition from "../../../hooks/useScrollPosition";
import Education from "./Education";
import Question from "./Question";
import commonStyle from "../../styles/commonStyle";

const About = () => {
  const { isDark } = useContext(DarkModeContext);
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef);

  // 스크롤 이벤트 리스너 등록

  return (
    <div ref={aboutRef} className={commonStyle.wrapper(isDark, 100)}>
      <div className={commonStyle.subWrapper}>
        <h1
          className={commonStyle.mainTitle(isScrolled)}
          style={{ animationDelay: `100ms` }}
        >
          About Me
        </h1>
        {/* Education */}
        <Education isDark={isDark} isScrolled={isScrolled} />

        {/* Question */}
        <Question isDark={isDark} isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default About;
