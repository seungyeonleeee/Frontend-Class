const liItems = document.querySelectorAll(".game li");

const result = ["가위", "바위", "보"];

const computerChoice = document.querySelector(".computer_choice");
const userChoice = document.querySelector(".user_choice");
const winner = document.querySelector(".result h5");
const resultText = document.querySelector(".result p");

let message = "";
let subMessage = "";

const show = (user, computer, message) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
  resultText.innerText = subMessage;
};

const game = (user, computer) => {
  if (user === computer) {
    message = `비겼습니다!`;
    subMessage = `다시 한번 해보세요!`;
  } else {
    switch (user + computer) {
      case `가위보`:
      case `바위가위`:
      case `보바위`:
        message = `와우! 당신이 이겼습니다!`;
        subMessage = `기세를 몰아 한번 더?!`;
        break;
      case `가위바위`:
      case `바위보`:
      case `보가위`:
        message = `저런! 컴퓨터가 이겼습니다.`;
        subMessage = `아쉽네요. 다시 도전해 보세요!`;
        break;
    }
  }
  show(user, computer, message);
};

liItems.forEach((liItem) => {
  liItem.addEventListener("click", () => {
    const user = liItem.dataset.text;

    const randomIndex = Math.floor(Math.random() * 3);

    const computer = result[randomIndex];

    game(user, computer);
  });
});
