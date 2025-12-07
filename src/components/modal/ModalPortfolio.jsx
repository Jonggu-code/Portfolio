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
  const dataList = {
    links: [
      {
        href: "https://github.com/Jonggu-code/Portfolio",
        img: "/logo/githublogo.svg",
        alt: "Github Link",
        label: "Github",
      },
      {
        href: "https://jonggu-portfolio.vercel.app/",
        img: "/logo/linkbtn.svg",
        alt: "Project Link",
        label: "Link",
      },
      {
        href: "https://velog.io/@00whdcks/posts",
        img: "/logo/veloglogo.svg",
        alt: "Velog Link",
        label: "Velog",
      },
    ],
    slides: [
      { src: "./portfolio/page1.jpg", alt: "Portfolio Page 1" },
      { src: "./portfolio/page2.jpg", alt: "Portfolio Page 2" },
      { src: "./portfolio/page3.jpg", alt: "Portfolio Page 3" },
    ],
  };

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
    <div className="px-6 w-svw h-[100dvh] fixed inset-0 z-40 justify-center bg-black/50 overflow-scroll">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={handleCloseImageModal} />
      )}
      <div className="fixed inset-0 w-full h-12 flex justify-between">
        {/* 링크 박스 */}
        <div className="w-max flex">
          {dataList.links.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              className="flex text-center"
            >
              <div className="w-8 h-8 rounded-full border flex flex-col justify-center items-center bg-white">
                <img src={item.img} alt={item.alt} className="w-6 h-6" />
              </div>
              <span className="text-xs text-white">{item.label}</span>
            </a>
          ))}
        </div>
        {/* 닫기 버튼 */}
        <button
          className="w-8 h-8 rounded-full bg-customBlue flex justify-center items-center"
          onClick={(e) => {
            e.stopPropagation();
            toggleModal(null);
          }}
        >
          <img
            src="/logo/closebtnwhite.svg"
            alt="Close Button"
            className="w-4 h-4"
          />
        </button>
      </div>
      <div
        className="w-full h-max mt-14 bg-white rounded-xl text-center flex flex-wrap justify-center opacity-0 animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 전체 */}
        <div className="w-full h-max flex flex-col p-4 bg-customBlue">
          {/* 스위퍼 박스 */}
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              speed={2000}
            >
              {/* 각 슬라이드 구성 */}
              {dataList.slides.map((item, idx) => (
                <SwiperSlide key={idx} className="rounded-lg overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto"
                  />
                </SwiperSlide>
              ))}
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
              <b>UI/UX 디자인과 기획, 개발</b>까지 전 과정을 직접 수행하였고
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
