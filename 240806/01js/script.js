// window.addEventListener("load", alert("Hi"));

// 이벤트 버블링
const overout = document.querySelectorAll(".overout");
let i = 0;

overout.forEach((item, index) => {
  if (index === 0) {
    item.addEventListener("mouseover", function () {
      this.querySelector("p:first-of-type").innerText = "mouseover";
      this.querySelector("p:last-of-type").innerText = ++i;
    });
    item.addEventListener("mouseout", function () {
      this.querySelector("p:first-of-type").innerText = "mouseout";
    });
  }
  if (index === 1) {
    item.addEventListener("mouseover", function () {
      this.querySelector("p:first-of-type").innerText = "mouseover";
      this.querySelector("p:last-of-type").innerText = ++i;
    });
    item.addEventListener("mouseout", function () {
      this.querySelector("p:first-of-type").innerText = "mouseout";
    });
  }
});

// const enterleave = document.querySelectorAll(".enterleave");
