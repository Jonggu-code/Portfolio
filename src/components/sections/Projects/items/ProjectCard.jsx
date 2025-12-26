const ProjectCard = ({ data, isScrolled, onOpen, delay, isDark }) => {
  return (
    <div
      className={`group w-max opacity-0 sm:w-full ${isScrolled ? "animate-textIn" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`relative h-32 w-32 cursor-pointer break-keep rounded-xl p-3 shadow-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 sm:h-44 sm:w-full ${isDark ? "bg-customGray" : "bg-white"}`}
        onClick={onOpen}
      >
        <h1
          className={`mb-1 line-clamp-2 text-base font-bold sm:mb-2 sm:text-xl ${isDark ? "text-white" : "text-basicFont"}`}
        >
          {data.title}
        </h1>
        <h3
          className={`text-xs sm:mb-3 sm:text-sm ${isDark ? "text-gray-300" : "text-gray-500"}`}
        >
          {data.subtitle}
        </h3>
        <ul className={`hidden w-full gap-2 sm:flex`}>
          {data.skills.map((skill, idx) => (
            <li
              className={`rounded-xl px-2 py-1 text-sm ${isDark ? "bg-slate-500 text-gray-300" : "bg-slate-200 text-gray-500"}`}
              key={idx}
            >
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="absolute bottom-2 right-4 w-max pb-1 text-xs text-gray-400 sm:text-sm">
          {data.date}
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
