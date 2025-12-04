import commonStyle from "../../../styles/commonStyle";
import skillsStyle from "../../../styles/skillsStyle";

const Core = ({ isDark, isScrolled }) => {
  const coreList = [
    { src: "./logo/html.png", name: "HTML" },
    { src: "./logo/css.png", name: "CSS" },
    { src: "./logo/javascript.png", name: "Javascript" },
    { src: "./logo/jquery.png", name: "JQuery" },
    { src: "./logo/ajax.png", name: "AJAX" },
    { src: "./logo/react.png", name: "React" },
    { src: "./logo/vite.png", name: "Vite" },
    { src: "./logo/tailwind.png", name: "Tailwind" },
    { src: "./logo/axios.png", name: "Axios" },
    { src: "./logo/typescriptlogo.svg", name: "Typescript" },
    { src: "./logo/framermotionlogo.svg", name: "Motion" },
  ];
  return (
    <div
      className={skillsStyle.wrapper(isScrolled)}
      style={{ animationDelay: "200ms" }}
    >
      <div className={commonStyle.subTitle(isDark)}>
        <span>Core Skills</span>
      </div>
      {/* 아이콘 나열 ul/li */}
      <ul className={skillsStyle.list}>
        {coreList.map((item, i) => (
          <li key={i} className={skillsStyle.item}>
            <div className={skillsStyle.iconBox(isDark)}>
              <img
                className={skillsStyle.icon}
                src={item.src}
                alt={item.name}
              />
            </div>
            <span className={skillsStyle.label(isDark)}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Core;
