// 1.
const path = anime.path(".svg path");

// 2.
anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  duration: 15000,
  easing: "linear",
  loop: true,
});
