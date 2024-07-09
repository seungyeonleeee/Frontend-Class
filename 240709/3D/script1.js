const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");

article.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
});
article.forEach((el) => {
  el.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
