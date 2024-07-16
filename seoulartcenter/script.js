const tabBtns = document.querySelectorAll(".tab_btn");

tabBtns.forEach((item, index) => {
  item.addEventListener("click", function () {
    tabBtns.forEach((sibling) => {
      if (sibling !== item) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");

    const targetId = item.getAttribute("data-alt");
    const targetContent = document.getElementById(targetId);
    const tabContents = document.querySelectorAll(".content");
    const contentsWrap = document.querySelector(".contents_wrap");

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    if (targetContent) {
      targetContent.classList.add("active");
    }

    tabContents[
      index
    ].style = `background: url('./img/${targetId}.jpg') center/cover no-repeat;`;
    tabContents[index].classList.add("active");
    contentsWrap.style = `left: ${index * -100}%`;
  });
});
