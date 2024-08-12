const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");

const form = document.querySelector("form");

const current = document.querySelector("#current");
const today = new Date();
// "2022-01-01"
// "연", "월"-1, "일" 로도 찾아옴 - 월에 +1이 됨
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDate = today.getDate();
current.innerText = `오늘은 ${currentYear}년 ${currentMonth}월 ${currentDate}일 입니다.`;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    birthDate.value
  );

  // 1초 = 1000밀리초
  // 1분 = 60초 = (60 * 1000)
  // 1시 = 60분 = 3600초 = (60 * 60 * 1000)
  // 1일 = 24시간 = (24 * 60 * 60 * 1000)

  const resultDays = document.querySelector("#days");
  const resultHours = document.querySelector("#hours");

  const passed = today.getTime() - birthDay.getTime();
  const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  const passedHours = Math.floor(passed / (60 * 60 * 1000));
  const passedAges = Math.round(passedDays / 365);

  resultDays.innerText = ` 당신의 현재 나이는 ${passedAges}세 입니다.`;
  resultHours.innerText = `현재까지 ${passedHours}의 시간이 흘렀습니다.`;
});
