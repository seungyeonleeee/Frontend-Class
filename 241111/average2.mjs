// 배열이라는 자료구조를 활용해서 3개의 숫자의 평균값을 구하기

const arr = [87, 70, 100, 55];
let avarage = 0;
for (let i = 0; i < arr.length; i++) {
  avarage += arr[i];
}
avarage /= arr.length;

// 값이 추가될 때마다 1번의 수정이 필요
// 효율적인 자료구조는 확장점 개념이 들어왔을 때, 접근 및 수정 처리가 효율적
