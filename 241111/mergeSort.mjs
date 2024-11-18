// 병합정렬
// 배열을 쪼개서 정렬 후 다시 병합
let arr = [3, 5, 2, 4, 1, 7, 8, 6];

// let arr01 = [2, 3, 4, 5, 1, 6, 7, 8];

// // 임시 배열
// // 작은 값을 여기로 내리고 그렇지 않으면 arr01에 남겨놓기
// let temp = [];

// let arr01 = [3, 5, 2, 4];
// let arr02 = [1, 7, 8, 6];

// let arr03 = [3, 5];
// let arr04 = [2, 4];

// let arr05 = [1, 7];
// let arr06 = [6, 8];

// leftIndex => 해당 배열에 가장 좌측 인덱스값
// middleIndex => 해당배열에 가운데 인덱스값
// rightIndex => 해당 배열에 가장 우측 인덱스값

const merge = (arr, leftIndex, middleIndex, rightIndex) => {
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = middleIndex + 1;

  let tempArr = [];

  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1);

  let tempArrIndex = leftIndex;
  while (leftAreaIndex <= middleIndex && rightAreaIndex <= rightIndex) {
    if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      // 왼쪽그룹 값이 계속 작다면 임시배열에 값을 넣겠다
      tempArr[tempArrIndex] = arr[leftAreaIndex++];
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex++];
    }

    tempArrIndex++; // 중복이 안되게 계속 증가
  }

  if (leftAreaIndex > middleIndex) {
    for (let i = rightAreaIndex; i <= rightIndex; i++) {
      // 왼쪽과 오른쪽 그룹 비교 후 왼쪽 그룹이 비교할 아이템이 없을 때 남아있는 그룹은 첫번째 그룹보다 다 크니까 임시배열 나머지 공간에 하나씩 넣어중너라
      tempArr[tempArrIndex++] = arr[i];
    }
  } else {
    for (let i = leftAreaIndex; i <= middleIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  }

  for (let i = leftIndex; i <= rightIndex; i++) {
    arr[i] = tempArr[i];
  }
};

const mergeSort = (arr, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    let middleIndex = parseInt((leftIndex + rightIndex) / 2);
    // 왼쪽값이 적을 때까지 쪼개기
    mergeSort(arr, leftIndex, middleIndex);
    mergeSort(arr, middleIndex + 1, rightIndex);

    // 병합하기
    merge(arr, leftIndex, middleIndex, rightIndex);
  }
};

console.log("==== 정렬 전 ====");
console.log(arr);

mergeSort(arr, 0, arr.length - 1);

console.log("==== 정렬 후 ====");
console.log(arr);
