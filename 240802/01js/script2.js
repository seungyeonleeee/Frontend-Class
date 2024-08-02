// //DOM
// const main = window.document.querySelector("main");
// console.log(main);

// // const h1 = main.querySelector("h1");
// // console.log(h1);

// const h1 = document.getElementsByTagName("h1");
// console.log(h1);

// // const profile = main.querySelector("main > #profile");
// const profile = document.getElementById("profile");
// console.log(profile);
// //querySelector - 전역요소의 모든 요소를 찾아야 함
// //getElementById - 메모리의 효율성 극대화 (DOM > ID)
// //부모요소의 객체 속성을 반드시 document로 지정해야 함

// const img = document.getElementsByClassName("img");
// console.log(img);

// const desc = document.querySelector("#desc");
// console.log(desc);

// // const user = desc.querySelector(".user");
// const user = desc.querySelectorAll(".user");
// console.log(user[user.length - 1]);
// // 유사배열
// // 99% 배열이 가지고 있는 속성
// // 유사배열은 배열과 다른 1% 속성이 있음

// // user.addEventListener("click", () => {
// //   console.log("click");
// // });
// // 안됨

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });

/////////////////////////

// DOM에서 어떤 Node를 찾아와서 해당 Node안에 포함된 요소를 가져오고 싶을 때
// const desc = document.querySelector("#desc");
// const iu = desc.querySelectorAll(".user")[0].innerText;
// console.log(desc);
// console.log(iu);
// console.log(desc.innerText);
// console.log(desc.textContent);

const title = document.querySelector("#title");
//객체.함수 => 객체 뒤에 있는 함수 = 메서드
title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "#000";
  this.style.color = "#fff";
});
const pfImg = document.querySelector("#profile img");
pfImg.addEventListener("click", function () {
  this.src = "./img/pf2.png";
  this.alt = "brain";
});
const firstP = document.querySelector("#desc p:first-child");
console.log(firstP);
firstP.addEventListener("click", function () {
  this.innerHTML = `이름 : <b>태연</b>`;
});
const secondP = document.querySelector("#desc p:nth-child(2)");
secondP.addEventListener("click", function () {
  // this.classList.add("active");

  // toggle의 원리
  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }

  this.classList.toggle("active");
});
