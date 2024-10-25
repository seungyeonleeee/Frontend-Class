// forEach 타입

// forEach문을 선언형 방식으로 Type을 정의한 예시
const forEach = <T>(arr: T[], callback: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
