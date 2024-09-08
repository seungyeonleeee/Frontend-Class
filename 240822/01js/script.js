// // const student = {name: "David", major: "컴퓨터공학", grade: 2}
// // const json = JSON.stringify(student)
// // json {"name":"David","major":"컴퓨터공학","grade":2}
// // const origin = JSON.parse(json)
// // origin {name: 'David', major: '컴퓨터공학', grade: 2}

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "student.json");
// // open("방식", "열고싶은 데이터") : json데이터를 오픈
// xhr.send();
// // send() : 찾아온 데이터를 클라이언트에게 보내라 (서버 역할)

// // 개발자모드에서
// // xhr
// // xhr.reponseText

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     // console.log(students);

//     const result = document.querySelector("#result");
//     result.innerText = `${students.name}은 ${students.major}학과의 ${students.grade}학년 입니다.`;
//   }
// };
// // onreadystatechange : readystate값이 변경된다면 실행되는 이벤트 핸들러

/////////////////////////////

const xhr = new XMLHttpRequest();
xhr.open("GET", "student.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);

    const result = document.querySelector("#result");
    result.innerText = `
    ${students.name}은 ${students.major}학과의 ${students.grade}학년 입니다.
    `;
  }
};
