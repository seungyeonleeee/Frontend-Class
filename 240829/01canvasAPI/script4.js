const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 객체 활용 canvasAPI 제어
// 1. 클래스로 프로토타입 함수 만들기
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    // 10)
    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dy = Math.floor(Math.random() * 4) + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // 11)
  animate() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
      this.dy = -this.dy;

    this.draw();
  }
}

// 2.
// const circleOne = new Circle(100, 100, 50, "red");
// console.log(circleOne);
// const circleTwo = new Circle(200, 200, 20, "blue");
// circleOne.draw();
// circleTwo.draw();

// 3. 20개의 원을 랜덤값으로 만들어보기
// 객체 형태 1개 => 원 1개 생성
// 객체 형태 20개 => 원 20개
// 반복 => 반복문 => 배열
// 1)
const objs = [];
// 2)
for (let i = 0; i < 20; i++) {
  // 4)
  const radius = Math.floor(Math.random() * 50) + 10;
  // + 10 => 0이 나올 수 있기 때문에 최소 반지름값 10

  // 3)
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  // 화면에 다 들어오기 위해 양쪽에 반지름 길이 빼주기
  // + radius 화면 끝에 걸리지 않게

  // 5)
  const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;

  // 6)
  objs.push(new Circle(x, y, radius, color));
}
// 7)
console.log(objs);

// 8)
// objs.forEach((obj, index) => {
//   objs[index].draw();
// });

// 12)
const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate();
  }

  requestAnimationFrame(update);
};
update();

// 9) 자바스크립트로 애니메이션 - index5/script5 이동
