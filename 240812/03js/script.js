const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number01 = document.querySelector("#number01");
  const number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  let winner = "";
  let pickedNumbers = [];
  // 값을 찾아오거나 생성 => 배열에 담을거면 let i = 0;
  for (let i = 0; i < number02.value; i++) {
    let picked;

    do {
      picked = Math.floor(Math.random() * number01.value + 1);
    } while (pickedNumbers.includes(picked));
    // includes() : 해당 요소가 들어있냐 들어있지 않느냐로 true // false

    pickedNumbers.push(picked);

    winner += `${picked}번 `;
  }

  result.innerText = `당첨자 : ${winner}`;
});
