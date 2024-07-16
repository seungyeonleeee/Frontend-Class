//header - nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  //console.log(scroll);

  const header = document.querySelector("header");
  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

//testimonial - slick slider
$(".myslider").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  reponsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
