import commonStyle from "../../../styles/commonStyle";

const Question = ({ isDark, isScrolled }) => {
  const questionList = [
    {
      delay: 400,
      question: "Q1. 개발자가 되기로 결심한 이유 ?",
      answer: `사용자 경험을 설계하는 과정이 좋아 공간디자인을 전공했지만
<strong>현실적인 제약</strong>으로 인해 아이디어를 온전히 구현하기 어렵다는 한계를 느꼈습니다. </br>
<strong>프론트엔드 개발</strong>은 제가 구상한 인터페이스를 <strong>제약 없이 구현하고,
사용자 반응을 즉시 확인하며 개선</strong>할 수 있다는 점에서 큰 매력을 느꼈습니다.`,
    },
    {
      delay: 500,
      question: "Q2. 개발자가 되기 위한 노력 ?",
      answer: `<strong>KH정보교육원에서 6개월 간 </strong>
웹 기본기(HTML, CSS, Javascript, Jquery)부터 팀 프로젝트 기반 실습까지 체계적으로 경험했습니다. </br>
<strong>온라인 강의와 기술블로그</strong>를 통해 최신 기술을 꾸준히 학습하며,
개념 정리·문제 해결 과정을 직접 기록하는 습관을 유지하고 있습니다. <br />또한 <strong>웹디자인기능사와 정보처리기사 자격증을 취득</strong>하며 기본기와 이론적 기반을 탄탄히 다졌습니다.`,
    },
    {
      delay: 600,
      question: "Q3. 본인의 강점 ?",
      answer: `<strong>긍정적인 성격과 적극적인 소통</strong> 으로 팀 내 협업과 조율에 강점이 있습니다. 인테리어 회사에서 근무하는 동안 제안·설계·조정 과정을 거치며 <strong>고객의 요구를 정확히 파악하고, 문제를 빠르게 해결하는 역량</strong>을 키웠습니다. 프로젝트의 완성도를 높이기 위해 과몰입하여 일정이 딜레이되는 경향이 있지만, <strong>우선순위 설정과 지속적인 작업 효율화</strong>를 통해 보완해 나가고 있습니다.`,
    },
  ];
  return (
    <div
      className={`mt-10 w-full opacity-0 ${isScrolled ? "animate-textIn" : ""}`}
      style={{ animationDelay: `200ms` }}
    >
      <h1
        className={commonStyle.subTitle(isDark)}
        style={{ animationDelay: "300ms" }}
      >
        Question
      </h1>
      {questionList.map((item, i) => (
        <div
          key={i}
          className={`mb-8 h-max w-full rounded-2xl p-6 opacity-0 shadow-md ${isDark ? "bg-customGray" : "bg-white"} ${isScrolled ? `animate-textIn` : ""}`}
          style={{ animationDelay: `${item.delay}ms` }}
        >
          <h1 className="pb-3 text-lg font-bold sm:pb-5 sm:text-2xl">
            {item.question}
          </h1>
          <p
            className="break-keep text-base leading-7 sm:text-lg sm:leading-8"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Question;
