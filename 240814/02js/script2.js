// // 생성자 함수는 대문자로 꼭 표기하기

// // 밑의 작성과 동일
// // function Book() {}
// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;

//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// };
// const book1 = new Book("자바스크립트", 648, false);

// // console.log(book1.title);

// console.log(book1.__proto__);
// // __proto__ : 인스턴스 객체의 프로토타입(조상)을 확인하고 싶을 때 사용하는 속성
// // name이 나옴
// console.log(Book.prototype);
// // 인스턴스 객체의 조상이 되는 프로토타입 객체를 생성해준 생성자 함수가 가지고 있는 속성 및 메서드 함수를 확인

// 상속에 대한 개념을 설명하기 전, 인스턴스 객체의 기원
// 찾은 해당 기원의 속성을 확인, prototype이라는 속성

// 일반 객체 선언
// 키값 접근 : 온점 // 대괄호

// 생성자 함수에 method함수 추가하는 법
// function Newbook(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
// }

// Newbook.prototype.finish = function () {
//   let str = "";
//   this.done === false ? (str = "읽는 중") : (str = "완독");
//   return str;
// };

// const nbook1 = new Newbook("타입스크립트", 648, false);
// console.log(nbook1.finish());

function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("뽀로로", 10000);
book1.buy();

// 상속
function Textbook(title, price, major) {
  Book.call(this, title, price);
  //major를 지정하지 않았기 때문에 this도 꼭 필요함
  this.major = major;
}
Textbook.prototype.buyTextBook = function () {
  console.log(
    `${this.major} 전공 서적, ${this.title}을 ${this.price}원에 구매하였습니다.`
  );
};

// 도킹작업
// 생성자함수에서는 상속 시 반드시 필요
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("잘될거야", 20000, "인생");
book2.buyTextBook();
book2.buy();
