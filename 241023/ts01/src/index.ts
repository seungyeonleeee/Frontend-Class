// const numArr: number[] = [1, 2, 3];
// const strArr: string[] = ["Hello", "World"];
// // const boolArr: boolean[] = [true, false, true];
// // 제네릭 타입
// const boolArr: Array<boolean> = [true, false, true];
// // 유니온 타입
// let multiArr: (number | string)[] = [1, "Hello"];
// // 중첩배열
// let doubleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5],
// ];
// // 튜플 타입
// let tup1: [number, number] = [1, 2];
// // tup1 = [1, 2, 3]; // error
// // tup1.push(5); // error X -> 유의사항

// // TS
// // 객체 & 함수 타입 정의

// // 1)
// // const user: object = {
// //   id: 1,
// //   name: "David",
// // };
// // const result = user.id; // error
// // 객체 안의 key값을 찾아올 수 없음

// // 2) 구조적 타입시스템을 적용 3순위
// const user: {
//   id?: number; // ? : 선택적 타입적용
//   name: string;
// } = {
//   // id: 1,
//   name: "David",
// };
// // 점진적 타입시스템

// let config: {
//   readonly apikey: string; // 읽기 전용, 밖에서 절대 쓸 수 없음
// } = {
//   apikey: "21324211232",
// };
// // config.apikey = "Hacked"; // error

// // 똑같은 구조의 다수의 객체들 한번에 타입 정의
// // 타입 별칭
// // 외부 확장성 X
// type User = {
//   id: number;
//   name: string;
//   location: string;
// };
// let user1: User = {
//   id: 1,
//   name: "David",
//   location: "Seoul",
// };
// let user2: User = {
//   id: 2,
//   name: "Peter",
//   location: "Incheon",
// };

// // type User = {}; // error -> 전역에서는 동일한 이름 선언 불가 (유의)
// const fnc = () => {
//   type User = {}; // 지역에서는 가능
// };

// // 인덱스 시그니처 2순위
// // > 타입별칭으로 어떤 타입을 정의 => 하위 요소의 모든 타입의 형태가 동일한 경우
// type CountryCodes = {
//   [key: string]: string;
// };
// const countryCodes: CountryCodes = {
//   Korea: "ko",
//   UnitedState: "us",
//   UnitedKingdom: "uk",
// };
// // 최우선의 방법 추천 X

// // 최우선 방법 1순위
// // 객체의 타입 : interface 타입
// interface User01 {
//   id: number;
// }
// // implements, extends 같은 요소 사용 가능 // 외부 확장성 좋음
// interface Person {
//   name: string;
//   age: number;
//   etc?: boolean;
// }
// const person01: Person = {
//   name: "Peter",
//   age: 20,
// };
// const person02: Person = {
//   name: "Peter",
//   age: 20,
//   etc: true,
// };

// // 생성자함수
// class Person1 {
//   name: string;
//   age: number;
// }
// const person03: Person1 = new Person1();
// person03.name = "Peter";
// person03.age = 20;
// // person03은 Person1의 복제본(인스턴스 객체)이기 때문에 type 적용 가능
// console.log(person03);

// // 바닐라 자바스크립트 클래스함수 정의
// // class Person2 {
// // // filed 값
// //   name: string;
// //   age: number;

// //   constructor(name: string, age: number) {
// //     this.name = name;
// //     this.age = age;
// //   }
// // }
// // 타입스크립트 클래스함수 정의
// class Person2 {
//   // 접근제어자(public)를 사용하여 코드 간소화
//   constructor(public name: string, public age?: number) {}
// }
// const person04 = new Person2("Romeo");
// console.log(person04);

// interface Person5 {
//   name: string;
//   age: number;
// }
// class Person6 implements Person5 {
//   constructor(public name: string, public age: number) {}
// }
// // implements : 뒤에 오는 interface 타입을 반드시 실행
// // const person05 = new Person6("Juliet", 22);
// // console.log(person05);

