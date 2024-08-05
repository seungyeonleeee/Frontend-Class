// sticky event
window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  //console.log(scrollY);

  if (scrollY > 300) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// touch event
// 실질적으로 움직이는 슬라이드
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

// 최초의 터치 및 마우스다운 지점
let startX = 0;

// 현재 이동중인 지점
let nowX = 0;

// 터치 종료 지점
let endX = 0;

// 두번째 터치가 시작되어지는 지점
let listX = 0;

// 값 처리
const getClientX = (e) => {
  // const isTouches = e.touches ? true : false;
  // return isTouches ? e.touches[0].clientX : e.clientX;
  // clientX : 사용자가 현재 보고있는 디바이스 매체의 너비를 의미

  return e.touches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  //console.log(window.getComputedStyle(hashContent).transform);
  //matrix(1, 0, 0, 1, -139, 0) 5번째 x축을 기준으로 이동한 거리
  //getComputedStyle : css에서 정의한 스타일을 찾아옴
  // console.log(getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]);

  //정규표현식
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
  //split : 문자열 안에 있는 각각의 문자를 배열로 추출
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  // console.log(nowX);

  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);

  listX = getTranslateX();

  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    //스크롤 최대치 : 더 이상 스크롤을 할 수 없는 상황
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  //이벤트 제거
  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);
  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
  window.removeEventListener("touchstart", onscrollStart);
  window.removeEventListener("mousedown", onscrollStart);
};

// 값 재할당
const onscrollStart = (e) => {
  startX = getClientX(e);
  // console.log(startX);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onscrollStart);
hashContent.addEventListener("mousedown", onscrollStart);
