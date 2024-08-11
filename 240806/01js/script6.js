// const box = document.querySelector("#box");

// box.addEventListener("click", (event) => {
//   // console.log(event.target);
//   // console.log(event.currentTarget);

//   // console.log(event);

//   alert(`이벤트 발생위치 : ${event.pageX}, ${event.pageY}`);
// });

const box = document.querySelector("#box");
box.addEventListener("click", (event) => {
  // console.log(event.target);
  // console.log(event.currentTarget);
  console.log(`이벤트 발생위치 : ${event.pageX}, ${event.pageY}`);
});
