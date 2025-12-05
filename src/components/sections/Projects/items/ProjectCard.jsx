const ProjectCard = ({ data, isScrolled, toggleModal, delay }) => {
  return (
    <div
      className={`opacity-0 shadow-lg break-keep relative p-3 w-32 h-32 rounded-xl bg-white ${isScrolled ? "animate-textIn" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={(e) => {
        e.preventDefault();
        toggleModal(data.modal);
      }}
    >
      <h1 className="text-base pb-1 font-bold">{data.title}</h1>
      <h2 className="w-full text-xs text-gray-500">{data.date}</h2>
    </div>
  );
};

export default ProjectCard;
