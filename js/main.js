const WRAP = document.querySelector("#wrap")
const MAIN_TEXT = document.querySelector("#main_text")
const ALIGN_BTN = document.querySelectorAll(".align_btn_wrap > ul > li")
const TBODY = document.getElementsByTagName("tbody")
const project_area = document.querySelector(".pro_wrap")
const list_table = document.querySelector(".list_table")
const profile_popup = document.querySelector(".profile_popup")
const profile_back = document.querySelector(".profile_back")

const mainString = "Hello. well come my Portfolio website."


let mainStringDvide = mainString.split("")

//로딩페이지 꺼짐
// document.addEventListener("DOMContentLoaded", () => {
//     window.setTimeout(() => {
//         LOADING_WRAP.style.opacity = "0"
//         WRAP.style.display = "block"
//         textAnimation2(mainStringDvide)
//         fadeOut()
//     }, 4500);
// });
//

// 메인페이지 텍스트 써지는 효과
function textAnimation2(text) {
    if (text.length > 0) {
        MAIN_TEXT.textContent += text.shift();
        setTimeout(function () {
            textAnimation2(text)
        }, 80)
    }
}
textAnimation2(mainStringDvide)

// 그리드버전 카드리스트 가져오기
function addProject() {
    // console.log(projectList)
    for (let i = 0; i < projectList.length; i++) {
        const pro_card = document.createElement("li");
        project_area.appendChild(pro_card)

        const pro_title = document.createElement("h3");
        const pro_img_Area = document.createElement("div");
        const pro_img = document.createElement("img");
        const pro_stack = document.createElement("p");
        const pro_desc = document.createElement("p");
        const pro_date = document.createElement("span");

        pro_title.innerText = projectList[i].title
        pro_stack.innerText = projectList[i].stack
        pro_desc.innerText = projectList[i].desc
        pro_date.innerText = projectList[i].date

        pro_card.classList.add('pro_card')
        pro_title.classList.add('pro_title')
        pro_img_Area.classList.add('pro_img_Area')
        pro_img.classList.add('pro_img')
        pro_img.src = projectList[i].mainImg
        pro_date.classList.add('pro_date')

        pro_card.appendChild(pro_img_Area)
        pro_img_Area.appendChild(pro_img)
        pro_card.appendChild(pro_title)
        pro_card.appendChild(pro_stack)
        pro_card.appendChild(pro_desc)
        pro_card.appendChild(pro_date)
    }
    const project_card = document.querySelectorAll(".pro_card")


    for (let i = 0; i < project_card.length; i++) {
        project_card[i].addEventListener("click", (e) => {
            console.log(e.target)
            console.log(projectList[i].id)
            window.location.href = `./detail.html?page=${projectList[i].id}`
        })
    }
}

function addProject_2() {
    for (let i = 0; i < projectList.length; i++) {
        const TR = document.createElement("tr")
        TBODY[0].appendChild(TR)
        let addTable = `
            <td>${projectList[i].No}</td>
            <td><img src="${projectList[i].mainImg}"></td>
            <td>${projectList[i].title}</td>
            <td>${projectList[i].stack}</td>
            
            <td>${projectList[i].date}</td>
        `
        TR.classList.add("pro_table")
        TR.innerHTML = addTable
    }
    const project_table = document.querySelectorAll(".pro_table")
    for (let i = 0; i < project_table.length; i++) {
        project_table[i].addEventListener("click", (e) => {
            console.log(e.target)
            console.log(projectList[i].id)
            window.location.href = `./detail.html?page=${projectList[i].id}`
        })
    }
}




addProject()
addProject_2()



window.onload = () => {
    document.querySelector('.dropbtn_click').onclick = () => {
        dropdown();
    }
    document.getElementsByClassName('fastfood').onclick = () => {
        showMenu(value);
    };

    dropdown = () => {
        var v = document.querySelector('.dropdown-content');
        var dropbtn = document.querySelector('.dropbtn')
        v.classList.add('show');
        dropbtn.style.borderColor = 'rgb(94, 94, 94)';
    }

    showMenu = (value) => {
        var dropbtn_icon = document.querySelector('.dropbtn_icon');
        var dropbtn_content = document.querySelector('.dropbtn_content');
        var dropbtn_click = document.querySelector('.dropbtn_click');
        var dropbtn = document.querySelector('.dropbtn');

        dropbtn_icon.innerText = '';
        dropbtn_content.innerText = value;
        dropbtn_content.style.color = '#fff';
        dropbtn.style.borderColor = '#3992a8';

        // while (project_area.hasChildNodes()) {
        //     project_area.removeChild(
        //         project_area.firstChild
        //     );
        // }

        while (project_area.firstChild) {
            project_area.removeChild(project_area.firstChild);
        }

        while (TBODY[0].firstChild) {
            TBODY[0].removeChild(TBODY[0].firstChild);
        }

        if (value === "번호") {
            projectList.sort((a, b) => {
                return a.No < b.No ? -1 : a.No > b.No ? 1 : 0;
            })
            addProject()
            addProject_2()

        } else if (value === "제목") {
            projectList.sort((a, b) => {
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            })
            addProject()
            addProject_2()

        } else if (value === "날짜") {
            projectList.sort((a, b) => {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
            })
            addProject()
            addProject_2()
        }
    }
}

for (let i = 0; i < ALIGN_BTN.length; i++) {
    ALIGN_BTN[i].addEventListener("click", function (e) {
        for (let j = 0; j < ALIGN_BTN.length; j++) {
            ALIGN_BTN[j].classList.remove('back_active')
        }
        this.classList.add('back_active')
        if (e.target.alt == 1) {
            list_table.style.display = "table"
            project_area.style.display = "none"
        } else {
            list_table.style.display = "none"
            project_area.style.display = "flex"
        }
    });
}


for (let i = 0; i < ALIGN_BTN.length; i++) {
    ALIGN_BTN[i].addEventListener("mouseover", function (e) {
        if (e.target.alt == 1) {
            e.target.src = './img/icon/active_align_list.png'
        } else {
            e.target.src = './img/icon/active_align_grid.png'
        }
    });
}

for (let i = 0; i < ALIGN_BTN.length; i++) {
    ALIGN_BTN[i].addEventListener("mouseout", function (e) {
        if (e.target.alt == 1) {
            e.target.src = './img/icon/align_list.png'
        } else {
            e.target.src = './img/icon/align_grid.png'
        }
    });
}

// 목록 닫힘
window.onclick = (e) => {
    // console.log(e.target.matches)
    if (!e.target.matches('.dropbtn_click')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");

        var dropbtn_icon = document.querySelector('.dropbtn_icon');
        var dropbtn_content = document.querySelector('.dropbtn_content');
        var dropbtn_click = document.querySelector('.dropbtn_click');
        var dropbtn = document.querySelector('.dropbtn');

        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// 프로필 오픈 팝업
const openProfile = () => {
    profile_popup.style.transform = "translate(0, 0)"
    // setTimeout(() => {
    //     profile_back.style.right = "50%"
    // }, 1);
}

const closeProfile = () => {
    profile_popup.style.transform = "translate(-100%, 0)"
    // profile_back.style.transform = "translate(-100%, -50%)"
    // setTimeout(() => {
    //     // profile_back.style.display = "none"

    // }, 1000);
}