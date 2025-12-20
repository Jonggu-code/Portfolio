import "./Contact.css";
import React, { useContext, useEffect, useRef } from "react";

// import useScrollPosition from "../hooks/useScrollPosition";
import useScrollPosition from "../../../hooks/useScrollPosition";
import PhoneIcon from "../../icons/PhoneIcon";
import EmailIcon from "../../icons/EmailIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import VelogIcon from "../../icons/VelogIcon";

import { DarkModeContext } from "../../../hooks/DarkModeContext";
import { copyEmail } from "../../../util/copyEmail";
import { copyPhone } from "../../../util/copyPhone";

const Contact = () => {
  const { isDark } = useContext(DarkModeContext);
  const contactRef = useRef(null);
  const isScrolled = useScrollPosition(contactRef);
  const email = "jonggucode@gmail.com";
  const phone = "050-6875-8906";

  return (
    <div
      ref={contactRef}
      className={`relative hidden h-[calc(100vh-70px)] w-full flex-wrap items-center justify-center p-10 ${isDark ? "bg-customDark" : "bg-customSky"}`}
    >
      <div
        className={`relative flex h-max w-full flex-wrap content-center items-center justify-center text-center opacity-0 ${isScrolled ? "cont-d1 cont-up " : ""}`}
      >
        <h1
          className={`thankmsg absolute w-full translate-x-40 pb-20 text-7xl font-bold ${isDark ? "text-white" : "text-customDark"} ${isScrolled ? "cont-d1 thank-up " : ""}`}
        >
          Thank you !
        </h1>
        <h2
          className={`w-full pb-20 text-[24px] font-normal opacity-0 ${isDark ? "text-white" : "text-customDark"} ${isScrolled ? "cont-in cont-d2" : ""}`}
        >
          제 포트폴리오를 열람해주셔서 감사합니다.
        </h2>
        <div className="w-full text-[18px]">
          <p
            className={`w-full pb-2 opacity-0 ${isDark ? "text-customGray" : "text-customDark"} ${isScrolled ? "cont-in cont-d3" : ""}`}
          >
            사용자는 항상{" "}
            <strong className={`${isDark ? "text-white" : ""}`}>
              '내가 가장 사랑하는 사람'{" "}
            </strong>
            이라 생각하고 개발에 임하며
          </p>
          <p
            className={`w-full pb-2 opacity-0 ${isDark ? "text-customGray" : "text-customDark"} ${isScrolled ? "cont-in cont-d4" : ""}`}
          >
            나에게 소중한 사람의{" "}
            <strong className={`${isDark ? "text-white" : ""}`}>행복</strong>을
            위해 끝없이 노력하는 개발자가 되겠습니다.
          </p>
          <p
            className={`w-full opacity-0 ${isDark ? "text-customGray" : "text-customDark"} ${isScrolled ? "cont-in cont-d5" : ""}`}
          >
            감사합니다.
          </p>
        </div>
        <div
          className={`absolute -bottom-[220px] flex w-full gap-0 opacity-0 ${isScrolled ? "cont-in cont-d6" : ""}`}
        >
          <div className="conBox userMenu flex flex-col items-center gap-3">
            <a
              title="050-6875-8906"
              className={`Email fade-in delay-7 flex h-[50px] w-[50px] cursor-pointer items-center justify-center opacity-0`}
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
          <div className="conBox userMenu flex flex-col items-center gap-3">
            <a
              title="Jonggu-code 이메일 주소"
              className={`Email fade-in delay-7 flex h-[50px] w-[50px] cursor-pointer items-center justify-center opacity-0`}
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
          <div className="conBox userMenu flex flex-col items-center gap-3">
            <a
              href="https://github.com/Jonggu-code"
              target="_blank"
              title="Jonggu-code GitHub Profile"
              className="githubIcon fade-in delay-8 flex items-center justify-center opacity-0"
            >
              <GitHubIcon isDark={isDark} wid={50} hei={50} />
            </a>
            <p
              className={`conTxt ${isDark ? "text-customGray" : "text-customDark"}`}
            >
              Jonggu-code GitHub
            </p>
          </div>
          <div className="conBox userMenu flex flex-col items-center gap-3">
            <a
              href="https://velog.io/@00whdcks/posts"
              target="_blank"
              title="imFront.log"
              className="velogIcon fade-in delay-9 flex items-center justify-center opacity-0"
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
