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
  menuRef,
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
      ref={menuRef}
      className={`userMenuBox overflow-hidden transition-all duration-300 ease-in-out ${isRender ? "fade-in delay-7 opacity-0" : ""} ${isHamberActive ? "h-[220px]" : "h-0"} ${isDark ? "bg-slate-700/50" : "bg-slate-200/50"} fixed bottom-[75px] right-[16px] rounded-lg px-3 sm:right-[16px] sm:top-[55px] lg:relative lg:left-0 lg:top-0 lg:flex lg:h-max lg:flex-nowrap lg:justify-between lg:gap-6 lg:bg-inherit lg:p-0 lg:shadow-none lg:transition-none`}
    >
      {iconList.map((item) => (
        <a
          key={item.key}
          href={item.href}
          title={item.title}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          className={`transition-colors duration-200 hover:text-customBlue ${isDark ? "text-white" : "text-slate-800"} ${isRender ? `fade-in opacity-0 delay-${item.delay}` : ""} mb-5 flex h-8 w-8 items-center justify-center lg:mb-0 ${item.key === "email" ? "mt-3 lg:m-0" : ""}`} // 슬라이딩 애니메이션을 위해 어쩔 수 없는 선택..
          onClick={item.onClick}
        >
          {item.icon}
        </a>
      ))}
      {/* 다크모드 버튼 */}
      <div
        className={`transition-colors duration-200 hover:text-customBlue ${isDark ? "text-white" : "text-slate-800"} ${isRender ? "fade-in delay-10 opacity-0" : ""} mb-5 flex h-8 w-8 cursor-pointer items-center justify-center lg:mb-0`}
        onClick={toggleDarkMode}
      >
        <ModeIcon isDark={isDark} />
      </div>
    </div>
  );
};

export default UserMenuBox;
