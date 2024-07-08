const openBtn = document.querySelector("#open");
const modalBox = document.querySelector("#modal_box");
const closeBtn = document.querySelector("#close");
//console.log(openBtn, modalBox, closeBtn);

openBtn.addEventListener("click", () => {
  //console.log("click");
  modalBox.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  modalBox.classList.remove("active");
});
modalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

//2015년도에 javascript를 만드는 Ecma에서 ES6문법을 선보임
//이전에는 function (), 이후에는 () => {}
//this객체는 function () 에서는 객체 자신, () => {} 윈도우 객체를 선택함
//javascript에서는 함수의 선언과 호출 위치가 중요함
//function () : Hoisting
