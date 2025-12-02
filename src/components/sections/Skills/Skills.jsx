import { useContext, useRef } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import useScrollPosition from "../../../hooks/useScrollPosition";
import Core from "./Core";

const Skills = () => {
  const { isDark } = useContext(DarkModeContext);
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef);
  return (
    <div
      ref={aboutRef}
      className={`relative w-svw p-10 h-max flex justify-center ${isDark ? "bg-customDark text-white" : "bg-blue-200 text-basicFont"}`}
    >
      {/* 메인 title */}
      <h1
        className={`absolute top-6 left-6 sm:top-10 sm:left-10 opacity-0 text-2xl sm:text-4xl w-full font-bold ${isScrolled ? "animate-textIn" : ""}`}
        style={{ animationDelay: `100ms` }}
      >
        Skills
      </h1>

      {/* Skills 메인 박스 */}
      <div
        className={`w-svw max-w-[1000px] h-max mt-10 sm:mt-20 px-5 ${isDark ? "text-white" : "text-basicFont"}`}
      >
        {/* Core Skills 박스 */}
        <Core isDark={isDark} isScrolled={isScrolled} />
        {/* Back End 박스 */}
        <div
          className={`skillsItemBox opacity-0 w-full h-max pb-10 ${isScrolled ? "animate-skillsIn" : ""}`}
          style={{ animationDelay: "500ms" }}
        >
          <h1 className="w-full text-[20px] text-center font-bold pb-7">
            Backend (DB)
          </h1>
          <ul className="iconBox flex gap-5 justify-center pb-5">
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/mysql.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                MySQL
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/mariadb.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                MariaDB
              </span>
            </li>
          </ul>
        </div>
        {/* tools 박스 */}
        <div
          className={`skillsItemBox opacity-0 w-full h-max pb-10 ${isScrolled ? "animate-skillsIn" : ""}`}
          style={{ animationDelay: "700ms" }}
        >
          <h1 className="w-full text-[20px] text-center font-bold pb-7">
            Tools
          </h1>
          <ul className="iconBox flex gap-5 justify-center pb-5">
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/vscode.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                VSCode
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/intellij.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                IntelliJ
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/notion.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                Notion
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/github.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                GitHub
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/photo.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                Adobe PhotoShop
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/illust.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                Adobe Illustrator
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
