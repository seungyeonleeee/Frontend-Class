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

//login
const openLogin = document.querySelector(".openLogin");
openLogin.addEventListener("click", () => {
  const loginArea = document.querySelector(".login_wrapper");
  const closeLogin = document.querySelector(".closeLogin");
  loginArea.classList.add("active");
  closeLogin.addEventListener("click", () => {
    loginArea.classList.remove("active");
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
const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);

  // store info
  const positions = [
    {
      title: "이니스프리 NC 강남점",
      latlng: new kakao.maps.LatLng(37.5002382, 127.0260223),
      address: "서울 서초구 잠원로 37-6 뉴코아아울렛 1관 1층",
      info: "영업시간 : 오전 10:30 ~ 저녁 21:00",
    },
  ];

  // my position marker
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);

  // my position infowindow
  const iwContent =
      '<div class="myposition" style="padding:5px;">🎈 현재 내 위치</div>',
    iwPosition = new kakao.maps.LatLng(latitude, longitude);

  const infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent,
  });

  infowindow.open(map, marker);

  infowindow.setMap(map);
};
const errorPosition = (err) => {
  alert(err.message);
};
navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
