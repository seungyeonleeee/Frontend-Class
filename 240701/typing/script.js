const content =
  "Hi!🖐 I'm SeungYeon, \n Front-End Developer. \n Welcome to My Wolrd :D";
// \n = 행바꿈

const text = document.querySelector(".text");

//"문자열"도 index번호가 있음
//증감연산자
let i = 0;

const typing = () => {
  let txt = content[i++];
  //3항 조건연산자
  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  //조건문
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
};
setInterval(typing, 150);
