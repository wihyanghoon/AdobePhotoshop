const background = document.querySelectorAll(".background .status_top li"),
    status_top = document.querySelectorAll(".layer .status_top li"),
    status_bottom = document.querySelectorAll(".layer .status_bottom li"),
    colorFront = document.querySelector(".color_front"),
    colorBack = document.querySelector(".color_back"),
    backgroundTitle = document.querySelector('.background ul li.active'),
    board = document.querySelector('.background div.board'),
    stauts_container = document.querySelector('.background div.board .stauts_container'),
    slide_next = document.querySelector('.next'),
    slide_prev = document.querySelector('.prev'),
    status_content = document.querySelector(".status_content"),
    wrap = document.querySelector("#wrap"),
    concept = document.querySelector(".status_explantion .concept"),
    func = document.querySelector(".status_explantion .function"),
    stack = document.querySelector(".status_explantion .stack"),
    layer_container = document.querySelector(".layer_container"),
    title = document.getElementsByTagName("title")[0],
    gitgub = document.querySelector(".status_explantion #github"),
    githubUrl = document.querySelector(".status_explantion #githubUrl")

window.onload = () => {
    getInfo()
    slide()
    transColor()
    calcHeight()
    // 백그라운드 상단바 상태변경 기능
    for (let i = 0; i < background.length; i++) {
        background[i].addEventListener("click", function () {
            for (let j = 0; j < background.length; j++) {
                background[j].classList.remove('active')
            }
            this.classList.add('active')
        });
    }
    // 레이어 상단바 상태변경 기능
    for (let i = 0; i < status_top.length; i++) {
        status_top[i].addEventListener("click", function () {
            for (let j = 0; j < status_top.length; j++) {
                status_top[j].classList.remove('active')
            }
            this.classList.add('active')
        });
    }

    for (let i = 0; i < status_bottom.length; i++) {
        status_bottom[i].addEventListener("click", function () {
            for (let j = 0; j < status_bottom.length; j++) {
                status_bottom[j].classList.remove('active')
            }
            this.classList.add('active')
        });
    }
}


// 배경색 전경색 전환 기능
let count = 0;
const transColor = () => {
    count--;
    if (count % 2 === 0) {
        colorFront.style.backgroundColor = "#000"
        colorBack.style.backgroundColor = "#fff"
    } else {
        colorFront.style.backgroundColor = "#fff"
        colorBack.style.backgroundColor = "#000"
    }
}


let startPoint = 0;
let endPoint = 0;
// 상세페이지 쿼리값 가져와서 데이터 뿌리기
const getInfo = () => {
    const URL = location.search
    const params = new URLSearchParams(URL)
    const getParms = Number(params.get("page"))
    const cardData = projectList[getParms]

    for (let i = 0; i < projectList.length; i++) {
        if (getParms === projectList[i].id) {
            title.innerText = `위향훈 포트폴리오 | ${projectList[i].title}`
            backgroundTitle.innerText = `${projectList[i].title}.jpg @ 100% (RGB/8#)`
            stauts_container.innerHTML = `
            <div class="slide_wrap">
                <img src="${projectList[i].img[0]}" alt="${projectList[i].img[0]}" />
                <img src="${projectList[i].img[1]}" alt="${projectList[i].img[1]}" />
            </div>`

            if (projectList[i].explanation) {
                concept.innerText = `${projectList[i].explanation.info}`
                func.innerText = `${projectList[i].explanation.function}`
                stack.innerText = `${projectList[i].stack}`
            }


            if (projectList[i].url) {
                const createA = document.createElement("a")
                createA.innerText = "Go website"
                createA.href = `${projectList[i].url}`
                createA.target = `_blank`
                createA.classList.add("go")
                wrap.appendChild(createA)
            }

            if (projectList[i].explanation.github){
                gitgub.innerText = `Github`
                githubUrl.innerText = `${projectList[i].explanation.github}`
                githubUrl.href = `${projectList[i].explanation.github}`
            }

            for (let j = 0; j < projectList.length; j++) {
                const createDl = document.createElement("dl")
                status_content.appendChild(createDl)
                createDl.classList.add("layers")
                const innerTag = `
                <dt><img src="./img/icon/eye.png" alt=""></dt>
                <dd><img src=${projectList[j].img[0]} alt=""></dd>
                <dd>${projectList[j].title}.jpg</dd>
                `
                createDl.innerHTML = innerTag

                const layers = document.querySelectorAll(".layers")
                if (getParms === projectList[j].id) {
                    layers[j].classList.add("current")
                }

                layers.forEach((layer, num) => {
                    layer.addEventListener("click", function () {
                        window.location.href = `./detail.html?page=${projectList[num].id}`
                    })
                })
            }
        }
    }
}

const calcHeight = () => {
    const layer_height = layer_container.clientHeight
    console.log(layer_height)
    console.log(typeof layer_height)
    console.log(`calc(12px - ${layer_container})`)
    status_content.style.maxHeight = `calc(100vh - ${layer_height}px - 158px)`
}

// 슬라이드 구현
let current = 1
const slide = () => {
    const slide_wrap = document.querySelector('.slide_wrap')
    slide_next.addEventListener("click", function () {
        slide_wrap.style.transform = `translate(-100%, 0)`
    })
    slide_prev.addEventListener("click", function () {
        slide_wrap.style.transform = `translate(0, 0)`
    })

    stauts_container.addEventListener("mousedown", (e) => {
        console.log(e.target)
        console.log("mousedown", e.pageX);
        startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
    });

    stauts_container.addEventListener("mouseup", (e) => {
        console.log(e.target)
        console.log("mouseup", e.pageX);
        endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
        if (startPoint < endPoint) {
            // 마우스가 오른쪽으로 드래그 된 경우
            console.log("prev move");
            slide_wrap.style.transform = `translate(0%, 0)`
            current = 2
            active()
        } else if (startPoint > endPoint) {
            // 마우스가 왼쪽으로 드래그 된 경우
            console.log("next move");
            slide_wrap.style.transform = `translate(-100%, 0)`
            current = 1
            active()
        }
    });

    // 모바일 터치 이벤트 (스와이프)
    stauts_container.addEventListener("touchstart", (e) => {
        console.log("touchstart", e.touches[0].pageX);
        startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
    });

    stauts_container.addEventListener("touchend", (e) => {
        console.log("touchend", e.changedTouches[0].pageX);
        endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
        if (startPoint < endPoint) {
            // 오른쪽으로 스와이프 된 경우
            console.log("prev move");
            slide_wrap.style.transform = `translate(0, 0)`
            current = 2
            active()
        } else if (startPoint > endPoint) {
            // 왼쪽으로 스와이프 된 경우
            console.log("next move");
            slide_wrap.style.transform = `translate(-100%, 0)`
            current = 1
            active()
        }
    });

}

const active = () => {
    if (current == 1) {
        background[1].classList.add("active")
        background[0].classList.remove("active")
    } else if (current == 2) {
        background[0].classList.add("active")
        background[1].classList.remove("active")
    }
}

