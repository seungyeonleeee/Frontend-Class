// 1.
const coverWrap = document.querySelector(".coverWrap");
const coverHeight = window.innerHeight;
const contWrap = document.querySelector(".contWrap");
const progressBar = document.querySelector(".bar");
const header = document.querySelector("header");
const coverTitle = document.querySelector(".coverTitle");
const overlay = document.querySelector(".overlay");

// 2.
coverWrap.style.height = `${coverHeight}px`;
// 4.
contWrap.style.marginTop = `${coverHeight}px`;

// 7.
const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

// 5.
window.addEventListener("scroll", () => {
  // 6.
  const scrollNum = window.scrollY;

  const documentHeight = document.body.scrollHeight;

  const per = percent(scrollNum, documentHeight);

  // 8.
  progressBar.style.width = `${per}%`;

  // 9.
  if (scrollNum >= coverHeight) header.classList.add("fixed");
  else {
    header.classList.remove("fixed");
    coverTitle.style.top = `${-scrollNum / 5}px`;
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    overlay.style.background = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});
