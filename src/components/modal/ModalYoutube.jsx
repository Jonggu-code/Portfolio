import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Modal.css";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import useModalClose from "../../hooks/useModalClose";
import ImageModal from "./ImageModal";

const ModalYoutube = ({ toggleModal }) => {
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
      </div>
      <div className="modalBox" onClick={toggleModal}>
        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
          <div className="modalHeader bg-red-600">
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
                  <div className="w-full h-[290px] overflow-hidden rounded-xl bg-gray-800 flex items-center">
                    <img src="./youtube/index.jpg" className="w-full h-auto" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] overflow-hidden rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./youtube/storage.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] overflow-hidden rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./youtube/playlist.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] overflow-hidden rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./youtube/playpage.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <h2 className="modalTitle">Youtube Music Reworks</h2>
            <h3 className="modalTime">
              제작 기간 : 2024.10 - 2024.10 (1인 개발)
            </h3>
          </div>
          <div className="modalBody">
            <div className="modalListTitle">
              <h1>📌 프로젝트 개요</h1>
              <h2 className="modalOverview">
                유튜브 뮤직 클론 코딩을 진행한 프로젝트입니다. Youtube API 를
                활용하지 않고 전부 직접 개발했으며, 유튜브 뮤직의 기능을 최대한
                구현하고자 했습니다. <br />
                화면을 구현하며 보관함과 플레이리스트의 UI가 가독성이 떨어지는
                것 같아 디자인을 개선하였고, 음악을 재생하고 실시간으로 컨트롤
                할 수 있는 기능에 중점을 맞추고 개발을 진행하였습니다.
                <br />
                결과적으로 Javascript, JQuery, HTML, CSS 의 기능 숙지와 숙련도를
                높일 수 있었던 프로젝트였습니다.
              </h2>
            </div>
            <div className="modalListTitle">
              <h1>⚙️ 개발 환경 및 사용 기술</h1>
              <ul className="modalList">
                <li>
                  <code>HTML</code>
                </li>
                <li>
                  <code>CSS</code>
                </li>
                <li>
                  <code>Javascript</code>
                </li>
                <li>
                  <code>JQuery</code>
                </li>
              </ul>
            </div>
            <div className="modalListTitle">
              <h1>💡 주요 기능</h1>
              <div className="modalToggle">
                <span>▶</span> <b>로컬스토리지 기반 음악 재생</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  JS 객체로 음악 데이터를 저장하고, 로컬스토리지에 저장된
                  데이터를 불러와 음악을 재생할 수 있도록 구현했습니다.
                </li>
                <li>
                  장르, 재생 길이, 태그 등의 정보를 저장하고 사용했습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span>{" "}
                <b>
                  플레이어 실시간 제어 기능 (음악 길이, 볼륨, 버튼 상호작용)
                  구현
                </b>
              </div>
              <ul className="modalToggleList">
                <li>
                  음악이 재생되고 페이지 하단의 고정 플레이어로 이를 조정할 수
                  있는 실시간 제어 기능을 구현했습니다.
                </li>
                <li>
                  음악의 길이, 볼륨, 재생, 일시정지, 이전, 다음 등의 버튼을
                  구현했습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span> <b>반응형 웹 디자인</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  데스크탑 화면에서 비율에 따른 반응형 디자인을 제공할 수 있도록
                  반응형 웹 디자인을 추가했습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span> <b>메인 화면 무한 스크롤</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  유튜브 뮤직의 메인 화면처럼 무한 스크롤 기능을 추가했습니다.
                </li>
                <li>
                  현재는 제한된 정보로 같은 음악과 앨범이 스크롤되지만
                  로컬스토리지에 추가 데이터를 저장하면 바로 중복되지 않는
                  정보를 불러올 수 있도록 구현했습니다.
                </li>
              </ul>
            </div>
            <div className="modalListTitle">
              <h1>✏️ 추후 추가 예정인 기능</h1>
              <div className="modalToggle">
                <span>▶</span> <b>React 마이그레이션</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  현재 기본 Javascript 와 JQuery 를 사용해 개발했으나{" "}
                  <b>React 로 마이그레이션</b> 할 예정입니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span> <b>모바일 반응형</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  현재 데스크탑 화면에 최적화된 반응형 웹 디자인을 제공하고
                  있으나, 모바일 환경에 최적화된 반응형 웹 디자인을 추가할
                  예정입니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span> <b>음악 검색 기능 추가</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  현재는 로컬스토리지에 저장된 음악 데이터만을 불러와 재생할 수
                  있으나, 검색창을 통해 음악을 검색할 수 있도록 추가할
                  예정입니다.
                </li>
                <li>
                  React 로 마이그레이션 할 시, <code>filter()</code> 메서드를
                  활용해 간단한 검색기능이 구현 가능할 것이라 생각합니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span> <b>재생목록 생성 기능 추가</b>
              </div>
              <ul className="modalToggleList">
                <li>
                  DB와 Server를 활용한 재생목록 생성 기능은 불가능하지만,
                  재생목록을 추가했을 때의 보관함 화면을 추가할 수 있도록 구현할
                  예정입니다.
                </li>
              </ul>
            </div>
            <div className="modalListTitle">
              <h1>🚀 트러블 슈팅</h1>
              <div className="modalToggle">
                <span>▶</span> <b>유튜브 컨텐츠 iframe 활용 불가능</b>
              </div>
              <ul className="modalToggleList">
                <li className="text-red-600">
                  Youtube 컨텐츠를 iframe 으로 불러오는 방법을 사용하려 했으나,
                  <b>API 키를 발급받지 않아 사용할 수 없었습니다.</b>
                </li>
                <li className="text-customBlue">
                  이를 해결하기 위해 모든 UI를 직접 개발하고,
                  <b>로컬스토리지에 음악 데이터를 저장</b>하고, 해당 데이터를
                  불러와 음악을 재생할 수 있도록 구현했습니다.
                </li>
              </ul>
              <div className="modalToggle">
                <span>▶</span>
                <b>다음 음악으로 넘어가면 볼륨이 초기화되는 현상</b>
              </div>
              <ul className="modalToggleList">
                <li className="text-red-600">
                  다음 음악으로 넘어갈 때마다 <b>설정해놓은 볼륨이 초기화</b>
                  되는 현상을 발견했습니다.
                </li>
                <li className="text-customBlue">
                  이를 해결하기 위해
                  <b>다음 음악으로 넘어갈 때의 볼륨 수치를 변수에 저장</b>
                  하고, 해당 볼륨을 다음 음악 재생 시 불러와 적용할 수 있도록
                  구현했습니다.
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
                  <img src="./youtube/modal/page1.jpg" className="h-auto" />
                  <span>메인 화면</span>
                </li>
                <li>
                  <img src="./youtube/modal/page2.jpg" className="h-auto" />
                  <span>둘러 보기</span>
                </li>
                <li>
                  <img src="./youtube/modal/page3.jpg" className="h-auto" />
                  <span>보관함</span>
                </li>
                <li>
                  <img src="./youtube/modal/page4.jpg" className="h-auto" />
                  <span>보관함 목록</span>
                </li>
                <li>
                  <img src="./youtube/modal/page5.jpg" className="h-auto" />
                  <span>뮤직 플레이어</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalYoutube;
