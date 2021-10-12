//html 불러오기//
const hamberger = document.querySelector(".navbar__hamberger");
const menu = document.querySelector(".navbar__menu");
const sns = document.querySelector(".navbar__sns");

//햄버거메뉴 클릭 function//
function clickHamberger() {
    menu.classList.toggle("active");//!!클릭시 active없으면 추가
    sns.classList.toggle("active");
}

//햄버거메뉴에 클릭이벤트 추가//
hamberger.addEventListener("click", clickHamberger);