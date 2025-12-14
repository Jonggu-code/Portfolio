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

  const [selectedImage, setSelectedImage] = useState(null);

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
          className={`w-8 h-8 rounded-full flex justify-center items-center ${data.color}`}
          onClick={(e) => {
            e.stopPropagation();
            onClose(null);
          }}
        >
          <img
            src="/logo/closebtnwhite.svg"
            alt="Close Button"
            className="w-4 h-4"
          />
        </button>

        {/* 링크 모음 (깃허브, 프로젝트 링크, Velog 링크) */}
        <div className="w-max flex flex-col gap-2 items-center text-basicFont">
          {data.links.map((item, idx) => (
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

      {/* 메인 콘텐츠 박스 */}
      <div
        className="w-[90%] h-max bg-white rounded-xl text-center flex flex-wrap justify-center opacity-0 animate-modalIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 전체 */}
        <div
          className={`w-full h-max flex flex-col p-4 text-white rounded-t-xl ${data.color}`}
        >
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
              {data.slides.map((item, idx) => (
                <SwiperSlide key={idx} className="rounded-lg overflow-hidden">
                  <img src={item.src} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h2 className="text-2xl font-bold mb-3">{data.title}</h2>
          <h3 className="text-sm">{data.date}</h3>
        </div>

        {/* 컨텐츠 메인 박스 */}
        <div className="px-6 pt-3 pb-5 text-left flex flex-col gap-7">
          {/* 프로젝트 개요 */}
          <div className="summary">
            <h1 className={modalStyle.title}>📌 프로젝트 개요</h1>
            <div className="text-sm leading-6 break-keep flex flex-col gap-3">
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
              <p className="text-xs text-gray-400 font-thin">
                이미지를 클릭해 원본 이미지 파일을 확인할 수 있습니다.
              </p>
            </h1>
            <ul className="text-center grid grid-cols-2 gap-2">
              {data.images.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-gray-200 rounded-lg p-1 flex flex-col justify-between gap-1"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="rounded-md cursor-pointer hover:opacity-80 transition h-20 object-cover object-top"
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

export default CommonModal;
