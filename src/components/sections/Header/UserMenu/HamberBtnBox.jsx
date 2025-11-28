import { useContext } from "react";
import { IsMobileContext } from "../../../../hooks/IsMobileContext";

import HamberBtn from "../../../icons/HamberBtn";

const HamberBtnBox = ({
  isDark,
  isRender,
  isHamberActive,
  toggleMenu,
  btnRef,
}) => {
  const isMobile = useContext(IsMobileContext);
  return (
    <div
      ref={btnRef}
      className={`flex justify-center items-center rounded-lg cursor-pointer w-12 h-12 fixed bottom-3 right-5 transition-all duration-500
            sm:transition-colors sm:w-10 sm:h-10 sm:relative sm:bottom-0 sm:translate-y-0 sm:right-0              
            lg:hidden 
            ${isRender ? `${isMobile ? "opacity-0" : "opacity-0 fade-in delay-7"}` : `opacity-1 -translate-y-2`}
            ${
              isDark
                ? `text-white 
              ${isHamberActive ? "bg-slate-600/70" : "sm:hover:bg-slate-700 sm:bg-inherit bg-slate-700/70"}`
                : `text-gray-800 
              ${isHamberActive ? "bg-slate-300/70" : "sm:hover:bg-slate-100 sm:bg-inherit bg-slate-100/70"}`
            }
            
            `}
      onClick={toggleMenu}
    >
      <HamberBtn wid={30} hei={30} />
    </div>
  );
};

export default HamberBtnBox;
