// 사용자에게 날짜를 받아 현재 시간으로부터 얼마나 경과했는지 나타내기
// 1. 현재 날짜를 찾아온다
// 2. 현재 날짜에서 사용자에게 받은 날짜를 빼서 경과한 시간을 찾는다.
// 3. span 안에 나타낸다

// const userQuestion = prompt(
//   "만 보 걷기를 시작한 날짜를 입력해주세요.",
//   "2024-06-14"
// );
// const result = document.querySelector("#result");

// const today = new Date();
// const firstDay = new Date(userQuestion);

// const passedTime = today.getTime() - firstDay.getTime();
// const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

// result.innerText = passedDate;

// 1. 사용자에게 날짜를 받는다
// 2. 현재날짜를 찾아 사용자에게 받은 날짜와 뺀다.
// 3. 결과 날짜를 화면에 출력 시킨다.

const result = document.querySelector("#result");

const userDate = prompt("날짜 입력", "2024-06-14");
const today = new Date();
const firstDay = new Date(userDate);

const todayTime = today.getTime();
const firstTime = firstDay.getTime();

const resultTime = todayTime - firstTime;

const resulDay = Math.round(resultTime / (24 * 60 * 60 * 1000));

result.innerText = resulDay;
