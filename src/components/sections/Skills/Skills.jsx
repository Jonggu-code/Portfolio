import { useContext, useRef } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import useScrollPosition from "../../../hooks/useScrollPosition";
import commonStyle from "../../styles/commonStyle";
import Core from "./items/Core";
import Backend from "./items/Backend";
import Tool from "./items/Tool";

const Skills = () => {
  const { isDark } = useContext(DarkModeContext);
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef);
  return (
    <div ref={aboutRef} className={commonStyle.wrapper(isDark, 200)}>
      {/* Skills 메인 박스 */}
      <div className={commonStyle.subWrapper}>
        <h1
          className={commonStyle.mainTitle(isScrolled)}
          style={{ animationDelay: `100ms` }}
        >
          Skills
        </h1>
        {/* Core Skills 박스 */}
        <Core isDark={isDark} isScrolled={isScrolled} />
        {/* Back End 박스 */}
        <Backend isDark={isDark} isScrolled={isScrolled} />
        {/* tools 박스 */}
        <Tool isDark={isDark} isScrolled={isScrolled} />
      </div>
    </div>
  );
};

export default Skills;
