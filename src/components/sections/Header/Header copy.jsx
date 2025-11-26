import { useContext, useEffect, useState } from "react";

import { getLogoImage } from "../../../util/get-logo";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import { handleNav } from "../../../util/handleNav";
import { copyEmail } from "../../../util/copyEmail";

import ModeIcon from "../../icons/ModeIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import VelogIcon from "../../icons/VelogIcon";
import EmailIcon from "../../icons/EmailIcon";
import HamberBtn from "../../icons/HamberBtn";
import { IsMobileContext } from "../../../hooks/IsMobileContext";

const Header = ({ activeSection, scrollToSection, sectionRefs }) => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);
  const isMobile = useContext(IsMobileContext);
  const [isHamberActive, setIsHamberActive] = useState(false);
  const [isRender, setIsRender] = useState(true);
  const email = "jonggucode@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRender(false);
    }, 6000);

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
      className={`header fixed text-sm w-svw h-10 top-0 left-0 z-50 px-6 flex items-center justify-between 
        ${isRender ? "opacity-0 fade-in delay-1" : ""} 
        ${isDark ? "bg-slate-800 sm:bg-customDark" : "bg-slate-200 sm:bg-white"}
        sm:text-base sm:h-14`}
    >
      {/* 유저박스 전체 */}
      <div
        className="
      userMenu relative flex w-0
      sm:justify-end sm:w-1/4 
      lg:w-[210px]"
      >
        {/* 햄버거 버튼 */}
        <div
          className={`hamberBtn flex justify-center items-center text-[30px] rounded-lg cursor-pointer fixed bottom-5 right-5 w-12 h-12 transition-all
            sm:transition-colors sm:relative sm:w-10 sm:h-10 sm:bottom-0 sm:right-0 
              lg:hidden 
            ${isRender ? "opacity-0 fade-in " : ""}
            ${
              isDark
                ? `text-white 
              ${isHamberActive ? "bg-slate-600" : "sm:hover:bg-slate-700 sm:bg-inherit bg-slate-700"}`
                : `text-gray-800 
              ${isHamberActive ? "bg-slate-300" : "sm:hover:bg-slate-100 sm:bg-inherit bg-slate-100"}`
            }
            
            `}
          onClick={toggleMenu}
        >
          <HamberBtn wid={30} hei={30} />
        </div>
        {/* 유저박스 아이콘 모음 */}
        <div
          className={`userMenuBox overflow-hidden transition-all duration-300 ease-in-out
            ${isRender ? "opacity-0 fade-in delay-7" : ""} 
            ${isHamberActive ? "h-[220px]" : "h-0"} 
            ${isDark ? "bg-slate-700" : "bg-slate-200"}
             fixed bottom-[75px] right-[16px] px-3 rounded-lg
            sm:top-[55px] sm:right-[12px] 
           lg:relative lg:flex lg:transition-none lg:gap-6 lg:justify-between lg:p-0 lg:top-0 lg:left-0 lg:flex-nowrap lg:shadow-none lg:h-max lg:bg-inherit`}
        >
          {/* 이메일 아이콘 */}
          <a
            href="#"
            title="Jonggu-code 이메일 주소"
            className={`Email transition-colors duration-200 hover:text-customBlue
              ${isDark ? "text-white" : "text-slate-800"}
              ${isRender ? "opacity-0 fade-in delay-7" : ""} 
              w-8 h-8 flex justify-center items-center mb-5 mt-3 lg:m-0`}
            onClick={() => {
              copyEmail(email);
            }}
          >
            <EmailIcon wid={26} hei={26} />
          </a>
          {/* 깃허브 링크 */}
          <a
            href="https://github.com/Jonggu-code"
            target="_blank"
            title="Jonggu-code GitHub Profile"
            className={`githubIcon transition-colors duration-200 hover:text-customBlue
              ${isDark ? "text-white" : "text-slate-800"}
              ${isRender ? "opacity-0 fade-in delay-8" : ""} 
              w-8 h-8 flex justify-center items-center mb-5 lg:mb-0`}
          >
            <GitHubIcon wid={26} hei={26} />
          </a>
          {/* 블로그 링크 */}
          <a
            href="https://velog.io/@00whdcks/posts"
            target="_blank"
            title="Velog : Tech Blog"
            className={`velogIcon transition-colors duration-200 hover:text-customBlue
              ${isDark ? "text-white" : "text-slate-800"}
              ${isRender ? "opacity-0 fade-in delay-9" : ""} 
              w-8 h-8 flex justify-center items-center mb-5 lg:mb-0`}
          >
            <VelogIcon wid={28} hei={28} />
          </a>
          {/* 다크모드 버튼 */}
          <div
            className={`ModeChange transition-colors duration-200 hover:text-customBlue
              ${isDark ? "text-white" : "text-slate-800"}
              ${isRender ? "opacity-0 fade-in delay-10" : ""}
              w-8 h-8 flex justify-center items-center mb-5 lg:mb-0 cursor-pointer`}
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
