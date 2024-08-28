// 1.
const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

// 2.
const ctx = canvas.getContext("2d");
// console.log(ctx);

// // 4. css-font속성과 같음 이 2개는 필수값
// ctx.font = "60px arial";
// // 3.
// ctx.fillText("HELLO", 50, 70);
// ctx.strokeText("HELLO", 50, 150);

// 5.
ctx.font = "italic 60px serif";
ctx.fillText("Javascript", 50, 70);
// 중간에 font 속성이 정의되면 다시 새로 시작
ctx.font = "bold 60px sana-serif";
ctx.fillText("Javascript", 50, 150);
