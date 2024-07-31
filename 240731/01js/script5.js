const students = ["David", "Jullien", "Peter"];

// 기본 for문
// for(초기값; 범위; 증감문){실행문}

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// forEach문
//  iterator객체.forEach( 콜백함수(인자값-iterator객체의 자식요소) => {실행문});

// students.forEach((student, index, arr) => {
//   console.log(`${index + 1}번째 학생 : ${student} in [${arr}]`);
// });

// for ...of문
// for (let student of students) {
//   console.log(student);
// }

// const theBook = {
//   title: "Javascript",
//   page: 250,
//   published: "2024-07-31",
// };

// for ...in문
// for (let key in theBook) {
//   console.log(`${key} : ${theBook[key]}`);
// }
// 여기서 key = Block Scope

let stars = Number(prompt("별의 개수 입력"));

// while문
// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

// do...while문
do {
  document.write("*");
  //조건식과 상관없이 한번 함
  // 그래서 0을 입력해도 1개 나옴
  stars--;
} while (stars > 0);
