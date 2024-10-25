// 제네릭 응용 타입 형태
// class

// class NumberList {
//   constructor(public list: number[]) {}

//   // method
//   push(data: number) {
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }
// class StringList {
//   constructor(public list: string[]) {}

//   push(data: string) {
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }
// 가변적으로 바뀌어지는 대상 찾기
class List<T> {
  constructor(public list: T[]) {}

  // method
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["Hello", "World"]);
console.log(numberList);
console.log(stringList);
