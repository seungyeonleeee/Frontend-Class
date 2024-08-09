// Math 수학 객체 => 함수

// let num = 2.1234;
// let num01 = 2.8765;

// let maxNum = Math.max(10, 5, 8, 30);
// let minNum = Math.min(10, 5, 8, 30);
// let roundNum = Math.round(num);
// let floorNum = Math.floor(num01);
// let ceilNum = Math.ceil(num);
// let randomNum = Math.random();
// let piNum = Math.PI;

// document.write(maxNum, "<br/>");
// document.write(minNum, "<br/>");
// document.write(roundNum, "<br/>");
// document.write(floorNum, "<br/>");
// document.write(ceilNum, "<br/>");
// document.write(randomNum, "<br/>");
// document.write(piNum, "<br/>");

//////////////////////////////

const character = document.querySelector(".character");

let degree = 0;

const loop = () => {
  // 각도 계산
  // 60분법의 각도를 radian으로 변환
  const rotation = (degree * Math.PI) / 180;

  // x축 / y축 값 정의
  const targetX = window.innerWidth / 2 - 50 + 100 * Math.cos(rotation);
  //100 * Math.cos(rotation) x축의 값을 체크
  const targetY = window.innerHeight / 2 - 50 + 100 * Math.sin(rotation);
  //100 * Math.sin(rotation) y축의 값을 체크

  character.style.left = `${targetX}px`;
  character.style.top = `${targetY}px`;

  degree += 1;

  // 재귀함수
  requestAnimationFrame(loop);

  console.log(rotation);
};

loop();
