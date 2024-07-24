//header - nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

//main_slide - slick slider
$(".slide_wrap").slick({
  // dots: true,
  // infinite: true,
  // speed: 1000,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000,
});
