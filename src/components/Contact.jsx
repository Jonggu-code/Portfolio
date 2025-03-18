import "./Contact.css";
import React, { useContext, useEffect, useRef } from "react";

import useScrollPosition from "../hooks/useScrollPosition";
import PhoneIcon from "../hooks/PhoneIcon";
import EmailIcon from "../hooks/EmailIcon";
import GitHubIcon from "../hooks/GitHubIcon";
import TistoryIcon from "../hooks/TistoryIcon";
import VelogIcon from "../hooks/VelogIcon";

import { DarkModeContext } from "../util/DarkModeContext";
import { copyEmail } from "../util/copyEmail";
import { copyPhone } from "../util/copyPhone";

const Contact = () => {
  const { isDark } = useContext(DarkModeContext);
  const contactRef = useRef(null);
  const isScrolled = useScrollPosition(contactRef, 500);
  const email = "jonggucode@gmail.com";
  const phone = "050-6875-8906";

  return (
    <div
      ref={contactRef}
      className={`relative w-full p-10 h-[calc(100vh-70px)] flex flex-wrap justify-center items-center ${isDark ? "bg-customDark" : "bg-customSky"}`}
    >
      <div
        className={`opacity-0 relative flex flex-wrap w-full h-max content-center items-center justify-center text-center ${isScrolled ? "cont-d1 cont-up " : ""}`}
      >
        <h1
          className={`thankmsg w-full absolute translate-x-40 text-7xl font-bold pb-20 ${isDark ? "text-white" : "text-customDark"} ${isScrolled ? "cont-d1 thank-up " : ""}`}
        >
          Thank you !
        </h1>
        <h2
          className={`opacity-0 w-full text-[24px] font-normal pb-20 ${isDark ? "text-white" : "text-customDark"} ${isScrolled ? "cont-in cont-d2" : ""}`}
        >
          제 포트폴리오를 열람해주셔서 감사합니다.
        </h2>
        <div className="w-full text-[18px]">
          <p
            className={`opacity-0 w-full pb-2 ${isDark ? "text-customGray" : "text-customDark"} ${isScrolled ? "cont-in cont-d3" : ""}`}
          >
            사용자는 항상{" "}
            <strong className={`${isDark ? "text-white" : ""}`}>
              '내가 가장 사랑하는 사람'{" "}
            </strong>
            이라 생각하고 개발에 임하며
          </p>
          <p
            className={`opacity-0 w-full pb-2 ${isDark ? "text-customGray" : "text-customDark"} ${isScrolled ? "cont-in cont-d4" : ""}`}
          >
            나에게 소중한 사람의{" "}
            <strong className={`${isDark ? "text-white" : ""}`}>행복</strong>을
            위해 끝없이 노력하는 개발자가 되겠습니다.
          </p>
          <p
            className={`opacity-0 w-full ${isDark ? "text-customGray" : "text-customDark"} ${isScrolled ? "cont-in cont-d5" : ""}`}
          >
            감사합니다.
          </p>
        </div>
        <div
          className={`opacity-0 absolute -bottom-[220px] w-max flex gap-32 ${isScrolled ? "cont-in cont-d6" : ""}`}
        >
          <div className="conBox userMenu flex flex-col items-center gap-3">
            <a
              title="050-6875-8906"
              className={`cursor-pointer Email opacity-0 fade-in delay-7 w-[50px] h-[50px] flex justify-center items-center`}
              onClick={() => {
                copyPhone(phone);
              }}
            >
              <PhoneIcon isDark={isDark} wid={40} hei={40} />
            </a>
            <p
              className={`conTxt ${isDark ? "text-customGray" : "text-customDark"}`}
            >
              050-6875-8906
            </p>
          </div>
          <div className="conBox userMenu flex flex-col gap-3 items-center">
            <a
              title="Jonggu-code 이메일 주소"
              className={`cursor-pointer Email opacity-0 fade-in delay-7 w-[50px] h-[50px] flex justify-center items-center`}
              onClick={() => {
                copyEmail(email);
              }}
            >
              <EmailIcon isDark={isDark} wid={40} hei={40} />
            </a>
            <p
              className={`conTxt ${isDark ? "text-customGray" : "text-customDark"}`}
            >
              jonggucode@gmail.com
            </p>
          </div>
          <div className="conBox userMenu flex flex-col gap-3 items-center">
            <a
              href="https://github.com/Jonggu-code"
              target="_blank"
              title="Jonggu-code GitHub Profile"
              className="githubIcon opacity-0 fade-in delay-8 flex justify-center items-center"
            >
              <GitHubIcon isDark={isDark} wid={50} hei={50} />
            </a>
            <p
              className={`conTxt ${isDark ? "text-customGray" : "text-customDark"}`}
            >
              Jonggu-code GitHub
            </p>
          </div>
          <div className="conBox userMenu flex flex-col gap-3 items-center">
            <a
              href="https://velog.io/@00whdcks/posts"
              target="_blank"
              title="imFront.log"
              className="velogIcon opacity-0 fade-in delay-9 flex justify-center items-center"
            >
              <VelogIcon isDark={isDark} wid={50} hei={50} />
            </a>
            <p
              className={`conTxt ${isDark ? "text-customGray" : "text-customDark"}`}
            >
              Velog : Tech Blog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
