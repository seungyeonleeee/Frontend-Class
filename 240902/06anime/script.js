// 1.
const ul = document.querySelector("ul");

// 2. 9열 5행
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

// 3.
for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

// 4.
const tl = anime.timeline({
  targets: "li",
  loop: true,
  direction: "alternate",

  // 6.
  delay: anime.stagger(200, { grid: [9, 5], from: "center" }),
});

// 5.
tl.add({
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeOutQuad", duration: 1200 },
  ],
}).add({
  // 7.
  translateX: anime.stagger(10, { grid: [9, 5], from: "center", axis: "x" }),
  translateY: anime.stagger(10, { grid: [9, 5], from: "center", axis: "y" }),
  rotate: anime.stagger([0, 90], { grid: [9, 5], form: "center", axis: "x" }),
});
