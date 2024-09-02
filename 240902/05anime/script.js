// 1.
const ul = document.querySelector("ul");

// 3. 열, 행
const grid = [9, 3];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

// 2.
// for (let i = 0; i < 27; i++)
// 4.
for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  ul.appendChild(li);
}

// 5.
anime({
  targets: "li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 3], from: "center" }),
});
