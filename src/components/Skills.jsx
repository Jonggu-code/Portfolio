import React, { useContext, useRef } from "react";
import { DarkModeContext } from "../util/DarkModeContext";
import useScrollPosition from "../hooks/useScrollPosition";
import "./Skills.css";

const Skills = () => {
  const { isDark } = useContext(DarkModeContext);
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef, 500);
  return (
    <div
      ref={aboutRef}
      className={`relative w-full p-10 h-[870px] flex justify-center ${isDark ? "bg-customDark" : "bg-blue-200"}`}
    >
      <h1
        className={`fade-target opacity-0 absolute top-[40px] left-[60px] text-4xl font-bold ${isDark ? "text-white" : "text-basicFont"} ${isScrolled ? "text-in text-d1" : ""}`}
      >
        <span className="text-customBlue"></span>
        Skills
      </h1>
      <div
        className={`SkillsMainBox w-[1000px] h-max mt-[90px] mb-[50px] flex flex-wrap justify-center ${isDark ? "text-white" : "text-basicFont"}`}
      >
        <div
          className={`skillsItemBox opacity-0 w-full h-max pb-10 ${isScrolled ? "skills-in skills-d2" : ""}`}
        >
          <h1 className={`w-full text-[20px] text-center font-bold pb-7`}>
            Core Skills
          </h1>
          <ul className="iconBox flex gap-5 justify-center pb-5">
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/html.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                HTML
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/css.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                CSS
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/javascript.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                Javascript
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/jquery.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                JQuery
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/ajax.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                AJAX
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/react.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                React
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/vite.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                Vite
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/tailwind.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                tailwind
              </span>
            </li>
            <li
              className={`techIcon hover:shadow-gray-500 shadow-lg rounded-xl flex items-center justify-center flex-wrap ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <div>
                <img className="w-16" src="./logo/axios.png" alt="" />
              </div>
              <span
                className={`w-full text-center text-[15px] font-bold ${isDark ? "text-customGray" : "text-basicFont"}`}
              >
                Axios
              </span>
            </li>
          </ul>
        </div>
        <div
          className={`skillsItemBox opacity-0 w-full h-max pb-10 ${isScrolled ? "skills-in skills-d3" : ""}`}
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
        <div
          className={`skillsItemBox opacity-0 w-full h-max pb-10 ${isScrolled ? "skills-in skills-d4" : ""}`}
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
