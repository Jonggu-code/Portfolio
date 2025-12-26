import { useContext, useRef } from "react";

import useScrollPosition from "../../../hooks/useScrollPosition";
import EmailIcon from "../../icons/EmailIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import VelogIcon from "../../icons/VelogIcon";
import KakaoIcon from "../../icons/KakaoIcon";

import { DarkModeContext } from "../../../hooks/DarkModeContext";
import { copyEmail } from "../../../util/copyEmail";
import commonStyle from "../../styles/commonStyle";

const Contact = () => {
  const { isDark } = useContext(DarkModeContext);
  const contactRef = useRef(null);
  const isScrolled = useScrollPosition(contactRef);
  const email = "jonggucode@gmail.com";
  const contactList = [
    {
      key: "github",
      href: "https://github.com/Jonggu-code",
      title: "GitHub Profile",
      icon: <GitHubIcon />,
      contents: "Github Profile",
    },
    {
      key: "email",
      href: "#",
      title: "이메일 주소 복사",
      icon: <EmailIcon />,
      onClick: () => copyEmail(email),
      contents: "Gmail 주소",
    },
    {
      key: "kakaotalk",
      href: "https://open.kakao.com/o/sFh5GDYg",
      title: "카카오톡 오픈채팅",
      icon: <KakaoIcon />,
      contents: "카카오톡 오픈채팅",
    },
    {
      key: "velog",
      href: "https://velog.io/@00whdcks/posts",
      title: "Velog Tech Blog",
      icon: <VelogIcon />,
      contents: "Tech Blog",
    },
    ,
  ];
  const textAnimate = `opacity-0 ${isScrolled ? "animate-skillsIn" : ""}`;

  return (
    <div
      ref={contactRef}
      className={`flex h-max w-full items-center justify-center px-6 py-20 ${isDark ? "bg-gradient-to-b from-slate-800 to-customDark text-white" : `bg-blue-400 text-basicFont`}`}
    >
      <div
        className={`${commonStyle.subWrapper} flex flex-col items-center justify-center py-6`}
      >
        {/* 메인 타이틀 */}
        <p
          className={`mb-10 text-center text-xl font-bold sm:mb-20 sm:text-4xl ${textAnimate}`}
          style={{ animationDelay: "200ms" }}
        >
          제 포트폴리오를 봐주셔서 감사합니다.
        </p>

        {/* 텍스트 박스 */}
        <div className="mb-10 flex flex-col gap-5 text-center text-base sm:mb-20 sm:text-xl">
          <p className={textAnimate} style={{ animationDelay: "400ms" }}>
            실사용을 고려한 UI와 유지보수 가능한 코드를 통해 꾸준히 성장하는
            개발자가 되겠습니다.
          </p>
          <p className={textAnimate} style={{ animationDelay: "600ms" }}>
            함께 일하며 더 나은 사용자 경험을 만들고 싶습니다. 언제든 편하게
            연락 주세요.
          </p>
        </div>

        {/* 아이콘 박스 */}
        <div className={`grid w-full grid-cols-4 gap-6`}>
          {contactList.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-2 ${textAnimate} group`}
              style={{ animationDelay: `${1000 + idx * 200}ms` }}
            >
              <a
                key={item.key}
                title={item.title}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className={`flex w-10 cursor-pointer items-center justify-center transition-all duration-200 sm:w-16 sm:group-hover:-translate-y-1`}
                href={item.href}
                onClick={item.onClick}
              >
                {item.icon}
              </a>
              <p
                className={`w-14 break-keep text-center text-xs transition-all duration-200 sm:w-auto sm:text-base sm:opacity-0 sm:group-hover:translate-y-1 sm:group-hover:opacity-100 ${isDark ? "text-white" : "text-customDark"}`}
              >
                {item.contents}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
