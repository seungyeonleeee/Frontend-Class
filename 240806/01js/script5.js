const openButton = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");

openButton.addEventListener("click", function () {
  this.classList.add("btnActive");

  modalBox.classList.add("active");
});

const closeButton = modalBox.querySelector("#profile button");
closeButton.addEventListener("click", () => {
  modalBox.classList.remove("active");
  openButton.classList.remove("btnActive");
});

// 1. 최초에 보여줘야 하는 UI 디자인
// 2. 모달창이 오픈 되었을 때 보여줘야 하는 UI 디자인
// 3. 스크립트를 활용해서 위 2개의 디자인 요소를 어떻게 크로스 할 것인가
