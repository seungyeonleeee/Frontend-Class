const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

// 그라데이션
// 1) createLinearGradient() - 선형
// 그라디언트를 적용하는데 있어서 시작점 좌표 x, y, 끝나는 지점의 x, y

// 2) createRadialGradient() - 원형
// 내부원 x, y, r, 외부원 x, y, r

// 그라디언트를 생성할 때, 사용할 수 있는 중단점 생성 함수
// => addColorStop(어느 비율, 색상)

// // 1. createLinearGradient()
// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);

// // 2.
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#ddd");

// // 3.
// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// 14. 그림자 만들기
ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

// 4. createRadialGradient()
// 7.
const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);

// 8.
radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.4, "yellow");
radGrad.addColorStop(1, "orange");

// 5.
ctx.beginPath();
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);

// 6.
// ctx.fillStyle = "white";

// 9.
ctx.fillStyle = radGrad;
ctx.fill();

// // 10. 패턴 만들기 - createPattern(이미지소스, "반복")
// // 11.
// const img = new Image();

// // 13.
// img.onload = function () {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 200, 200);
// };

// // 12.
// img.src = "./img/pattern.png";
