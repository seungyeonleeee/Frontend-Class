// 1.
const imageAll = document.querySelectorAll(".parallaxImage");

// 4.
const totalNum = imageAll.length;
// 0번 index는 0 이라 움직이지 않아서

// 2.
window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;
  // console.log(scrollNum); // 전체 스크롤값 확인

  // 3.
  if (scrollNum < 2500) {
    imageAll.forEach((item, index) => {
      item.style.transform = `translate3d(0, 0, ${
        scrollNum / (3 * (totalNum - index))
      }px)`;
    });
  }
});
