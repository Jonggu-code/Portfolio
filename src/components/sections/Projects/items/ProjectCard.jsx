const ProjectCard = ({ data, isScrolled, toggleModal, delay }) => {
  return (
    <div className="w-full flex justify-center leading-[1.6]">
      <div
        className={`opacity-0 shadow-lg break-keep relative p-3 w-32 h-w-32 rounded-xl bg-white flex flex-wrap ${isScrolled ? "animate-textIn" : ""}`}
        style={{ animationDelay: `${delay}ms` }}
        onClick={(e) => {
          e.preventDefault();
          toggleModal(data.modal);
        }}
      >
        <h1 className="text-lg font-bold">{data.title} </h1>
        <h2 className="w-full text-sm text-gray-500">{data.date}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
