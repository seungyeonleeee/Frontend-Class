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

const delItme = (e) => {
  const target = e.target.parentElement;
  target.remove();
};

const addItem = (name, text) => {
  if (name !== "" && text !== "") {
    const liItem = document.createElement("li");
    const p = document.createElement("p");
    const b = document.createElement("b");
    const deleteBtn = document.createElement("span");

    p.innerText = text;
    b.innerText = `${name} : `;
    deleteBtn.innerText = `삭제`;

    deleteBtn.addEventListener("click", delItme);
    p.prepend(b);
    liItem.appendChild(p);
    liItem.appendChild(deleteBtn);
    guestbookArea.appendChild(liItem);
  }
};

const handler = (e) => {
  e.preventDefault();
  addItem(guestname.value, guestbook.value);
  guestname.value = "";
  guestbook.value = "";
};

form.addEventListener("submit", handler);
