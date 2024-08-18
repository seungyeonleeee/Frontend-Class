// // 생성자함수
// function Book(title, price) {
//   // 부모.키 = 키값
//   this.title = title;
//   this.price = price;
// }

// Book.prototype.buy = function () {
//   console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
// };

// const book1 = new Book("자바스크립트", 10000);
// // console.log(book1); //[[Prototype]] : object
// // book1.buy();

// // 상속
// function Textbook(title, price, major) {
//   // call = 콜백함수와 같은 call
//   Book.call(this, title, price); // 여기서 this = Book
//   this.major = major; // 여기서 this = Textbook
// }

// Textbook.prototype.buyTextbook = function () {
//   console.log(
//     `${this.major} 전공서적, ${this.title}을(를) ${this.price}원에 구매하였습니다.`
//   );
// };

// // 필수 (도킹)
// // Object.setPrototypeOf(상속받을 함수, 부모함수)
// Object.setPrototypeOf(Textbook.prototype, Book.prototype);

// const book2 = new Textbook("타입스크립트", 20000, "컴퓨터공학");
// // console.log(book2); // [[Prototype]] : Book - 상속받은 부모가 나옴
// // book2.buyTextbook();
// // book2.buy(); // 상속을 받기 때문에 기존의 메서드 함수도 사용할 수 있음

// //////////////
// // extends (JS) : 비필수
// // implement (TS) : 특정 값을 상속을 받는다면, 반드시 필수적으로 상속받은 값을 사용해야하는 조건

// //////////////
// // class함수
// // 신문법
// // 메서드밖에 들어올 수 없음
// class BookC {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }

//   buy() {
//     console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
//   }
// }

// const book3 = new BookC("자료구조", 10000);
// book3.buy();

// // 상속
// class TextbookC extends BookC {
//   constructor(title, price, major) {
//     // super() = call() 동일한 기능
//     // class함수에서는 super 사용 // this가 없어도 지칭하는걸 앎
//     super(title, price);
//     this.major = major;
//   }

//   buyTextbook() {
//     console.log(`${this.major} 전공서적, ${this.title}을(를) 구매하였습니다.`);
//   }
// }

// const book4 = new TextbookC("알고리즘", 5000, "컴퓨터공학");
// book4.buyTextbook();
// book4.buy();

function Book(title, price) {
  this.title = title;
  this.price = price;
}
Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("자바스크립트", 10000);
book1.buy();

function Textbook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}
Textbook.prototype.buyTextbook = function () {
  console.log(
    `전공 ${this.major}인 ${this.title}을 ${this.price}원에 구매하였습니다.`
  );
};

Object.setPrototypeOf(Textbook, Book);

const book2 = new Textbook("타입스크립트", 20000, "컴퓨터공학");
book2.buyTextbook();

class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}
const book3 = new BookC("자료구조", 10000);
book3.buy();

class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  buyTextbook() {
    console.log(
      `전공 ${this.major}인 ${this.title}을 ${this.price}원에 구매하였습니다.`
    );
  }
}
const book4 = new TextbookC("알고리즘", 5000, "컴퓨터공학");
book4.buyTextbook();
book4.buy();
