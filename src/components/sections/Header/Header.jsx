import { useContext, useEffect, useRef, useState } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";

import Logo from "./items/Logo";
import UserMenu from "./items/UserMenu";
import NavMenu from "./items/NavMenu";
import { IsMobileContext } from "../../../hooks/IsMobileContext";
import MoveTopBtn from "./items/MoveTopBtn";

const Header = ({ activeSection, scrollToSection, sectionRefs, isRender }) => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);
  const isMobile = useContext(IsMobileContext);
  const [isHamberActive, setIsHamberActive] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const email = "jonggucode@gmail.com";

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!menuRef.current || !btnRef.current) return;

      const clickedMenu = menuRef.current.contains(e.target);
      const clickedBtn = btnRef.current.contains(e.target);

      if (isHamberActive && !clickedMenu && !clickedBtn) {
        setIsHamberActive(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isHamberActive]);

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
      className={`header fixed z-50 text-xs w-svw h-8 top-0 left-0 px-6 flex items-center justify-between sm:text-base sm:h-14
        ${isRender ? "opacity-0 fade-in delay-1" : ""} 
        ${isDark ? "bg-slate-800/80 sm:bg-customDark" : "bg-slate-200/80 sm:bg-white"}
        `}
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
        menuRef={menuRef}
        btnRef={btnRef}
      />
      {isMobile && (
        <MoveTopBtn isDark={isDark} isRender={isRender} moveTop={moveTop} />
      )}
    </header>
  );
};

export default Header;
