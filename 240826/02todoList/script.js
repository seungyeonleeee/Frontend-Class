// 1.
const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");

// 23.
// 새로고침을 하지않아도 자동으로 출력되게 하기 위한 함수
const getLocal = () => {
  let todosContainer;

  if (localStorage.getItem("todos") === null) todosContainer = [];
  else todosContainer = JSON.parse(localStorage.getItem("todos"));

  console.log(todosContainer);

  todosContainer.forEach((todo) => {
    const newLi = document.createElement("li");

    newLi.className = "todo";

    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todo;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.innerText = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "삭제";

    newLi.append(newSpan, completeBtn, deleteBtn);

    todos.appendChild(newLi);

    todoItem.value = "";
  });
};

// 22.
// DOMContentLoaded : 이 안에 들어가는 컨텐츠가 로딩이 된다면
document.addEventListener("DOMContentLoaded", getLocal);

// 16.
// 로컬스토리지에 값을 넣기 위한 함수
const saveLocal = (todo) => {
  // 17.
  // 로컬스토리지로 값을 보내고 받아오는 역할
  let todos;
  // 19.
  if (localStorage.getItem("todos") === null) todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));
  // 20. 배열안에 값 추가
  todos.push(todo);
  // 로컬스토리지에는 저장됐지만 새로고침하면 화면에는 사라짐
  // 화면에 출력되는 아이템들에 로컬스토리지를 연결해줘야 함
  // 18. json형태로 보내기
  localStorage.setItem("todos", JSON.stringify(todos));
  // 21.
  // console.log(todos); // 배열
  // todos.forEach((todo) => {
  //   const newLi = document.createElement("li");
  //   newLi.className = "todo";
  //   const newSpan = document.createElement("span");
  //   newSpan.className = "todoContent";
  //   newSpan.innerText = todo;
  //   const completeBtn = document.createElement("button");
  //   completeBtn.className = "completeBtn";
  //   completeBtn.innerText = "완료";
  //   const deleteBtn = document.createElement("button");
  //   deleteBtn.className = "deleteBtn";
  //   deleteBtn.innerText = "삭제";
  //   newLi.append(newSpan, completeBtn, deleteBtn);
  //   saveLocal(todoItem.value);
  //   todos.appendChild(newLi);
  //   todoItem.value = "";
  // });
};

// 3.
// ui영역에서 값을 추가
const addTodo = (e) => {
  // e객체 상속
  e.preventDefault();

  // 24.
  if (todoItem.value !== "") {
    const newLi = document.createElement("li");

    newLi.className = "todo";

    const newSpan = document.createElement("span");
    newSpan.className = "todoContent";
    newSpan.innerText = todoItem.value;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.innerText = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "삭제";

    newLi.append(newSpan, completeBtn, deleteBtn);

    saveLocal(todoItem.value);

    todos.appendChild(newLi);

    todoItem.value = "";
  }

  // // 4.
  // const newLi = document.createElement("li");

  // // 6. 클래스를 추가하는 2가지 방법
  // newLi.className = "todo";
  // // newLi.classList.add("todo");

  // // 7.
  // const newSpan = document.createElement("span");
  // newSpan.className = "todoContent";
  // newSpan.innerText = todoItem.value;

  // // 9.
  // const completeBtn = document.createElement("button");
  // completeBtn.className = "completeBtn";
  // completeBtn.innerText = "완료";

  // // 11.
  // const deleteBtn = document.createElement("button");
  // deleteBtn.className = "deleteBtn";
  // deleteBtn.innerText = "삭제";

  // // 8.
  // // newLi.appendChild(newSpan);

  // // // 10.
  // // newLi.appendChild(completeBtn);

  // // // 12.
  // // newLi.appendChild(deleteBtn);

  // // 13.
  // newLi.append(newSpan, completeBtn, deleteBtn);

  // // 15.
  // saveLocal(todoItem.value);

  // // 5.
  // todos.appendChild(newLi);

  // // 14.
  // todoItem.value = "";
};

// 28.
// 로컬스토리지 삭제 기능
const removeLocal = (todo) => {
  // console.log(todo);

  let todosItem;

  if (localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));

  // console.log(todo);

  const index = todosItem.indexOf(todo.children[0].innerText);
  // indexOf: 인자값의 인덱스번호를 찾아줌
  // console.log(index);

  todosItem.splice(index, 1);
  // index만 찾아서 삭제한다
  localStorage.setItem("todos", JSON.stringify(todosItem));

  // 로컬스토리지는 삭제 // 화면은 삭제 안됨
};

// 26.
// 버튼의 기능 추가
const manageTodo = (e) => {
  // console.log(e.target.classList[0]);

  const whichButton = e.target.classList[0];

  // 27.
  if (whichButton === "completeBtn") {
    const todoItem = e.target.parentElement;
    // console.log(todoItem); // li
    todoItem.children[0].classList.toggle("completed");
    // todoItem.children[0]; //todoContent
  } else if (whichButton === "deleteBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);

    // 29.
    todoItem.remove();
  }
};

// 25.
todos.addEventListener("click", manageTodo);

// 2.
form.addEventListener("submit", addTodo);
