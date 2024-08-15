// // 원기둥의 부피를 계산
// // 원기둥의 밑면적 x 높이
// // 원 부피 : 파이 * 반지름 * 반지름

// const form = document.querySelector("form");
// const result = document.querySelector("#result");

// // 생성자함수를 통해서 계산해보기
// // function Cylinder(diameter, height) {
// //   this.diameter = diameter;
// //   this.height = height;

// //   this.getVolume = function () {
// //     let radius = this.diameter / 2;
// //     return (Math.PI * radius * radius * this.height).toFixed(2);
// //   };
// // }

// // 확인해보기
// // const cylinder01 = new Cylinder(8, 10);
// // console.log(`원기둥의 부피는 ${cylinder01.getVolume()} 입니다.`);

// // class 사용해보기
// class Cylinder {
//   constructor(diameter, height) {
//     this.diameter = diameter;
//     this.height = height;
//   }

//   getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const diameter = document.querySelector("#diameter").value;
//   const height = document.querySelector("#height").value;

//   if (
//     diameter === "" ||
//     height === "" ||
//     isNaN == typeof diameter ||
//     isNaN == typeof height
//     // isNaN = 숫자가 아니면 참
//   )
//     result.innerText = "정확한 지름값과 높이값을 입력해주세요";
//   else {
//     const cylinder01 = new Cylinder(diameter, height);
//     result.innerText = `원기둥의 부피는 ${cylinder01.getVolume()} 입니다.`;
//   }
// });

// // 원기둥의 밑면적 x 높이
// // 원 부피 : 파이 * 반지름 * 반지름

const form = document.querySelector("form");
const result = document.querySelector("#result");

function Cylinder(diameter, height) {
  this.diameter = diameter;
  this.height = height;

  this.getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

// class Cylinder {
//   constructor(diameter, height) {
//     this.diameter = diameter;
//     this.height = height;

//     getVolume = function () {
//       let radius = this.diameter / 2;
//       return (Math.PI * radius * radius * this.height).toFixed(2);
//     };
//   }
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const diameter = document.querySelector("#diameter").value;
  const height = document.querySelector("#height").value;

  if (
    diameter === "" ||
    height === "" ||
    isNaN == typeof diameter ||
    isNaN == typeof height
  ) {
    result.innerText = "정확한 지름값과 높이값을 입력해주세요";
  } else {
    const cylinder01 = new Cylinder(diameter, height);
    result.innerText = `원기둥의 부피는 ${cylinder01.getVolume()} 입니다.`;
  }
});
