// Set()

// let numSet1 = new Set();
// console.log(numSet1);

// // add() : 값을 생성할 때
// numSet1.add("one");
// console.log(numSet1);

// // 메서드 체이닝 가능
// numSet1.add("one").add("two");
// console.log(numSet1);

// let numSet2 = new Set([1, 2, 3]);
// console.log(numSet2);

// let numSet3 = new Set([1, 2, 1, 3, 1, 5]);
// console.log(numSet3); // 중복값 필터링

const languages = new Set(["js", "ts", "html", "css"]);
for (let language of languages.values()) {
  console.log(language);
}
for (let language of languages.keys()) {
  console.log(language); // key와 value가 같아서 객체축약
}
