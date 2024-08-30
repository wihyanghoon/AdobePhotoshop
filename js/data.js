const projectList = [
    {
        title: '콜마 - 콜마글로벌 웹사이트',
        img: [
            "./img/project/upcoming.jpg",
            "./img/project/upcoming.jpg",
        ],
        mainImg: "./img/project/upcoming.jpg",
        stack: "React.js, Emotion,TypeScript, Zustand, Sanity",
        date: "2024.06.03 ~ 2024.09 오픈예정",
        desc: "화장품 제조 및 제약회사 콜마의 글로벌 웹사이트 구축",
        url:"/",
        exp: [
            "제품페이지 해쉬태그 필터링 개발",
            "Infinite scroll 개발",
            "HeadlessCMS(Sanity) 기본 스키마 타입 제작",
            "Footer 메뉴 페이지 개발",
            "보도자료 페이지 개발",
            "홍보실 페이지 개발",
        ]
    },
    {
        title: '도요타 - 도요타 코리아 웹사이트',
        img: [
            "./img/project/toyota-01.jpg",
            "./img/project/toyota-02.jpg",
        ],
        mainImg: "./img/project/toyota.jpg",
        stack: "React.js, Emotion, TypeScript",
        date: "2024.03.18 ~ 2024.06.07",
        desc: "유지보수 및 연간운영",
        url:"https://www.toyota.co.kr/",
        exp: [
            "유지보수 및 연간 운영",
            "Infinite scroll 개발",
            "Header 모델 가격 필터링 리팩토링",
            "딜러페이지 릭패토링",
            "채용 페이지 개발",
            "이벤트 페이지 개발",
        ]
    },
    {
        title: '디자인삼성 - 삼성 갤럭시 S24 시리즈 디자인스토리',
        img: [
            "./img/project/samsung-01.jpg",
            "./img/project/samsung-02.jpg",
        ],
        mainImg: "./img/project/samsung.jpg",
        stack: "Javascript, SCSS",
        date: "2024.01.29 ~ 2024.03.15",
        desc: "삼성 갤럭시 S24 디자인 소개 페이지 구축",
        url:"https://design.samsung.com/kr/contents/galaxy-s24/",
        exp: [
            "스크롤 인터렉션 개발",
            "디자인 소개 페이지 개발",
        ]
    },
    {
        title: '삼성 스마트싱스 - IFA Explore',
        img: [
            "./img/project/smart-01.jpg",
            "./img/project/smart-02.jpg",
        ],
        mainImg: "./img/project/smart.jpg",
        stack: "React.js, Gatsby.js, GraphQL, Recoil, TypeScript, MDX, SCSS",
        date: "2024.01.29 ~ 2024.03.15",
        desc: "내게 맞는 스마트 싱스 라이프 찾기 서비스 구축",
        url:"https://partners.smartthings.com/explore",
        exp: [
            "스텝별 선택한 값에 따른 검색결과 노출 기능 개발",
            "Recoil을 이용한 상태관리",
        ]
    },
    {
        title: 'CJ - CJ그룹 웹사이트',
        img: [
            "./img/project/cj-01.jpg",
            "./img/project/cj-02.jpg",
        ],
        mainImg: "./img/project/cj.jpg",
        stack: "EJS, TypeScript, SCSS",
        date: "2023.07.10 ~ 2024.02.16",
        desc: "CJ그룹 공식 웹사이트 구축",
        url:"https://www.cj.net/",
        exp: [
            "검색기능 개발",
            "브랜드 콘텐츠 페이지 개발",
            "비디오 View 페이지 개발",
            "IR페이지 개발, 실시간 주가 정보 페이지 개발",
            "navigator.language를 이용한 리다이렉션 개발",
            "Main 리소스 최적화를 위한 lazy loading 구현",
            "일본어 버전 개발",
        ]
    },
    {
        title: '렉서스 - 렉서스 코리아 웹사이트',
        img: [
            "./img/project/lexus-01.jpg",
            "./img/project/lexus-02.jpg",
        ],
        mainImg: "./img/project/lexus.jpg",
        stack: "Vue.js, Webpack, SCSS",
        date: "2023.06.19 ~",
        desc: "시승신청 기능 개발, 연간 운영",
        url:"https://www.lexus.co.kr/test-drive/?page_id=main",
        exp: [
            "시승신청 기능 개발",
            "연간 운영",
            "유지보수 및 신규 콘텐츠 페이지 제작",
        ]
    },
    {
        title: '팀 프로젝트 - Moobpl',
        img: [
            "./img/project/moobpl01.jpg",
            "./img/project/moobpl02.jpg",
        ],
        mainImg: "./img/project/moobpl.jpg",
        stack: "React.js, Express.js",
        date: "2022.12.01 ~ 2023.02.01",
        desc: "기획 디자인 및 프론트엔드, 백엔드 개발",
        url:"https://moobplback.herokuapp.com",
        github : "https://github.com/Moobpl/Moobpl",
        exp: [
            "세션방식 로그인 구현",
            "게시물 및 체크리스트 등록 CRUD 기능 구현",
            "상태관리 리덕스 툴킷을 이용한 상태관리",
            "express.js로 API 서버구축"
        ]
    },
    // {
    //     title: '토이 프로젝트 - Recipe Video',
    //     img: [
    //         "./img/project/recipe01.jpg",
    //         "./img/project/recipe02.jpg",
    //     ],
    //     mainImg: "./img/project/recipe.jpg",
    //     stack: "Pug, Express.js, babel, webpack",
    //     date: "2023.04 ~ 2023.04",
    //     desc: "프론트엔드, 백엔드 개발",
    //     url:"https://recipevideo.herokuapp.com/",
    //     explanation: {
    //         info: `템플릿 엔진 pug를 사용한 비디오 업로드 사이트, 기본적인 로그인, multerS3를 이용한 프로필 이미지 및 비디오를 업로드가 가능한 사이트`,
    //         function: `반응형, session 로그인, 조건부 랜더링, 실시간 엘리먼트 랜더링, 회원가입, 로그인, 로그아웃, 소셜 로그인, 비디오 및 이미지 업로드, 비밀번호 변경, 검색`,
    //         stack: "Pug, Express.js, mongoose",
    //         github : "https://github.com/wihyanghoon/recipe",
    //     }
    // },
    // {
    //     title: '토이 프로젝트 - couchflix',
    //     img: [
    //         "./img/project/couchflix01.jpg",
    //         "./img/project/couchflix02.jpg",
    //     ],
    //     mainImg: "./img/project/couchflix.jpg",
    //     stack: "React.js with TypeScript, Recoil, React Query",
    //     date: "2023.04 ~ 2023.04",
    //     desc: "프론트엔드 개발",
    //     url:"https://wihyanghoon.github.io/couchflix/",
    //     explanation: {
    //         info: `React.js with TypeScript를 이용한 미디어 정보사이트 입니다.`,
    //         function: `반응형, 리액트 쿼리를 이용한 API 호출 및 캐싱, react motion framer를 활용한 인터렉티브한 애니메이션 효과`,
    //         stack: "React.js, Typescript, Recoil, React Query",
    //         github : "https://github.com/wihyanghoon/couchflix",
    //     }
    // },
    // {
    //     title: '토이 프로젝트 - Blended',
    //     img: [
    //         "./img/project/blended01.jpg",
    //         "./img/project/blended02.jpg",
    //     ],
    //     mainImg: "./img/project/blended.jpg",
    //     stack: "React.js with TypeScript",
    //     date: "2023.03 ~ 2023.03",
    //     desc: "기획 디자인 및 프론트엔드 개발",
    //     url:"https://wihyanghoon.github.io/Blended",
    //     explanation: {
    //         info: `React.js with TypeScript를 이용한 그라디언트 제네레이터 사이트 입니다.`,
    //         function: `반응형, state값의 변경에 따른 폰트 및 CSS 변경 기능, AOS 라이브러리 이용한 스크롤 애니메이션 제작`,
    //         stack: "React.js, Typescript",
    //         github : "https://github.com/wihyanghoon/Blended",
    //     }
    // },
    {
        title: '포트폴리오사이트 - The PhotoShop',
        img: [
            "./img/project/photoshop01.jpg",
            "./img/project/photoshop02.jpg",
        ],
        mainImg: "./img/project/photoshop.jpg",
        stack: "Html/CSS, Javascript",
        date: "2022.11 ~ ing",
        desc: "기획 디자인 및 기능개발",
        exp: [
            "URL 파라미터 값을 이용한 상세보기 페이지 랜더링 구현",
            "배열 메서드를 통하여 데이터 sorting"
        ]
    },
    {
        title: '수자원공사 - 물, 자연 그리고 사람',
        img: [
            "./img/project/k-water01.jpg",
            "./img/project/k-water02.jpg",
        ],
        mainImg: "./img/project/k-water.jpg",
        stack: "JavaScript, JQuery, HTML5, CSS3",
        date: "2022.01.01 ~ 2022.08.01",
        desc: "사이트 구축 및 유지보수",
        url: "http://www.k-waterwebzine.com/",
        exp: [
            "다음 지도 API를 이용한 우편번호 검색 기능 구현",
            "월간 유지보수 및 운영",
            "초기 기획 및 개발 참여",
        ]
    }, {
        title: '대한주택건설협회 - 주택플러스',
        img: [
            "./img/project/plus-h01.jpg",
            "./img/project/plus-h02.jpg",
        ],
        mainImg: "./img/project/plus-h.jpg",
        stack: "JavaScript, JQuery, HTML5, CSS3",
        date: "2021.04.01 ~ 2022.03.01",
        desc: "사이트 구축 및 유지보수",
        url: "http://www.plus-h.co.kr/",
        exp: [
            "크로스 브라우징",
            "월간 유지보수 및 운영",
        ]
    }, {
        title: '하이원리조트 - 1340',
        img: [
            "./img/project/1340-01.jpg",
            "./img/project/1340-02.jpg",
        ],
        mainImg: "./img/project/1340.jpg",
        stack: "JavaScript, JQuery, HTML5, CSS3",
        date: "2021.08.01 ~ 2021.12.01",
        desc: "월간 유지보수 및 운영",
        url: "http://1340webzine.com/data/211112/main.php",
        exp: [
            "크로스 브라우징",
            "월간 유지보수 및 운영",
            "계약종료 후 개발 데이터 및 도메인 명의 이관 작업 등 비즈니스 지원",
        ]
    },
    {
        title: 'LH 한국토지주택공사 - withLH',
        img: [
            "./img/project/lh01.jpg",
            "./img/project/lh02.jpg",
        ],
        mainImg: "./img/project/lh.jpg",
        stack: "JavaScript, JQuery, HTML5, CSS3",
        date: "2021.04.01 ~ 2021.12.01",
        desc: "월간 유지보수 및 운영",
        url: "http://webzine.lh.or.kr/",
        exp: [
            "크로스 브라우징",
            "월간 유지보수 및 운영",
        ]
    }, {
        title: '한국남동발전 - 남동愛',
        img: [
            "./img/project/koen01.jpg",
            "./img/project/koen02.jpg",
        ],
        mainImg: "./img/project/koen.jpg",
        stack: "JavaScript, JQuery, HTML5, CSS3",
        date: "2021.04.01 ~ 2021.12.01",
        desc: "월간 유지보수 및 운영",
        exp: [
            "크로스 브라우징 및 반응형 웹사이트 개발",
            "월간 유지보수 및 운영"
        ]
    }
]

projectList.forEach((preject , index)=>{
    preject.id = index;
    preject.No = index;
})

console.log(projectList)