// 1.
const progressBar = document.querySelector(".bar");
// 8.
const depthWrap = document.querySelector(".depthWrap span");
// 10.
const submarine = document.querySelector(".submarine");
// 12.
const octopus = document.querySelector(".octopus");

// 6.
const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

// 2.
window.addEventListener("scroll", () => {
  // 3.
  const scrollNum = window.scrollY;
  // console.log(scrollNum);

  // 4.
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  // 5.
  const per = percent(scrollNum, documentHeight);

  // 7.
  progressBar.style.width = `${per}%`;

  // 9.
  depthWrap.innerText = scrollNum.toFixed(0);

  // 11.
  submarine.style.transform = `translateX(${per}%)`;

  // 13.
  octopus.style.transform = `translateY(-${per / 2}%)`;
});
