// // Class : 자바스크립트 안에서 반복적으로 사용 될 특정요소를 간직한 객체의 형태를 템플릿화 하기 위한 목적으로 Class를 사용한다

// // 예
// // 교보문고 F/E => 매일매일 신간 책 => 객체 데이터로 만들어서 B/E 서버에 데이터를 등록할 수 있도록 지원해주세요!
// // 신간 책 300권
// // const newBook1 = {
// //   title: "당신이 누군가를 죽였다",
// //   author: "히가시노 게이고",
// //   price: 17820,
// //   category: "미스터리스릴러",
// // };

// // Class를 생성하는 2가지 방법
// // 1) 생성자 함수 만들어 사용 - 오래된 방법 // 이제는 잘쓰지않음
// // 절대 화살표 함수 X => this!
// // 일반함수랑은 다른걸 알려주기 위해 반드시 함수의 이름을 대문자로 시작
// // new Date, new Object, new Array ...

// function Book(title, author, price, category) {
//   // this = 인스턴스 객체
//   this.title = title;
//   this.author = author;
//   this.price = price;
//   this.category = category;
// }

// // 1. 생성자 함수 생성
// // 2. prototype 객체가 자동 탄생
// // 3. 생성자 함수를 호출 => prototype 객체를 실행 준비
// // 4. 생성자 함수 실행 => 함수의 값을 전달받는 변수 => prototype을 그대로 복제한(상속) 인스턴스 객체

// const book1 = new Book(
//   "당신이 누군가를 죽였다",
//   "히가시노 게이고",
//   17820,
//   "미스터리스릴러"
// );
// console.log(book1);

// // 2) Class 명령어를 사용해서 클래스를 선언
