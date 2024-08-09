const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
  // nums[i] + 1 => 어떤 숫자인지를 체크
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;

  // 360/12 => 30도 = 파이/6
  const angle = (i + 1) * (Math.PI / 6);

  const x = 132 + 132 * Math.abs(Math.sin(angle)) - nums[i].offsetWidth / 2;
  // console.log(Math.sin(angle)); // - : 음수값
  // abs() : 안에 들어가는 값을 무조건 양수로 바꿔줌
  // nums[i].offsetWidth / 2 : 본인이 가지고 있는 텍스트 너비의 절반

  const y = 132 - 132 * Math.abs(Math.cos(angle));

  // nums[0].style.left = `${x}px`;
  // nums[0].style.top = `${y}px`;

  // x값
  if (i + 1 > 6) nums[i].style.right = `${x}px`;
  else nums[i].style.left = `${x}px`;

  // y값
  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
    nums[i].style.top = `${y}px`;
  else {
    nums[i].style.bottom = `${y}px`;
  }
}

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");

const digitalClock = document.querySelector(".digital-clock");

const clock = () => {
  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  let hour = currentTime.getHours();
  let hourAngle = hour > 12 ? (hour - 12) * 30 : hour * 30 + (minute / 60) * 30;
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  secondPointer.style.transform = `translate(-50%, -100%) ${secondAngleValue}`;
  minutePointer.style.transform = `translate(-50%, -100%) ${minuteAngleValue}`;
  hourPointer.style.transform = `translate(-50%, -100%) ${hourAngleValue}`;

  let period = "오전";

  if (hour === 0) hour = 12;
  else if (hour > 12) hour -= 12;
  period = "오후";

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  digitalClock.innerText = `${period} ${hour} : ${minute} : ${second}`;
};

setInterval(clock, 1000);
