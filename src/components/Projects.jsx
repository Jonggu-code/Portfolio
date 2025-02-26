import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Projects.css";
import React, { useContext, useRef } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { DarkModeContext } from "../util/DarkModeContext";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
  const { isDark } = useContext(DarkModeContext);
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef, 500);

  return (
    <div
      ref={aboutRef}
      className={`relative w-full p-10 h-max flex flex-wrap justify-center ${isDark ? "bg-customDark" : "bg-blue-300"} text-basicFont`}
    >
      <h1
        className={`fade-target opacity-0 absolute top-[40px] left-[60px] text-4xl font-bold ${isDark ? "text-white" : "text-basicFont"} ${isScrolled ? "text-in text-d1" : ""}`}
      >
        <span className="text-customBlue"></span>
        Projects
      </h1>
      <div className="BoxCheck w-full flex justify-center leading-[1.6]">
        <div
          className={`SkillsMainBox opacity-0 shadow-lg break-keep relative p-6 w-[1000px] h-max rounded-2xl content-start bg-white mt-[90px] mb-[50px] flex flex-wrap ${isScrolled ? "text-in text-d2" : ""}`}
        >
          <h1 className="text-3xl w-full font-bold pb-3">Portfolio</h1>
          <h2 className="w-full text-gray-500">
            2025.01.03 - 2025.01.14 (1인 개발)
          </h2>
          <div className="projectBox w-full h-[320px] flex">
            <div className="swiperBox h-[290px] w-1/2 mt-6">
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
                    <img
                      src="./portfolio/page1.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./portfolio/page2.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./portfolio/page3.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-1/2 h-[294px] px-5 mt-5 flex flex-wrap content-between">
              <div className="w-full">
                <h1 className="text-[15px] pb-3">
                  이력서와 함께 <strong>나의 역량과 강점</strong> 그리고
                  <strong> 개인 프로젝트</strong>들을 한눈에 볼 수 있는
                  랜딩페이지가 있으면 좋을 것 같아 제작하게 되었습니다.
                </h1>
                <h2 className="text-[15px] pb-5">
                  <strong>React와 Tailwind css</strong>를 활용하여 제작하였고,
                  각 <strong>컴포넌트 관계성과 React Hooks 활용 숙련도</strong>
                  가 상승하였습니다.
                </h2>
              </div>
              <div>
                <div className="w-full flex flex-wrap text-[14px] pb-5">
                  <p className={`w-max mb-2 pointText`}>주요기능</p>
                  <h1 className="w-full font-bold">스크롤 반응형, 다크모드</h1>
                </div>
                <div className="w-full flex flex-wrap text-[14px]">
                  <p className={`w-max mb-2 pointText`}>사용기술</p>
                  <ul className="w-full flex gap-3">
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      React
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      Vite
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      Tailwind
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      Node.js
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute top-[20px] right-[20px] flex gap-2">
                <a
                  href="https://github.com/Jonggu-code/Portfolio"
                  target="_blank"
                  className="logoLink w-full text-center"
                >
                  <div className="w-[45px] h-[45px] p-1 rounded-[30px] border flex flex-wrap items-centers justify-center">
                    <svg
                      className="w-3/4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                    </svg>
                  </div>
                  <span className="text-[12px] opacity-0">GitHub</span>
                </a>
                <a
                  href="https://jonggu-portfolio.vercel.app/"
                  target="_blank"
                  className="logoLink w-full text-center"
                >
                  <div className="w-[45px] h-[45px] p-1 rounded-[30px] border flex flex-wrap items-centers justify-center">
                    <svg
                      className="w-3/4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353.75.75 0 0 0-1.18.928 5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061l3-3Z"></path>
                      <path d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353.75.75 0 0 0 1.18-.928 5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568l3.627-3.627Z"></path>
                    </svg>
                  </div>
                  <span className="text-[12px] opacity-0">Link</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BoxCheck w-full flex justify-center leading-[1.6]">
        <div
          className={`SkillsMainBox opacity-0 shadow-lg break-keep relative p-6 w-[1000px] h-max rounded-2xl content-start bg-white mt-[20px] mb-[50px] flex flex-wrap ${isScrolled ? "text-in text-d3" : ""}`}
        >
          <h1 className="text-3xl w-full font-bold pb-3">MatMap - 맛맵</h1>
          <h2 className="w-full text-gray-500">
            2024.11 - 2024.12 (5인 팀개발)
          </h2>
          <div className="projectBox flex w-full h-[320px]">
            <div className="w-1/2 mt-6">
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
            <div className="w-1/2 h-[294px] px-5 mt-5 flex flex-wrap content-between">
              <div className="w-full">
                <h1 className="text-[15px] pb-5">
                  사람들이 맛집을 검색함에 있어 가장 원하는 정보, 정제된 정보를
                  전달해주는 사이트를 제작했습니다.
                </h1>
                <h2 className="text-[15px] pb-5">
                  팀 프로젝트를 진행하며 <strong>협업과 소통의 중요성</strong>을
                  느꼈고 <strong>데이터 크롤링, 카카오맵 API 활용</strong>을
                  경험했습니다.
                </h2>
              </div>
              <div>
                <div className="w-full flex flex-wrap text-[14px] pb-5">
                  <p className={`w-max mb-2 pointText`}>주요기능</p>
                  <h1 className="w-full font-bold">
                    반응형 웹페이지, 카카오맵 API 활용, 카테고리별 맛집 검색
                  </h1>
                </div>
                <div className="w-full flex flex-wrap text-[14px]">
                  <p className={`w-max mb-2 pointText`}>사용기술</p>
                  <ul className="w-full flex gap-3">
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      HTML
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      CSS
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      Javascript
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg ">
                      JQuery
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute top-[20px] right-[20px] flex gap-2">
                <a
                  href="https://github.com/Jonggu-code/MatMap_portfolio"
                  target="_blank"
                  className="logoLink w-full text-center"
                >
                  <div className="w-[45px] h-[45px] p-1 rounded-[30px] border flex flex-wrap items-centers justify-center">
                    <svg
                      className="w-3/4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                    </svg>
                  </div>
                  <span className="text-[12px] opacity-0">GitHub</span>
                </a>
                <a
                  href="https://jonggu-code.github.io/MatMap_portfolio/HTML,CSS,JS/index.html"
                  target="_blank"
                  className="logoLink w-full text-center"
                >
                  <div className="w-[45px] h-[45px] p-1 rounded-[30px] border flex flex-wrap items-centers justify-center">
                    <svg
                      className="w-3/4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353.75.75 0 0 0-1.18.928 5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061l3-3Z"></path>
                      <path d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353.75.75 0 0 0 1.18-.928 5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568l3.627-3.627Z"></path>
                    </svg>
                  </div>
                  <span className="text-[12px] opacity-0">Link</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BoxCheck w-full flex justify-center leading-[1.6]">
        <div
          className={`SkillsMainBox opacity-0 shadow-lg break-keep relative p-6 w-[1000px] h-max rounded-2xl content-start bg-white mt-[20px] mb-[50px] flex flex-wrap ${isScrolled ? "text-in text-d2" : ""}`}
        >
          <h1 className="text-3xl w-full font-bold pb-3">
            Youtube Music Reworks
          </h1>
          <h2 className="w-full text-gray-500">2024.10 - 2024.10 (1인 개발)</h2>
          <div className="projectBox flex w-full h-[320px]">
            <div className="swiperBox h-[300px] w-1/2 mt-6">
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
                    <img src="./youtube/index.jpg" className="w-full h-auto" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./youtube/storage.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./youtube/playlist.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[290px] rounded-xl bg-gray-800 flex items-center">
                    <img
                      src="./youtube/playpage.jpg"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-1/2 h-[294px] px-5 mt-5 flex flex-wrap content-between">
              <div className="w-full">
                <h1 className="text-[15px] pb-3">
                  유튜브 뮤직 클론 코딩을 진행습니다. UI/UX 적으로 개선되면 좋을
                  것 같다고 생각한 부분을 개선해 봤습니다.
                </h1>
                <h2 className="text-[15px] pb-5">
                  <strong>
                    Javascript, jquery의 코드 숙련도가 상승하였고, 미디어 제어,
                    반응형 웹페이지
                  </strong>{" "}
                  제작 방법에 대한 공부가 되었습니다.
                </h2>
              </div>
              <div>
                <div className="w-full flex flex-wrap text-[14px] pb-5">
                  <p className={`w-max mb-2 pointText`}>주요기능</p>
                  <h1 className="w-full font-bold">
                    반응형 웹페이지, Javascript 능력 향샹
                  </h1>
                </div>
                <div className="w-full flex flex-wrap text-[14px]">
                  <p className={`w-max mb-2 pointText`}>사용기술</p>
                  <ul className="w-full flex gap-3">
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      HTML
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      CSS
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg">
                      Javascript
                    </li>
                    <li className="px-2 py-1 bg-customGray text-white rounded-lg ">
                      JQuery
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute top-[20px] right-[20px] flex gap-2">
                <a
                  href="https://github.com/Jonggu-code/Portfolio_youtube"
                  target="_blank"
                  className="logoLink w-full text-center"
                >
                  <div className="w-[45px] h-[45px] p-1 rounded-[30px] border flex flex-wrap items-centers justify-center">
                    <svg
                      className="w-3/4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                    </svg>
                  </div>
                  <span className="text-[12px] opacity-0">GitHub</span>
                </a>
                <a
                  href="https://jonggu-code.github.io/Portfolio_youtube/246.%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A41(%EC%9C%A0%ED%8A%9C%EB%B8%8C).html"
                  target="_blank"
                  className="logoLink w-full text-center"
                >
                  <div className="w-[45px] h-[45px] p-1 rounded-[30px] border flex flex-wrap items-centers justify-center">
                    <svg
                      className="w-3/4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.78 3.653a3.936 3.936 0 1 1 5.567 5.567l-3.627 3.627a3.936 3.936 0 0 1-5.88-.353.75.75 0 0 0-1.18.928 5.436 5.436 0 0 0 8.12.486l3.628-3.628a5.436 5.436 0 1 0-7.688-7.688l-3 3a.75.75 0 0 0 1.06 1.061l3-3Z"></path>
                      <path d="M7.28 11.153a3.936 3.936 0 0 1 5.88.353.75.75 0 0 0 1.18-.928 5.436 5.436 0 0 0-8.12-.486L2.592 13.72a5.436 5.436 0 1 0 7.688 7.688l3-3a.75.75 0 1 0-1.06-1.06l-3 3a3.936 3.936 0 0 1-5.567-5.568l3.627-3.627Z"></path>
                    </svg>
                  </div>
                  <span className="text-[12px] opacity-0">Link</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
