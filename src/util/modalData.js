export const modalData = {
    todoapp: {},
    portfolio: {
        title: "Portfolio",
        date: "2025. 01. 03 ~ 개발 진행 중",
        color: "bg-customBlue",
        summary: [
            "개인 포트폴리오 사이트를 가지고 있으면 다른 사이트를 활용한 포트폴리오보다 저만의 역량과 강점을 어필하기에 더 좋을 것 같다는 생각에 제작하게 되었습니다.",
            "<b>UI/UX 디자인과 기획, 개발</b>까지 전 과정을 직접 수행하였고 <b>직관적인 UI와 최적의 UX를 제공</b> 하는 데에 중점을 두었습니다.",
        ],
        skills: ["React", "Vite", "Tailwind", "Node.js"],
        slides: [
            { src: "./portfolio/page1.jpg", alt: "Portfolio Page 1" },
            { src: "./portfolio/page2.jpg", alt: "Portfolio Page 2" },
            { src: "./portfolio/page3.jpg", alt: "Portfolio Page 3" },
        ],
        links: [
            {
                href: "https://github.com/Jonggu-code/Portfolio",
                img: "/logo/githublogo.svg",
                alt: "Github Link",
                label: "Github",
            },
            {
                href: "https://jonggu-portfolio.vercel.app/",
                img: "/logo/linkbtn.svg",
                alt: "Project Link",
                label: "Link",
            },
            {
                href: "https://velog.io/@00whdcks/posts",
                img: "/logo/veloglogo.svg",
                alt: "Velog Link",
                label: "Velog",
            },
        ],
        FeaturesList: [
            {
                title: "자기소개 및 프로젝트 설명",
                contents: [
                    "이력서와 비슷한 목차와 내용으로 구성해 자기소개와 프로젝트 설명을 한눈에 볼 수 있도록 제작했습니다.",
                    "길어지는 내용은 토글창으로 구성해 가독성을 높혔습니다.",
                ],
            },
            {
                title: "단독 컬러 위주의 시각적으로 편안한 디자인",
                contents: [
                    "메인컬러를 설정하고 사이트 전체적으로 활용했습니다.",
                    "차트를 내릴수록 어두워지는 배경으로 시각적으로 편안할 수 있도록 디자인했습니다.",
                ],
            },
            {
                title: "프로젝트 상세 내용 Modal Window",
                contents: [
                    "각 프로젝트에 detail 버튼을 통해 모달창을 띄워 프로젝트의 상세 내용을 사이트 내에서 바로 확인할 수 있도록 구성했습니다.",
                    "포트폴리오 공유 사이트 Behance 와 Notion 의 레이아웃 디자인을 참고하여 제작했습니다.",
                ],
            },
            {
                title: "다크 모드",
                contents: [
                    "네비게이션 바에서 다크모드 / 라이트모드 를 사용자의 편의에 따라 조정할 수 있습니다.",
                    "컴포넌트 전역적으로 다크모드 / 라이트모드를 구분하기 위해 <code>DarkModeContext</code> 훅을 활용했습니다.",
                ],
            },
            {
                title: "컨텐츠 스크롤 이벤트",
                contents: [
                    "스크롤 이벤트에 따라 각 컨텐츠가 나타나는 애니메이션을 구현했습니다.",
                    "<code>UseRef</code>를 활용해 각 컨텐츠의 위치를 파악하고, <code>useScrollSection</code>을 통해 현재 스크롤 위치에서 벗어나면 컨텐츠들이 fadeOut 되도록 구성했습니다.",
                ],
            },
        ],
        addFeaturesList: [
            {
                title: "반응형 웹 디자인",
                contents: [
                    "현재 PC 환경에 최적화된 디자인으로 제작되었으나, 모바일 환경에서도 최적화된 디자인을 제공할 수 있도록 반응형 웹 디자인을추가할 예정입니다.",
                ],
            },
            {
                title: "Project 박스 레이아웃 변경",
                contents: [
                    "현재는 각 프로젝트가 큰 박스 형태로 제공하고 있으나, 프로젝트가 추가되면 화면이 길어지는 단점이 있습니다.",
                    "전체적인 레이아웃을 변경해 각 프로젝트들을 더 간략한 박스 형태로 변경하고, 모달창을 통해 내용을 파악할 수 있도록 변경할 예정입니다.",
                ],
            },
            {
                title: "교육 수료 현황(Education), 경력 사항(Career) 추가",
                contents: [
                    "피드백을 통해 교육 수료 현황과 경력 사항이 있어야 한다는 사실을 깨닫고, 추가할 예정입니다.",
                ],
            },
        ],
        troubleShooting: [
            {
                title: "Notion API 활용 불가능으로 Modal 창 직접 제작",
                contents: [
                    "Notion API를 활용해 모달창을 구성하려 했으나, 불러오는 과정에서 <b>버전 충돌과 Notion API Key 오류</b> 로 인해 프로젝트 상세 내용을 원할하게 불러오지 못하는 문제가 발생했습니다.",
                    "이를 해결하기 위해 Notion API를 활용하지 않고, <b>직접 프로젝트 상세 내용을 전달할 수 있는 모달창을 제작</b>했습니다.",
                ],
            },
            {
                title: "프로젝트 Modal 창 이벤트 오류로 로직 수정",
                contents: [
                    "<b>프로젝트 모달창에서 각 Toggle 항목을 클릭했을 때 제대로 동작하지 않는 오류</b>가 있었고, 렌더링 시 해당 기능을 하는 <code>UseEffect</code> 가 제대로 동작하지 않는 문제를 발견하였습니다.",
                    "각 기능을 <code>handleToggleClick</code>,<code>handleImageClick</code> 함수로 분리하여 이벤트 리스너를 추가할 때 동일한 함수를 사용하도록 수정했습니다.",
                    "또한, 언마운트 시 이벤트 리스너를 제거하여 <b>불필요한 메모리 누수를 방지하고 성능을 최적화</b> 하였습니다.",
                ],
            },
        ],
        images: [
            { src: "./portfolio/page1.jpg", label: "자기 소개" },
            { src: "./portfolio/page2.jpg", label: "About Me" },
            { src: "./portfolio/page3.jpg", label: "Skills" },
            { src: "./portfolio/page4.jpg", label: "Project" },
            { src: "./portfolio/page5.jpg", label: "Project Detail" },
            { src: "./portfolio/page6.jpg", label: "Contact" },
        ],
    },
    matmap: {
        title: "MatMap - 맛맵",
        date: "제작 기간 : 2024.11 - 2024.12 (5인 팀개발)",
        color: "bg-orange-400",
        summary: [
            "사람들이 맛집을 검색함에 있어 가장 원하는 정보, 정제된 정보를 전달해주는 사이트를 제작했습니다. <br /> 팀에서 <b>팀장</b> 역할을 맡았으며 <b>UI/UX 디자인과 프로젝트 기획을 담당</b>했습니다. <br /><b>메인 화면, 맛집 상세 페이지, 리뷰 페이지, 랭킹 페이지,마이페이지</b>등의 페이지를 제작하고 <br /><b>프론트 팀원 간 디자인 스타일과 레이아웃을 통일</b>시키는 작업을 했습니다.",
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "JQuery", "AJAX"],
        slides: [
            { src: "./Matmap/index.png", alt: "Matmap Page 1" },
            { src: "./Matmap/detail.jpg", alt: "Matmap Page 2" },
            { src: "./Matmap/detail2.jpg", alt: "Matmap Page 3" },
            { src: "./Matmap/rankpage.png", alt: "Matmap Page 3" },
        ],
        links: [
            {
                href: "https://github.com/Jonggu-code/MatMap_portfolio",
                img: "/logo/githublogo.svg",
                alt: "Github Link",
                label: "Github",
            },
            {
                href: "https://jonggu-code.github.io/MatMap_portfolio/HTML,CSS,JS/index.html",
                img: "/logo/linkbtn.svg",
                alt: "Project Link",
                label: "Link",
            },
            {
                href: "https://velog.io/@00whdcks/posts",
                img: "/logo/veloglogo.svg",
                alt: "Velog Link",
                label: "Velog",
            },
        ],
        FeaturesList: [
            {
                title: "카카오맵 API 를 활용해 역삼역 주변의 맛집 정보 전달",
                contents: [
                    "약 3주간의 기간동안 교육원이 위치하고 있는 역삼역 주변의 맛집 검색 사이트를 카카오맵 API 를 활용해 제작하였습니다.",
                    "각 음식점 위치에 마커가 뜨며 클릭하면 직접 제작한 커스텀 인포윈도우가 뜨며 음식점 정보를 간결하게 확인할 수 있습니다.",
                    "우측 상단에 위치한 유저박스 왼쪽에 있는 아이콘을 클릭하면 현재 내가 보고있는 화면을 기준으로 음식점을 재검색 할 수 있습니다.",
                ],
            },
            {
                title: "회원 중심적 서비스 구성",
                contents: [
                    "각 음식점은 유저가 남긴 리뷰 갯수, 찜 갯수를 볼 수 있으며 이 수치는 '월간 맛집 랭킹' 을 선정하는데에 사용됩니다.",
                    "로그인을 한 유저는 내가 찜한 식당, 내가 남긴 리뷰 들을 마이페이지에서 확인할 수 있고, 각 컨텐츠를 모아서 볼 수 있는 페이지가 있습니다.",
                ],
            },
            {
                title: "평점에 따른 '월간 맛집 랭킹' 서비스",
                contents: [
                    "매달 가장 많은 찜을 받은 음식점 중에서 리뷰 평균 평점이 높은순으로 '월간 맛집 랭킹'을 선정합니다.",
                    "랭킹 페이지에서는 각 음식점의 평점, 찜 갯수, 리뷰 갯수, 주소, 영업 유무 등의 음식점 정보를 확인할 수 있으며, 음식점을 클릭하면 상세 페이지로 이동합니다.",
                ],
            },
            {
                title: "현재 시간에 따른 영업 상태 업데이트 (영업 중, 브레이크 타임, 영업 종료)",
                contents: [
                    "음식점 DB에 저장되어있는 일자별 영업시간과 현재 시간을 비교해 영업 유무를 표시합니다.",
                    "음식점 정보를 볼 때 현재 갈 수 있는 식당인지, 브레이크 타임은 아닌지와 같은 실시간 영업 정보를 한눈에 볼 수 있으면 좋을 것 같았습니다.",
                ],
            },
        ],
        projectRole: [
            {
                title: "프로젝트 기획 & UI/UX 디자인",
                contents: [
                    "전체 프로젝트의 기획을 담당하였으며, 프로젝트의 주제와 목표를 설정하고, 메인컬러 선정과 로고를 제작하고 각 중요 페이지들을 제작하였습니다.",
                    "최우선 목표로 <b>가독성</b>을 생각하였고, 다음으로 <b>유저 편의성과 만족스러운 경험</b>을 중점으로 디자인을 진행했습니다.",
                ],
            },
            {
                title: "프로젝트 일정 관리 및 팀원 간 원활한 커뮤니케이션 유치",
                contents: [
                    "팀원들의 역할 분담과 일정을 관리하였으며, 팀원들 간의 커뮤니케이션을 원활하게 하기 위해 매일 저녁 스크럼을 진행하였습니다.",
                    "결과적으로, 팀원들 간의 의견 충돌을 최소화하고 작업 일정을 부담없이 소화하며 프로젝트를 원활하게 진행할 수 있었습니다.",
                ],
            },
            {
                title: "페이지 제작",
                contents: [
                    "<b>메인화면</b> : 카카오맵 API 를 활용해 JS로 각 음식점 마커 배치와 커스텀 인포윈도우 제작 및 유저박스 구현",
                    "<b>페이지 공통 헤더 제작</b> : 메인 화면을 제외한 모든 페이지의 공통 헤더 제작",
                    "<b>음식점 상세 페이지</b> : 화면 상단 슬라이더와 음식점 정보, 리뷰 작성, 찜하기 버튼 등의 기능을 구현. 스크롤 따라다니는 추천 맛집 박스 구현",
                    "<b>후기 작성 페이지</b> : 각 항목 별점입력 기능, AJAX 활용 다중 이미지 업로드 기능 구현, 이미지 업로드 시 파일 형식, 크기 유효성 체크",
                    "<b>마이페이지</b> : 내가 찜한 식당, 내가 남긴 리뷰 확인 기능 구현 및 개인 정보 수정 기능 구현",
                ],
            },
            {
                title: "디자인 스타일과 레이아웃 통합 작업",
                contents: [
                    "프로젝트의 디자인 스타일과 레이아웃을 통일하기 위해 프론트 팀원들과 논의하고, 통일 된 디자인 스타일을 적용, 수정하였습니다.",
                ],
            },
        ],
        addFeaturesList: [
            {
                title: "반응형 웹 디자인",
                contents: [
                    "현재 PC 환경에 최적화된 디자인으로 제작되었으나, 모바일 환경에서도 최적화된 디자인을 제공할 수 있도록 반응형 웹 디자인을추가할 예정입니다.",
                ],
            },
            {
                title: "React 마이그레이션",
                contents: [
                    "현재 Tomcat을 활용한 로컬 서버를 활용한 데이터 전달과 백엔드가 구성되어 있어 정상적인 구동이 되지 않습니다.",
                    "리액트를 활용하여 데이터는 하드코딩으로 변경하고, 로컬스토리지를 활용한 로그인 기능 구성으로 직접 컨텐츠를 경험해볼 수 있도록 마이그레이션 할 예정입니다.",
                ],
            },
        ],
        troubleShooting: [
            {
                title: "후기 작성 페이지에서 이미지 첨부할 때 마다 이미지 리스트 초기화 이슈",
                contents: [
                    "이미지를 추가할 때 마다 이미 업로드해 놓은 이미지들이 리셋되고, 업로드한 이미지를 삭제하는 버튼이 제대로 동작하지 않는 오류가 있었습니다.",
                    "이를 해결하기 위해 업로드된 각 이미지 파일에 <code>data-id : uniqueId</code>로 고유한 id를 부여한 뒤 이미지를 추가할 때마다 해당 객체를 배열에 추가하고, 삭제할 때 해당 객체를 배열에서 제거하는 방식으로 해결하였습니다.",
                ],
            },
            {
                title: "식당 후기 사진, 후기 갯수가 많아서 웹사이트 스크롤이 길어짐",
                contents: [
                    "식당 상세 페이지에서 후기 사진과 후기 갯수가 많아질 때 스크롤이 길어져 사용자 경험이 좋지 않았습니다.",
                    "<b>더보기 버튼</b>을 만들어 사용자가 원할 때 더 많은 사진과 후기를 볼 수 있도록 하였습니다.",
                    "또한, 현재 화면에 보여지는 사진과 후기 갯수를 카운팅하여 끝에 다다랐을 때 더보기 버튼을 숨기도록 하여 사용자 경험을 개선하였습니다.",
                ],
            },
            {
                title: "검색 기록 없을 시 사용자 경험 이슈",
                contents: [
                    "검색기록이 없을 때 빈화면이 뜨는것이 사용자 경험에 좋지 않았습니다.",
                    "메인화면에서 검색기록이 뜨지 않을 때의 기본 화면을 추가하였습니다.",
                    "또한, 처음 회원가입한 유저가 마이페이지를 갔을 때 내가 찜한 맛집과 내가 남긴 리뷰가 없을 때 보이는 기본 화면과 각 페이지 기본 화면도 같이 추가하였습니다.",
                ],
            },
        ],
        images: [
            { src: "./Matmap/modal/page1.png", label: "메인 화면" },
            { src: "./Matmap/modal/page2.jpg", label: "음식점 상세 페이지" },
            { src: "./Matmap/modal/page3.png", label: "맛집 랭킹 페이지" },
            { src: "./Matmap/modal/page4.png", label: "후기 작성 1페이지" },
            { src: "./Matmap/modal/page5.png", label: "후기 작성 2페이지" },
            { src: "./Matmap/modal/page6.png", label: "마이페이지" },
            { src: "./Matmap/modal/page7.png", label: "로그인" },
            { src: "./Matmap/modal/page8.png", label: "회원가입" },
        ],
    },
    youtube: {},
};
