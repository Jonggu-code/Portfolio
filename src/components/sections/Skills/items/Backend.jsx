import commonStyle from "../../../styles/commonStyle";
import skillsStyle from "../../../styles/skillsStyle";

const Backend = ({ isDark, isScrolled }) => {
  const backList = [
    { src: "./logo/mysql.png", name: "MySQL" },
    { src: "./logo/mariadb.png", name: "MariaDB" },
  ];
  return (
    <div
      className={skillsStyle.wrapper(isScrolled)}
      style={{ animationDelay: "300ms" }}
    >
      <h1 className={commonStyle.subTitle(isDark)}>Backend (DB)</h1>
      <ul className={skillsStyle.list}>
        {backList.map((item, i) => (
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

export default Backend;
