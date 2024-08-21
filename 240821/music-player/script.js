// 1.
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
let i = 0;

// 2.
lists.forEach((list) => {
  // 4.
  const pic = list.querySelector(".pic");
  pic.style.backgroundImage = `url(./img/member${i + 1}.jpg)`;

  // 3.
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  i++;
});
