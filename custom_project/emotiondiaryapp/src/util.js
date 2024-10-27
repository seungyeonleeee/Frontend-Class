// Emotion Img
// ${process.env.PUBLIC_URL}
export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return "/img/emotion1.png";
    case "2":
      return "/img/emotion2.png";
    case "3":
      return "/img/emotion3.png";
    case "4":
      return "/img/emotion4.png";
    case "5":
      return "/img/emotion5.png";
    default:
      return null;
  }
};

// Emotion List
export const emotionList = [
  {
    id: 1,
    name: "Happy",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "Amazing",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "Normal",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "Sad",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "Angry",
    img: getEmotionImgById(5),
  },
];

// Formatted Date
export const getFormattedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

// Range Date
export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return { beginTimeStamp, endTimeStamp };
};

// Page Title
export const setPageTitle = (title) => {
  const titleElement = document.getElementsByTagName("title")[0];
  titleElement.innerText = title;
};
