// 2.
const contentAll = document.querySelectorAll(".contWrap img");
const shadow = contentAll[0];
const homan = contentAll[1];
const date = contentAll[2];
const textImg = contentAll[3];

// 1.
let x = 0;
let targetX = 0;
const speed = 0.1;

// 3.
window.addEventListener("mousemove", (e) => {
  // console.log(e.pageX - window.innerWidth / 2);
  // 절반을 기준으로 음수, 양수
  x = e.pageX - window.innerWidth / 2;
});

// 4.
const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  homan.style.transform = `translateX(-${targetX / 20}px)`;
  textImg.style.transform = `translateX(-${targetX / 10}px)`;

  window.requestAnimationFrame(loop);
};
loop();
