const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("submit");

  const inputText = document.querySelector("input[type='text']");
  const word = inputText.value;
  // console.log(word);

  const count = word.length;
  alert(`입력하신 ${word}의 글자수는 ${count} 입니다.`);
});
