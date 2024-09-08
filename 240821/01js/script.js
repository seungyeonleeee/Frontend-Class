// 정규표현식 패턴 정의 //

// 숫자 3자리로 이루어져 있는 정규표현식 정의
// const regexp = /\d{3}/;

// const regexp = new RegExp(/\d{3}/);

// console.log(regexp.test("Hello")); // false
// console.log(regexp.test("123")); // true
// test() : 정규표현식에 기능을 상속받은 인스턴스 객체한테만 쓸 수 있음
// 앞에 붙은 정규표현식의 패턴을 잘 지키고 있는지 여부 체크 true // false

// console.log(regexp.exec("123")); // 통으로 배열로 반환

// const str = "ES2024 is powerfull";
// console.log(str.match(/ES2024/));
// console.log(str.match(/ES6/)); // null

// console.log(str.replace(/ES2024/, "Javascript"));
// Javascript is powerfull

// 플래그
// const str = "ES2024 is powerfull";
// // const regexp = /es/;
// const regexp = /es/i;
// console.log(regexp.test(str)); // 대,소문자 구분함

// 문자 클래스
// const str = "ES2024 is powerfull";
// console.log(str.match(/ES/)); // ES
// console.log(str.match(/ES\d/)); // ES2
// console.log(str.match(/ES\d\d\d\d/)); // ES2024

// 8)
// const hello = "Hello, everyone.";
// console.log(/H/.test(hello)); // true

// const hello = "ello, Heveryone.";
// console.log(/H/.test(hello)); // true

// const hello = "Hello, everyone.";
// console.log(/^H/.test(hello)); // true
// console.log(/^h/.test(hello)); // false
// console.log(/^h/i.test(hello)); // true

// console.log(/one.$/.test(hello)); // true
// console.log(/e.$/.test(hello)); // true
// console.log(/one$/.test(hello)); // false

// const str = "ES2024";
// console.log(str.match(/[0-9]/g)); // [] : 범위를 지정하고 싶을 때
// console.log(str.match(/^[0-9]/g)); // null
// console.log(str.match(/[^0-9]/g)); // E, S
// 전역에서 0-9를 제외한 모든 문자를 찾아와라 (not)

// 반복패턴
// const str = "Oooops";
// console.log(str.match(/o{2}/)); // oo
// console.log(str.match(/o{2,}/)); // ooo : 최소 2번 이상 반복되는 패턴이 있으면 찾아와라
// console.log(str.match(/o{2,4}/i)); // ooo : 최소 2번에서 최대 4번 반복되는 패턴이 있으면 찾아와라

// OR검색
// const str2 = "ES2024(ES8) is powerful";
// const regexp = /ES2024|ES8/; // | => 혹은
// console.log(regexp.test(str2)); // true

// 공식 패턴
// 1) 숫자만 가능한 정규표현식 패턴
// const regexp = /^[0-9]+$/;

// // 2) 양의 정수만 가능한 정규표현식 패턴
// const regexp1 = /^[1-9]\d*$/;

// // 3) 음의 정수만 가능한 정규표현식 패턴
// const regexp2 = /^\-[1-9]\d*$/;

// // 4) 영문자만 찾아오도록 하는 정규표현식 패턴
// const regexp3 = /^[a-zA-Z]+$/;

// // 5) 숫자와 영문자를 찾아오도록 하는 정규표현식 패턴
// const regexp4 = /^[a-zA-Z0-9]+$/;

// // 6) 한글만 찾아오도록 하는 정규표현식 패턴
// const regexp5 = /^[가-힣]+$/;

// // 7) 한글과 영문자만 가능한 정규표현식 패턴
// const regexp6 = /^[가-힣a-zA-Z]+$/;

// // 8) 예) 문자열의 길이가 5~10개 패턴
// const regexp7 = /^.{5,10}$/;

///////////////////////

// const regexp = /\d{3}/;

// console.log(regexp.test("Hello"));
// console.log(regexp.test("123"));
// console.log(regexp.exec("123"));

// const str = "ES2024 is powerfull";

// console.log(str.match(/ES2024/));
// console.log(str.match(/ES6/));
// console.log(str.replace(/ES2024/, "Javascript"));

// const str = "ES2024 is powerfull";
// // const regexp = /es/;
// const regexp = /es/i;
// console.log(regexp.test(str));

// const str = "ES2024 is powerfull";

// console.log(str.match(/ES/));
// console.log(str.match(/ES\d/));
// console.log(str.match(/ES\d\d\d\d/));

// const hello = "Hello, everyone.";
// console.log(/^h/i.test(hello));
// console.log(/one.$/.test(hello));

// const str = "ES2024";
// console.log(str.match(/[0-9]/g));
// console.log(str.match(/^[0-9]/g));
// console.log(str.match(/[^0-9]/g));

// const str = "Oooops";
// console.log(str.match(/o{2}/));
// console.log(str.match(/o{2,}/));
// console.log(str.match(/o{2,}/i));
// console.log(str.match(/o{2,4}/i));

const str2 = "ES2024(ES8) is powerful";
const regexp = /ES2024|ES8/;
console.log(regexp.test(str2));
