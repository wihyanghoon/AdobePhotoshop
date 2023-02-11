const header = document.querySelector("#wrap header")
const body = document.getElementsByTagName("body")[0]

const headerTag = `
        <div id="top_nav">
            <h1>
                <a href="./index.html"><img src="./img/Adobe Photoshop.png" alt=""></a>
            </h1>
            <nav>
                <ul>
                    <li><a href="https://github.com/wihyanghoon" target="_blank">Github</a></li>
                    <li><a href="https://velog.io/@whh1995" target="_blank">Velog</a></li>
                    <li><a href="tel:010-4437-5646">Tell</a></li>
                </ul>
                <ul class="right_top_btn">
                    <li><img src="./img/icon/small.png" alt=""></li>
                    <li><img src="./img/icon/large.png" alt=""></li>
                    <li><img src="./img/icon/close.png" alt=""></li>
                </ul>
            </nav>
        </div>
        <div id="bottom_nav">
            <a href="./main.html"><img src="./img/Adobe Photoshop.png" alt=""></a>
        </div>
`
header.innerHTML = headerTag


body.classList.contains("sub") ?  header.style.background = `#535353` : false
