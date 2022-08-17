window.addEventListener("scroll", scroll);

const scrollHeader = document.querySelector(".web-header");
const headerMenu = document.getElementsByClassName("header-main-menu");
const mClick = document.querySelector(".m-ham-click");
const hamBtn = document.querySelector(".ham-img");
const mHeader = document.querySelector(".all-header");
const Mclose = document.querySelector(".close");
const allContainer = document.querySelector(".all-container");
const twoSubAccordionUl = document.getElementsByClassName("accordion-sub-menu");
// 쇼핑 및 구매방법 / 보내기 및 받기 등 ul
const arrBtn = document.getElementsByClassName("arr-content");

console.log(twoSubAccordionUl);
console.log(arrBtn);

for (let i = 0; i < arrBtn.length; i++) {
  arrBtn[i].addEventListener("click", () => {
    for (let j = 0; j < twoSubAccordionUl.length; j++) {
      if (twoSubAccordionUl[j].style.display == "none") {
        twoSubAccordionUl[j].style.display = "block";
      } else {
        twoSubAccordionUl[j].style.display = "none";
      }
    }
  });
}

hamBtn.addEventListener("click", hamBtnClick);
Mclose.addEventListener("click", closeBtnClick);

function hamBtnClick() {
  if (mClick.style.display == "none") {
    mClick.style.display = "block";
    mHeader.style.display = "none";
    allContainer.style.display = "none";
  } else {
    mClick.style.display = "none";
  }
}

function closeBtnClick() {
  if (mClick.style.display == "block") {
    mClick.style.display = "none";
    mHeader.style.display = "flex";
    allContainer.style.display = "block";
  } else {
    mClick.style.display = "none";
  }
}

function scroll() {
  let top = window.scrollY;
  let select = document.querySelector(".select");

  console.log(select);
  console.log(top);
  if (top >= 68) {
    scrollHeader.classList.add("active");
    document.querySelector(".white-logo").src = "./images/header-logo.png";
    select.classList.add("on2");
  } else {
    scrollHeader.classList.remove("active");
    document.querySelector(".white-logo").src = "./images/white-logo.png";
    select.classList.remove("on2");
  }

  for (let i = 0; i < headerMenu.length; i++) {
    if (top >= 68) {
      headerMenu[i].classList.add("on");
    } else {
      headerMenu[i].classList.remove("on");
    }
  }
}
