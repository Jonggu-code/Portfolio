export const projects = [
    {
        id: "todoapp",
        title: "Todo App",
        subtitle: "TS 활용 TodoApp 토이프로젝트",
        date: "2025. 11",
        description: [
            "타입스크립트 숙련을 위한 TodoList 미니 프로젝트입니다.",
            "TypeScript와 Framer-Motion을 활용해 제작하였습니다.",
        ],
        features: "Framer-Motion 활용 드래그&드롭, 로컬스토리지 저장",
        skills: ["Typescript", "Vite", "Tailwind", "Node.js"],
        slides: [
            "./portfolio/page1.jpg",
            "./portfolio/page2.jpg",
            "./portfolio/page3.jpg",
        ],
        github: "https://github.com/Jonggu-code/TodoApp",
        link: "https://todo-app-xi-peach.vercel.app/",
        modal: "todoapp",
    },
    {
        id: "portfolio",
        title: "Portfolio",
        subtitle: "개인용 포트폴리오 사이트",
        date: "2025. 01",
        totalDate: "2025. 01. 03 ~ 개발 진행 중",
        description: [
            "이력서와 함께 나의 역량과 강점 그리고 개인 프로젝트들을 한눈에 볼 수 있도록 제작했습니다.",
            "React와 Tailwind를 활용했고, 컴포넌트 관계성과 Hooks 숙련도가 상승했습니다.",
        ],
        summary:
            "개인 포트폴리오 사이트를 가지고 있으면 타 사이트를 활용한 포트폴리오보다 <br /> 저만의 역량과 강점을 어필하기에 더 좋을 것 같다는 생각에 제작하게 되었습니다. <br /> <b>UI/UX 디자인과 기획, 개발</b>까지 전 과정을 직접 수행하였고 <b>직관적인 UI와 최적의 UX를 제공</b>하는 데 중점을 두었습니다.",
        features: "스크롤 반응형, 다크모드",
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
        troubleShotting: [
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
                    "<b>각 기능을 <code>handleToggleClick</code>,<code>handleImageClick</code> 함수로 분리</b>하여 이벤트 리스너를 추가할 때 동일한 함수를 사용하도록 수정했습니다.",
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
        modal: "portfolio",
    },
    {
        id: "matmap",
        title: "MatMap - 맛맵",
        subtitle: "유저 맞춤형 맛집 검색 지도",
        date: "2024. 11",
        description: [
            "사람들이 맛집을 검색함에 있어 가장 원하는 정보, 정제된 정보를 전달해주는 사이트를 제작했습니다.",
            "팀 프로젝트를 진행하며 <strong>협업과 소통의 중요성</strong>을 느꼈고 <strong>데이터 크롤링, 카카오맵 API 활용</strong>을 경험했습니다.",
        ],
        features: "반응형 웹페이지, 카카오맵 API 활용, 카테고리별 맛집 검색",
        skills: ["HTML", "CSS", "Javascript", "JQuery"],
        slides: [
            "./Matmap/index.png",
            "./Matmap/detail.jpg",
            "./Matmap/detail2.jpg",
            "./Matmap/rankpage.png",
            "./Matmap/mypage.png",
            "./Matmap/review.png",
        ],
        github: "https://github.com/Jonggu-code/MatMap_portfolio",
        link: "https://jonggu-code.github.io/MatMap_portfolio/HTML,CSS,JS/index.html",
        modal: "matmap",
    },
    {
        id: "youtubemusic",
        title: "Youtube Music Reworks",
        subtitle: "유튜브 뮤직 리워크 프로젝트",
        date: "2024. 10",
        description: [
            "유튜브 뮤직 클론 코딩을 진행습니다. UI/UX 적으로 개선되면 좋을 것 같다고 생각한 부분을 개선해 봤습니다.",
            "<strong>Javascript, jquery의 코드 숙련도가 상승하였고, 미디어 제어, 반응형 웹페이지</strong> 제작 방법에 대한 공부가 되었습니다.",
        ],
        features: "반응형 웹페이지, 미디어 제어, 로컬스토리지 활용",
        skills: ["HTML", "CSS", "Javascript", "JQuery"],
        slides: [
            "./youtube/index.jpg",
            "./youtube/storage.jpg",
            "./youtube/playlist.jpg",
            "./youtube/playpage.jpg",
        ],
        github: "https://github.com/Jonggu-code/Portfolio_youtube",
        link: "https://jonggu-code.github.io/Portfolio_youtube/246.%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A41(%EC%9C%A0%ED%8A%9C%EB%B8%8C).html",
        modal: "youtube",
    },
];
