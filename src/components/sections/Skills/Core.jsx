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
  ];
  return (
    <div
      className={`opacity-0 w-full h-max pb-10 ${isScrolled ? "animate-skillsIn" : ""}`}
      style={{ animationDelay: "100ms" }}
    >
      <h1 className={`w-auto text-lg sm:text-xl font-bold mb-4 ml-2 sm:ml-3`}>
        Core Skills
      </h1>
      {/* 아이콘 나열 ul/li */}
      <ul className="grid grid-cols-4 gap-4">
        {coreList.map((item, i) => (
          <li
            key={i}
            className={`group w-max rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-1`}
          >
            <div
              className={`p-2 shadow-md group-hover:shadow-gray-500 rounded-md transition-all duration-300 ${isDark ? "bg-customGray" : "bg-white"}`}
            >
              <img className={`w-14 h-14`} src={item.src} alt={item.name} />
            </div>
            <span
              className={`w-full h-0 text-center text-sm sm:text-base font-bol transition-all duration-300 group-hover:h-2
              ${isDark ? "text-customGray" : "text-basicFont"}`}
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Core;
