// 1.
const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

// 6.
const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

// 2.
window.addEventListener("scroll", () => {
  // 3. 현재 스크롤값
  const scrollNum = window.scrollY;
  // console.log(scrollNum);

  // 4. 스크롤을 할 수 있는 영역
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  // 5.
  const per = `${percent(scrollNum, documentHeight)}%`;

  // 7.
  h1.innerText = per;

  // 8.
  progressBar.style.width = per;
});
