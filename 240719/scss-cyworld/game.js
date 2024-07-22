//wordgame
// 끝말잇기 게임
// 1. 제시어의 끝단어 확인
// 1-1. 컴퓨터에게 최초의 제시어가 무엇인지 알려줘야 함
// 1-2. 3-1에서 이벤트의 시작을 알리는 "입력 버튼"이 무엇인지 알려줘야 함

// 2. 끝단어로 시작하는 단어를 입력
// 2-1. 사용자가 입력한 단어가 무엇인지를 알아야 함
// 2-2. 끝단어로 시작하는 단어 == 사용자가 입력한 단어

// 3. 단어 입력 후 입력 버튼을 클릭
// 3-1. 입력버튼이 클릭 => 두 단어 검증 (이벤트 필요)

// 4. 문제 여부 판단 > 결과값 출력
// 4-1. 조건에 따라서 값을 어떻게 출력할 것인지

/////////////////////

// 1-2.
// const button = document.querySelector(".search");
// console.log(button);
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("입력버튼 클릭");
// });
//form 태그 안에 input[type="submit"]인 경우에 원칙적으로 클릭이벤트를 쓰지 않음

//리펙토링
//한개의 함수 안에 코드가 너무 길어져 분리함
const gameStart = (e) => {
  e.preventDefault();
  //console.log("버튼클릭");

  // 2.
  let word = document.querySelector("#word").innerText;
  let myword = document.querySelector("#myword").value;
  //console.log(word, myword); //단어 자체를 찾아옴
  //*value값은 이벤트가 실시된 이후에 값을 찾아올 수 있음

  // 2-1.
  let lastword = word[word.length - 1];
  let firstword = myword[0];
  //console.log(lastword, firstword); //슭 슭

  // 2-2. 조건문
  if (lastword === firstword) {
    // 4-1.
    document.querySelector("#result").innerText = "정답입니다!";
    document.querySelector("#word").innerText = myword;

    //리셋
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "오답입니다!";
    document.querySelector("#myword").value = "";
  }
};

//정석
const button = document.querySelector(".word_text form");
//console.log(button);
button.addEventListener("submit", gameStart);

/////////////////////

//lottogame
// 1부터 45까지의 6개의 숫자가 중복없이 랜덤으로 동시에 추출이 되어야 함
// 1. 클릭이라는 버튼이 무엇인지를 컴퓨터에게 알려줘야 함

// 2. 클릭 버튼 클릭 시 숫자가 생성 되어야 함 (이벤트 대상)

// 3. JS > 내장 객체 > 숫자를 랜덤으로 생성해주는 함수
// 3-1. random() => 0~1미만의 실수 & 난수 생성
// 최고숫자 0.99999999... * 45 || 44
// *실수 : 소수점을 가지고 있는 숫자
// *난수 : 불규칙적으로 숫자를 생성하는 행위
// 3-2. 소수점을 없애야 하는 필요
// floor() => 소수점을 버림
// ceil() => 소수점을 올림
// round() => 소수점을 반올림

// 4. 중복X
// 4-1. set() 이라는 클래스 함수 => 무작위로 생성된 숫자를 배열에 한개씩 담을 예정 => 중복된 값이 생성되는 경우, 1개로 합쳐주는 역할
// 4-2. 6개의 숫자 완성 => 2번, 4번째 숫자가 같은 경우 => 조건문 => 재추첨을 하겠습니다

/////////////////////

const lottoButton = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");
// console.log(result);

// const lottoNumber = 6;
// const lottoCount = 44;

// 편리하게 사용하기 위해 한번에 담기
const luckyNumber = {
  digitCount: 6,
  maxNumber: 44,
};

//리펙토링
const startLotto = () => {
  //console.log("Lotto");

  //구조분해할당
  const { digitCount, maxNumber } = luckyNumber;
  //console.log(digitCount, maxNumber); // 6 44
  //or
  //const digitCount = luckyNumber.digitCount;
  //const maxNumber = luckyNumber.maxNumber;
  //불필요하게 길어짐

  // 4.
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  //console.log(myNumber); //1~45까지의 6개의 무작위 숫자

  if (myNumber.size === 6) {
    //템플릿 리터럴 문법 `${}`
    //전개연산자 [...]
    //set()함수를 이용한 배열 객체를 문자열로 변환시키기 위해
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨 하겠습니다.";
  }
};

//console.log(lottoButton);
lottoButton.addEventListener("click", startLotto);
