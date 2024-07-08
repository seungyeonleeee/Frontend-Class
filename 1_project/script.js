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
const projectSlideBtns = document.querySelector(".project_controls");
const projectPrevBtn = projectSlideBtns.querySelector(".prev");
const projectNextBtn = projectSlideBtns.querySelector(".next");
//slide
const projectSlideWrap = document.querySelector(".project_slide_wrap");
const projectSlide = projectSlideWrap.querySelectorAll("li");
//count
const projectSlideCount = projectSlide.length;
const projectSlideWidth = 370;
const projectSlideMargin = 40;
//index setting
let currentIdx = 0;

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".project_slide_wrap li ");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (projectSlideWidth + projectSlideMargin) * newSlideCount -
    projectSlideMargin
  }px`;
  projectSlideWrap.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue =
    -(projectSlideWidth + projectSlideMargin) * projectSlideCount;
  projectSlideWrap.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < projectSlideCount; i++) {
    const cloneSlide = projectSlide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    projectSlideWrap.appendChild(cloneSlide);
  }
  for (let i = projectSlideCount - 1; i >= 0; i--) {
    const cloneSlide = projectSlide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    projectSlideWrap.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    projectSlideWrap.classList.add("animated");
  }, 100);
};
makeClone();

const moveSlide = (num) => {
  projectSlideWrap.style.left = `${
    -num * (projectSlideWidth + projectSlideMargin)
  }px`;
  currentIdx = num;
  if (currentIdx === projectSlideCount || currentIdx === -projectSlideCount) {
    setTimeout(() => {
      projectSlideWrap.classList.remove("animated");
      projectSlideWrap.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      projectSlideWrap.classList.add("animated");
    }, 600);
  }
};

projectNextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});
projectPrevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

let timer = undefined;
const autoProjectSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};
autoProjectSlide();

const stopProjectSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

projectSlideWrap.addEventListener("mouseenter", () => {
  stopProjectSlide();
});
projectSlideWrap.addEventListener("mouseleave", () => {
  autoProjectSlide();
});
projectSlideBtns.addEventListener("mouseenter", () => {
  stopProjectSlide();
});
projectSlideBtns.addEventListener("mouseleave", () => {
  autoProjectSlide();
});
