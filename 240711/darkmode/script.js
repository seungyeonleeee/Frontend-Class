const btn = document.querySelector("#toggle_box button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("click");

  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    btn.innerText = "라이트모드로 바꾸기";
  } else {
    btn.innerText = "다크모드로 바꾸기";
  }
});
