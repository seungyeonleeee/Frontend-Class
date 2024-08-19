// 8. 배열 메서드
// map() // filter() // reduce()
// 반드시 콜백함수를 받음 => {} 안씀

//////////////////
// map() : 배열안에 있는 요소들에게 특정 함수 안에 있는 기능을 동일하게 실행, 적용 => 새로운 배열로 다시 생성

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((number) => number * 2);
// console.log(newNumbers);
// console.log(numbers);

// 인자값 3개까지 가능 (forEach문 처럼)
// const newNumbers01 = numbers.map((number, index) => index + number * 3);
// console.log(newNumbers01);

//////////////////
// filter() : 조건이 true인 경우로 새로운 배열 생성
// const scores = [90, 35, 64, 88, 45, 92];
// // 85점 이상의 점수들만 새로운 배열로 만들고 싶음
// const highScores = scores.filter((score) => score >= 85);
// console.log(highScores);
// console.log(scores);

//////////////////
// reduce() : 누산기 (누적해서 계산)
// React.js => Middle Reducer

const numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce((total, current) => total + current, 0);
// total : 연산된 값을 누적 및 저작해놓는 변수의 역할
// 0 : 초기값
// current : numbers의 각각의 아이템

console.log(result);

// TS => 고차함수
// 명령형 & 선언형 프로그래밍 함수
// 저급함수
// 고급함수 => 1) 커스터마이징
