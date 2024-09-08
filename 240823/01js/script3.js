// // 기존 Callback 함수의 단점을 최소화 하고자 나온 첫번째 대안
// // Promise()
// // Promise : 약속

// // Callback 함수 중 가운데 어떤 요소라도 1개만 에러가 발생되는 경우, 연결 되어있는 다른 Callbaxk 함수 실행에도 영향을 미친다

// // 만약 Callback 함수가 많이 연결되어있는 경우 어떤 Callback 함수에서 에러가 발생되었는지 서칭 && 디버깅 하기가 매우 힘들다

// // Promise(()=>{}) : 생성자 함수 혹은 클래스를 통해서 탄생된 프로토타입
// // 매개변수로 하나의 콜백함수를 받음
// // 매개변수의 인자값이 중요 1.resolve 정상적 작동 함수 // 2.reject 에러 발생 작동 함수

// const likePizza = true;

// // producing code
// // 약속 정의
// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) resolve("피자를 주문합니다.");
//   else reject("피자를 주문하지 않습니다.");
// });

// // consuming code = 실행 코드 영역
// // 약속 이행
// pizza
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("완료"));
// // then() : resolve가 실행되면 resolve의 인자값을 받아 실행 시켜주는 역할
// // catch() : reject 실행
// // finally() : 결과가 어떻든 마지막 단계 실행 (비필수값)

const likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문합니다");
  else reject("피자를 주문하지 않습니다");
});
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
