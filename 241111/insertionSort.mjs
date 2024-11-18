// 삽입정렬
let arr = [4, 1, 5, 3, 6, 2];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // 0번째 값은 정렬 되었다라는 전제 => i = 1부터
    let insertingData = arr[i];
    let j;
    // j = 현재 4번 아이템
    for (j = i - 1; j >= 0; j--) {
      // 앞에 값을 하나씩 줄여가면서 비교 => j >= 0;
      if (arr[j] > insertingData) {
        arr[j + 1] = arr[j];
        // j가 뒤로 밀리고 그 자리에 insertingData
      } else {
        break;
      }
    }

    arr[j + 1] = insertingData;
  }
};

console.log("==== 정렬 전 ====");
console.log(arr);

insertionSort(arr);

console.log("==== 정렬 후 ====");
console.log(arr);
