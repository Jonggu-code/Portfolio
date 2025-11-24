import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Modal.css";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import useModalClose from "../../hooks/useModalClose";
import ImageModal from "./ImageModal";

const ModalMatmap = ({ toggleModal }) => {
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
    <>
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={handleCloseImageModal} />
      )}
      <div className="btnBox">
        <button
          className="closeBtn bg-customBlue"
          onClick={(e) => {
            e.stopPropagation();
            toggleModal();
          }}
        >
          X
        </button>
        <a
          href="https://github.com/Jonggu-code/MatMap_portfolio"
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
          href="https://jonggu-code.github.io/MatMap_portfolio/HTML,CSS,JS/index.html"
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
      <div className="modalBox" onClick={toggleModal}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <div className="modalHeader bg-orange-400">
            <div className="swiperBox h-[280px] w-[500px] mt-4 mb-6">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                speed={1000}
                className="rounded-xl"
              >
                {/* 각 슬라이드 구성 */}
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img src="./Matmap/index.png" className="w-full h-auto" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img src="./Matmap/detail.jpg" className="w-full h-auto" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img src="./Matmap/detail2.jpg" className="w-full h-auto" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./Matmap/rankpage.png"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img src="./Matmap/mypage.png" className="w-full h-auto" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img src="./Matmap/review.png" className="w-full h-auto" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <h2 className="modalTitle">MatMap - 맛맵</h2>
            <h3 className="modalTime">
              제작 기간 : 2024.11 - 2024.12 (5인 팀개발)
            </h3>
          </div>
          <div className="modalBody">
            <div className="modalListTitle">
              <h1>📌 프로젝트 개요</h1>
              <h2 className="modalOverview break-keep">
                사람들이 맛집을 검색함에 있어 가장 원하는 정보, 정제된 정보를
                전달해주는 사이트를 제작했습니다. <br />
                팀에서 <b>팀장</b> 역할을 맡았으며{" "}
                <b>UI/UX 디자인과 프로젝트 기획을 담당</b>했습니다. <br />
                <b>
                  메인 화면, 맛집 상세 페이지, 리뷰 페이지, 랭킹 페이지,
                  마이페이지
                </b>{" "}
                등의 페이지를 제작하고 <br />
                <b>프론트 팀원 간 디자인 스타일과 레이아웃을 통일</b>시키는
                작업을 했습니다.
              </h2>
            </div>
            <div className="modalListTitle">
              <h1>⚙️ 개발 환경 및 사용 기술</h1>
              <ul className="modalList">
                <li>
                  <code>HTML5</code>
                </li>
                <li>
                  <code>CSS3</code>
                </li>
                <li>
                  <code>JavaScript</code>
                </li>
                <li>
                  <code>JQuery</code>
                </li>
                <li>
                  <code>AJAX</code>
                </li>
              </ul>
            </div>
            <div className="modalListTitle">
              <h1>💡 주요 기능</h1>
              <div className="modalToggle">
                <span>▶</span>{" "}
                <b>카카오맵 API 를 활용해 역삼역 주변의 맛집 정보 전달</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  약 3주간의 기간동안 교육원이 위치하고 있는 역삼역 주변의 맛집
                  검색 사이트를 카카오맵 API 를 활용해 제작하였습니다.
                </li>
                <li>
                  각 음식점 위치에 마커가 뜨며 클릭하면 직접 제작한 커스텀
                  인포윈도우가 뜨며 음식점 정보를 간결하게 확인할 수 있습니다.
                </li>
                <li>
                  우측 상단에 위치한 유저박스 왼쪽에 있는 아이콘을 클릭하면 현재
                  내가 보고있는 화면을 기준으로 음식점을 재검색 할 수 있습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span> <b>회원 중심적 서비스 구성</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  각 음식점은 유저가 남긴 리뷰 갯수, 찜 갯수를 볼 수 있으며 이
                  수치는 '월간 맛집 랭킹' 을 선정하는데에 사용됩니다.
                </li>
                <li>
                  로그인을 한 유저는 내가 찜한 식당, 내가 남긴 리뷰 들을
                  마이페이지에서 확인할 수 있고, 각 컨텐츠를 모아서 볼 수 있는
                  페이지가 있습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span> <b>평점에 따른 '월간 맛집 랭킹' 서비스</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  매달 가장 많은 찜을 받은 음식점 중에서 리뷰 평균 평점이 높은
                  순으로 '월간 맛집 랭킹'을 선정합니다.
                </li>
                <li>
                  랭킹 페이지에서는 각 음식점의 평점, 찜 갯수, 리뷰 갯수, 주소,
                  영업 유무 등의 음식점 정보를 확인할 수 있으며, 음식점을
                  클릭하면 상세 페이지로 이동합니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span>{" "}
                <b>
                  현재 시간에 따른 영업 상태 업데이트 (영업 중, 브레이크 타임,
                  영업 종료)
                </b>
              </div>
              <ul className="modalToggleList">
                <li>
                  음식점 DB에 저장되어있는 일자별 영업시간과 현재 시간을 비교해
                  영업 유무를 표시합니다.
                </li>
                <li>
                  음식점 정보를 볼 때 현재 갈 수 있는 식당인지, 브레이크 타임은
                  아닌지와 같은 실시간 영업 정보를 한눈에 볼 수 있으면 좋을 것
                  같았습니다.
                </li>
              </ul>
            </div>
            <div className="modalListTitle">
              <h1>📙 담당 역할</h1>
              <div className="modalToggle">
                <span>▶</span> <b>프로젝트 기획 & UI/UX 디자인</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  전체 프로젝트의 기획을 담당하였으며, 프로젝트의 주제와 목표를
                  설정하고, 메인컬러 선정과 로고를 제작하고 각 중요 페이지들을
                  제작하였습니다.
                </li>
                <li>
                  최우선 목표로 <b>가독성</b>을 생각하였고, 다음으로{" "}
                  <b>유저 편의성과 만족스러운 경험</b>을 중점으로 디자인을
                  진행했습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span>{" "}
                <b>프로젝트 일정 관리 및 팀원 간 원활한 커뮤니케이션 유치</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  팀원들의 역할 분담과 일정을 관리하였으며, 팀원들 간의
                  커뮤니케이션을 원활하게 하기 위해 매일 저녁 스크럼을
                  진행하였습니다.
                </li>
                <li>
                  결과적으로, 팀원들 간의 의견 충돌을 최소화하고 작업 일정을
                  부담없이 소화하며 프로젝트를 원활하게 진행할 수 있었습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span>{" "}
                <b>
                  페이지 제작 (메인화면, 음식점 상세 페이지, 후기 작성 페이지,
                  월간 맛집 랭킹 페이지, 마이페이지 )
                </b>
              </div>
              <ul className="modalToggleList">
                <li>
                  <b>메인화면</b> : 카카오맵 API 를 활용해 JS로 각 음식점 마커
                  배치와 커스텀 인포윈도우 제작 및 유저박스 구현
                </li>
                <li>
                  <b>페이지 공통 헤더 제작</b> : 메인 화면을 제외한 모든
                  페이지의 공통 헤더 제작
                </li>
                <li>
                  <b>음식점 상세 페이지</b> : 화면 상단 슬라이더와 음식점 정보,
                  리뷰 작성, 찜하기 버튼 등의 기능을 구현. 스크롤 따라다니는
                  추천 맛집 박스 구현
                </li>
                <li>
                  <b>후기 작성 페이지</b> : 각 항목 별점입력 기능, AJAX 활용
                  다중 이미지 업로드 기능 구현, 이미지 업로드 시 파일 형식, 크기
                  유효성 체크
                </li>
                <li>
                  <b>마이페이지</b> : 내가 찜한 식당, 내가 남긴 리뷰 확인 기능
                  구현 및 개인 정보 수정 기능 구현
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span>{" "}
                <b>프론트 팀원 간 디자인 스타일과 레이아웃 통일 작업</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  프로젝트의 디자인 스타일과 레이아웃을 통일하기 위해 프론트
                  팀원들과 논의하고, 통일 된 디자인 스타일을 적용,
                  수정하였습니다.
                </li>
              </ul>
            </div>
            <div className="modalListTitle">
              <h1>🚀 트러블 슈팅</h1>
              <div className="modalToggle">
                <span>▶</span>{" "}
                <b>
                  후기 작성 페이지에서 이미지 첨부할 때 마다 이미지 리스트
                  초기화 이슈
                </b>
              </div>
              <ul className="modalToggleList">
                <li className="text-red-600">
                  이미지를 추가할 때 마다 이미 업로드해 놓은 이미지들이
                  리셋되고, 업로드한 이미지를 삭제하는 버튼이 제대로 동작하지
                  않는 오류가 있었습니다.
                </li>
                <li className="text-customBlue">
                  이를 해결하기 위해 업로드된 각 이미지 파일에
                  <code>data-id : uniqueId</code>로 고유한 id를 부여한 뒤
                  이미지를 추가할 때마다 해당 객체를 배열에 추가하고, 삭제할 때
                  해당 객체를 배열에서 제거하는 방식으로 해결하였습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span>{" "}
                <b>
                  식당 후기 사진, 후기 갯수가 많아서 웹사이트 스크롤이 길어짐
                </b>
              </div>
              <ul className="modalToggleList">
                <li className="text-red-600">
                  식당 상세 페이지에서 후기 사진과 후기 갯수가 많아질 때
                  스크롤이 길어져 사용자 경험이 좋지 않았습니다.
                </li>
                <li className="text-customBlue">
                  <b>더보기 버튼</b>을 만들어 사용자가 원할 때 더 많은 사진과
                  후기를 볼 수 있도록 하였습니다.
                </li>
                <li className="text-customBlue">
                  또한, 현재 화면에 보여지는 사진과 후기 갯수를 카운팅하여 끝에
                  다다랐을 때 더보기 버튼을 숨기도록 하여 사용자 경험을
                  개선하였습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span> <b>검색 기록 없을 시 사용자 경험 이슈</b>
              </div>
              <ul className="modalToggleList">
                <li className="text-red-600">
                  검색기록이 없을 때 빈화면이 뜨는것이 사용자 경험에 좋지
                  않았습니다.
                </li>
                <li className="text-customBlue">
                  메인화면에서 검색기록이 뜨지 않을 때의 기본 화면을
                  추가하였습니다.
                </li>
                <li className="text-customBlue">
                  또한, 처음 회원가입한 유저가 마이페이지를 갔을 때 내가 찜한
                  맛집과 내가 남긴 리뷰가 없을 때 보이는 기본 화면과 각 페이지
                  기본 화면도 같이 추가하였습니다.
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
                  <img src="./Matmap/modal/page1.png" className="h-auto" />
                  <span>메인 화면</span>
                </li>
                <li>
                  <img src="./Matmap/modal/page2.jpg" className="h-auto" />
                  <span>음식점 상세 페이지</span>
                </li>
                <li>
                  <img src="./Matmap/modal/page3.png" className="h-auto" />
                  <span>맛집 랭킹 페이지</span>
                </li>
                <li>
                  <img src="./Matmap/modal/page4.png" className="h-auto" />
                  <span>후기 작성 1페이지</span>
                </li>
                <li>
                  <img src="./Matmap/modal/page5.png" className="h-auto" />
                  <span>후기 작성 2페이지</span>
                </li>
                <li>
                  <img src="./Matmap/modal/page6.png" className="h-auto" />
                  <span>마이페이지</span>
                </li>
                <li>
                  <img src="./Matmap/modal/page7.png" className="h-auto" />
                  <span>로그인</span>
                </li>
                <li>
                  <img src="./Matmap/modal/page8.png" className="h-auto" />
                  <span>회원가입</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMatmap;
