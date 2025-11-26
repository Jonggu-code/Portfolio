import { copyEmail } from "../../../../util/copyEmail";

import EmailIcon from "../../../icons/EmailIcon";
import GitHubIcon from "../../../icons/GitHubIcon";
import ModeIcon from "../../../icons/ModeIcon";
import VelogIcon from "../../../icons/VelogIcon";

const UserMenuBox = ({
  isRender,
  isDark,
  isHamberActive,
  toggleDarkMode,
  email,
}) => {
  const iconList = [
    {
      key: "email",
      href: "#",
      title: "이메일 주소 복사",
      icon: <EmailIcon wid={26} hei={26} />,
      delay: 7,
      onClick: () => copyEmail(email),
    },
    {
      key: "github",
      href: "https://github.com/Jonggu-code",
      title: "GitHub Profile",
      icon: <GitHubIcon wid={26} hei={26} />,
      delay: 8,
    },
    {
      key: "velog",
      href: "https://velog.io/@00whdcks/posts",
      title: "Velog Tech Blog",
      icon: <VelogIcon wid={28} hei={28} />,
      delay: 9,
    },
  ];

  return (
    <div
      className={`userMenuBox overflow-hidden transition-all duration-300 ease-in-out
            ${isRender ? "opacity-0 fade-in delay-7" : ""} 
            ${isHamberActive ? "h-[220px]" : "h-0"} 
            ${isDark ? "bg-slate-700" : "bg-slate-200"}
             fixed bottom-[75px] right-[16px] px-3 rounded-lg
            sm:top-[55px] sm:right-[12px] 
           lg:relative lg:flex lg:transition-none lg:gap-6 lg:justify-between lg:p-0 lg:top-0 lg:left-0 lg:flex-nowrap lg:shadow-none lg:h-max lg:bg-inherit`}
    >
      {iconList.map((item) => (
        <a
          key={item.key}
          href={item.href}
          title={item.title}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          className={`transition-colors duration-200 hover:text-customBlue
            ${isDark ? "text-white" : "text-slate-800"}
            ${isRender ? `opacity-0 fade-in delay-${item.delay}` : ""}
            w-8 h-8 flex justify-center items-center mb-5 lg:mb-0
            ${item.key === "email" ? "mt-3 lg:m-0" : ""}`} // 슬라이딩 애니메이션을 위해 어쩔 수 없는 선택..
          onClick={item.onClick}
        >
          {item.icon}
        </a>
      ))}
      {/* 다크모드 버튼 */}
      <div
        className={`transition-colors duration-200 hover:text-customBlue
              ${isDark ? "text-white" : "text-slate-800"}
              ${isRender ? "opacity-0 fade-in delay-10" : ""}
              w-8 h-8 flex justify-center items-center mb-5 lg:mb-0 cursor-pointer`}
        onClick={toggleDarkMode}
      >
        <ModeIcon isDark={isDark} />
      </div>
    </div>
  );
};

export default UserMenuBox;
