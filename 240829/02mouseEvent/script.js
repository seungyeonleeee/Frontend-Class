// 1.
const cursorItem = document.querySelector(".cursorItem");
const circle = document.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");

// 4.
let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

// 2.
window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
  // console.log(x, y);
});

// 5.
const loop = () => {
  // 7.
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  // 6.
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  // 8.
  window.requestAnimationFrame(loop);
};
loop();

// 3.
buttonAll.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    circle.style.transform = `scale(0.5)`;
  });
  item.addEventListener("mouseleave", () => {
    circle.style.transform = `scale(1)`;
  });
});
