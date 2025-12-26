import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import { IsMobileContext } from "../../../hooks/IsMobileContext";

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
    <div
      className={`z-0 h-dvh w-full ${isDark ? "bg-customDark" : "bg-white"}`}
    >
      {/* 전체 */}
      <div
        className={`fixed left-1/2 top-0 -translate-x-1/2 ${opacity === 0 ? "pointer-events-none" : "pointer-events-auto"}`}
        style={{ opacity }}
      >
        {/* 화면 하단 Front-end */}
        {isMobile ? (
          ""
        ) : (
          <p
            className={`absolute -right-[30%] bottom-6 text-8xl font-extrabold transition-all duration-500 ${isRender ? "fade-in delay-back opacity-0" : ""} z-10 ${isDark ? "text-gray-500/5" : "text-blue-950/5"}`}
          >
            Front-End
          </p>
        )}

        {/* 브라우저 진입 시 Welcome */}
        <h1 className="flex h-svh w-full animate-slideInOut items-center justify-center text-5xl transition-all sm:text-8xl">
          <span>Welcome !</span>
        </h1>

        {/* Intro 내부  */}
        <div className="flex h-svh w-full items-center justify-center">
          {/* Intro 내부 구분 박스 */}
          <div className="flex h-[400px] w-[320px] flex-col gap-6 font-sans sm:h-auto sm:w-[600px] sm:gap-12">
            {/* 이미지 & 옆 텍스트 */}
            <div className="flex aspect-auto items-end gap-5 sm:gap-8">
              <img
                className="fade-in delay-10 w-2/5 max-w-[120px] rounded-lg object-cover object-top opacity-0 sm:max-w-[300px]"
                src="./Profile_image.jpg"
                alt="박종찬 프로필"
              />
              <h1
                className={`fade-in delay-11 flex h-max w-auto flex-col break-keep text-xl font-normal opacity-0 sm:gap-1 sm:text-3xl ${isDark ? "text-white" : "text-gray-600"}`}
              >
                <span>안녕하세요.</span>
                <b className={isDark ? "text-customBlue" : "text-basicFont"}>
                  프론트엔드 개발자
                </b>
                <span>
                  <b className={isDark ? "text-customBlue" : "text-basicFont"}>
                    박종찬
                  </b>{" "}
                  입니다.
                </span>
              </h1>
            </div>

            {/* 이미지 하단 메인 텍스트 */}
            <div className="flex flex-col gap-4 text-lg sm:gap-6 sm:text-2xl">
              <h4
                className={`fade-in delay-12 break-keep opacity-0 ${isDark ? "text-gray-400" : "text-gray-600"} sm:leading-10`}
              >
                기술은 사람을 위한 것이라는 믿음으로 사용자를 이해하고 <br />더
                나은 경험을 설계하는데에 집중하며 최선을 다합니다.
              </h4>
              <h5 className="fade-in delay-13 break-keep font-bold text-customBlue opacity-0 sm:leading-10">
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
