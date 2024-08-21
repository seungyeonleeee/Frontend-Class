// 1.
const phoneNumber = document.querySelector(`input[type="text"]`);
const warningMessage = document.querySelector("#warningMessage");

// 2.
phoneNumber.addEventListener("keyup", function () {
  // console.log("keyup");

  // 3.
  const numberValue = this.value;
  // console.log(numberValue);

  // 4. -를 없는 문자 처리하기
  const trimNumber = numberValue.replace(/-/g, "");
  // console.log(trimNumber);

  // 5. 패턴 정의하기
  // 첫자리 0에서 시작 // 끝자리 0-9
  // 총 자리수 : 10자리수 // 11자리
  // 위에 정의한 패턴 빼고 : {9,10}
  const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);

  // 6.
  if (regexp === false)
    warningMessage.innerText = `전화번호의 형식에 맞춰서 입력해주세요!`;
  else warningMessage.innerText = ``;
});
