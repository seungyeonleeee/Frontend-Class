//top_banner
const topBannerBtn = document.querySelector(".top_banner > a");
const topBannerContents = document.querySelector(".top_banner_contents");
topBannerBtn.addEventListener("click", () => {
  topBannerContents.classList.toggle("active");
});

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
