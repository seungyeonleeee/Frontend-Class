const searchBtn = document.querySelector(".fa-magnifying-glass");

searchBtn.addEventListener("click", () => {
  document.querySelector(".modal-search").classList.add("active");
});
const items = document.querySelectorAll(".close, section");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal-search").classList.remove("active");
  });
});

// search bar
const searchBar = document.querySelector(`.search input[type="text"]`);
searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = "1";
});
searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

// accordion event
const firstContent = document.querySelectorAll(".accordion .content");
firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  // 1. 모두에게 active 제거
  title.addEventListener("click", () => {
    firstContent.forEach((item) => {
      item.style.display = "none";
    });

    // 2. 선택받은 자와 아닌 애를 나누기
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        //otherTitle = 6개 // title = 선택한 1개
        otherTitle.classList.remove("active");
      }
    });

    let content = title.nextElementSibling;

    //3. 클릭한 애의 toggle 이벤트
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});
