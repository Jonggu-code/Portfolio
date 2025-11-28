import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
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
    <div className={`w-svw h-svh z-0 ${isDark ? "bg-customDark" : "bg-white"}`}>
      <div
        className={`Introduce fixed top-0 left-0  ${isDark ? "Introduce_dark" : "Introduce_basic"}`}
        style={{
          opacity: opacity,
          pointerEvents: opacity === 0 ? "none" : "auto",
        }}
      >
        <h1 className="flex w-svw h-svh justify-center items-center text-5xl sm:text-8xl transition-all animate-slide-in-out">
          <span>Welcome !</span>
        </h1>

        <div className="mainBox flex items-center justify-center">
          <div className="font-sans w-svw flex flex-col gap-8 mt-12 p-10">
            <div className="w-svw aspect-auto flex gap-5 items-end">
              <img
                className="w-[40vw] h-[40vw] max-w-[300px] rounded-lg opacity-0 fade-in delay-10 object-cover object-top"
                src="./Profile_image.jpg"
                alt="박종찬 프로필"
              />
              <h1
                className={`opacity-0 text-xl sm:text-2xl w-full h-max fade-in delay-11 font-extrabold break-keep ${isDark ? "text-white" : "text-slate-800"}`}
              >
                <span className="font-normal text-gray-600">안녕하세요.</span>{" "}
                <br />
                프론트엔드 개발자 <br /> 박종찬
                <span className="font-normal text-gray-600">입니다.</span>
              </h1>
            </div>

            <div className="introTextBox flex flex-col gap-4 text-lg">
              {/* <h3 className="opacity-0 font-black text-customBlue break-keep fade-in delay-12">
                "개발자는 사랑하는 사람에게 코딩으로 만든 <br />
                소프트웨어 꽃다발을 선물하는 사람입니다."
              </h3> */}
              <h4
                className={`opacity-0 break-keep fade-in delay-12 ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                기술은 사람을 위한 것이라는 믿음으로 사용자를 이해하고, 더 나은
                경험을 설계하는데에 집중하며 최선을 다합니다.
              </h4>
              <h5 className="text-customBlue font-bold break-keep fade-in delay-13">
                마치 사랑하는 사람에게 코딩으로 만든 소프트웨어 꽃다발을
                선물하는 마음으로.
              </h5>
              <p
                className={`absolute opacity-0 -bottom-28 -right-1/4 font-semibold text-9xl w-max fade-in-hide delay-10 ${isDark ? "text-gray-500" : "text-blue-950"}`}
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
