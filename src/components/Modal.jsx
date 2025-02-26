import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Modal.css";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Modal = ({ closeModal }) => {
  useEffect(() => {
    // 1. Modal 열리면 스크롤 막기
    document.body.style.overflow = "hidden";

    // 2. ESC 키 이벤트 리스너 추가
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Modal 닫힐 때 실행
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className="modalBox" onClick={closeModal}>
      <div className="btnBox">
        <button
          className="closeBtn bg-customSky"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
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
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
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
          <h3 className="modalTime">제작 기간 : 2025. 01. 03 ~ 수정 중</h3>
        </div>
        <p>여기에 상세내용을 작성하면 됩니다.</p>
      </div>
    </div>
  );
};

export default Modal;
