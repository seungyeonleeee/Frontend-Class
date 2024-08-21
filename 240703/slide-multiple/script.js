// 대상찾기
// 버튼
const btns = document.querySelector(".controls");
// 마우스 오버시 자동슬라이드 막기 위해
const prevBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

//슬라이드
const slides = document.querySelector(".slides"); //ul
const slide = slides.querySelectorAll("li");
//console.log(slide[4]);
//NodeList[] = 유사배열 => index번호 부여

//버튼을 눌렀을 때 x값을 얼마나 움직여야 하는지 알기 위해 넓이/높이 정의하기
const slideCount = slide.length; //console.log(slideCount); => 5
const slideWidth = 200;
const slideMargin = 30;

//index번호가 0부터 시작으로 세팅 (재선언,재할당으로 let 사용)
let currentIdx = 0;

//2) 복제한 5개의 li노드를 왼쪽으로 이동시키기 위한 함수 만들기
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  //지역변수로 찾아오기
  const newSlideCount = currentSlides.length; //5
  //console.log(currentSlides, newSlideCount);
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
  //넓이 대입
};

//3) 원본을 기준으로 보이게 하는 함수 만들기
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

//1) li노드를 복제를 하기 위한 함수 만들기
//함수 선언
const makeClone = () => {
  //원본 뒤에 복제
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    //복제품 선언
    cloneSlide.classList.add("clone");
    //복제한 slide에는 clone이라는 클래스 추가
    slides.appendChild(cloneSlide);
    //slides 뒤에 cloneSlide 추가
  }
  //원본 앞에 복제
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    //복제품 선언
    cloneSlide.classList.add("clone");
    //복제한 slide에는 clone이라는 클래스 추가
    slides.prepend(cloneSlide);
    //slides 앞에 cloneSlide 추가
  }
  //복제품을 만든 후 만든 함수 2개 실행
  updateWidth();
  setInitialPos();
  //0.1초 이후에 슬라이드에 animated라는 클래스 추가 함수 실행하라
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};
//i < slideCount; li의 인덱스 번호와 일치 (0,1,2,3,4)
//cloneNode() = 원본을 그대로 복제, true=자식요소도 복제 false=본인만 복제

//함수 실행
makeClone();

////////여기까지 구조 만들었음////////

//5) 버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  //변경된 값을 인덱스번호에 넣기
  //console.log(currentIdx, slideCount);

  //양쪽 마지막 슬라이드가 끝나는 순간 인덱스번호 0 으로 바꿔치기 = 무한슬라이드
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

//4) 버튼 클릭 이벤트 함수 만들기
nextBtn.addEventListener("click", () => {
  //console.log("click right");
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", () => {
  //console.log("click left");
  moveSlide(currentIdx - 1);
});

//css 에서 보더와 overflow 정리

//6) 자동슬라이드 및 정지 기능 함수

//바뀌는 값
let timer = undefined;

//자동 실행
const autoSlide = () => {
  if (timer === undefined) {
    //아무것도 건드리지 않았을 때 3초에 한번씩 이동
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};
autoSlide();

//정지
const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});
slides.addEventListener("mouseleave", () => {
  autoSlide();
});
btns.addEventListener("mouseenter", () => {
  stopSlide();
});
btns.addEventListener("mouseleave", () => {
  autoSlide();
});
