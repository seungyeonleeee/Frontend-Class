// 팝업창
// open("경로", "팝업창 이름", "팝업창 옵션 => 너비, 높이, 위로, 좌측...")
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // alert("popup");
  window.open("./notice.html", "popup", "width= 600 height=500");
});

// window.open("./notice.html", "popup", "width= 600 height=500");
