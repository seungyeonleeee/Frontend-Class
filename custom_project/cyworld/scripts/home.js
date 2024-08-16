// text_box
const textContent =
  "제 미니홈피에 오신 걸 환영합니다! \n 구경하고 가세요~ ˛ε♡з¸";
const text = document.querySelector(".text");
const cursor = document.querySelector(".blick");

let i = 0;

const typing = () => {
  let txt = textContent[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  if (i > textContent.length) {
    text.textContent = "";
    i = 0;
  }
};
setInterval(typing, 170);

// guestbook
const form = document.querySelector("form");
const guestname = document.querySelector("#guestname");
const guestbook = document.querySelector("#guestbook");
const guestbookArea = document.querySelector(".guestbook_area");

let books = [];

const save = () => {
  localStorage.setItem(`books`, JSON.stringify(books));
};

const delItme = (e) => {
  const target = e.target.parentElement;

  books = books.filter((book) => {
    book.id != target.id;
  });

  save();

  target.remove();
};

const addItem = (book) => {
  if (book.name !== "" && book.text !== "") {
    const liItem = document.createElement("li");
    const p = document.createElement("p");
    const b = document.createElement("b");
    const deleteBtn = document.createElement("span");

    p.innerText = book.text;
    b.innerText = `${book.name} : `;
    deleteBtn.innerText = `삭제`;

    deleteBtn.addEventListener("click", delItme);
    p.prepend(b);
    liItem.appendChild(p);
    liItem.appendChild(deleteBtn);
    guestbookArea.appendChild(liItem);

    liItem.id = book.id;
  }
};

const handler = (e) => {
  e.preventDefault();

  const book = {
    id: Date.now(),
    name: guestname.value,
    text: guestbook.value,
  };

  books.push(book);
  addItem(book);

  save();

  guestname.value = "";
  guestbook.value = "";
};

const init = () => {
  const userBooks = JSON.parse(localStorage.getItem(`books`));
  if (userBooks) {
    userBooks.forEach((book) => {
      addItem(book);
    });
    books = userBooks;
  }
};

init();

form.addEventListener("submit", handler);
