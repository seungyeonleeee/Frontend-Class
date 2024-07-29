//header - nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  const topBtn = document.querySelector(".gototop");
  if (scroll > 50) {
    header.classList.add("active");
    topBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    topBtn.classList.remove("active");
  }
});

//trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbLinks = gnb.querySelectorAll("a");
trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});
gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

//main_slide - slick slider
$(".main_slide_wrap").slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

//showcase_slide - slick slider
$(".showcase_slide_wrap").slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// kakao map
// const container = document.getElementById("map");
// const options = {
//   center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
//   level: 3,
// };

// const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
