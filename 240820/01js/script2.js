// const result = document.querySelector("#result");

// // 1. 배열 만들기
// const member1 = ["HTML", "Node", "React"];
// const member2 = ["CSS", "Javascript", "React"];
// const member3 = ["Javascript", "React"];

// // 2. 배열 합치기
// const subjects = [...member1, ...member2, ...member3];
// // console.log(subjects);

// // 3. 중복값 빼기
// const resultList = new Set();

// subjects.forEach((subject) => {
//   resultList.add(subject);
// });

// console.log(resultList);

// // 4. 다시 배열화 시키기
// // 5. 화면 출력
// result.innerHTML = `
//   <ul>
//     ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
//   </ul>
// `;

// ${[...resultList].map((subject) => `<li>${subject}</li>`)}

// 표현식문 VS 실행문{}

// JSX => Javascript And Xml

// json을 활용해서 data
// script에서 fetch()로 출력
// 이벤트 부여 => 이벤트 적용 X => 동시 실행되기 때문
// 1) fetch() 데이터를 가져오는 함수 내부에서 이벤트
// 2) Promise() // async(비동기) & await(대기)

const result = document.querySelector("#result");

const member1 = ["HTML", "Node", "React"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "React"];

const subjects = [...member1, ...member2, ...member3];

const resultList = new Set();

subjects.forEach((subject) => {
  resultList.add(subject);
});

result.innerHTML = `
<ul>
  ${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
