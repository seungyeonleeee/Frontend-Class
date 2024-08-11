// const title = document.querySelector("#title");
// const author = document.querySelector("#author");

// const form = document.querySelector("form");

// const bookList = document.querySelector("#bookList");

// // console.log(title, author, form, bookList);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const liItem = document.createElement("li");

//   liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;

//   bookList.appendChild(liItem);

//   title.value = "";
//   author.value = "";

//   // 삭제 버튼
//   const delBtns = document.querySelectorAll("#bookList span");

//   delBtns.forEach((delBtn) => {
//     delBtn.addEventListener("click", function () {
//       this.parentNode.parentNode.removeChild(this.parentNode);
//     });
//   });
// });

const title = document.querySelector("#title");
const author = document.querySelector("#author");

const form = document.querySelector("form");

const bookList = document.querySelector("#bookList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const liItem = document.createElement("li");
  liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;

  bookList.appendChild(liItem);

  title.value = "";
  author.value = "";

  const delBtns = document.querySelectorAll("#bookList span");
  // console.log(delBtns);

  delBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", function () {
      // console.log(this.parentNode);
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  });
});
