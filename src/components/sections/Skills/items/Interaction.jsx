import commonStyle from "../../../styles/commonStyle";
import skillsStyle from "../../../styles/skillsStyle";

const Interation = ({ isDark, isScrolled }) => {
  const styleList = [
    { src: "./logo/css.png", name: "CSS" },
    { src: "./logo/framermotionlogo.svg", name: "Motion" },
  ];
  return (
    <div
      className={skillsStyle.wrapper(isScrolled)}
      style={{ animationDelay: "400ms" }}
    >
      <h1 className={commonStyle.subTitle(isDark)}>UI / Interation</h1>
      <ul className={skillsStyle.list}>
        {styleList.map((item, i) => (
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

export default Interation;
