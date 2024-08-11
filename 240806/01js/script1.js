// document.body.addEventListener("keydown", (e) => {
//   const result = document.querySelector("#result");
//   //console.log(result);

//   result.innerText = `code : ${e.key}`;
//   // if(e.key === "y"){

//   // }
// });

document.body.addEventListener("keydown", (e) => {
  const result = document.querySelector("#result");
  // console.log(result);

  // console.log(e.key);
  result.innerText = `code : ${e.key}`;
});
