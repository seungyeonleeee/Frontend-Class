// 객체

// 객체 생성 = 선언
// const book1 = {
//   // key : value => property(속성)
//   title: "자바스크립트",
//   level: "normal",
//   study: "done",
// };

// 객체 선언 후, 객체 안에 담겨있는 데이터를 찾아오기
// 프로퍼티에 접근 하는 방법 2가지
// 1) 온점 표기법 - 8~90%
// 2) 대괄호 표기법 - 온점 표기법을 사용하지 못하는 상황에서

// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";

// console.log(book1);

// book1.master = "David";

// console.log(book1);

/////////////////////////

// 정석의 방법

// 객체, 배열의 뿌리가 어딘지 알면 위의 축약형으로 사용

// 자바스크립트 어딘가에 Class 생성자 함수를 활용해서 이미 누군가가 객체를 만들어 놓았음

// class 생성자 함수를 통해서 이미 생성되어진 요소를 가져와서 사용할 때에는 반드시 new 라는 예약어 + prototype함수를 활용해야 함

// prototype을 통해서 생성된 값을 인스턴스 객체라고 함

// 최초에 선언한 변수의 값으로 할당

// let book2 = new Object();
// // console.log(typeof book2);

// book2.title = "타입스크립트";
// book2.author = "김지선";
// book2.bestSeller = "Yes";
// console.log(book2);

// // let book3 = new Array();
// // console.log(typeof book3);

// // property 삭제하는 방법
// // 주로 원본데이터는 거의 건들지 않고 복사본을 삭제,관리 함
// delete book2.bestSeller;
// console.log(book2);

/////////////////////////

// 객체중첩

const student = {
  name: "전진우",
  age: 20,
  favorite: "game",
  score: {
    history: 85,
    science: 90,
    average:
      // function // 화살표함수
      //  () => {
      //   return (score.history + score.science) / 2;
      // },
      // 화살표함수는 호이스팅이 안되기 때문에
      // () => {
      //   return (student.score.history + student.score.science) / 2;
      // },
      function () {
        return (this.history + this.science) / 2;
      },
    // method 를 만드는 다른 방법
    like() {
      alert(`전진우님은 컴퓨터를 좋아합니다.`);
    },
  },
};

// 함수의 기원이 객체인 이유
// average가 함수 이름 // 객체의 키값에 함수를 넣음

console.log(student.score.history);
console.log(student.score.average());

// 객체 안에 property의 일부로서 탄생된 함수는 method라고 칭한다

// student.score.like();

// window의 객체 구조
// 우리는 찾아와서 쓴것 뿐
// const window = {
//   document: {
//     html: {
//       head: {
//         meta: "a",
//         link: "./",
//       },
//       body: {
//         h1: "안녕하세요",
//         p: "반갑습니다.",
//       },
//     },
//   },
//   alert() {},
//   prompt() {},
//   scrollY: {},
// };
