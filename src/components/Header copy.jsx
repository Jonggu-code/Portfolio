import "./Header.css";
import React, { useContext, useEffect, useState } from "react";

import { getLogoImage } from "../util/get-logo";
import { DarkModeContext } from "../util/DarkModeContext";
import { handleNav } from "../util/handleNav";
import { copyEmail } from "../util/copyEmail";

import ModeIcon from "../hooks/ModeIcon";
import GitHubIcon from "../hooks/GitHubIcon";
import VelogIcon from "../hooks/VelogIcon";
import EmailIcon from "../hooks/EmailIcon";

const Header = ({ activeSection, scrollToSection, sectionRefs }) => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);
  const email = "jonggucode@gmail.com";
  const [isHamberActive, setIsHamberActive] = useState(true);

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleMenu = () => {
    setIsHamberActive(!isHamberActive);
  };

  return (
    <header
      className={`header fixed top-0 left-0 z-50 fade-in delay-1 opacity-0 w-svw p-4 px-6 flex justify-between ${isDark ? "header_dark" : "header_basic"}`}
    >
      <div
        className="logo opacity-0 h-full fade-in delay-2 flex items-center w-auto"
        onClick={moveTop}
      >
        <img
          className="w-[40px]"
          src={`${isDark ? getLogoImage("dark") : getLogoImage("basic")}`}
          alt=""
        />
      </div>
      <div
        className={`headMenu text-sm flex items-center gap-[30px] ${isDark ? "text_dark" : "text_basic"}`}
      >
        <a
          href="#introduce"
          onClick={(e) =>
            handleNav(e, sectionRefs, "introduce", scrollToSection)
          }
          className={`headItem opacity-0 fade-in delay-3 ${activeSection === "introduce" ? "active_sec" : " "}`}
        >
          Intro
        </a>
        <a
          href="#about"
          onClick={(e) => handleNav(e, sectionRefs, "about", scrollToSection)}
          className={`headItem opacity-0 fade-in delay-4 ${activeSection === "about" ? "active_sec" : " "}`}
        >
          About
        </a>
        <a
          href="skills"
          onClick={(e) => handleNav(e, sectionRefs, "skills", scrollToSection)}
          className={`headItem opacity-0 fade-in delay-5 ${activeSection === "skills" ? "active_sec" : " "}`}
        >
          Skills
        </a>
        <a
          href="projects"
          onClick={(e) =>
            handleNav(e, sectionRefs, "projects", scrollToSection)
          }
          className={`headItem opacity-0 fade-in delay-6 ${activeSection === "projects" ? "active_sec" : " "}`}
        >
          Projects
        </a>
      </div>
      <div className="userMenu relative flex w-max lg:w-[210px]">
        {/* 햄버거 버튼 */}
        <div
          className={`hamberBtn transition-all duration-[0.3s] flex relative w-10 h-10 justify-center items-center transition-color opacity-100 text-[25px] rounded-[10px] cursor-pointer lg:opacity-0 ${isHamberActive ? (isDark ? "text-white" : "text-customDark") : isDark ? "text-white bg-customGray" : "bg-slate-200"} ${isDark ? "hover:bg-customGray text-customDark" : "hover:bg-slate-200 text-customGray"}`}
          onClick={toggleMenu}
        >
          ☰
        </div>
        {/* 유저박스 전체 */}
        <div
          className={`userMenuBox transition-all duration-300 ease-in-out overflow-hidden  ${isHamberActive ? "h-0" : " h-[250px]"} ${isDark ? "bg-customGray" : "bg-slate-200"} rounded-[10px] flex flex-wrap absolute top-[120%] left-[50%] translate-x-[-50%] lg:transition-none lg:gap-6 lg:justify-between lg:p-0 lg:top-0 lg:left-0 lg:translate-x-0 lg:w-full lg:flex-nowrap lg:relative lg:shadow-none lg:h-max lg:bg-inherit`}
        >
          {/* 이메일 아이콘 */}
          <a
            href="#"
            title="Jonggu-code 이메일 주소"
            className={`Email opacity-0 fade-in delay-7 w-8 h-8 flex justify-center items-center mx-[13px] mt-[20px] mb-[20px] lg:m-0`}
            onClick={() => {
              copyEmail(email);
            }}
          >
            <EmailIcon isDark={isDark} wid={26} hei={26} />
          </a>
          {/* 깃허브 링크 */}
          <a
            href="https://github.com/Jonggu-code"
            target="_blank"
            title="Jonggu-code GitHub Profile"
            className="githubIcon opacity-0 fade-in delay-8 w-8 h-8 flex justify-center items-center mx-[13px] mb-[20px] lg:m-0"
          >
            <GitHubIcon isDark={isDark} wid={36} hei={36} />
          </a>
          {/* 블로그 링크 */}
          <a
            href="https://velog.io/@00whdcks/posts"
            target="_blank"
            title="Velog : Tech Blog"
            className="velogIcon opacity-0 fade-in delay-9 w-8 h-8 flex justify-center items-center mx-[13px] mb-[20px] lg:m-0"
          >
            <VelogIcon
              isDark={isDark}
              wid={28}
              hei={28}
              fillColor={"#6c87a1"}
            />
          </a>
          {/* 다크모드 버튼 */}
          <div
            className="ModeChange opacity-0 fade-in delay-10 w-8 h-8 flex justify-center items-center mx-[13px] mb-[10px] lg:m-0 cursor-pointer"
            onClick={toggleDarkMode}
          >
            <ModeIcon isDark={isDark} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
