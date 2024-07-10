//header
window.addEventListener("scroll", () => {
  const headerBg = document.querySelector("header");
  if (window.scrollY > 60) {
    headerBg.classList.add("active");
  } else {
    headerBg.classList.remove("active");
  }
});

// mb_gnb
const menuBtn = document.querySelector("#menu_btn");
const mbGnb = document.querySelector(".mb_gnb");
menuBtn.addEventListener("click", function () {
  if (this.classList.contains("open")) {
    this.classList.remove("open");
    this.classList.add("close");
  } else if (this.classList.contains("close")) {
    this.classList.remove("close");
    this.classList.add("open");
  } else {
    this.classList.add("open");
  }
  mbGnb.classList.toggle("active");
});
mbGnb.addEventListener("click", () => {
  mbGnb.classList.remove("active");
  menuBtn.classList.add("close");
});

// intro_slide
const introSlide = document.querySelector(".intro_slide");
const introSlideArrows = document.querySelectorAll(".intro_slide_arrow span");
const introSlidePager = document.querySelector(".intro_slide_pager");
const introSlidePagers = document.querySelectorAll(".intro_slide_pager span");
const introSlideImgs = document.querySelector(".intro_slide .slide_img");
const introPics = ["slide-1.png", "slide-2.png", "slide-3.png", "slide-4.png"];

let i = 0;
let slideInterval;
let transitioning = false;
// https://td449.cafe24.com/timeline/slide-1.png
introSlideImgs.style.backgroundImage = `url(https://td449.cafe24.com/timeline/${introPics[i]})`;
introSlidePagers[0].classList.add("active");

const updateSlide = (i) => {
  introSlidePagers.forEach((item) => {
    item.classList.remove("active");
  });
  introSlideImgs.style.backgroundImage = `url(https://td449.cafe24.com/timeline/${introPics[i]})`;
  introSlidePagers[i].classList.add("active");
};

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % introPics.length;
    updateSlide(i);
  }, 4000);
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

const resetSlideShow = () => {
  stopSlideShow();
  transitioning = false;
  startSlideShow();
};

introSlideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (transitioning) return;
    transitioning = true;

    if (e.target.id === "prev") {
      i = (i - 1 + introPics.length) % introPics.length;
    } else if (e.target.id === "next") {
      i = (i + 1) % introPics.length;
    }

    updateSlide(i);

    setTimeout(() => {
      transitioning = false;
      // startSlideShow();
    }, 500);
  });
});

introSlidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    i = index;
    updateSlide(i);
  });
});

startSlideShow();

introSlide.addEventListener("mouseover", () => {
  stopSlideShow();
});
introSlide.addEventListener("mouseout", () => {
  resetSlideShow();
});
introSlideArrows.forEach((arrow) => {
  arrow.addEventListener("mouseover", () => {
    stopSlideShow();
  });
});
introSlideArrows.forEach((arrow) => {
  arrow.addEventListener("mouseout", () => {
    resetSlideShow();
  });
});
introSlidePager.addEventListener("mouseover", () => {
  stopSlideShow();
});
introSlidePager.addEventListener("mouseout", () => {
  resetSlideShow();
});

//project_slide
//button
const projectSlideBtns = document.querySelector(".project_controls");
const projectPrevBtn = projectSlideBtns.querySelector(".prev");
const projectNextBtn = projectSlideBtns.querySelector(".next");
//slide
const projectSlideWrap = document.querySelector(".project_slide");
const projectSlide = projectSlideWrap.querySelectorAll("li");
//count
const projectSlideCount = projectSlide.length;
const projectSlideWidth = 360;
const projectSlideMargin = 55;
//index setting
let currentIdx = 0;

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".project_slide li ");
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
