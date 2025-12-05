import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Modal.css";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import useModalClose from "../../hooks/useModalClose";
import ImageModal from "./ImageModal";

const ModalPortfolio = ({ toggleModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useModalClose(toggleModal);

  useEffect(() => {
    const handleToggleClick = function () {
      const span = this.querySelector("span");
      const ul = this.nextElementSibling;
      span.classList.toggle("toggleRotate");
      ul.classList.toggle("toggleShow");
    };

    const handleImageClick = function () {
      setSelectedImage(this.src);
    };

    const toggles = document.querySelectorAll(".modalToggle");
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", handleToggleClick);
    });

    const images = document.querySelectorAll(".modalImgList img");
    images.forEach((img) => {
      img.addEventListener("click", handleImageClick);
    });

    return () => {
      toggles.forEach((toggle) => {
        toggle.removeEventListener("click", handleToggleClick);
      });

      images.forEach((img) => {
        img.removeEventListener("click", handleImageClick);
      });
    };
  }, []);

  const handleCloseImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-12 flex  w-svw h-svh fixed top-0 left-0 z-40 overflow-scroll justify-center bg-black/80 backdrop-blur-sm">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={handleCloseImageModal} />
      )}
      <div className="fixed z-50 left-[88%] top-[9%] w-14 h-max flex flex-col justify-center">
        <button
          className="closeBtn bg-customBlue"
          onClick={(e) => {
            e.stopPropagation();
            toggleModal(null);
          }}
        >
          X
        </button>
        <a
          href="https://github.com/Jonggu-code/Portfolio"
          target="_blank"
          className="btnStyle w-full text-center"
        >
          <div className="w-[50px] h-[50px] rounded-[30px] border flex flex-wrap items-center justify-center bg-white">
            <svg
              className="w-[30px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
            </svg>
          </div>
          <span className="text-[12px] text-white">GitHub</span>
        </a>
        <a
          href="https://jonggu-portfolio.vercel.app/"
          target="_blank"
          className="btnStyle text-center"
        >
          <div className="w-[50px] h-[50px] p-1 rounded-[30px] border flex flex-wrap items-centers justify-center bg-white">
            <svg
              className="w-[25px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353.75.75 0 0 0-1.18.928 5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061l3-3Z"></path>
              <path d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353.75.75 0 0 0 1.18-.928 5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568l3.627-3.627Z"></path>
            </svg>
          </div>
          <span className="text-[12px] text-white">Link</span>
        </a>
        <a
          href="https://velog.io/@00whdcks/posts"
          target="_blank"
          className="btnStyle w-full text-center"
        >
          <div className="w-[50px] h-[50px] rounded-[30px] border flex flex-wrap items-center justify-center bg-white">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[25px]"
            >
              <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z" />
            </svg>
          </div>
          <span className="text-[12px] text-white">Velog</span>
        </a>
      </div>
      <div
        className="w-[70%] h-max pb-12 bg-white rounded-xl overflow-hidden text-center flex flex-wrap justify-center opacity-0 animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalHeader bg-customBlue">
          <div className="swiperBox h-[280px] w-[500px] mt-4 mb-6">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              speed={2000}
              className="rounded-xl"
            >
              {/* 각 슬라이드 구성 */}
              <SwiperSlide>
                <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                  <img src="./portfolio/page1.jpg" className="w-full h-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                  <img src="./portfolio/page2.jpg" className="w-full h-auto" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                  <img src="./portfolio/page3.jpg" className="w-full h-auto" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <h2 className="modalTitle">Portfolio</h2>
          <h3 className="modalTime">제작 기간 : 2025. 01. 03 ~ 개발 진행 중</h3>
        </div>
        <div className="modalBody">
          <div className="modalListTitle">
            <h1>📌 프로젝트 개요</h1>
            <h2 className="modalOverview">
              개인 포트폴리오 사이트를 가지고 있으면 타 사이트를 활용한
              포트폴리오보다 <br />
              저만의 역량과 강점을 어필하기에 더 좋을 것 같다는 생각에 제작하게
              되었습니다. <br />
              <b>UI/UX 디자인과 기획, 개발</b>까지 전 과정을 직접 수행하였고{" "}
              <b>직관적인 UI와 최적의 UX를 제공</b>하는 데 중점을 두었습니다.
            </h2>
          </div>
          <div className="modalListTitle">
            <h1>⚙️ 개발 환경 및 사용 기술</h1>
            <ul className="modalList">
              <li>
                <code>React</code>
              </li>
              <li>
                <code>Vite</code>
              </li>
              <li>
                <code>Node.js</code>
              </li>
              <li>
                <code>Tailwind CSS</code>
              </li>
            </ul>
          </div>
          <div className="modalListTitle">
            <h1>💡 주요 기능</h1>
            <div className="modalToggle">
              <span>▶</span> <b>자기소개 및 프로젝트 설명</b>
            </div>
            <ul className="modalToggleList">
              <li>
                이력서와 비슷한 목차와 내용으로 구성해 자기소개와 프로젝트
                설명을 한눈에 볼 수 있도록 제작했습니다.
              </li>
              <li>길어지는 내용은 토글창으로 구성해 가독성을 높혔습니다.</li>
            </ul>
            <div className="modalToggle">
              <span>▶</span> <b>단독 컬러 위주의 시각적으로 편안한 디자인</b>
            </div>
            <ul className="modalToggleList">
              <li>메인컬러를 설정하고 사이트 전체적으로 활용했습니다.</li>
              <li>
                차트를 내릴수록 어두워지는 배경으로 시각적으로 편안할 수 있도록
                디자인했습니다.
              </li>
            </ul>
            <div className="modalToggle">
              <span>▶</span> <b>프로젝트 상세 내용 Modal Window</b>
            </div>
            <ul className="modalToggleList">
              <li>
                각 프로젝트에 detail 버튼을 통해 모달창을 띄워 프로젝트의 상세
                내용을 사이트 내에서 바로 확인할 수 있도록 구성했습니다.
              </li>
              <li>
                포트폴리오 공유 사이트 Behance 와 Notion 의 레이아웃 디자인을
                참고하여 제작했습니다.
              </li>
            </ul>
            <div className="modalToggle">
              <span>▶</span> <b>다크 모드</b>
            </div>
            <ul className="modalToggleList">
              <li>
                네비게이션 바에서 다크모드 / 라이트모드 를 사용자의 편의에 따라
                조정할 수 있습니다.
              </li>
              <li>
                컴포넌트 전역적으로 다크모드 / 라이트모드를 구분하기 위해{" "}
                <code>DarkModeContext</code> 를 생성해 활용했습니다.
              </li>
            </ul>
            <div className="modalToggle">
              <span>▶</span> <b>컨텐츠 스크롤 이벤트</b>
            </div>
            <ul className="modalToggleList">
              <li>
                스크롤 이벤트에 따라 각 컨텐츠가 나타나는 애니메이션을
                구현했습니다.
              </li>
              <li>
                <code>UseRef</code>를 활용해 각 컨텐츠의 위치를 파악하고,{" "}
                <code>useScrollSection</code>을 통해 현재 스크롤 위치에서
                벗어나면 컨텐츠들이 fadeOut 되도록 구성했습니다.
              </li>
            </ul>
          </div>
          <div className="modalListTitle">
            <h1>✏️ 추후 추가 예정인 기능</h1>
            <div className="modalToggle">
              <span>▶</span> <b>반응형 웹 디자인</b>
            </div>
            <ul className="modalToggleList">
              <li>
                현재 PC 환경에 최적화된 디자인으로 제작되었으나, 모바일
                환경에서도 최적화된 디자인을 제공할 수 있도록 반응형 웹 디자인을
                추가할 예정입니다.
              </li>
            </ul>
            <div className="modalToggle">
              <span>▶</span> <b>Project 박스 레이아웃 변경</b>
            </div>
            <ul className="modalToggleList">
              <li>
                현재는 각 프로젝트가 큰 박스 형태로 제공하고 있으나, 프로젝트가
                추가되면 화면이 길어지는 단점이 있습니다.
              </li>
              <li>
                전체적인 레이아웃을 변경해 각 프로젝트들을 더 간략한 박스 형태로
                변경하고, detail 을 통해 내용을 파악할 수 있도록 변경할
                예정입니다.
              </li>
            </ul>
            <div className="modalToggle">
              <span>▶</span>{" "}
              <b>교육 수료 현황(Education), 경력 사항(Career) 추가</b>
            </div>
            <ul className="modalToggleList">
              <li>
                피드백을 통해 교육 수료 현황과 경력 사항이 있어야 한다는 사실을
                깨닫고, 추가할 예정입니다.
              </li>
            </ul>
          </div>
          <div className="modalListTitle">
            <h1>🚀 트러블 슈팅</h1>
            <div className="modalToggle">
              <span>▶</span>{" "}
              <b>Notion API 활용 불가능으로 Modal 창 직접 제작</b>
            </div>
            <ul className="modalToggleList">
              <li className="text-red-600">
                Notion API를 활용해 프로젝트 상세 내용을 모달창으로 불러오려
                했으나, 불러오는 과정에서 <b>버전 충돌과 Notion API Key 오류</b>
                로 인해 프로젝트 상세 내용을 원할하게 불러오지 못하는 문제가
                발생했습니다.
              </li>
              <li className="text-customBlue">
                이를 해결하기 위해 Notion API를 활용하지 않고,{" "}
                <b>직접 프로젝트 상세 내용을 전달할 수 있는 모달창을 제작</b>
                했습니다.
              </li>
            </ul>
            <div className="modalToggle">
              <span>▶</span> <b>프로젝트 Modal 창 이벤트 오류로 로직 수정</b>
            </div>
            <ul className="modalToggleList">
              <li className="text-red-600">
                <b>
                  프로젝트 모달창에서 각 Toggle 항목을 클릭했을 때 제대로
                  동작하지 않는 오류
                </b>
                가 있었고, 렌더링 시 해당 기능을 하는 <code>UseEffect</code> 가
                제대로 동작하지 않는 문제를 발견하였습니다.
              </li>
              <li className="text-customBlue">
                <b>
                  각 기능을 <code>handleToggleClick</code>,{" "}
                  <code>handleImageClick</code> 함수로 분리
                </b>
                하여 이벤트 리스너를 추가할 때 동일한 함수를 사용하도록
                수정했습니다.
              </li>
              <li className="text-customBlue">
                또한, 언마운트 시 이벤트 리스너를 제거하여{" "}
                <b>불필요한 메모리 누수를 방지하고 성능을 최적화</b>
                하였습니다.
              </li>
            </ul>
          </div>
          <div className="modalListTitle">
            <h1>
              📋 작업 이미지
              <p className="text-[14px] text-gray-400 font-thin">
                이미지를 클릭해 원본 이미지 파일을 확인할 수 있습니다.
              </p>
            </h1>
            <ul className="modalImgList">
              <li>
                <img src="./portfolio/page1.jpg" className="h-auto" />
                <span>자기 소개</span>
              </li>
              <li>
                <img src="./portfolio/page2.jpg" className="h-auto" />
                <span>About Me</span>
              </li>
              <li>
                <img src="./portfolio/page3.jpg" className="h-auto" />
                <span>Skills</span>
              </li>
              <li>
                <img src="./portfolio/page4.jpg" className="h-auto" />
                <span>Project</span>
              </li>
              <li>
                <img src="./portfolio/page5.jpg" className="h-auto" />
                <span>Project Detail</span>
              </li>
              <li>
                <img src="./portfolio/page6.jpg" className="h-auto" />
                <span>Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPortfolio;
