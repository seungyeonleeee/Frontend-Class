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
const guestbook = document.querySelector("#guestbook");
const guestbookArea = document.querySelector(".guestbook_area");

const delItme = (e) => {
  const target = e.target.parentElement;
  target.remove();
};

const addItem = (text) => {
  const liItem = document.createElement("li");
  const p = document.createElement("p");
  const deleteBtn = document.createElement("span");

  p.innerText = text;
  deleteBtn.innerText = `삭제`;
  // liItem.innerHTML = `<p>${text}</p><span>삭제</span>`;

  deleteBtn.addEventListener("click", delItme);

  liItem.appendChild(p);
  liItem.appendChild(deleteBtn);
  guestbookArea.appendChild(liItem);
};

const handler = (e) => {
  e.preventDefault();
  addItem(guestbook.value);
  guestbook.value = "";
};

form.addEventListener("submit", handler);
