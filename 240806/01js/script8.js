// 이벤트 버블링
// document.querySelector("p").addEventListener("click", () => {
//   console.log("p");
// });
// document.querySelector("section").addEventListener("click", () => {
//   console.log("section");
// });
// document.querySelector("div").addEventListener("click", () => {
//   console.log("div");
// });

// 웹 브라우저가 실행 => html, js 파싱
// 파싱 : 문서를 읽으면서, 기본적으로 실행될 수 있는 요소 실행

// function testFnc() {
//   alert("시작");
// }
// testFnc();

// const elements = document.querySelectorAll("*");
// // console.log(elements);
// elements.forEach((element) => {
//   element.addEventListener(
//     "click",
//     (e) => {
//       console.log(
//         `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
//       );
//     },
//     true
//   );
// });

// 명확하게 이벤트가 발생된 요소를 찾고 싶으면 target
// 이벤트 핸들러가 부착된건 currentTarget

// true - 이벤트 캡처링
// addEventListener 의 3번째 인자값

// document.querySelector("p").addEventListener("click", () => {
//   console.log("p");
// });
// document.querySelector("section").addEventListener("click", () => {
//   console.log("section");
// });
// document.querySelector("div").addEventListener("click", () => {
//   console.log("div");
// });

const elements = document.querySelectorAll("*");
elements.forEach((element) => {
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true
  );
});
