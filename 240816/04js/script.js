// 문자열 && 배열의 공통점
// length // index

// 문자열을 배열로 바꾸는 법
// ES6문법이 적용되기 전
// const str5 = "Hello, everyone";
// // const array5 = str5.split("");
// // console.log(array5);

// // ES6문법이 적용 후
// // 전개연산자 구문 : 구분자 기능 X
// const array5 = [...str5];
// console.log(array5);

// // 배열을 문자열로 바꾸는 법
// // join() : 구분자
// const str6 = array5.join("");
// console.log(str6);

// 예제
// 사용자가 입력한 값의 첫번째 문자열만 추출
// 첫번째 문자열을 대문자로 바꿔서 출력하기

// const string = prompt("영문 소문자로 된 문자열을 입력하세요.");

// // const firstCh = string[0].toUpperCase();

// // const remainStr = string.slice(1); //해당 인자값에서 끝까지

// // const result = firstCh + remainStr;

// // 단문으로 쓰기 위해 문자열에서 배열로 join() 활용
// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// document.write(result);

// 자료구조 & 알고리즘
// 배열 => 얼만큼 잘 활용하느냐

// 배열을 만드는 방법

// // 1. 생성자 함수
// let arr = new Array();
// arr[0] = "first";
// arr[1] = "second";
// console.log(arr);

// // let obj = new Object();

// // 2. 변수에 빈배열 할당 및 선언
// let season = [];
// season[0] = "spring";
// season[1] = "summer";
// season[2] = "fall";
// season[3] = "winter";
// console.log(season);

// // 3. 직접 배열 선언 // 할당 - 가장 많이 사용
// const pets = ["dog", "cat", "lion"];
// console.log(pets);

// const str5 = "Hello, everyone";
// const array5 = [...str5];
// console.log(array5);

// const str6 = array5.join("");
// console.log(str6);

// 예제
// 사용자가 입력한 값의 첫번째 문자열만 추출
// 첫번째 문자열을 대문자로 바꿔서 출력하기

// const string = prompt("문자 입력");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result = firstCh + remainStr;
// console.log(result);

const str5 = "Hello, everyone";
const array5 = [...str5];
console.log(array5);
const str6 = array5.join("");
console.log(str6);
