//header
window.addEventListener("scroll", () => {
  const headerBg = document.querySelector("header");
  if (window.scrollY > 60) {
    headerBg.classList.add("active");
  } else {
    headerBg.classList.remove("active");
  }
});

//project_slide
//button
const slideBtns = document.querySelector(".project_controls");
const prevBtn = slideBtns.querySelector(".prev");
const nextBtn = slideBtns.querySelector(".next");
//slide
const slideWrapper = document.querySelector(".project_slide_wrapper");
const slide = slideWrapper.querySelectorAll("li");
//count
const slideCount = slide.length;
const slideWidth = 370;
const slideMargin = 40;
//index setting
let currentIdx = 0;

const updateWidth = () => {};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slideWrapper.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slideWrapper.prepend(cloneSlide);
  }
};
makeClone();
