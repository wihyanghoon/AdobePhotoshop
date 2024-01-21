const projectList = [
    {
        id: 5656765,
        No: 1,
        title: 'CJ - CJ그룹 사이트',
        img: [
            "./img/preject/moobpl01.jpg",
            "./img/preject/moobpl02.jpg",
        ],
        mainImg: "./img/preject/moobpl.jpg",
        stack: "EJS, Typescript, SCSS",
        date: "2023.07.10 ~ 2024.01.19",
        desc: "프론트엔드 개발, 검색기능 및 동영샹 view, 국가별 redirection, 연관검색어 하이라이팅",
        url:"https://www.cj.net/",
        explanation: {
            info: `회사 프로젝트로 CJ그룹사이트 제작 참여, 검색 기능 및 동영상 view 기능을 개발`,
            function: `API 처리 및 검색 기능개발, 연관검색어 하이라이팅 및 검색어에 따른 조건부 랜더링, 구글애널리틱스 커스텀이벤트, 국가별 리다이렉션`,
            stack: "EJS, Typescript, SCSS",
        }
    },
    {
        id: 5656765,
        No: 1,
        title: 'SAMSUNG - SmartThings-IFA explore',
        img: [
            "./img/preject/moobpl01.jpg",
            "./img/preject/moobpl02.jpg",
        ],
        mainImg: "./img/preject/moobpl.jpg",
        stack: "EJS, Typescript, SCSS",
        date: "2023.07.10 ~ 2024.01.19",
        desc: "프론트엔드 개발, 검색기능 및 동영샹 view, 국가별 redirection, 연관검색어 하이라이팅",
        url:"https://www.cj.net/",
        explanation: {
            info: `회사 프로젝트로 CJ그룹사이트 제작 참여, 검색 기능 및 동영상 view 기능을 개발`,
            function: `API 처리 및 검색 기능개발, 연관검색어 하이라이팅 및 검색어에 따른 조건부 랜더링, 구글애널리틱스 커스텀이벤트, 국가별 리다이렉션`,
            stack: "EJS, Typescript, SCSS",
        }
    },
    {
        id: 5656765,
        No: 1,
        title: '팀 프로젝트 - Moobpl',
        img: [
            "./img/preject/moobpl01.jpg",
            "./img/preject/moobpl02.jpg",
        ],
        mainImg: "./img/preject/moobpl.jpg",
        stack: "React.js, Express.js",
        date: "2022.12 ~ 2023.02",
        desc: "기획 디자인 및 프론트엔드, 백엔드 개발",
        url:"https://moobplback.herokuapp.com",
        explanation: {
            info: `팀 프로젝트로 진행한 프로젝트로 프론트엔드 React.js 백엔드 Express.js로 개발 하였습니다.`,
            function: `세션방식 로그인 구현, 기본 CRUD 기능, 상태관리 리덕스 툴킷 사용`,
            stack: "React.js, Express.js",
            github : "https://github.com/Moobpl/Moobpl",
        }
    },
    {
        id: 4232354237353,
        No: 2,
        title: '토이 프로젝트 - Recipe Video',
        img: [
            "./img/preject/recipe01.jpg",
            "./img/preject/recipe02.jpg",
        ],
        mainImg: "./img/preject/recipe.jpg",
        stack: "Pug, Express.js, babel, webpack",
        date: "2023.04 ~ 2023.04",
        desc: "프론트엔드, 백엔드 개발",
        url:"https://recipevideo.herokuapp.com/",
        explanation: {
            info: `템플릿 엔진 pug를 사용한 비디오 업로드 사이트, 기본적인 로그인, multerS3를 이용한 프로필 이미지 및 비디오를 업로드가 가능한 사이트`,
            function: `반응형, session 로그인, 조건부 랜더링, 실시간 엘리먼트 랜더링, 회원가입, 로그인, 로그아웃, 소셜 로그인, 비디오 및 이미지 업로드, 비밀번호 변경, 검색`,
            stack: "Pug, Express.js, mongoose",
            github : "https://github.com/wihyanghoon/recipe",
        }
    },
    {
        id: 151536436,
        No: 3,
        title: '토이 프로젝트 - couchflix',
        img: [
            "./img/preject/couchflix01.jpg",
            "./img/preject/couchflix02.jpg",
        ],
        mainImg: "./img/preject/couchflix.jpg",
        stack: "React.js with TypeScript, Recoil, React Query",
        date: "2023.04 ~ 2023.04",
        desc: "프론트엔드 개발",
        url:"https://wihyanghoon.github.io/couchflix/",
        explanation: {
            info: `React.js with TypeScript를 이용한 미디어 정보사이트 입니다.`,
            function: `반응형, 리액트 쿼리를 이용한 API 호출 및 캐싱, react motion framer를 활용한 인터렉티브한 애니메이션 효과`,
            stack: "React.js, Typescript, Recoil, React Query",
            github : "https://github.com/wihyanghoon/couchflix",
        }
    },
    {
        id: 31231231,
        No: 4,
        title: '토이 프로젝트 - Blended',
        img: [
            "./img/preject/blended01.jpg",
            "./img/preject/blended02.jpg",
        ],
        mainImg: "./img/preject/blended.jpg",
        stack: "React.js with TypeScript",
        date: "2023.03 ~ 2023.03",
        desc: "기획 디자인 및 프론트엔드 개발",
        url:"https://wihyanghoon.github.io/Blended",
        explanation: {
            info: `React.js with TypeScript를 이용한 그라디언트 제네레이터 사이트 입니다.`,
            function: `반응형, state값의 변경에 따른 폰트 및 CSS 변경 기능, AOS 라이브러리 이용한 스크롤 애니메이션 제작`,
            stack: "React.js, Typescript",
            github : "https://github.com/wihyanghoon/Blended",
        }
    },
    {
        id: 454214,
        No: 5,
        title: '포트폴리오사이트 - The PhotoShop',
        img: [
            "./img/preject/photoshop01.jpg",
            "./img/preject/photoshop02.jpg",
        ],
        mainImg: "./img/preject/photoshop.jpg",
        stack: "Html/CSS, Javascript",
        date: "2022.11 ~ ing",
        desc: "기획 디자인 및 기능개발",
        explanation: {
            info: `개인 포트폴리오 사이트로 디자이너 출신인 정체성을 나타내고 싶어서 포토샵 프로그램을 컨셉으로 사이트를 제작했습니다`,
            function: `배열을 통해서 데이터를 뿌려주고 배열 정렬을 통해 작품을 번호, 제목, 날짜 등으로 재정렬하여 출력할 수 있는 기능을 만들었습니다.
            또한, URL의 쿼리값을 통하여 상세페이지의 데이터를 불러오도록 제작하였습니다.`,
            stack: "Html/CSS, Javascript",
            github : "https://github.com/wihyanghoon/AdobePhotoshop",
        }
    },
    {
        id: 12312321,
        No: 6,
        title: '수자원공사 - 물, 자연 그리고 사람',
        img: [
            "./img/preject/k-water01.jpg",
            "./img/preject/k-water02.jpg",
        ],
        mainImg: "./img/preject/k-water.jpg",
        stack: "Html/CSS, Javscript, jQerry",
        date: "2022.01 ~ 2022.08",
        desc: "사이트 개설,제작 및 유지보수, 통계관리",
        url: "http://www.k-waterwebzine.com/",
        explanation: {
            info: `퍼블리셔 재직당시 담당 매체`,
            function: `크로스 브라우징 및 반응형 웹사이트`,
            stack: "Html/CSS, Javscript, jQerry",
        }
    }, {
        id: 12312312,
        No: 7,
        title: '대한주택건설협회 - 주택플러스',
        img: [
            "./img/preject/plus-h01.jpg",
            "./img/preject/plus-h02.jpg",
        ],
        mainImg: "./img/preject/plus-h.jpg",
        stack: "Html/CSS, Javscript, jQerry",
        date: "2021.04 ~ 2022.03",
        desc: "유지보수 및 통계관리",
        url: "http://www.plus-h.co.kr/",
        explanation: {
            info: `퍼블리셔 재직당시 담당 매체`,
            function: `크로스 브라우징 및 반응형 웹사이트`,
            stack: "Html/CSS, Javscript, jQerry",
        }
    }, {
        id: 23123123123,
        No: 8,
        title: '하이원리조트 - 1340',
        img: [
            "./img/preject/1340-01.jpg",
            "./img/preject/1340-02.jpg",
        ],
        mainImg: "./img/preject/1340.jpg",
        stack: "Html/CSS, Javscript, jQerry",
        date: "2021.08 ~ 2021.12",
        desc: "유지보수 및 통계관리",
        url: "http://1340webzine.com/data/211112/main.php",
        explanation: {
            info: `퍼블리셔 재직당시 담당 매체`,
            function: `크로스 브라우징 및 반응형 웹사이트`,
            stack: "Html/CSS, Javscript, jQerry",
        }
    },
    {
        id: 31235465676787,
        No: 9,
        title: 'LH 한국토지주택공사 - withLH',
        img: [
            "./img/preject/lh01.jpg",
            "./img/preject/lh02.jpg",
        ],
        mainImg: "./img/preject/lh.jpg",
        stack: "Html/CSS, Javscript, jQerry",
        date: "2021.04 ~ 2021.12",
        desc: "유지보수 및 통계관리",
        url: "http://webzine.lh.or.kr/",
        explanation: {
            info: `퍼블리셔 재직당시 담당 매체`,
            function: `크로스 브라우징 및 반응형 웹사이트`,
            stack: "Html/CSS, Javscript, jQerry",
        }
    }, {
        id: 4557657654543,
        No: 10,
        title: '한국남동발전 - 남동愛',
        img: [
            "./img/preject/koen01.jpg",
            "./img/preject/koen02.jpg",
        ],
        mainImg: "./img/preject/koen.jpg",
        stack: "Html/CSS, Javscript, jQerry",
        date: "2021.04 ~ 2021.12",
        desc: "유지보수 및 통계관리",
        explanation: {
            info: `퍼블리셔 재직당시 담당 매체`,
            function: `크로스 브라우징 및 반응형 웹사이트`,
            stack: "Html/CSS, Javscript, jQerry",
        }
    }
]