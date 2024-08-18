// let pets = ["dog", "cat", "mouse"];
// console.log(pets.length);
// console.log(pets[0]);

// pets[0] = "hamster";
// console.log(pets);

// 배열 => 이터러블 객체
// 이터레이터 요소
// 제너레이터 // map & set
// 반복문

// for // for of // forEach
// 배열 선언 값
// 1) 복수형
// 2) 블록변수 값 = 0부터 카운팅 (index가 0부터 시작하니까)
// const colors = ["red", "green", "blue", "white", "black"];

// for문 => 초기값 // 범위 // 증감
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for of
// for (let color of colors) {
//   console.log(color);
// }

// forEach
// colors.forEach((color, index) => {
//   console.log(`colors[${index}] : ${color}`);
// });

// colors.forEach((color, index, array) => {
//   console.log(`[${array}][${index}] : ${color}`);
// });

////////////

// 배열의 메서드

// concat() : 둘 이상의 배열을 하나로 합쳐주는 역할
// 두번째 인자값은 신규 배열로 추가
// 구문법
// const vegitable = ["양상추", "토마토", "피클"];
// const cheese = ["모짜렐라", "슈레드"];
// const meat = ["불고기"];

// const meatBurger = vegitable.concat(meat, "빵");
// // const meatBurger = meat.concat(vegitable);
// console.log(meatBurger);

// // 전개연산자 구문
// // 신문법
// const cheeseBurger = [...vegitable, ...cheese, "빵"];
// console.log(cheeseBurger);

// reverse() : 뒤에 있는 값을 가장 앞으로 바꿈
// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse());

// sort()
// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// tip
// 1. 배열을 선언 할 때, 변수명 복수
// 2. 일반 for문 선언, 블록변수 0으로 시작
// 3. 배열을 담는 변수를 선언할 때, const vs let
// => 배열의 특정 메서드 함수들 => 새로운 배열을 생성해주는 메서드 함수들이 있기 때문
// => 빈배열 생성 => 값을 추가하는 행위가 많음

// console.log(week);
// console.log(week.sort()); // 기본값 : 오름차순 정렬
// console.log(values);
// console.log(values.sort()); // 숫자에선 맨 앞숫자 기준으로 정렬

// sort => 개발자가 정의하고자 하는 함수를 콜백함수로 반드시 입력!!!
// sort를 () 이렇게 쓰지 않음

// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === 0) return 0;
//   // 배열에서 값이 음수면 앞쪽, 클수록 뒷쪽
// });
// console.log(values); // 우리가 생각하는 오름차순

// // 축약
// values.sort((a, b) => {
//   return a - b;
// });
// console.log(values);

// // 반대 : 내림차순
// values.sort((a, b) => {
//   return b - a;
//   // -a +b : 가장 작은 값에게 큰 값, 큰 값에게 작은 값
// });
// console.log(values);

// pop() : 배열의 가장 마지막값을 제거 하고 싶을 때
// let animals = ["lion", "bear", "bird"];
// console.log(animals);
// animals.pop();
// console.log(animals);

// // push() : 배열에 값을 추가하고 싶을 때, 가장 마지막에 들어감 (pop과 반대)
// animals.push("tiger");
// console.log(animals);

// shift() : 배열의 가장 첫번째 값을 제거 하고 싶을 때
// let fruits = ["apple", "pear", "banana"];
// fruits.shift();
// console.log(fruits);

// // unshift() : 배열에 값을 추가하고 싶을 때, 가장 첫번째에 들어감 (shift와 반대)
// fruits.unshift("cherry");
// console.log(fruits);

// splice() : 인자값 추출 (3개까지 가능)
// let subjects = ["html", "css", "JS", "react", "TS"];
// console.log(subjects.splice(2)); // 인자값 index

// let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// // console.log(week.splice(1, 5)); // 첫번째 인자값 index 두번째 인자값은 갯수

// console.log(week.splice(1, 5, "holiday"));
// 원본 데이터 값에서 index 1번부터 5개를 드러내고 마지막 인자값을 그사이에 추가
// console.log(week);

// console.log(week.splice(4, 0, "holiday"));
// console.log(week);

// ! 원본데이터 값을 변경
// 주로 원본데이터를 복제한 후, 많이 사용

// slice()
// let colors = ["red", "green", "blue", "white", "black"];
// console.log(colors.slice(2)); // 첫번째 인자값 index부터 끝까지
// console.log(colors.slice(1, 4)); // 첫번째 인자값 index 두번째 인자값은 index의 앞까지
// console.log(colors); // 원본데이터 유지

// let pets = ["dog", "cat", "mouse"];
// console.log(pets.length);
// console.log(pets[0]);

// pets[0] = "hamster";
// console.log(pets);

// const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// for (let color of colors) {
//   console.log(color);
// }
// colors.forEach((color) => {
//   console.log(color);
// });

// const vegitable = ["양상추", "토마토", "피클"];
// const cheese = ["모짜렐라", "슈레드"];
// const meat = ["불고기"];

// // const meatBurger = vegitable.concat(meat, "빵");
// const meatBurger = meat.concat(vegitable);
// console.log(meatBurger);

// const cheeseBurger = [...vegitable, ...cheese, ...meat, "빵"];
// console.log(cheeseBurger);

// let numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse());

// let week = ["sun", "mon", "tue"];
// let values = [5, 20, 3, 11, 4, 15];

// console.log(week);
// console.log(week.sort());
// console.log(values);
// console.log(values.sort());
// console.log(
//   values.sort((a, b) => {
//     return b - a;
//   })
// );

// let animals = ["lion", "bear", "bird"];
// console.log(animals);
// animals.pop();
// console.log(animals);

// animals.push("tiger");
// console.log(animals);

// let fruits = ["apple", "pear", "banana"];
// fruits.shift();
// console.log(fruits);
// fruits.unshift("cherry");
// console.log(fruits);

// let subjects = ["html", "css", "JS", "react", "TS"];
// console.log(subjects.splice(2));
// let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// // console.log(week.splice(1, 5));
// console.log(week.splice(1, 5, "holiday"));
// console.log(week);

let colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2));
console.log(colors.slice(1, 4));
console.log(colors);
