const subject = prompt("신청할 과목을 선택하세요.", "1. HTML / 2. CSS / 3. JS");
if (subject !== null) {
  switch (subject) {
    case "1":
      alert("HTML을 신청하셨습니다!");
      break;
    case "2":
      alert("CSS을 신청하셨습니다!");
      break;
    case "3":
      alert("JS을 신청하셨습니다!");
      break;
    default:
      alert("1~3까지 정수로 입력해주세요.");
  }
}
