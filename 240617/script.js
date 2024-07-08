// scroll event
window.addEventListener("scroll", () => {
  // header navigation
  // 대상 찾기
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const logo = document.querySelector("#logo");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const trigger = document.querySelectorAll(".trigger span");

  if (window.scrollY > 60) {
    header.classList.add("active");
    nav.classList.add("active");
    logo.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

// toggle event

// gnbMobile trigger
// 과정
// 1. 우측 상단의 토클 버튼을 클릭
// 2. 토클 버튼을 클릭한다면, x모양으로 바뀌게 함
// 3. x모양으로 바귀어 질 수 있도록 스타일 정의
// 4. 스타일 정의 시, active 가상클래스 부여
// 5. 가상클래스는 js를 활용해서 이벤트로 적용

// 대상 찾기
const toggleBtn = document.querySelector(".trigger");

toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
});

// search_bar trigger
// 과정
// 1. 사용자가 검색 버튼을 클릭하다.
// 컴퓨터는 DOM을 활용해서 검색 버튼을 인지
// 검색 버튼이 클릭 되었는지 여부를 evnet처리를 통해 실행

// 2. 검색 버튼을 클릭하면 오른쪽에 있던 search_bar가 출력
// 미리 사전에 css를 통해 정의한 가상클래스 호출

// 3. 검색 버튼을 두번 클릭하면 search_bar가 제자리로
// 호출된 가상클래스 제거

// 4. 2~3번이 반복될 수 있도록 한다.
// toggle()을 활용해서 실행

// 대상 찾기
const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-xmark");

// 선택자가 복수라 반복문(forEach()) 활용
searchBar.forEach((item) => {
  item.addEventListener("click", () => {
    searchResult.classList.add("active");
  });
});
closeBtn.addEventListener("click", () => {
  searchResult.classList.remove("active");
});

// main slide

//슬라이드 영역
const slideContainerArrow = document.querySelector(".slide_container_arrow");
//슬라이드 버튼
const slideArrows = document.querySelectorAll(".slide_container_btn");
//슬라이드 페이저
const slidePagers = document.querySelectorAll(".slide_pager span");
//슬라이드 이미지
const slideImg = document.querySelector(".slide_img");

//배열을 활용하여 슬라이드 이미지 넣기
const pics = ["slide1.png", "slide2.png", "slide3.png"];
//인덱스번호 값 : 0/1/2
//파일 이름 : 1/2/3
//(인덱스값 + 1) / 이미지 총 개수

//초기값 설정
let i = 0;
let slideInterval;
let isTransitioning = false; //단락회로평가

slideImg.style.backgroundImage = `url(https://td449.cafe24.com/chef/${pics[i]})`;
slidePagers[0].classList.add("active");

//실제 이미지 및 페이저 값을 변경 시켜주는 실행 함수
const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg.style.backgroundImage = `url(https://td449.cafe24.com/chef/${pics[i]})`;
  slidePagers[i].classList.add("active");
};

//자동으로 슬라이드 이미지가 변경되도록 해주는 함수
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
    updateSlide(i);
  }, 4000);
};

//자동 슬라이드 기능을 정지 시켜주는 함수
const stopSlideShow = () => {
  clearInterval(slideInterval);
};

//자동 슬라이드 재시작을 실행 시켜주는 함수
const resetSlideShow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

//화살표 클릭 및 이미지 변경요청 함수
slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (isTransitioning) return; //연타 하는 경우를 막는다
    isTransitioning = true;

    stopSlideShow();

    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }

    updateSlide(i);

    setTimeout(() => {
      isTransitioning = false;
      startSlideShow();
    }, 500);
  });
});

//페이저 클릭 시, 슬라이드 이미지 변경 함수
slidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    stopSlideShow();
    i = index;
    updateSlide(i);
    setTimeout(startSlideShow, 500);
  });
});

startSlideShow();

slideContainerArrow.addEventListener("mouseover", stopSlideShow);
slideContainerArrow.addEventListener("mouseout", resetSlideShow);
