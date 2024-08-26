// LocalStorage
// 저장공간

// setItem(key, value) : 객체에 추가하거나, 키의 값을 업데이트
// getItem(key) : 저장되어 있는 스토리지를 찾아올 때
// removeItem(key) : key와 매칭되어 지는 value 값을 삭제, 제거
// clear() : 모든 값을 삭제, 제거

let students = ["Kim", "Lee", "Park"];
// window > localStorage
// localStorage.setItem("students", students);
// 로컬스토리지 값은 json의 형식으로 세탁 후 가져와야 함
localStorage.setItem("students", JSON.stringify(students));

let localData;
// 예외조항처리 먼저
if (localStorage.getItem("students") === null) localData = [];
// 브라우저가 인식할 수 있는 형식으로 다시 바꿈
else localData = JSON.parse(localStorage.getItem("students"));
console.log(localData);
localData.push("Choi");
console.log(localData);
