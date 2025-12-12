import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiperStyle.css";
import "./Modal.css";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import useModalClose from "../../hooks/useModalClose";
import ImageModal from "./ImageModal";
import { modalData } from "../../util/modalData";
import modalStyle from "../styles/modalStyle";
import ToggleItem from "./ToggleItem";

const ModalPortfolio = ({ toggleModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useModalClose(toggleModal);

  const handleCloseImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-3 w-svw h-[100dvh] fixed inset-0 z-40 justify-center bg-black/50 overflow-scroll">
      {selectedImage && (
        <ImageModal src={selectedImage} onClose={handleCloseImageModal} />
      )}
      {/* 링크 박스 */}
      <div className="fixed top-3 right-2 flex flex-col gap-3 w-max h-max  justify-between items-center z-10 rounded-lg">
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
        <div className="w-max flex flex-col gap-2 items-center text-basicFont">
          {modalData.portfolio.links.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              className="flex flex-col text-white text-[10px] justify-center items-center"
            >
              <div className="w-8 h-8 rounded-full border flex justify-center items-center bg-white mb-px">
                <img src={item.img} alt={item.alt} className="w-5 h-w-5" />
              </div>
              <p>{item.label}</p>
            </a>
          ))}
        </div>
      </div>
      <div
        className="w-[90%] h-max bg-white rounded-xl text-center flex flex-wrap justify-center opacity-0 animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 전체 */}
        <div className="w-full h-max flex flex-col p-4 text-white bg-customBlue rounded-t-xl">
          {/* 스위퍼 박스 */}
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              speed={1000}
            >
              {/* 각 슬라이드 구성 */}
              {modalData.portfolio.slides.map((item, idx) => (
                <SwiperSlide key={idx} className="rounded-lg overflow-hidden">
                  <img src={item.src} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h2 className="text-2xl font-bold mb-3">Portfolio</h2>
          <h3 className="text-sm">2025. 01. 03 ~ 개발 진행 중</h3>
        </div>
        <div className="px-6 pt-3 pb-5 text-left flex flex-col gap-7">
          <div className="summary">
            <h1 className={modalStyle.title}>📌 프로젝트 개요</h1>
            <div className="text-sm leading-6 break-keep flex flex-col gap-3">
              {modalData.portfolio.summary.map((item, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: item }}></p>
              ))}
            </div>
          </div>
          <div className="skills">
            <h1 className={modalStyle.title}>⚙️ 개발 환경 및 사용 기술</h1>
            <div className="flex flex-col gap-2 text-xs">
              {modalData.portfolio.skills.map((item, idx) => (
                <code key={idx}>- {item}</code>
              ))}
            </div>
          </div>
          <div className="features">
            <h1 className={modalStyle.title}>💡 주요 기능</h1>
            {modalData.portfolio.FeaturesList.map((item, idx) => (
              <ToggleItem
                key={idx}
                title={item.title}
                contents={item.contents}
              />
            ))}
          </div>
          <div className="addFeatures">
            <h1 className={modalStyle.title}>✏️ 추후 추가 예정인 기능</h1>
            {modalData.portfolio.addFeaturesList.map((item, idx) => (
              <ToggleItem
                key={idx}
                title={item.title}
                contents={item.contents}
              />
            ))}
          </div>
          <div className="troubleShooting">
            <h1 className={modalStyle.title}>🚀 트러블 슈팅</h1>
            {modalData.portfolio.troubleShooting.map((item, idx) => (
              <ToggleItem
                key={idx}
                title={item.title}
                contents={item.contents}
                variant="trouble"
              />
            ))}
          </div>
          <div className="imagePreviewBox">
            <h1 className={modalStyle.title}>
              📋 작업 이미지
              <p className="text-xs text-gray-400 font-thin">
                이미지를 클릭해 원본 이미지 파일을 확인할 수 있습니다.
              </p>
            </h1>
            <ul className="text-center grid grid-cols-2 gap-2">
              {modalData.portfolio.images.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-gray-200 rounded-lg p-1 flex flex-col justify-between gap-1"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="rounded-md cursor-pointer hover:opacity-80 transition"
                  />
                  <span className="text-xs">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPortfolio;
