// 제너레이터 함수 예제

// 1.
const button = document.querySelector("button");

const result = document.querySelector("#result");

// 3. 제너레이터 함수 만들기
function* train() {
  yield "판교";
  yield "이매";
  yield "삼동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "세종대왕릉";
  yield "여주";
}

// 4. 이터러블한 인스턴스 객체 만들기
const gyeonggang = train();

// 2.
button.addEventListener("click", () => {
  // console.log("click");

  // 5.
  let current = gyeonggang.next();
  console.log(current);

  // 6.
  if (current.done !== true) {
    // 값을 보여줄 수 있는 상황
    result.innerText = current.value;
  } else {
    result.innerText = `종점입니다!`;
    button.setAttribute("disabled", "disabled");
  }
});
