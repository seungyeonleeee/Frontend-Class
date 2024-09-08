// about - countEvent
// const sections = document.querySelectorAll(".cd-section");

// sections.forEach((section) => {
//   if (section.id === "about") {
//     console.log(section);

//     // const counterElements = document.querySelectorAll(".count");

//     // const animateCounter = (element, start, end) => {
//     //   let startTime;
//     //   const duration = 1000;

//     //   const updateCounter = (currentTime) => {
//     //     if (!startTime) startTime = currentTime;

//     //     const progress = Math.min((currentTime - startTime) / duration, 1);

//     //     const value = Math.floor(progress * (end - start) + start);
//     //     element.innerText = value;

//     //     if (progress < 1) requestAnimationFrame(updateCounter);
//     //   };

//     //   requestAnimationFrame(updateCounter);
//     // };

//     // animateCounter(counterElements[0], 0, 775);
//     // animateCounter(counterElements[1], 0, 62);
//     // animateCounter(counterElements[2], 0, 885);
//     // animateCounter(counterElements[3], 0, 14);
//   }
// });

//project - slick slider
$(".project_photo").slick({
  // dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
});
