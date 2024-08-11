const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem, index) => {
  liItem.addEventListener("mouseenter", function () {
    let changeImg = this.getAttribute("data-img");

    photo.style.backgroundImage = `url(${changeImg})`;
  });

  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
