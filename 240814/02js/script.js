// function Book(title, pages, done = false) {
//   // field
//   this.title = title;
//   this.pages = pages;
//   this.done = done;

//   // method
//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// }

// const book1 = new Book("자바스크립트", 648, true);
// console.log(book1);

// // 1. 생성자 함수를 선언 => 프로토타입 객체 생성
// // 2. 변수를 선언 && 생성자 함수를 호출 및 할당하는 순간
// // 3. 생성자 함수가 가지고 있던 프로토타입 객체가 활성 => 해당 변수, 인스턴스 객체
// // 4. 해당 변수 => 인스턴스 객체 (프로토타입 객체의 복사본)

// // 객체지향 프로토타입 기반의 프로그래밍 언어 : JS

// // 객체지향 클래스 기반의 프로그래밍 언어 : C, Java

// // 클래스 => 2016년도에 자바스크립트에 들어옴

// // ES => Class : Syntactic Sugar (코팅된 설탕)

// // 클래스를 사용해서 생성자 함수를 만들 때는 반드시 method 함수밖에 들어갈 수 없음
// class Book2 {
//   constructor(title, pages, done) {
//     this.title = title;
//     this.pages = pages;
//     this.done = done;
//   }
//   finish() {
//     let str = "";
//     this.done = false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   }
// }

// // TS => 접근제어자 // 추상화
// // public, private, protected
// // ES6 =? 2015년

function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === flase ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}
const book1 = new Book("자바스크립트", 648, true);
console.log(book1);

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = "";
    this.done === flase ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}
const book2 = new Book("자바스크립트", 648, true);
console.log(book2);
