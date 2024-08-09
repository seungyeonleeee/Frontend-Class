const buttons = document.querySelectorAll("button");

const result = ["가위", "바위", "보"];

const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".user-choice");
const winner = document.querySelector(".result");

let message = "";

const show = (user, computer, message) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
};

// 게임의 원칙
const game = (user, computer) => {
  if (user === computer) message = "무승부";
  else {
    switch (user + computer) {
      case `가위보`:
      case `바위가위`:
      case `보바위`:
        // console.log("나의 승리!");
        message = "나의 승리!";
        break;
      case `가위바위`:
      case `바위보`:
      case `보가위`:
        // console.log("컴퓨터의 승리!");
        message = "컴퓨터의 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const play = (e) => {
  // console.log(e); //target.innerText 확인
  const user = e.target.innerText;
  // console.log(user);

  const randomIndex = Math.floor(Math.random() * 3);

  const computer = result[randomIndex];
  // console.log(user, computer);

  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
