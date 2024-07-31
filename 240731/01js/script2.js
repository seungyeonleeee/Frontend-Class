// 아래 id 및 pw는 A사용자의 id & pw 입니다.
const id = "ezen";
const pw = 1234;

// 1. 사용자로부터 id 및 pw 정보값을 순차적으로 받습니다!!
// 2. 사용자가 입력한 id값이 위에 저장된 id와 일치하면, pw값을 받을 수 있는 단계로 넘어가고, 만약 id값이 일치하지 않으면 값이 일치하지 않다는 알림창 띄우기
// 3. pw값을 입력하는 단계 역시, pw가 일치하면 사용자님 반갑습니다 // pw가 일치하지 않는다면 pw값이 일치하지 않습니다. 라는 알림창 띄우기

const userId = prompt("당신의 아이디는?");
if (id === userId) {
  const userPw = Number(prompt("당신의 비밀번호는?"));
  if (pw === userPw) {
    alert(`${userId}님 반갑습니다!`);
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    location.reload(); //window. => 생략가능 (가장 최상위 요소라)
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  location.reload();
}
