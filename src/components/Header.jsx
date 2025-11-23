import "./Header.css";
import { useContext, useEffect, useState } from "react";

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
  const [isHamberActive, setIsHamberActive] = useState(false);
  const [isRender, setIsRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRender(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

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
      className={`header fixed text-sm sm:text-base h-10 sm:h-[60px] top-0 left-0 z-50 ${isRender ? "opacity-0 fade-in delay-1" : ""} w-svw px-6 flex items-center justify-between !bg-teal-300 ${isDark ? "header_dark" : "header_basic"}`}
    >
      {/* 로고 관련 전체 */}
      <div
        className={`logo h-full flex items-center overflow-hidden sm:w-1/4 md:w-[210px] ${isRender ? "opacity-0 fade-in delay-2" : ""}`}
        onClick={moveTop}
      >
        {/* 로고 이미지  */}
        <div className="sm:overflow-hidden md:w-10 md:h-6 lg:h-10 lg:w-full  md:aspect-auto">
          <img
            className="h-10 hidden md:object-left md:object-cover md:block md:origin-center md:rotate-90 lg:rotate-0"
            src={`${isDark ? getLogoImage("dark") : getLogoImage("basic")}`}
            alt="logo"
          />
        </div>
      </div>
      {/* 내비게이션 메뉴 전체 */}
      <div
        className={`headMenu w-2/4 flex items-center justify-center gap-[30px] ${isDark ? "text_dark" : "text_basic"}`}
      >
        {/* 각 메뉴 a태그 */}
        <a
          href="#introduce"
          onClick={(e) =>
            handleNav(e, sectionRefs, "introduce", scrollToSection)
          }
          className={`headItem ${isRender ? "opacity-0 fade-in delay-3" : ""} ${activeSection === "introduce" ? "active_sec" : " "}`}
        >
          Intro
        </a>
        <a
          href="#about"
          onClick={(e) => handleNav(e, sectionRefs, "about", scrollToSection)}
          className={`headItem  ${isRender ? "opacity-0 fade-in delay-4" : ""} ${activeSection === "about" ? "active_sec" : " "}`}
        >
          About
        </a>
        <a
          href="skills"
          onClick={(e) => handleNav(e, sectionRefs, "skills", scrollToSection)}
          className={`headItem  ${isRender ? "opacity-0 fade-in delay-5" : ""} ${activeSection === "skills" ? "active_sec" : " "}`}
        >
          Skills
        </a>
        <a
          href="projects"
          onClick={(e) =>
            handleNav(e, sectionRefs, "projects", scrollToSection)
          }
          className={`headItem  ${isRender ? "opacity-0 fade-in delay-6" : ""} ${activeSection === "projects" ? "active_sec" : " "}`}
        >
          Projects
        </a>
      </div>

      {/* 유저박스 전체 */}
      <div className="userMenu relative flex sm:justify-end sm:w-1/4 lg:w-[210px]">
        {/* 햄버거 버튼 */}
        <div
          className={`hamberBtn transition-all duration-300 flex relative w-10 h-10 justify-center items-center transition-color text-[30px] rounded-[10px] cursor-pointer lg:hidden ${isRender ? "opacity-0 fade-in delay-7" : ""} ${isDark ? "text-white hover:bg-customGray" : " text-gray-800 hover:bg-slate-200"}`}
          onClick={toggleMenu}
        >
          ☰
        </div>
        {/* 유저박스 아이콘 모음 */}
        <div
          className={`userMenuBox transition-all duration-300 ease-in-out overflow-hidden  ${isRender ? "opacity-0 fade-in delay-7" : ""} ${isHamberActive ? "h-[220px]" : "h-0"} ${isDark ? "bg-customGray" : "bg-slate-200"} rounded-[10px] flex flex-wrap absolute top-[120%] left-[50%] translate-x-[-50%] lg:transition-none lg:gap-6 lg:justify-between lg:p-0 lg:top-0 lg:left-0 lg:translate-x-0 lg:w-full lg:flex-nowrap lg:relative lg:shadow-none lg:h-max lg:bg-inherit`}
        >
          {/* 이메일 아이콘 */}
          <a
            href="#"
            title="Jonggu-code 이메일 주소"
            className={`Email ${isRender ? "opacity-0 fade-in delay-7" : ""} w-8 h-8 flex justify-center items-center mx-[13px] mt-[20px] mb-[20px] lg:m-0`}
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
            className={`githubIcon ${isRender ? "opacity-0 fade-in delay-8" : ""} w-8 h-8 flex justify-center items-center mx-[13px] mb-[20px] lg:m-0`}
          >
            <GitHubIcon isDark={isDark} wid={36} hei={36} />
          </a>
          {/* 블로그 링크 */}
          <a
            href="https://velog.io/@00whdcks/posts"
            target="_blank"
            title="Velog : Tech Blog"
            className={`velogIcon ${isRender ? "opacity-0 fade-in delay-9" : ""} w-8 h-8 flex justify-center items-center mx-[13px] mb-[20px] lg:m-0`}
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
            className={`ModeChange ${isRender ? "opacity-0 fade-in delay-10" : ""} w-8 h-8 flex justify-center items-center mx-[13px] mb-[10px] lg:m-0 cursor-pointer`}
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
