const button = document.querySelector("button");
const buttonAction = (e) => {
  //console.log(e.target); //span - 실제로 이벤트가 발생된 요소
  //console.log(e.currentTarget); //button - 이벤트가 부착된 요소
  console.log(e);
  // currentTarget - null
  //이벤트가 실행된 이후에 찾아오기 때문에 찾지못함
};

button.addEventListener("click", buttonAction);
