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
  ];
  return (
    <div
      className={`opacity-0 w-auto h-max pb-10 ${isScrolled ? "animate-skillsIn" : ""}`}
      style={{ animationDelay: "100ms" }}
    >
      <h1 className={`w-auto text-lg sm:text-xl font-bold mb-4 ml-2 sm:ml-3`}>
        Core Skills
      </h1>
      {/* 아이콘 나열 ul/li */}
      <ul className="grid place-items-center grid-cols-4 gap-x-4 gap-y-4">
        {coreList.map((item, i) => (
          <li
            key={i}
            className={`group w-max rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-1`}
          >
            <div
              className={`p-3 mb-1 shadow-md group-hover:shadow-gray-500 rounded-md transition-all duration-300 ${isDark ? "bg-customGray shadow-none" : "bg-white"}
              `}
            >
              <img
                className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18`}
                src={item.src}
                alt={item.name}
              />
            </div>
            <span
              className={`w-full h-0 text-center text-xs sm:text-base font-bold text-slate-500 transition-all duration-300 opacity-0 group-hover:opacity-100
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
