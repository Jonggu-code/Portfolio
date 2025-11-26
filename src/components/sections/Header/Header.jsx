import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import { IsMobileContext } from "../../../hooks/IsMobileContext";

import Logo from "./Logo";
import UserMenu from "./UserMenu";
import NavMenu from "./NavMenu";

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
      <Logo isDark={isDark} isRender={isRender} moveTop={moveTop} />
      <NavMenu
        isDark={isDark}
        isRender={isRender}
        activeSection={activeSection}
        sectionRefs={sectionRefs}
        scrollToSection={scrollToSection}
      />
      <UserMenu
        isDark={isDark}
        isRender={isRender}
        isHamberActive={isHamberActive}
        toggleMenu={toggleMenu}
        toggleDarkMode={toggleDarkMode}
        email={email}
      />
    </header>
  );
};

export default Header;
