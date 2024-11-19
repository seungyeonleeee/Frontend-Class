// 피보나치 수열 : 숫자들이 특정 패턴을 가지고 증가하는 배열(형식)
// 등차수열

// 피보나치 수열은 무조건 1, 1로 시작
// 1, 1, 2(1+1), 3(1+2), 5(2+3) ...

const fibonacci = (n) => {
  // n은 합산 값 예외조항처리
  if (n === 0 || n === 1) return n;

  return fibonacci(n - 2) + fibonacci(n - 1);
};

// 똑같은 계산 함수가 비효율적으로 계속 반복
// 메모이제이션

const fibonacci2 = (n, memo) => {
  if (n === 0 || n === 1) return n;

  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }

  return memo[n];
};

let start = new Date();
console.log(fibonacci(5));
let end = new Date();
console.log(`fibonacci 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci2(5, []));
end = new Date();
console.log(`fibonacci2 함수 실행시간: ${end - start}ms`);
