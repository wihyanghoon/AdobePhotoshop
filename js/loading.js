const LOADING_WRAP = document.querySelector(".loading_back")
const LOADING_TEXT = document.querySelector("#loading_text")
const loadString = "plese wait. Portfolio is loading..."
let loadStringDvide = loadString.split("")

textAnimation1(loadStringDvide)

document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
        window.location.href = `./main.html`
    }, 4500);
});


//로딩페이지 텍스트 써지는 효과
function textAnimation1(text) {
    if (text.length > 0) {
        LOADING_TEXT.textContent += text.shift(); // innnetText와의 차이점을 알아보자
        setTimeout(function () {
            textAnimation1(text)
        }, 80)
    }
}
