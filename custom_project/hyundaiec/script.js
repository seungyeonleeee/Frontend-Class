const data = "./db.json";

// home - anime.js

// about - countEvent
const sectionAbout = () => {
  const iconImgs = document.querySelectorAll(".icon");
  iconImgs.forEach((img) => {
    img.classList.add("active");
  });

  const counterElements = document.querySelectorAll(".count");
  const animateCounter = (element, start, end) => {
    let startTime;
    const duration = 1000;

    const updateCounter = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);

      const value = Math.floor(progress * (end - start) + start);

      element.innerText = value;

      if (progress < 1) requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  };
  animateCounter(counterElements[0], 0, 775);
  animateCounter(counterElements[1], 0, 62);
  animateCounter(counterElements[2], 0, 885);
  animateCounter(counterElements[3], 0, 14);
};

const sectionAbout_reset = () => {
  const iconImgs = document.querySelectorAll(".icon");
  iconImgs.forEach((img) => {
    img.classList.remove("active");
  });
};

// project - slick slider
$(".project_photo").slick({
  // dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
});

// news
const sectionNews = (item) => {
  const newsInner = document.querySelector(".news_inner");
  const newsItems = document.querySelector(".news_items");
  const overlay = document.querySelector(".news_overlay");

  const liItem = document.createElement("li");
  const newsDetail = document.createElement("div");
  newsDetail.className = `news_detail`;

  const liItemDesc = `
            <div class="news_img">
              <img src="./${item.img}" />
            </div>
            <div class="news_info">
              <h5 class="title">
                ${item.title}
              </h5>
              <div class="hashtag">
                <span>${item.hashtag[0]}</span>
                <span>${item.hashtag[1]}</span>
                <span>${item.hashtag[2]}</span>
                <span>${item.hashtag[3]}</span>
              </div>
              <p class="date">${item.date}</p>
            </div>
`;
  const detailDesc = `
<div class="detail_wrap">
            <div class="detail_left">
              <div class="detail_img">
                <img src="./${item.img}" />
                <div class="hashtag">
                  <span>${item.hashtag[0]}</span>
                  <span>${item.hashtag[1]}</span>
                  <span>${item.hashtag[2]}</span>
                  <span>${item.hashtag[3]}</span>
                </div>
              </div>
              <button class="closeBtn">
                <i class="fa-solid fa-chevron-left"></i>
                다른 뉴스 보기
              </button>
            </div>
            <div class="detail_right">
              <div class="detail_heading">
                <h5 class="title">
                ${item.title}
                </h5>
                <p class="date">
                ${item.date}
                </p>
              </div>
              <p class="text">
              ${item.text}
              </p>
            </div>
          </div>
`;

  liItem.addEventListener("click", () => {
    newsDetail.classList.add("active");
    overlay.classList.add("active");
  });
  newsDetail.addEventListener("click", function () {
    this.classList.remove("active");
    overlay.classList.remove("active");
  });
  overlay.addEventListener("click", function () {
    this.classList.remove("active");
    newsDetail.classList.remove("active");
  });

  liItem.insertAdjacentHTML("afterbegin", liItemDesc);
  newsDetail.insertAdjacentHTML("afterbegin", detailDesc);
  newsItems.appendChild(liItem);
  newsInner.appendChild(newsDetail);
};

// contact
const sectionContact = () => {
  const contactForm = document.querySelector(".send_box");
};

// fullpage.js
new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem) => {
    // if (new_elem.index === 0) sec4();
    if (new_elem.index === 1) sectionAbout();
    if (old_elem.index === 1) sectionAbout_reset();
    // if (new_elem.index === 3) sectionNews();
    if (new_elem.index === 4) sectionContact();
  },
});

// json
fetch(data)
  .then((response) => response.json())
  .then((newsData) => {
    newsData.news.forEach((item) => {
      sectionNews(item);
    });
  });
