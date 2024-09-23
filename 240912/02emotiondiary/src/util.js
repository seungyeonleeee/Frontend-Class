// 5 컴포넌트 X, 창고 역할
// 6
import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

// 7
export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId); // 이미지 경로 문자여서
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

// 59
export const getFormattedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

// 82
export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: getEmotionImgById(5),
  },
];

// 138 해당 월에 매칭되어지는 일기의 값 업데이트 함수 만들기
export const getMonthRangeByDate = (date) => {
  // 139 시작 시간
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    // 일, 시, 분, 초
    1,
    0,
    0,
    0
  ).getTime();
  // 밀리초 값 가져오기

  // 140 끝나는 시간
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
    // date.getMonth() + 1, 0 => 익월의 존재하지 않는 0일 (특정 기간의 마지막날)
  ).getTime();

  // 141
  return { beginTimeStamp, endTimeStamp };
};

// 257 각각의 도착한 페이지마다 <title>태그 바꿔주기
export const setPageTitle = (title) => {
  const titleElement = document.getElementsByTagName("title")[0];
  // console.log(titleElement); // 배열
  titleElement.innerText = title;
};
