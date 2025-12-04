import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";

import React, { useContext, useRef, useState } from "react";

import ModalComponents from "../../modal/ModalComponents";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { DarkModeContext } from "../../../hooks/DarkModeContext";
import commonStyle from "../../styles/commonStyle";
import ProjectCard from "./items/ProjectCard";
import { projects } from "./items/projectsData";

const Projects = () => {
  // 다크모드 관련 useContext
  const { isDark } = useContext(DarkModeContext);

  // 스크롤 위치 관련
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef);

  // 모달창 관련
  const [openModal, setOpenModal] = useState(null);

  const toggleModal = (modalType) => {
    setOpenModal((prev) => (prev === modalType ? null : modalType));
  };

  const ModalComponent = openModal ? ModalComponents[openModal] : null;

  return (
    <div ref={aboutRef} className={commonStyle.wrapper(isDark, 300)}>
      {ModalComponent && <ModalComponent toggleModal={toggleModal} />}

      <div className={commonStyle.subWrapper}>
        <h1
          className={commonStyle.mainTitle(isScrolled)}
          style={{ animationDelay: `100ms` }}
        >
          Projects
        </h1>
        {projects.map((item, i) => (
          <ProjectCard
            key={item.id}
            data={item}
            isScrolled={isScrolled}
            toggleModal={toggleModal}
            isDark={isDark}
            delay={(i + 2) * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
