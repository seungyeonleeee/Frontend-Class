//gender
// 1. 웹 브라우저에게 클릭할 대상을 알려준다.
// querySelector()
// addEventLister()
// 2. 클릭을 했을 때, css로 정의해놓은 가상클래스를 원하는 요소에 적용시킨다.
// classList
// add() || remove()
// button => 기본속성 (서버에 데이터를 전송하려 한다.) => 방해요소 필요 preventDefault()
// 2-1. 가상클래스 = filledA & filledB

//const femaleBtn = document.querySelector("#femalebtn")
const femaleBtn = document.getElementById("femalebtn");
const maleBtn = document.getElementById("malebtn");
//console.log(femaleBtn);
femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});
maleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});
