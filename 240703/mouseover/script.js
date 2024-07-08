//mouseover / mouseout 기능 구현
const outerElement1 = document.querySelector(".out.overout");
let outerCount1 = 0;
outerElement1.addEventListener("mouseover", () => {
  const pElementes = outerElement1.querySelectorAll("p");
  //console.log(pElementes);

  if (pElementes.length > 0) {
    pElementes[0].innerText = `Outer Box Over: ${outerCount1++}`;
  }
});

const innerElement1 = document.querySelector(".in.overout");
//console.log(outerElement1, innerElement1);

let innerCount1 = 0;
innerElement1.addEventListener("mouseover", () => {
  const pElementes = innerElement1.querySelectorAll("p");
  if (pElementes.length > 0) {
    pElementes[0].innerText = `Inner Box Over: ${outerCount1++}`;
  }
});
//자식요소의 이벤트가 부모한테도 영향을 미침 - 이벤트 버블링 O

//mouseenter / mouseleave 기능 구현
const outerElement2 = document.querySelector(".out.enterleave");
let outerCount2 = 0;
outerElement2.addEventListener("mouseenter", () => {
  const pElementes = outerElement2.querySelectorAll("p");
  //console.log(pElementes);

  if (pElementes.length > 0) {
    pElementes[0].innerText = `Outer Box Over: ${outerCount2++}`;
  }
});

const innerElement2 = document.querySelector(".in.enterleave");
//console.log(outerElement1, innerElement1);

let innerCount2 = 0;
innerElement2.addEventListener("mouseenter", () => {
  const pElementes = innerElement2.querySelectorAll("p");
  if (pElementes.length > 0) {
    pElementes[0].innerText = `Inner Box Over: ${outerCount2++}`;
  }
});

//자식요소의 이벤트가 부모한테도 영향을 미치지 않음 - 이벤트 버블링 X
