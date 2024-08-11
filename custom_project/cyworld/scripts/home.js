// text_box
// const textContent = "제 미니홈피에 오신 걸 환영합니다! \n 구경하고 가세요~";
// const text = document.querySelector(".text");
// const cursor = document.querySelector(".blick");

// let i = 0;

// const typing = () => {
//   if (i < textContent.length) {
//     let txt = textContent[i++];
//     textContent.innerHTML += txt === "\n" ? "<br/>" : txt;
//     setTimeout(typing, 250);
//   } else {
//     cursor.style.animation = "none";
//     cursor.style.display = "none";
//   }
// };
// typing();

// guestbook
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const guestbook = document.querySelector("#guestbook");
  const guestbookArea = document.querySelector(".guestbook_area");
  const liItem = document.createElement("li");

  liItem.innerHTML = ` <p>${guestbook.value}</p>
              <span>삭제</span>
  `;

  guestbookArea.appendChild(liItem);

  guestbook.value = "";

  const deleteBtns = document.querySelectorAll(".guestbook_area span");

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
      // this.parentNode.remove(this.parentNode);
    });
  });
});
