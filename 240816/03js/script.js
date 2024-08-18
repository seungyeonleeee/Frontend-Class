// 문자열
// length 속성 - 문자열과 배열에서만 사용 가능
// 띄어쓰기도 문자로 포함됨 - 빈문자열
// const str = "hello Sir";
// const arr = ["today", "first", "theday"];

// console.log(str.length);
// console.log(arr.length);

//////////////
// 문자열에 사용하는 메서드들
// 1) charAt(위치) : 특정 위치의 문자에 접근

// 인덱스처럼 0 부터 시작
// console.log(str.charAt(4));

// const counting = (string, word) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === word) count += 1;
//   }
//   return count;
// };

// const string = prompt("원하시는 문자열을 입력하세요.");
// const word = prompt("그 중 찾고싶은 문자열은 무엇인가요?");

// const result = counting(string, word);

// document.write(
//   `${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다.`
// );

// 2) indexOf() : 특정 문자열을 인자값으로 제공 => 해당 문자열의 시작하는 인덱스 값을 찾아옴
// charAt와 반대 개념

// const str1 = "Good morning, everyone. Beautiful morning. Nice morning";
// // console.log(str1.indexOf("morning"));
// // console.log(str1.indexOf("evening"));

// let firstIndex = str1.indexOf("morning");
// let secondIndex = str1.indexOf("morning", firstIndex + 1);
// let thirdIndex = str1.indexOf("morning", secondIndex + 1);
// console.log(secondIndex);
// console.log(thirdIndex);

// 3) 특정 문자열로 시작하거나 끝나거나 혹은 포함하고 있거나
// startsWith() // endWith() // ! includes()
// 상기의 해당 조건에 부합하는지 여부 체크할 때 주로 사용
// 조건에 부합하면 true // false

// const str2 = "Hello, everyone.";
// startsWith
// console.log(str2.startsWith("Hello")); // true
// console.log(str2.startsWith("hello")); // false
// console.log(str2.startsWith("He")); // true : 시작값만 같으면 true
// console.log(str2.startsWith("Hello, ev")); // true : 시작값만 같으면 true

// console.log(str2.startsWith("el", 1)); // 두번째 인자값 : 첫번째 인자값의 시작값의 index가 맞는지
// console.log(str2.startsWith("o", 4));

// endWith
// console.log(str2.endsWith("everyone.")); // true
// console.log(str2.endsWith("Everyone.")); // false
// console.log(str2.endsWith("one.")); // true

// includes
// ES6 이전문법
// console.log(str2.indexOf("every") === 5); // false
// ES6 이후문법
// console.log(str2.includes("every")); // true

// trim() : 앞과 뒤의 모든 공백을 없앤다
// trimStart() : 앞의 공백만 없앤다
// trimEnd() : 뒤의 공백만 없앤다

// let str3 = " ab cd ef ";

// console.log(str3.trim());
// console.log(str3.trimStart());
// console.log(str3.trimEnd());

// 회원가입
// 휴대폰번호 입력
// input:text => 010-1234-5678 || 01012345678 || 010-12345678

// ! toUpperCase() // toLowerCase() : 모든 문자를 대문자, 소문자로 바꿔줌
// const str2 = "Hello, everyone.";
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

// !! 문자열에서 특정 문자를 추출하는 방법
// 사용자가 올바르지 않은 정보값을 넣었을 때 필터링
// substring(index) : 첫번째 인자값에서 시작하는 문자열을 끝까지 찾아와라
// substring(index,index) : 첫번째 인자값에서 두번째 인자값 앞까지의 문자열을 찾아와라

// const str2 = "Good morning.";
// console.log(str2.length);

// // substring()
// // console.log(str2.substring(5)); //morning
// console.log(str2.substring(0, 4)); //Good
// console.log(str2); //Good morning.

// // !!! slice() : 음수값을 사용
// console.log(str2.slice(0, 4)); //Good
// console.log(str2); //Good morning.

// // substring과 slice(신문법) 차이점 : 음수값, slice가 더 확장적 개념

// console.log(str2.slice(-5, 12)); //ning
// // slice() 인자값 2개 => 앞에서는 0부터, 뒤에서 -1 부터 시작함

// !! split() : 구분자 역할
// const str5 = "Hello everyone";
// console.log(str5.split(" ")); // 배열로 변환해서 쪼갬
// console.log(str5.split("")); // 문자열 하나하나를 쪼갬

// const str = "hello Sir";
// console.log(str.charAt(4));

// const counting = (string, word) => {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === word) count += 1;
//   }
//   return count;
// };
// const string = prompt("원하시는 문자열을 입력하세요");
// const word = prompt("그 중에서 찾고싶은 문자열은 무엇인가요?");
// const result = counting(string, word);
// document.write(
//   `${string}에는 ${word}이라는 알파벳이 ${result}번 사용되었습니다.`
// );

// const str1 = "Good morning, everyone. Beautiful morning. Nice morning";
// console.log(str1.indexOf("morning"));
// console.log(str1.indexOf("evening"));

// let firstIndex = str1.indexOf("morning");
// let secondIndex = str1.indexOf("morning", firstIndex + 1);
// let thirdIndex = str1.indexOf("morning", secondIndex + 1);
// console.log(secondIndex);
// console.log(thirdIndex);

// const str2 = "Hello, everyone.";

// console.log(str2.includes("every"));

// let str3 = " ab cd ef ";
// console.log(str3.trim());

// const str2 = "Hello, everyone!";
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());

// const str2 = "Good morning.";
// // console.log(str2.length);

// // console.log(str2.substring(5));
// // console.log(str2.substring(0, 4));

// console.log(str2.slice(-9, 12));

// const str5 = "Hello everyone";
// console.log(str5.split(" "));
// console.log(str5.split(""));
