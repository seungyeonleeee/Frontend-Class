// 1.
const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

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

  // 7.
  // console.log(x, y);

  h1.innerText = `X : ${x}px Y : ${y}px`;

  // 3.
  // box.style.top = `${y}px`;
  // box.style.left = `${x}px`;
});

// 5.
const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = `${targetY}px`;
  box.style.left = `${targetX}px`;

  // 7.
  // console.log(targetX, targetY);

  requestAnimationFrame(loop);
};
loop();
