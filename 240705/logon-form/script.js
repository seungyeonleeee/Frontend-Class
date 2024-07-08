//phone_wrapper
//1. onkeyup="onchange()"   onchange="changePhone1()"
//onkeyup = 키보드에서 손가락을 떼는 순간 이벤트

//문자열 개수로 포커스 넘어가게 하기
const changePhone1 = () => {
  const phone1 = document.querySelector("#phone1").value;
  console.log(phone1);
  if (phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
};
const changePhone2 = () => {
  const phone2 = document.querySelector("#phone2").value;
  console.log(phone2);
  if (phone2.length === 4) {
    document.querySelector("#phone3").focus();
  }
};
//전역변수로 만들기
const tokenButton = document.querySelector("#token_button");

const changePhone3 = () => {
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;

  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    tokenButton.style =
      "background-color: #fff; color: #0068ff; cursor: pointer;";
    tokenButton.removeAttribute("disabled");
  }
};

const tokenNumber = document.querySelector("#token");
const tokenTimer = document.querySelector("#token_timer");
const tokenConfirmButton = document.querySelector("#token_timer_confirmBtn");
const signupButton = document.querySelector("#signup_button");

let interval;

//시간 카운팅 함수
//3분 180초d에서 숫자가 한개씩 떨어진다
const getTokenTimer = () => {
  let timer = 180;
  interval = setInterval(() => {
    if (timer >= 0) {
      const minutes = Math.floor(timer / 60); //몫 = 분
      const seconds = timer % 60; //나머지 = 초
      //값 넣어주기
      tokenTimer.innerText = minutes + ":" + String(seconds).padStart(2, "0");
      timer -= 1; //timer에 숫자 1씩 떨어뜨려라
    } else {
      tokenNumber.innerText = "000000";
      tokenButton.style = "";
      tokenButton.setAttribute("disabled", "true");
      tokenTimer.innerText = "3:00";
      tokenConfirmButton.style = "";
      tokenConfirmButton.setAttribute("disabled", "true");
      clearInterval(interval);
    }
  }, 1000);
};

//전송버튼을 누르면 랜덤 인증번호 나오게 하기
tokenButton.addEventListener("click", (e) => {
  //console.log("click");
  //기본적으로 버튼은 서버로 값을 전송하려는 성질을 막아버림
  e.preventDefault();

  //랜덤 인증번호
  //숫자를 임의로 만들어주는 함수 Math.random()
  //0~1 미만의 실수(소수점)의 값을 난수(임의의 값을 무작위로 생성)형태로 랜덤 생성
  //Math.random() * 1000000 : 실수 6자리
  //floor() : 소수점을 버려라
  //String() : 6자리 문자열이 필요함 ex(365=> 000365)
  //padStart(6, "0") => 6자리로 만들고 안되면 0으로 채워라 (문자열에서만 가능)
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  //console.log(token);
  //값을 넣어주기
  tokenNumber.innerText = token;

  //인증완료 버튼 활성화
  tokenConfirmButton.removeAttribute("disabled", "true");
  tokenConfirmButton.style =
    "background-color: #0068ff; color: #fff; cursor: pointer;";

  //시간 카운팅 함수
  getTokenTimer();
});

//인증완료 버튼 클릭 시 알림창과 버튼 막기
tokenConfirmButton.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(interval);
  this.style = "background-color: #fff";
  this.setAttribute("disabled", "true");
  this.innerText = "인증완료";
  alert("인증이 완료되었습니다.");
  signupButton.style =
    "background-color :#fff; color: #0068ff; border: 1px solid #0068ff; cursor: pointer; ";
  signupButton.removeAttribute("disabled", "true");
});

//가입하기 버튼
//입력값이 없으면 에러메세지 뜨게 하기
signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("click");

  //유효성 검사
  //값 받기
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const location = document.querySelector("#location").value;
  const genderWoman = document.querySelector("#gender_woman").checked;
  const genderMan = document.querySelector("#gender_man").checked;

  //단락회로평가
  //true / false => 기본값 true || false
  //기본값
  let isValid = true;

  if (email.includes("@") === false) {
    document.querySelector("#error_email").innerText =
      "이메일을 정상적으로 입력해주세요.";
    isValid = false; //기본값 바꾸기
  } else {
    document.querySelector("#error_email").innerText = "";
  }
  if (name === "") {
    document.querySelector("#error_writer").innerText =
      "이름을 정상적으로 입력해주세요.";
    isValid = false; //기본값 바꾸기
  } else {
    document.querySelector("#error_writer").innerText = "";
  }
  if (password1 === "") {
    document.querySelector("#error_password1").innerText =
      "비밀번호를 정상적으로 입력해주세요.";
    isValid = false; //기본값 바꾸기
  } else {
    document.querySelector("#error_password1").innerText = "";
  }
  if (password2 === "") {
    document.querySelector("#error_password2").innerText =
      "비밀번호를 정상적으로 입력해주세요.";
    isValid = false; //기본값 바꾸기
  } else {
    document.querySelector("#error_password2").innerText = "";
  }
  if (password1 !== password2) {
    document.querySelector("#error_password1").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error_password2").innerText =
      "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }
  //지역이 오류나면 일단 value 값 지우기 value값을 우선적으로 가지고 옴
  if (
    location !== "서울" &&
    location !== "경기" &&
    location !== "인천" &&
    location !== "대구" &&
    location !== "마산" &&
    location !== "부산"
  ) {
    document.querySelector("#error_location").innerText =
      "지역을 선택해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_location").innerText = "";
  }
  if (genderMan === false && genderWoman === false) {
    document.querySelector("#error_gender").innerText = "성별을 선택해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_gender").innerText = "";
  }

  if (isValid === true) {
    alert("회원가입을 축하합니다.");
  }
});
