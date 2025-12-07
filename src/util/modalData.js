export const modalData = {
    todoapp: {},
    portfolio: {
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
    matmap: {},
    youtube: {},
};
