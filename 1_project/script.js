$(document).ready(function () {
  const swiper1 = new Swiper("#slide .swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
