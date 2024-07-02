//header
window.addEventListener("scroll", () => {
  const headerBg = document.querySelector("header");
  if (window.scrollY > 60) {
    headerBg.classList.add("active");
  } else {
    headerBg.classList.remove("active");
  }
});

$(document).ready(function () {
  //slide swiper
  const swiper1 = new Swiper("#slide .swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: "#slide .swiper-pagination",
      clickable: "true",
    },

    navigation: {
      nextEl: "#slide .swiper-button-next",
      prevEl: "#slide .swiper-button-prev",
    },
  });

  //project swiper
  const swiper2 = new Swiper("#project .swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: "#project .swiper-pagination",
      clickable: "true",
    },

    slidesPerView: 3,
    spaceBetween: 40,
    // breakpoints: {

    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },

    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    // },
  });
});
