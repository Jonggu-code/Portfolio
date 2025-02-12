import "./Header.css";
import React, { useContext, useState } from "react";

import { getLogoImage } from "../util/get-logo";
import { DarkModeContext } from "../util/DarkModeContext";
import { handleNav } from "../util/handleNav";
import { copyEmail } from "../util/copyEmail";

import ModeIcon from "../hooks/ModeIcon";
import GitHubIcon from "../hooks/GitHubIcon";
import TistoryIcon from "../hooks/TistoryIcon";
import EmailIcon from "../hooks/EmailIcon";

const Header = ({ activeSection, scrollToSection, sectionRefs }) => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);
  const email = "jonggucode@gmail.com";

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`header fixed top-0 left-0 z-50 fade-in delay-1 opacity-0 w-full p-4 px-10 flex justify-between ${isDark ? "header_dark" : "header_basic"}`}
    >
      <div
        className="logo opacity-0 w-[210px] h-full fade-in delay-2"
        onClick={moveTop}
      >
        <img
          className="w-[138px]"
          src={`${isDark ? getLogoImage("dark") : getLogoImage("basic")}`}
          alt=""
        />
      </div>
      <div
        className={`headMenu text-lg flex items-center gap-[30px] ${isDark ? "text_dark" : "text_basic"}`}
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
      <div className="userMenu w-max flex gap-6 items-center">
        <a
          href="#"
          title="Jonggu-code 이메일 주소"
          className={`Email ${isDark ? "bg-customGray" : "bg-customGray"} iconCircle opacity-0 fade-in delay-7 w-[30px] h-[30px] flex justify-center items-center`}
          onClick={() => {
            copyEmail(email);
          }}
        >
          <EmailIcon
            isDark={isDark}
            wid={20}
            hei={20}
            custom={"#fff"}
            basic={"#333333"}
          />
        </a>
        <a
          href="https://github.com/Jonggu-code"
          target="_blank"
          title="Jonggu-code GitHub Profile"
          className="Notion opacity-0 fade-in delay-8 w-9 h-9 flex justify-center items-center"
        >
          <GitHubIcon isDark={isDark} wid={32} hei={32} fillColor={"#6c87a1"} />
        </a>
        <a
          href="https://jongstechblog.tistory.com/"
          target="_blank"
          title="종구's Tech Blog"
          className="Tistory opacity-0 fade-in delay-9 w-9 h-9 flex justify-center items-center"
        >
          <TistoryIcon
            isDark={isDark}
            wid={28}
            hei={28}
            fillColor={"#6c87a1"}
          />
        </a>
        <div
          className="ModeChange opacity-0 fade-in delay-10 w-9 h-9 flex justify-center items-center cursor-pointer"
          onClick={toggleDarkMode}
        >
          <ModeIcon isDark={isDark} />
        </div>
      </div>
    </header>
  );
};

export default Header;
