// 1. i태그를 클릭하면 배경색이 바뀐다 (i태그 active 추가)
// 2. 클릭한 i태그에 따라 별이 추가된다.
// 3. .print를 찾아와 active 된 i태그에 따라 텍스트를 바꾼다.

const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");
// console.log(stars);

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // console.log("click", index);
    //star, index는 선택한 별
    stars.forEach((s, i) => {
      // console.log("click", i);
      //s, i는 별의 전체
      s.classList.remove("active");
      if (i <= index) {
        // console.log(i);
        // console.log(index);
        s.classList.add("active");
      }
    });

    let message = "";
    let imgURL = "";

    switch (index) {
      case 0:
        message = "별로에요";
        imgURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통이에요";
        imgURL = "./img/star-lv2.png";
        break;
      case 2:
        message = "그냥 그래요";
        imgURL = "./img/star-lv3.png";
        break;
      case 3:
        message = "마음에 들어요!";
        imgURL = "./img/star-lv4.png";
        break;
      case 4:
        message = "아주 좋아요!";
        imgURL = "./img/star-lv5.png";
        break;
    }
    print.innerHTML = ` <img src="${imgURL}"> ${message}`;
  });
});