// // 추상클래스
// // 추상화
// // 형태가 없는 비정형화된 사물을 표현하는 것
// // 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어놓고, 해당 추상적인 개념을 모티브로 클래스를 선언 & 생성
// // 모체
// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }
// // 모체에서 업그레이드 느낌
// class Person8 extends Person7 {
//   constructor(name: string, age: number, public location: string) {
//     super(name, age);
//   }
// }
// // // extends : 확장판
// const person06 = new Person8("Bruce", 20, "서울");
// // console.log(person06);

// // static 속성
// // 인스턴스 객체를 거치지 않고 바로 찾아올 수 있음
// class TestA {
//   static initialValue = 1;
// }
// const test01A = TestA.initialValue;
// console.log(test01A);

// // 열거형 타입
// // const user1 = {
// //   name: "David",
// //   role: "ADMIN",
// //   id: 0,
// // };
// // const user2 = {
// //   name: "Peter",
// //   role: "USER",
// //   id: 1,
// // };
// // const user3 = {
// //   name: "Romeo",
// //   role: "GUEST",
// //   id: 2,
// // };

// // 코드 축약, 누락 방지
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
// const user1 = {
//   name: "David",
//   role: Role.ADMIN,
// };
// const user2 = {
//   name: "Peter",
//   role: Role.USER,
// };
// const user3 = {
//   name: "Romeo",
//   role: Role.GUEST,
// };
// console.log(user1, user2, user3);

// // any
// // let test01 = 10; // 리터럴 타입을 추론
// // test01 = "Hello"; // error
// let test01: any = 10;
// test01 = "Hello"; // 치트키
// // unknown
// // 값을 받아올수는 있지만 재할당 불가
// let test02: unknown;
// test02 = "World";
// test02 = 1;
// test02 = () => {};
// let test03 = test01;
// let test04: number = 20;
// // test04 = test02; // error
// // 타입 제한 적용
// if (typeof test02 === "number") {
//   test04 = test02;
// }

// void
// const func1 = (): string => {
//   return "hello";
// };
// const func2 = (): void => {
//   console.log("World");
// };
// // 함수의 반환값이 존재할 때 => return값에 따라
// // 함수의 반환값이 존재하지 않을 때 => void
// let test05: void;
// // test05 = 1;
// // test05 = "Hello";
// // test05 = true;
// test05 = undefined;

// never
// let test06: never;
// test06 = 1;
// test06 = "Hello";
// test06 = true;
// test06 = undefined;
// test06 = any;
// test06 = null;

// const func3 = (): never => {
//   while (true) {}
// };

// let obj: object = {
//   name: "David",
// };
// // obj.name; // error
// // 타입 단언
// interface Nameable {
//   name: string;
// }
// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;
// console.log(name1, name2);

// // 함수
// const add = (a: number, b: number): number => {
//   return a + b;
// };
// // const printMe = (name: string, age: number): void => {
// //   console.log(`name: ${name}, age: ${age}`);
// // };
// // 타입별칭
// // type PrintMeFnc = (name: string, age: number) => void;
// // const printMe: PrintMeFnc = (name, age) => {
// //   console.log(`name: ${name}, age: ${age}`);
// // };
// // 고차함수(콜백)로 들어가면 타입정의 알아보기 힘들다
// // 타입별칭을 이럴 때 많이 씀
// // 함수 시그니처
// const printMe: (arg01: string, arg02: number) => void = (name, age) => {
//   console.log(`name: ${name}, age: ${age}`);
// };
// printMe("David", 20);

// interface Nameable02 {
//   name: string;
// }
// // // const getName = (o: Nameable02) => {
// // //   return o.name;
// // // }; // error -> 비동기적
// // // 타입 가드를 설정
// // const getName = (o: Nameable02) => {
// //   return o !== undefined ? o.name : "Loading...";
// // };
// // const dataResult = getName(undefined);
// // console.log(dataResult);
// // console.log(getName({ name: "David" }));

// // 유니온타입으로
// const getName = (o: Nameable02 | undefined) => {
//   return o !== undefined ? o.name : "Loading...";
// };
// const dataResult = getName(undefined);
// console.log(dataResult);
// console.log(getName({ name: "David" }));
