import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiperStyle.css";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ImageModal from "./ImageModal";
import { modalData } from "../../util/modalData";
import modalStyle from "../styles/modalStyle";
import ToggleItem from "./ToggleItem";

const CommonModal = ({ projectId, onClose }) => {
  const data = modalData[projectId];

  if (!data) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleCloseImageModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div
      className="fixed inset-0 z-40 box-border flex h-[100dvh] w-full justify-center gap-2 overflow-hidden bg-black/70 p-2 text-basicFont sm:p-4"
      onClick={onClose}
    >
      {selectedImageIndex !== null && (
        <ImageModal
          images={data.images}
          startIndex={selectedImageIndex}
          onClose={handleCloseImageModal}
        />
      )}

      {/* 메인 콘텐츠 박스 */}
      <div className="no-scrollbar h-dvh w-[calc(100%-40px)] max-w-[1000px] overflow-scroll pb-10">
        <div
          className={`flex h-max animate-modalIn flex-wrap justify-center rounded-xl bg-white text-center opacity-0`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 헤더 전체 */}
          <div
            className={`flex h-max w-full flex-col rounded-t-xl p-4 text-white ${data.color}`}
          >
            {/* 스위퍼 박스 */}
            <div>
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop
                speed={1000}
              >
                {/* 각 슬라이드 구성 */}
                {data.slides.map((item, idx) => (
                  <SwiperSlide key={idx} className="overflow-hidden rounded-lg">
                    <img src={item.src} alt={item.alt} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <h2 className="mb-3 text-2xl font-bold">{data.title}</h2>
            <h3 className="text-sm">{data.date}</h3>
          </div>

          {/* 컨텐츠 메인 박스 */}
          <div className="flex flex-col gap-7 px-6 pb-5 pt-3 text-left">
            {/* 프로젝트 개요 */}
            <div className="summary">
              <h1 className={modalStyle.title}>📌 프로젝트 개요</h1>
              <div className="flex flex-col gap-3 break-keep text-sm leading-6">
                {data.summary.map((item, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: item }}></p>
                ))}
              </div>
            </div>

            {/* 개발 환경 및 사용 기술 */}
            <div className="skills">
              <h1 className={modalStyle.title}>⚙️ 개발 환경 및 사용 기술</h1>
              <div className="flex flex-col gap-2 text-xs">
                {data.skills.map((item, idx) => (
                  <code key={idx}>- {item}</code>
                ))}
              </div>
            </div>

            {/* 팀 프로젝트 시 역할 구분 (팀 프로젝트시에만) */}
            {data.projectRole ? (
              <div className="projectRole">
                <h1 className={modalStyle.title}>📙 담당 역할</h1>
                {data.projectRole.map((item, idx) => (
                  <ToggleItem
                    key={idx}
                    title={item.title}
                    contents={item.contents}
                  />
                ))}
              </div>
            ) : null}

            {/* 주요 기능 */}
            <div className="features">
              <h1 className={modalStyle.title}>💡 주요 기능</h1>
              {data.FeaturesList.map((item, idx) => (
                <ToggleItem
                  key={idx}
                  title={item.title}
                  contents={item.contents}
                />
              ))}
            </div>

            {/* 추후 추가 예정 기능 (개선 사항) */}
            <div className="addFeatures">
              <h1 className={modalStyle.title}>✏️ 추후 추가 예정인 기능</h1>
              {data.addFeaturesList.map((item, idx) => (
                <ToggleItem
                  key={idx}
                  title={item.title}
                  contents={item.contents}
                />
              ))}
            </div>

            {/* 트러블 슈팅 */}
            <div className="troubleShooting">
              <h1 className={modalStyle.title}>🚀 트러블 슈팅</h1>
              {data.troubleShooting.map((item, idx) => (
                <ToggleItem
                  key={idx}
                  title={item.title}
                  contents={item.contents}
                  variant="trouble"
                />
              ))}
            </div>

            {/* 이미지 미리보기 박스 */}
            <div className="imagePreviewBox">
              <h1 className={modalStyle.title}>
                📋 작업 이미지
                <p className="text-xs font-thin text-gray-400">
                  이미지를 클릭해 원본 이미지 파일을 확인할 수 있습니다.
                </p>
              </h1>
              <ul className="grid grid-cols-2 gap-2 text-center">
                {data.images.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col justify-between gap-1 rounded-lg bg-gray-200 p-1"
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-20 cursor-pointer rounded-md object-cover object-top transition hover:opacity-80"
                    />
                    <span className="text-xs">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 링크 박스 */}
      <div className="flex h-max w-10 flex-col items-center justify-between gap-3 rounded-lg sm:w-16 sm:gap-4">
        {/* 닫기 버튼 */}
        <button
          className={`flex h-8 w-8 items-center justify-center rounded-full sm:h-12 sm:w-12 ${data.color}`}
          onClick={(e) => {
            e.stopPropagation();
            onClose(null);
          }}
        >
          <img
            src="/logo/closebtnwhite.svg"
            alt="Close Button"
            className="h-4 w-4 sm:h-6 sm:w-6"
          />
        </button>

        {/* 링크 모음 (깃허브, 프로젝트 링크, Velog 링크) */}
        <div className="flex w-max flex-col items-center gap-2 text-basicFont sm:gap-3">
          {data.links.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              className="flex flex-col items-center justify-center text-xs text-white sm:text-sm"
            >
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full border bg-white sm:h-12 sm:w-12">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-5 w-5 sm:h-8 sm:w-8"
                />
              </div>
              <p>{item.label}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
