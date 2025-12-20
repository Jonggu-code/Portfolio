import { handleNav } from "../../../../util/handleNav";

const menus = [
  { key: "introduce", label: "Intro" },
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

const NavMenu = ({
  isDark,
  isRender,
  activeSection,
  scrollToSection,
  sectionRefs,
}) => {
  return (
    <nav
      className={`headMenu flex w-full items-center justify-center gap-[30px] sm:w-2/4 ${isDark ? "text-white" : ""}`}
    >
      {menus.map((menu, i) => (
        <a
          key={menu.key}
          href={`#${menu.key}`}
          onClick={(e) => handleNav(e, sectionRefs, menu.key, scrollToSection)}
          className={`cursor-pointer transition-colors duration-200 hover:text-customBlue ${isRender ? `fade-in opacity-0 delay-${3 + i}` : ""} ${activeSection === menu.key ? "text-customBlue" : " "}`}
        >
          {menu.label}
        </a>
      ))}
    </nav>
  );
};

export default NavMenu;
