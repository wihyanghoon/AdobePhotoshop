const projectList = [
    {
        id: 31231231,
        No: 1,
        title: '토이 프로젝트 - Blended',
        img: [
            "./img/preject/blended01.jpg",
            "./img/preject/blended02.jpg",
        ],
        mainImg: "./img/preject/blended.jpg",
        stack: "React.js with TypeScript",
        date: "2022.03 ~ 2023.03",
        desc: "기획 디자인 및 프론트엔드 개발",
        url:"https://wihyanghoon.github.io/Blended",
        explanation: {
            info: `React.js with TypeScript를 이용한 그라디언트 제네레이터 사이트 입니다.`,
            function: `state값의 변경에 따른 폰트 및 CSS 변경 기능`,
            stack: "React.js, Typescript",
            github : "https://github.com/wihyanghoon/Blended",
        }
    },
    {
        id: 5656765,
        No: 2,
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
        id: 454214,
        No: 3,
        title: '포트폴리오사이트 - The PhotoShop',
        img: [
            "./img/preject/photoshop01.jpg",
            "./img/preject/photoshop02.jpg",
        ],
        mainImg: "./img/preject/photoshop.jpg",
        stack: "Html/CSS, Javascript",
        date: "2022.11 ~ 2022.12",
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
        No: 4,
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
        No: 5,
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
        No: 6,
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
        No: 7,
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
        No: 8,
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