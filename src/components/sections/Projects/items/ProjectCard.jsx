const ProjectCard = ({ data, isScrolled, onOpen, delay }) => {
  return (
    <div
      className={`group w-max opacity-0 sm:w-full ${isScrolled ? "animate-textIn" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`relative h-32 w-32 cursor-pointer break-keep rounded-xl bg-white p-3 shadow-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 sm:h-44 sm:w-full`}
        onClick={onOpen}
      >
        <h1 className="mb-1 line-clamp-2 text-base font-bold sm:mb-2 sm:text-xl">
          {data.title}
        </h1>
        <h3 className="text-xs text-gray-500 sm:mb-3 sm:text-sm">
          {data.subtitle}
        </h3>
        <ul className="hidden w-full gap-2 sm:flex">
          {data.skills.map((skill, idx) => (
            <li className="rounded-xl bg-slate-200 px-2 py-1 text-sm" key={idx}>
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
