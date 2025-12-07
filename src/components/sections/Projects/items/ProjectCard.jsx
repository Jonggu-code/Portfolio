const ProjectCard = ({ data, isScrolled, toggleModal, delay }) => {
  return (
    <div
      className={`relative opacity-0 shadow-lg break-keep p-3 w-32 h-32 rounded-xl bg-white ${isScrolled ? "animate-textIn" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={(e) => {
        e.preventDefault();
        toggleModal(data.modal);
      }}
    >
      <h1 className="text-base pb-1 font-bold line-clamp-2">{data.title}</h1>
      <h3 className="text-xs text-gray-500">{data.subtitle}</h3>
      <h2 className="absolute bottom-2 right-4 w-max text-xs pb-1 text-gray-400">
        {data.date}
      </h2>
    </div>
  );
};

export default ProjectCard;
