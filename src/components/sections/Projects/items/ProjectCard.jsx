import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectCard = ({ data, isScrolled, toggleModal, delay }) => {
  return (
    <div className="w-full flex justify-center leading-[1.6]">
      <div
        className={`SkillsMainBox opacity-0 shadow-lg break-keep relative p-6 w-svw h-max rounded-2xl content-start bg-white mt-[90px] mb-[50px] flex flex-wrap ${isScrolled ? "animate-textIn" : ""}`}
        style={{ animationDelay: `${delay}ms` }}
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
          <div className="w-1/2 h-[294px] px-5 mt-5 flex flex-wrap content-between">
            <div className="w-full">
              <h1 className="text-[15px] pb-3">
                이력서와 함께 <strong>나의 역량과 강점</strong> 그리고
                <strong> 개인 프로젝트</strong>들을 한눈에 볼 수 있는
                랜딩페이지가 있으면 좋을 것 같아 제작하게 되었습니다.
              </h1>
              <h2 className="text-[15px] pb-5">
                <strong>React와 Tailwind css</strong>를 활용하여 제작하였고, 각{" "}
                <strong>컴포넌트 관계성과 React Hooks 활용 숙련도</strong>가
                상승하였습니다.
              </h2>
            </div>
            <div>
              <div className="w-full flex flex-wrap text-[14px] pb-5">
                <p className={`w-max mb-2 text-lg font-bold py-2 rounded`}>
                  주요기능
                </p>
                <h1 className="w-full font-bold">스크롤 반응형, 다크모드</h1>
              </div>
              <div className="w-full flex flex-wrap text-[14px]">
                <p className={`w-max mb-2 pointText`}>사용기술</p>
                <ul className="w-full flex flex-wrap">
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
            <div className="absolute text-xs text-center top-[20px] right-[20px] flex gap-3">
              <a
                href="https://github.com/Jonggu-code/Portfolio"
                target="_blank"
                className="group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 flex justify-center items-center rounded-full border">
                  <img
                    className="w-8 h-8"
                    src="./logo/githublogo.svg"
                    alt="Link"
                  />
                </div>
                <span className="">GitHub</span>
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
              <a
                href="#"
                className="logoLink detailModal w-full text-center"
                onClick={(e) => {
                  e.preventDefault();
                  toggleModal("portfolio");
                }}
              >
                <div className="w-[45px] h-[45px] p-1 rounded-[30px] border flex flex-wrap items-centers justify-center">
                  <svg
                    className="w-3/4 relative left-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"></path>
                    <path d="M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"></path>
                  </svg>
                </div>
                <span className="text-[12px] opacity-0">Detail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
