const button = document.querySelector("#tweetButton");
// console.log(button);

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  // console.log(tweetText);

  tweetText += ` #yeon #sns #js`;
  // console.log(tweetText);

  const encodedText = encodeURIComponent(tweetText);
  // encodeURIComponent() : 인코딩 해주는 함수
  // console.log(encodedText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
