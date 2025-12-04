import commonStyle from "../../styles/commonStyle";
import skillsStyle from "../../styles/skillsStyle";

const Tool = ({ isDark, isScrolled }) => {
  const toolList = [
    { src: "./logo/vscode.png", name: "VSCode" },
    { src: "./logo/intellij.png", name: "IntelliJ" },
    { src: "./logo/notion.png", name: "Notion" },
    { src: "./logo/githublogo.svg", name: "Github" },
    { src: "./logo/figmalogo.svg", name: "Figma" },
    { src: "./logo/vercellogo.svg", name: "Vercel" },
    { src: "./logo/photo.png", name: "Adobe PhotoShop" },
    { src: "./logo/illust.png", name: "Adobe Illustrator" },
  ];
  return (
    <div
      className={skillsStyle.wrapper(isScrolled)}
      style={{ animationDelay: "400ms" }}
    >
      <h1 className={commonStyle.subTitle(isDark)}>Tools</h1>
      <ul className={skillsStyle.list}>
        {toolList.map((item, i) => (
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

export default Tool;
