// TS 타입

// 기본 제공 타입
// number, string, boolean, object

// 기본 제공 타입 X
// unknown, any, null, undefined, void, symbol, never etc...

// 점진적 타입시스템 => 타입추론 => 타입주석을 입력하지 않아도 타입정의
let num: number = 1;
num = 10;
// num = "10";

// 아래와 같이 타입주석
let str: string = "Hello";
str = "World";
// str = false;

let bool: boolean = true;

let obj: object = {
  name: "David",
};

// 다양한 종류의 타입 가운데, 치트키의 역할
// any
// any는 모든 타입을 수용할 수 있음
let sample: any = 0;
sample = "Hello";

// any와 정반대 타입
// undefined
// 오직 undefined만 값을 받을 수 있음
let sample01: undefined = undefined;
sample01 = undefined;

// unknown 가장 최상위 타입 (슈퍼타입)
let sample02: unknown = 10;
sample02 = "1";

// 배열에 대한 타입 정의
// 1.
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["David", "Peter"];

// 2. 제네릭 형식 타입
const boolArr: Array<boolean> = [true, false, true];

// 3. union 타입 (결합)
const multiArr: (string | number | boolean)[] = [1, "hello", true];

// 4. 중첩배열의 경우
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 5. Tuple 타입 (길이 & 타입이 고정된 배열)
let tup1: [number, number] = [1, 2];

const users: [string, number][] = [
  ["David", 1],
  ["Romeo", 2],
  ["Juliet", 3],
  ["Peter", 4],
  // [5, "Zzanggu"],
];
