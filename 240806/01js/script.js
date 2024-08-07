// 이벤트 버블링

// 마우스를 오버할때마다 숫자가 카운팅이 되기 위해 초기값 세팅
// mouseover & mouseout
let o = 0;

const overoutOut = document.querySelector("div.out.overout");
// console.log(overoutOut);
overoutOut.addEventListener("mouseover", function () {
  // console.log("hover");

  const pItems = this.querySelectorAll("p");
  // console.log(pItems);
  pItems[0].innerText = "mouseover";
  pItems[3].innerText = ++o;
});

const overoutIn = document.querySelector("div.in.overout");
overoutIn.addEventListener("mouseover", function () {
  const pItems = this.querySelectorAll("p");
  // console.log(pItems);
  pItems[0].innerText = "mouseover";
  pItems[1].innerText = ++o;
});

// mouseenter & mouseleave
let e = 0;

const enterleaveOut = document.querySelector("div.out.enterleave");
// console.log(overoutOut);
enterleaveOut.addEventListener("mouseenter", function () {
  // console.log("hover");

  const pItems = this.querySelectorAll("p");
  // console.log(pItems);
  pItems[0].innerText = "mouseenter";
  pItems[3].innerText = ++e;
});

const enterleaveIn = document.querySelector("div.in.enterleave");
enterleaveIn.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  // console.log(pItems);
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
});
