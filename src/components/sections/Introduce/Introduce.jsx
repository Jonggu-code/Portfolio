import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import { IsMobileContext } from "../../../hooks/IsMobileContext";
import "./Introduce.css";

const Introduce = ({ isRender }) => {
  const [opacity, setOpacity] = useState(1);
  const { isDark } = useContext(DarkModeContext);
  const isMobile = useContext(IsMobileContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 700; // 스크롤 범위 설정
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0); // 스크롤 값에 따라 투명도 계산
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-svw h-svh z-0 ${isDark ? "bg-customDark" : "bg-white"}`}>
      <div
        className={`Introduce fixed top-0 left-0 ${isDark ? "Introduce_dark" : "Introduce_basic"} ${opacity === 0 ? "pointer-events-none" : "pointer-events-auto"}`}
        style={{ opacity }}
      >
        {isMobile ? (
          ""
        ) : (
          <p
            className={`absolute bottom-6 right-6 font-extrabold text-8xl transition-all duration-500 ${isRender ? "opacity-0 fade-in delay-back" : ""} z-10 ${isDark ? "text-gray-500/5" : "text-blue-950/5"}`}
          >
            Front-End
          </p>
        )}
        <h1 className="flex w-svw h-svh justify-center items-center text-5xl sm:text-8xl transition-all animate-slide-in-out">
          <span>Welcome !</span>
        </h1>

        <div className="w-svw h-svh flex items-center justify-center">
          <div className="font-sans flex flex-col gap-8 w-[320px] sm:w-[600px] h-[400px] sm:h-auto">
            <div className="aspect-auto flex gap-5 sm:gap-8 items-end">
              <img
                className="w-2/5 max-w-[120px] sm:max-w-[300px] rounded-lg opacity-0 fade-in delay-10 object-cover object-top"
                src="./Profile_image.jpg"
                alt="박종찬 프로필"
              />
              <h1
                className={`opacity-0 text-xl sm:text-3xl w-auto h-max fade-in delay-11 font-normal break-keep flex flex-col sm:gap-1 ${isDark ? "text-white" : "text-gray-600"}`}
              >
                <span>안녕하세요.</span>
                <span className="font-extrabold text-slate-800">
                  프론트엔드 개발자
                </span>
                <span>
                  <strong className="text-slate-800">박종찬</strong> 입니다.
                </span>
              </h1>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 text-lg sm:text-2xl">
              <h4
                className={`opacity-0 break-keep fade-in delay-12 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                기술은 사람을 위한 것이라는 믿음으로 사용자를 이해하고, <br />더
                나은 경험을 설계하는데에 집중하며 최선을 다합니다.
              </h4>
              <h5 className="text-customBlue opacity-0 font-bold break-keep fade-in delay-13">
                마치 사랑하는 사람에게 코딩으로 만든 소프트웨어 꽃다발을
                선물하는 마음으로.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
