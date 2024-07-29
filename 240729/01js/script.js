// const test1 = "mon";
// test1 = "tue";
// 프로그램을 개발
// width : 1920px
// slide 갯수 5개 고정
// 이럴 땐 const

// 스크롤을 내리게 되었을 때, 내려간 값에 따라서 무언가를 변경
// 이럴 땐 let (재할당 가능)
let test2 = "mon";
// let test2 = "tue";
test2 = "tue";
// console.log(test2);

// 조별 프로젝트
// A , B 라는 사람
// A - 카테고리 안에 상품개수 10개
var category = 10;
// B - 장바구니에 담긴 상품개수 8개
var category = 8;
//  A , B가 목적이 다름
// 병합을 할 때 오류가 나지 않음

// const x = 10;
// const y = 20;
// const z = x + y; //30

// const x = 10;
// const z = x + y; //error
// const y = 20;

// var x = 10;
// var z = x + y; //NaN : Not a Number > 자료의 형태 중 하나 > 호이스팅
// var y = 20;
// const wrapper = document.querySelector("#wrapper");
// console.log(wrapper);

///////////////////////

//자료형
//1.숫자형
// const num1 = 1;
// const num2 = 2;
// const sum = num1 + num2;
// console.log(sum); //3
// console.log(typeof sum); //number

//2.문자열
// const str1 = "1";
// const str2 = "2";
// console.log(typeof str1); //string
// console.log(typeof str2); //string

const num = 1000;
const str = "원";
const counter = num + str;
console.log(counter); //1000원
console.log(typeof counter); //string

const num1 = 1000;
const str1 = "2000";
const counter1 = num1 + str1;
console.log(counter1); //10002000
console.log(typeof counter1); //string

//숫자와 문자를 더하면 문자가 우선 - 문자로 출력 *형변환

prompt("얼마를 원하세요?");
