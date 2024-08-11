// 프로토타입 함수
// 앞에 new라는 수식어가 붙고 앞에 대문자면 class를 통해서 어디선가 만들어진 함수

// const today = new Date();

// const month = today.getMonth() + 1;
// // getMonth()만 0부터 값을 찾아옴

// const date = today.getDate();

// const day = today.getDay();
// // 일 = 0 / 월 = 1 / 화 = 2 ...

// // console.log(month, date, day);

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${month}월`);
// document.write(`<br/>`);
// document.write(`현재 일 : ${date}일`);

// 밀리초 변환 개념
// 프로그래밍 언어는 시간 개념이 밀리초
// 초 / 분 / 시
// 1초 = 1000밀리초
// 1분 = 60초 = (60*1000) = 60,000밀리초
// 1시간 = 60분 = (60*60*1000) = 3,600,000밀리초
// 1일 = 24시간 = (24*60*60*1000) = 80,640,000초

// const today = new Date();

// const year = today.getFullYear();

// const lastDate = new Date(year, 11, 31);
// const diffDate = lastDate - today;

// const result = Math.round(diffDate / (24 * 60 * 60 * 1000));

// alert(`올 연말 마지막 날까지 ${result}일 남았습니다.`);

// const today = new Date();
// const month = today.getMonth() + 1;
// const date = today.getDate();
// const day = today.getDay();
// console.log(day);

const today = new Date();

const year = today.getFullYear();
// console.log(year);

const lastDate = new Date(year, 11, 31);

const diffDate = lastDate - today;
console.log(diffDate);

const result = Math.round(diffDate / (24 * 60 * 60 * 1000));
console.log(result);
