// 현재 보고있는 웹브라우저 문서 내 버튼을 하나 만들어주세요
// 그리고, 해당 버튼을 클릭할 때 마다 바탕화면 배경 색상이 변경되도록 해주세요
// 변경되어야 하는 색상은 white, yellow, aqua, purple 색상이며,
// 마지막 purple 색상 다음번 색상은 첫번째 white 색상으로 변경
// 무한으로 색상이 변경되어 돌아갈수 있도록

// <힌트>
// 함수 사용
// 각각의 컬러를 배열 자료구조를 사용
// 배열 내 각각의 아이템은 index값을 가지고 있다
// 0부터 시작하는 인덱스 값이 1개씩 증가
// 증감연산자가 필요
// 이벤트 (클릭했을 때, click)

// document.body.innerHTML = `<button id="button">Click</button>`;
// const button = document.querySelector("#button");

// const changeColor = () => {
//   const colors = ["white", "yellow", "aqua", "purple"];

//   document.body.style.backgroundColor = colors[1];
// };
// button.addEventListener("click", changeColor);

document.body.innerHTML = `<button>Click</button>`;
const button = document.querySelector("button");

const color = ["white", "yellow", "aqua", "purple"];

let i = 0;

button.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
