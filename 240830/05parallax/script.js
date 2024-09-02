// 1.
const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const subPageImage = document.querySelector(".subPage .parallaxImage");

// 2.
let x = 0;
let targetX = 0;
const speed = 0.1;
// 8.
let scrollNum = 0;
// 10.
const totalNum = imageAll.length;

// 6.
window.addEventListener("scroll", () => {
  // 7.
  scrollNum = window.scrollY;

  // 9.
  imageAll.forEach((image, index) => {
    if (index < 4) {
      // 11.
      image.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - index))
      }px)`;
    }
  });
});

// 3.
window.addEventListener("mousemove", (e) => {
  // console.log(e.pageX);
  x = e.pageX - window.innerHeight / 2;
  // 화면을 절반으로 나누기 (음수 // 양수)
  // console.log(x);
});

// 4.
const loop = () => {
  targetX += (x - targetX) * speed;

  // 5.
  // 12. translateY
  imageAll[4].style.transform = `scale(1.1) translate(${-targetX / 50}px, ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.1) translate(${-targetX / 100}px, ${
    -scrollNum / (2 * (totalNum - 5))
  }px)`;
  subPageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;

  window.requestAnimationFrame(loop);
};
loop();
