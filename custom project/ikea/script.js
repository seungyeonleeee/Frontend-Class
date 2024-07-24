//gnb
const gnbLi = document.querySelectorAll(".gnb > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    // console.log("mouseover ok");
    const aTag = li.querySelector("a");
    // 조건문
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });

  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

//top_banner
// const topBannerBtn = document.querySelector(".top_banner > a");
// topBannerBtn.addEventListener("click", () => {
//   const topBannerContents = document.querySelector(".top_banner_contents");
//   topBannerContents.classList.toggle("active");
// });

//card_items
const items = document.querySelectorAll("#card_items li");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-10%)";
    item.style.transition = "all .3s";
    item.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
    item.classList.remove("active");
  });
});

//contents_img
const bgImg = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
const contentsImg = document.querySelector(".contents_img");
contentsImg.style.backgroundImage = `url(./images/${bgImg[0]})`;

//contents_text
const contentsBox = document.querySelector(".contents_text");
const contentsTit = contentsBox.querySelector(".contents_title");
const contentsDesc = contentsBox.querySelector(".contents_desc");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;

    contentsTit.innerText = firstData.title;
    contentsDesc.innerText = firstData.description;
    contentsBox.style.backgroundColor = firstData.backgroundColor;

    //click event
    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        const { title, description, backgroundColor } = jsonData.data[index];
        contentsTit.innerText = title;
        contentsDesc.innerText = description;
        contentsBox.style.backgroundColor = backgroundColor;

        contentsImg.style.backgroundImage = `url(./images/${bgImg[index]})`;
      });
    });
  });
