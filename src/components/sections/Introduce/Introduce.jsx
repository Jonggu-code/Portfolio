import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../util/DarkModeContext";
import "./Introduce.css";

const Introduce = () => {
  const [opacity, setOpacity] = useState(1);
  const { isDark } = useContext(DarkModeContext);

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
    <div className={`w-full h-svh ${isDark ? "bg-customDark" : "bg-white"}`}>
      <div
        className={`Introduce fixed top-0 left-0 w-full h-svh ${isDark ? "Introduce_dark" : "Introduce_basic"}`}
        style={{
          opacity: opacity,
          pointerEvents: opacity === 0 ? "none" : "auto",
        }}
      >
        <h1 className="absolute top-96 text-8xl w-full text-center transition-all translate-y-10 animate-slide-in-out">
          Welcome !
        </h1>
        <div className="mainBox w-screen h-screen flex items-center justify-center ">
          <div className="font-sans w-[1000px] h-1/2 flex">
            <img
              className="w-80 rounded-lg opacity-0 fade-in delay-10 object-cover"
              src="./Profile_image.jpg"
              alt="박종찬 프로필"
            />
            <div className="introTextBox relative min-w-[600px] ml-[70px] flex flex-wrap content-center">
              <h1
                className={`opacity-0 text-2xl pb-1 w-full h-max fade-in delay-11 ${isDark ? "font_dark" : "font_basic"}`}
              >
                안녕하세요.
              </h1>
              <h2
                className={`opacity-0 w-full text-2xl whitespace-pre-wrap pb-10 fade-in delay-11 ${isDark ? "font_dark" : "font_basic"}`}
              >
                <strong>프론트엔드</strong> 개발자 {""}
                <strong>박종찬</strong> 입니다.
              </h2>
              <h3 className="opacity-0 text-[24px] font-black text-customBlue break-keep pb-10 fade-in delay-12">
                "개발자는 사랑하는 사람에게 코딩으로 만든 <br />
                소프트웨어 꽃다발을 선물하는 사람입니다."
              </h3>
              <h4
                className={`opacity-0 break-keep text-[16px] fade-in delay-13 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                언제나 사용자에게 최고의 경험을 선물해주기 위해 노력하며, <br />
                문제를 찾고 해결하는 과정에서 즐거움을 느낍니다.
                <br />
                <strong>
                  도전과 모험을 두려워하지 않는 '모험가' 같은 개발자가
                  되겠습니다.
                </strong>
              </h4>
              <p
                className={`absolute opacity-0 z -bottom-28 -right-1/4 font-semibold text-9xl w-max fade-in-hide delay-10 ${isDark ? "text-gray-500" : "text-blue-950"}`}
              >
                Front-End
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
