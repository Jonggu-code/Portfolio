const Education = ({ isDark, isScrolled }) => {
  const educationList = [
    {
      logo: "/logo/universitylogo.svg",
      title: "동양대학교 동두천캠퍼스",
      graduate: "2017. 02 ~ 2023. 02",
      category: "공간디자인학과",
    },
    {
      logo: "/logo/highschoollogo.svg",
      title: "건국대학교 사범대학 부속고등학교",
      graduate: "2014. 02 ~ 2017. 02",
      category: "인문계",
    },
  ];

  return (
    <div
      className={`w-full h-max justify-center items-center mt-20 opacity-0 ${isScrolled ? "animate-textIn" : ""}`}
      style={{ animationDelay: `200ms` }}
    >
      {/* title */}
      <h1 className={`text-center w-auto text-[26px] font-bold mb-4`}>
        Education
      </h1>

      {/* contents */}
      <div className="w-full h-max grid grid-cols-2 sm:grid-cols-3 gap-3">
        {educationList.map((edu, i) => (
          <div
            key={i}
            className={`rounded-lg p-3 flex flex-col justify-center items-center gap-4 shadow-md ${isDark ? "bg-customGray shadow-white " : "bg-white"}`}
          >
            <div className="flex justify-center">
              <img
                className="w-20 h-20 sm:w-32 sm:h-32"
                src={edu.logo}
                alt={edu.title}
              />
            </div>
            <div className="w-full h-max break-keep text-center flex flex-col gap-1">
              <h1 className="text-lg font-bold">{edu.title}</h1>
              <h2 className="w-full text-sm">{edu.graduate}</h2>
              <h3>{edu.category}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
