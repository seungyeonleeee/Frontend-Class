const pic = document.querySelector(".pic");
const imgs = pic.querySelectorAll("img");
//console.log(pic, imgs);

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    //console.log("click");
    imgs.forEach((sibling) => {
      if (sibling !== img) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");

    const desc = document.querySelector(".desc");
    const contents = desc.querySelectorAll(".content");
    //console.log(desc, contents);

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    //연결고리 만들기
    const targetId = img.getAttribute("data-alt");
    //console.log(targetId);
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
