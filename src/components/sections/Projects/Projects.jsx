import { useContext, useEffect, useRef, useState } from "react";

import useScrollPosition from "../../../hooks/useScrollPosition";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import commonStyle from "../../styles/commonStyle";
import ProjectCard from "./items/ProjectCard";
import { projects } from "../../../util/projectsData";
import CommonModal from "../../modal/CommonModal";

const Projects = () => {
  // 다크모드 관련 useContext
  const { isDark } = useContext(DarkModeContext);

  // 스크롤 위치 관련
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef);

  // 모달창 관련
  const [openProjectId, setOpenProjectId] = useState(null);

  const openModal = (projectId) => {
    setOpenProjectId(projectId);
  };

  const closeModal = () => {
    setOpenProjectId(null);
  };

  useEffect(() => {
    if (openProjectId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openProjectId]);

  return (
    <div ref={aboutRef} className={commonStyle.wrapper(isDark, 300)}>
      {openProjectId && (
        <CommonModal projectId={openProjectId} onClose={closeModal} />
      )}

      <div className={commonStyle.subWrapper}>
        <h1
          className={`${commonStyle.mainTitle(isScrolled)} !mb-3 sm:!mb-4`}
          style={{ animationDelay: `100ms` }}
        >
          Projects
        </h1>
        <h2
          className={`${isScrolled ? "animate-textIn" : ""} mb-4 ml-1 text-sm text-gray-500 sm:mb-5 sm:text-base`}
          style={{ animationDelay: "100ms" }}
        >
          카드를 클릭해 프로젝트의 상세정보 및 링크를 확인하실 수 있습니다.
        </h2>
        <div className="flex w-full justify-center">
          <div className="grid w-max grid-cols-2 gap-4 sm:w-full lg:grid-cols-3">
            {projects.map((item, i) => (
              <ProjectCard
                key={item.id}
                data={item}
                onOpen={() => {
                  openModal(item.id);
                }}
                isScrolled={isScrolled}
                isDark={isDark}
                delay={(i + 2) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
