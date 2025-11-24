import "./About.css";
import React, { useContext, useRef } from "react";
import { DarkModeContext } from "../../../util/DarkModeContext";
import useScrollPosition from "../../../hooks/useScrollPosition";

const About = () => {
  const { isDark } = useContext(DarkModeContext);
  const aboutRef = useRef(null);
  const isScrolled = useScrollPosition(aboutRef, 700);

  // 스크롤 이벤트 리스너 등록

  return (
    <div
      ref={aboutRef}
      className={`relative w-full p-10 h-max flex flex-wrap justify-center ${isDark ? "bg-customDark" : "bg-blue-100"}`}
    >
      <h1
        className={`opacity-0 absolute top-[40px] left-[60px] text-4xl font-bold ${isDark ? "text-white" : "text-basic"} ${isScrolled ? "text-in text-d1" : ""}`}
      >
        About Me
      </h1>
      <div className="educationBox w-full h-max flex flex-wrap justify-center">
        <h1
          className={`education w-full text-center mt-[100px] mb-[20px] text-[26px] font-bold ${isDark ? "text-white" : "text-basicFont"}`}
        >
          Education
        </h1>
        <div className="eduContentBox w-[1000px] flex flex-wrap justify-center gap-[10px]">
          <div
            className={`eduContent ${isDark ? "bg-customGray" : "bg-white"}`}
          >
            <div className="contentBox">
              <div className="schoolLogo">
                <img src="/logo/highschoollogo.svg" alt="" />
              </div>
              <div className="schoolText">
                <h1 className="schoolTitle">
                  건국대학교 사범대학 부속고등학교
                </h1>
                <h2 className="schoolGraduate">
                  2014.02 ~ 2017.02 | 인문계 | 졸업
                </h2>
              </div>
            </div>
          </div>
          <div
            className={`eduContent ${isDark ? "bg-customGray" : "bg-white"}`}
          >
            <div className="contentBox">
              <div className="schoolLogo">
                <img src="/logo/universitylogo.svg" alt="" />
              </div>
              <div className="schoolText">
                <h1 className="schoolTitle">동양대학교 동두천캠퍼스</h1>
                <h2 className="schoolGraduate">
                  2017.02 ~ 2023.02 | 공간디자인학과 | 졸업
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`aboutMainBox mt-[90px] mb-[50px] ${isDark ? "text-customDark" : "text-basicFont"}`}
      >
        <div
          className={`opacity-0 w-[1000px] h-max rounded-2xl p-6 mb-8 ${isDark ? "bg-customGray" : "bg-white boxShadow shadow-gray-400"} ${isScrolled ? "text-in text-d2 " : ""}`}
        >
          <h1 className="text-2xl pb-5 font-bold">
            Q1. 개발자가 되기로 결심한 이유 ?
          </h1>
          <p className="text-[16px] break-keep leading-8">
            공간디자인을 전공하며 실제로 구성될{" "}
            <strong>공간에 대한 창의적인 아이디어</strong>를 구체화하고{" "}
            <strong>사용자 중심의 경험을 설계</strong>
            하는 데에 익숙해졌습니다. <br />
            이러한 경험을 바탕으로{" "}
            <strong>
              기술적인 도구를 활용해 더 많은 가치를 창출할 수 있는 분야
            </strong>
            에 도전하고 싶다는 생각이 들었습니다. <br />그 과정에서 소프트웨어를
            활용한 개발은 현실에 제약을 받지 않고 더 창의적인 구현이 가능하지
            않을까? 라는 생각을 하다보니 개발자, 그 중에서도
            <strong> 프론트엔드 개발자</strong>라는 직군에 관심을 가지게
            되었습니다.
          </p>
        </div>
        <div
          className={`opacity-0 w-[1000px] h-max rounded-2xl p-5 mb-8 ${isDark ? "bg-customGray" : "bg-white boxShadow shadow-gray-400"} ${isScrolled ? "text-in text-d3 " : ""}`}
        >
          <h1 className="text-2xl pb-5 font-bold">
            Q2. 개발자가 되기 위한 노력 ?
          </h1>
          <p className="text-[16px] break-keep leading-8">
            <strong>KH정보교육원</strong>
            에서 HTML5, CSS, JavaScript, jQuery 등 다양한 웹 애플리케이션 이론과
            실무를 체계적으로 배웠습니다. 이론 학습을 바탕으로 실제 프로젝트에
            적용하며 실력을 쌓았습니다.
            <br />
            <strong>인프런, 유데미</strong> 와 같은 온라인 강의 사이트를 통해
            지속적으로 새로운 기술을 습득하고 있으며 <strong>기술블로그</strong>
            를 통해 배운 내용들을 복습하고 에러를 해결하고, 그 과정을 포스팅하며
            지식을 공유하고 있습니다. <br />
            무엇보다도 <strong>효율적이고 인간지향적인 코드</strong>를 작성하기
            위해 항상 고민하며 공부했습니다.
          </p>
        </div>
        <div
          className={`opacity-0 w-[1000px] h-max rounded-2xl p-5 ${isDark ? "bg-customGray" : "bg-white boxShadow shadow-gray-400"} ${isScrolled ? "text-in text-d4 " : ""}`}
        >
          <h1 className="text-2xl pb-5 font-bold">Q3. 본인의 강점 ?</h1>
          <p className="text-[16px] break-keep leading-8">
            저의 가장 큰 강점은{" "}
            <strong>긍정적인 성격을 바탕으로 적극적이고 원활한 소통</strong>
            을 할 수 있다는 점입니다.
            <br /> 대학 재학 중 동아리 부 팀장과 졸업 전시 위원회의 임원진으로
            활동하며, 자신의 의견을 주장하는 동시에 타인의 견해를 충분히
            고려하여 결과를 도출하는 능력을 키웠습니다.
            <br /> 교육원에서 진행한 팀프로젝트에서 팀장을 맡아 팀원 간의 소통을
            원활하게 만들며, 조화로운 분위기를 이끌어내는 역할을 잘 수행했고 그
            결과, 2주 간의 팀프로젝트를 성공적으로 마무리할 수 있었습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
